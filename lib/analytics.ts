/**
 * PRIVACY-PRESERVING FORM ANALYTICS TRACKER
 *
 * Tracks aggregate conversion funnel events only:
 * - form_view
 * - form_submit_success
 * - form_submit_error
 *
 * Strict Privacy Rule: Never transmit names, emails, phone numbers,
 * legal-matter descriptions, or any sensitive PII to analytics.
 */

type AllowedFormEvent = 'form_view' | 'form_submit_success' | 'form_submit_error';

export function trackFormEvent(eventName: AllowedFormEvent, meta?: { serviceCategory?: string }) {
  try {
    // Dispatch custom browser event for Google Tag Manager or lightweight event listeners
    if (typeof window !== 'undefined') {
      const sanitizedDetail = {
        event: eventName,
        timestamp: new Date().toISOString(),
        serviceCategory: meta?.serviceCategory ? meta.serviceCategory.slice(0, 50) : undefined,
      };

      const customEvent = new CustomEvent('advocate_form_event', {
        detail: sanitizedDetail,
      });
      window.dispatchEvent(customEvent);

      // Support dataLayer if configured
      if ((window as unknown as { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push(sanitizedDetail);
      }
    }
  } catch {
    // Silently continue if analytics fails
  }
}
