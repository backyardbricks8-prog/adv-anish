import React, { useState, useEffect } from 'react';
import { SiteContent } from '../content/content';
import { ConsultationFormData } from '../types';
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

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Sync selected matter if updated from Services section
  useEffect(() => {
    if (selectedMatter) {
      setFormData((prev) => ({ ...prev, legalMatter: selectedMatter }));
    }
  }, [selectedMatter]);

  const validateField = (field: keyof ConsultationFormData, value: string): string | null => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        if (value.trim().length > 100) return 'Full name cannot exceed 100 characters.';
        return null;
      case 'phone': {
        const clean = value.replace(/[\s\-\(\)]/g, '');
        if (!clean) return 'Phone number is required.';
        if (clean.length < 8 || clean.length > 15 || !/^\+?[0-9]{8,15}$/.test(clean)) {
          return 'Please enter a valid phone number with area/country code.';
        }
        return null;
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!value.trim()) return 'Email address is required.';
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        if (value.trim().length > 120) return 'Email cannot exceed 120 characters.';
        return null;
      }
      case 'legalMatter':
        if (!value.trim()) return 'Please select a legal matter category.';
        return null;
      case 'briefDescription':
        if (!value.trim()) return 'A brief description is required.';
        if (value.trim().length < 5) return 'Please describe your matter in at least 5 characters.';
        if (value.trim().length > 1000) return 'Description cannot exceed 1,000 characters.';
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
    setServerError(null);

    // Validate all fields
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    (Object.keys(formData) as Array<keyof ConsultationFormData>).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) (element as HTMLElement).focus();
      return;
    }

    setIsSubmitting(true);

    try {
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
      } else {
        setServerError(
          data.error ||
            'Unable to process consultation request at this time. Please retry or contact directly by phone.'
        );
      }
    } catch (err) {
      // Safe generic network failure handling
      setServerError(
        'Network communication error. Please check your connection or contact Advocate Anish directly by phone.'
      );
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
    setErrors({});
    setSubmitSuccess(false);
    setServerError(null);
  };

  const matterOptions = [
    'Bail Matters',
    'Civil & Criminal Matters',
    'Business Registration',
    'Trademark & Intellectual Property',
    'Traffic Challan Matters',
    'Compliance',
    'Legal Documentation',
    'Other Legal Matter',
  ];

  return (
    <section id="consultation" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {content.consultation.label}
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
                className="bg-neutral-50 border border-neutral-200 p-8 sm:p-10 shadow-sm"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                  {content.consultation.form.successTitle}
                </h3>

                <p className="text-[#444444] text-base leading-relaxed mb-6">
                  {content.consultation.form.successMessage}
                </p>

                <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-600 mb-8 space-y-1">
                  <div className="flex items-center gap-2 font-medium text-neutral-900">
                    <Lock className="w-3.5 h-3.5 text-[#800000]" />
                    <span>Statutory Confidentiality Assured</span>
                  </div>
                  <p>
                    All communications are covered by advocate-client privilege. Your inquiry is reviewed directly by Adv. Anish Kumar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/919204463290?text=Hello%20Advocate%20Anish%2C%20I%20have%20submitted%20a%20consultation%20request%20regarding%20a%20legal%20matter.`}
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
                    {content.consultation.form.newInquiryButton}
                  </button>
                </div>
              </div>
            ) : (
              /* Consultation Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-neutral-50 p-6 sm:p-10 border border-neutral-200 space-y-6"
                aria-label="Legal Consultation Request Form"
              >
                {/* Server Error Alert */}
                {serverError && (
                  <div
                    className="p-4 bg-red-50 border-l-4 border-[#800000] text-red-900 flex items-start gap-3"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 text-[#800000] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold">Unable to complete request</p>
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
                      {content.consultation.form.fullNameLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={content.consultation.form.fullNamePlaceholder}
                      maxLength={100}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
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
                      {content.consultation.form.phoneLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={content.consultation.form.phonePlaceholder}
                      maxLength={20}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
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
                      {content.consultation.form.emailLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={content.consultation.form.emailPlaceholder}
                      maxLength={120}
                      disabled={isSubmitting}
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors ${
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
                      {content.consultation.form.matterLabel} <span className="text-[#800000]">*</span>
                    </label>
                    <select
                      id="legalMatter"
                      name="legalMatter"
                      value={formData.legalMatter}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#800000] transition-colors"
                      required
                    >
                      {matterOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
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
                      {content.consultation.form.descLabel} <span className="text-[#800000]">*</span>
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
                    placeholder={content.consultation.form.descPlaceholder}
                    maxLength={1000}
                    disabled={isSubmitting}
                    className={`w-full bg-white border p-4 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#800000] transition-colors resize-y ${
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
                  <p>{content.consultation.form.privacyConsent}</p>
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
                        <span>{content.consultation.form.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <span>{content.consultation.form.submitButton}</span>
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
                {content.consultation.contactCard.title}
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
                      {content.consultation.contactCard.chamberLabel}
                    </span>
                    <span className="text-neutral-200 leading-snug">
                      {content.consultation.contactCard.chamberAddress}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider mb-0.5">
                      {content.consultation.contactCard.phoneLabel}
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
                      {content.consultation.contactCard.emailLabel}
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
                      {content.consultation.contactCard.availabilityLabel}
                    </span>
                    <span className="text-neutral-200">
                      {content.consultation.contactCard.availabilityValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/919204463290?text=Hello%20Advocate%20Anish%2C%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.`}
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
