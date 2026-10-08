'use client';

import React, { useState, useEffect } from 'react';
import { SiteContent } from '../content/content';
import { ConsultationFormData } from '../types';
import { GOOGLE_SHEETS_WEB_APP_URL } from '../config/sheets';
import { trackFormEvent } from '../lib/analytics';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface ConsultationFormProps {
  content: SiteContent;
  selectedMatter?: string;
  onSelectMatter?: (matter: string) => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  content,
  selectedMatter,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    legalMatter: selectedMatter || 'Bail Matters',
    briefDescription: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { form: formContent, contactCard } = content.consultation;
  const { validationErrors } = formContent;

  // Track form view on component mount
  useEffect(() => {
    trackFormEvent('form_view');
  }, []);

  // Sync selected matter if updated from Services or Bail section
  useEffect(() => {
    if (selectedMatter) {
      setFormData((prev) => ({ ...prev, legalMatter: selectedMatter }));
    }
  }, [selectedMatter]);

  const validateField = (field: keyof ConsultationFormData, value: string): string | null => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) return validationErrors.nameRequired;
        if (value.trim().length < 2 || value.trim().length > 100) return validationErrors.nameLength;
        return null;
      case 'phone': {
        const clean = value.replace(/[\s\-\(\)]/g, '');
        if (!clean) return validationErrors.phoneRequired;
        if (clean.length < 8 || clean.length > 15 || !/^\+?[0-9]{8,15}$/.test(clean)) {
          return validationErrors.phoneInvalid;
        }
        return null;
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!value.trim()) return validationErrors.emailRequired;
        if (!emailRegex.test(value.trim()) || value.trim().length > 120) {
          return validationErrors.emailInvalid;
        }
        return null;
      }
      case 'legalMatter':
        if (!value.trim()) return validationErrors.matterRequired;
        return null;
      case 'briefDescription':
        if (!value.trim()) return validationErrors.descRequired;
        if (value.trim().length < 5 || value.trim().length > 1000) {
          return validationErrors.descLength;
        }
        return null;
      default:
        return null;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ConsultationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-click rapid submission
    setServerError(null);

    // 1. Bot spam protection: honeypot check
    if (honeypot.trim().length > 0) {
      // Silently accept without posting to sheet
      setSubmitSuccess(true);
      trackFormEvent('form_submit_success', { serviceCategory: formData.legalMatter });
      return;
    }

    // 2. Client-side field validation
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    (Object.keys(formData) as Array<keyof ConsultationFormData>).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      trackFormEvent('form_submit_error');
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) (element as HTMLElement).focus();
      return;
    }

    setIsSubmitting(true);

    // 3. Prepare Google Sheet payload matching specification
    const sheetPayload = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.legalMatter,
      message: formData.briefDescription.trim(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      formName: 'Consultation Enquiry',
      submittedAt: new Date().toISOString(),
    };

    const isCustomSheetUrlConfigured =
      GOOGLE_SHEETS_WEB_APP_URL &&
      GOOGLE_SHEETS_WEB_APP_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL' &&
      GOOGLE_SHEETS_WEB_APP_URL.startsWith('http');

    try {
      if (isCustomSheetUrlConfigured) {
        // Direct POST to Google Apps Script Web App
        // Uses text/plain to avoid browser CORS preflight (OPTIONS) failure
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second timeout

        try {
          const sheetRes = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(sheetPayload),
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          // Asynchronously record backup in server
          fetch('/api/consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }).catch(() => {});

          const resData = await sheetRes.json().catch(() => null);

          if (sheetRes.ok || (resData && resData.success !== false)) {
            setSubmitSuccess(true);
            trackFormEvent('form_submit_success', { serviceCategory: formData.legalMatter });
            return;
          } else {
            throw new Error('Google Sheets Web App responded with error status');
          }
        } catch {
          clearTimeout(timeoutId);

          // Attempt secondary delivery with mode: 'no-cors' (Google Apps Script executes doPost)
          try {
            await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain;charset=utf-8',
              },
              body: JSON.stringify(sheetPayload),
              mode: 'no-cors',
            });
            // Also notify server backup asynchronously
            fetch('/api/consultation', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            }).catch(() => {});

            setSubmitSuccess(true);
            trackFormEvent('form_submit_success', { serviceCategory: formData.legalMatter });
            return;
          } catch {
            // If direct client delivery fails (e.g. adblocker or offline), fallback to internal API
            const fallbackRes = await fetch('/api/consultation', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            }).then((r) => r.json()).catch(() => null);

            if (fallbackRes && fallbackRes.success) {
              setSubmitSuccess(true);
              trackFormEvent('form_submit_success', { serviceCategory: formData.legalMatter });
              return;
            }

            throw new Error('All delivery paths failed');
          }
        }
      } else {
        // Default mode: Processed through standard endpoint (also ready for Google Sheets forwarding)
        const res = await fetch('/api/consultation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json().catch(() => ({}));

        if (res.ok && data.success) {
          setSubmitSuccess(true);
          trackFormEvent('form_submit_success', { serviceCategory: formData.legalMatter });
        } else {
          trackFormEvent('form_submit_error');
          setServerError(formContent.genericError);
        }
      }
    } catch {
      // Safe, non-technical, human-friendly error message preserving user input
      trackFormEvent('form_submit_error');
      setServerError(formContent.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      legalMatter: 'Bail Matters',
      briefDescription: '',
    });
    setHoneypot('');
    setErrors({});
    setSubmitSuccess(false);
    setServerError(null);
  };

  return (
    <section id="consultation" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {content.consultation.eyebrow}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {content.consultation.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {content.consultation.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitSuccess ? (
              /* Success Confirmation Card */
              <div
                className="bg-[#FBFBFA] border border-neutral-200 p-8 sm:p-10 shadow-sm"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                  {formContent.successTitle}
                </h3>

                <p className="text-[#444444] text-base leading-relaxed mb-6">
                  {formContent.successMessage}
                </p>

                <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-600 mb-8 space-y-1">
                  <div className="flex items-center gap-2 font-medium text-neutral-900">
                    <Lock className="w-3.5 h-3.5 text-[#800000]" />
                    <span>Statutory Confidentiality Assured</span>
                  </div>
                  <p>
                    All communications are covered by advocate-client privilege under Indian law. Your inquiry is reviewed directly by Adv. Anish Kumar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919204463290?text=Hello%20Advocate%20Anish%2C%20I%20have%20submitted%20a%20consultation%20request%20regarding%20a%20legal%20matter."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-6 py-3.5 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold tracking-wider uppercase px-6 py-3.5 transition-colors"
                  >
                    {formContent.newInquiryButton}
                  </button>
                </div>
              </div>
            ) : (
              /* Consultation Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FBFBFA] p-6 sm:p-10 border border-neutral-200 space-y-6"
                aria-label="Legal Consultation Request Form"
              >
                {/* Honeypot field for invisible spam protection */}
                <div className="hidden" aria-hidden="true" tabIndex={-1}>
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Safe Human-Friendly Error Alert */}
                {serverError && (
                  <div
                    className="p-4 bg-red-50 border-l-4 border-[#800000] text-red-900 flex items-start gap-3"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 text-[#800000] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold">Notice</p>
                      <p className="mt-0.5">{serverError}</p>
                    </div>
                  </div>
                )}

                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#111111] mb-2"
                    >
                      {formContent.fullNameLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={formContent.fullNamePlaceholder}
                      maxLength={100}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-base sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      required
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#111111] mb-2"
                    >
                      {formContent.phoneLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={formContent.phonePlaceholder}
                      maxLength={20}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-base sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      required
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address & Legal Matter Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#111111] mb-2"
                    >
                      {formContent.emailLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={formContent.emailPlaceholder}
                      maxLength={120}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-base sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Legal Matter Dropdown */}
                  <div>
                    <label
                      htmlFor="legalMatter"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#111111] mb-2"
                    >
                      {formContent.matterLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <select
                      id="legalMatter"
                      name="legalMatter"
                      value={formData.legalMatter}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-base sm:text-sm text-[#111111] focus:outline-none focus:border-[#800000] transition-colors"
                      required
                    >
                      {formContent.matterOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.legalMatter && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                        {errors.legalMatter}
                      </p>
                    )}
                  </div>
                </div>

                {/* Brief Description */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="briefDescription"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#111111]"
                    >
                      {formContent.descLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {formData.briefDescription.length}/1000
                    </span>
                  </div>
                  <textarea
                    id="briefDescription"
                    name="briefDescription"
                    rows={4}
                    value={formData.briefDescription}
                    onChange={handleInputChange}
                    placeholder={formContent.descPlaceholder}
                    maxLength={1000}
                    disabled={isSubmitting}
                    className={`w-full bg-white border p-4 text-base sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors resize-y ${
                      errors.briefDescription ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                    }`}
                    aria-invalid={!!errors.briefDescription}
                    aria-describedby={errors.briefDescription ? 'desc-error' : undefined}
                    required
                  />
                  {errors.briefDescription && (
                    <p id="desc-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                      {errors.briefDescription}
                    </p>
                  )}
                </div>

                {/* Privacy Assurance Text */}
                <div className="flex items-start gap-2.5 text-xs text-neutral-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                  <p>{formContent.privacyConsent}</p>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#800000] hover:bg-[#660000] disabled:bg-neutral-400 text-white text-xs font-semibold tracking-wider uppercase px-8 py-4 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/50 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{formContent.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <span>{formContent.submitButton}</span>
                        <ArrowRight className="w-4 h-4 text-[#EACEAA]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Chamber Contact Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111111] text-white p-8 sm:p-10 border border-white/10">
              <h3 className="font-serif text-2xl font-normal text-white mb-2">
                {contactCard.title}
              </h3>
              <p className="text-xs text-[#EACEAA] font-mono uppercase tracking-widest mb-8">
                Independent Legal Practice · Delhi NCR
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                {/* Chamber Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider mb-0.5">
                      {contactCard.chamberLabel}
                    </span>
                    <span className="text-neutral-200 leading-snug">
                      {contactCard.chamberAddress}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider mb-0.5">
                      {contactCard.phoneLabel}
                    </span>
                    <a
                      href={`tel:${content.brand.phone}`}
                      className="text-white hover:text-[#EACEAA] font-semibold text-base transition-colors"
                    >
                      {content.brand.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider mb-0.5">
                      {contactCard.emailLabel}
                    </span>
                    <a
                      href={`mailto:${content.brand.email}`}
                      className="text-neutral-200 hover:text-[#EACEAA] transition-colors break-all"
                    >
                      {content.brand.email}
                    </a>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider mb-0.5">
                      {contactCard.availabilityLabel}
                    </span>
                    <span className="text-neutral-200">
                      {contactCard.availabilityValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/919204463290?text=Hello%20Advocate%20Anish%2C%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase py-3.5 px-4 transition-colors flex items-center justify-center gap-2 border border-[#800000] hover:border-[#EACEAA]/40 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#EACEAA]" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
