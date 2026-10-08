import React from 'react';
import { SiteContent } from '../content/content';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  content: SiteContent;
  onNavigateToConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  onNavigateToConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: content.nav.services, href: '#services' },
    { label: content.nav.approach, href: '#approach' },
    { label: content.nav.about, href: '#about' },
    { label: content.nav.faq, href: '#faq' },
    { label: content.nav.contact, href: '#consultation' },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-[#EACEAA]/40 flex items-center justify-center bg-black text-[#EACEAA] font-brand-mark font-bold text-xs tracking-wider">
                AA
              </div>
              <span className="font-brand-mark text-lg font-bold tracking-[0.2em] text-white">
                {content.footer.brandName}
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#EACEAA] mb-4">
              {content.footer.descriptor}
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-sans">
              Personal, focused legal guidance and representation for individuals and businesses navigating critical legal matters across Delhi NCR.
            </p>

            <button
              type="button"
              onClick={onNavigateToConsultation}
              className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 transition-colors border border-[#800000] hover:border-[#EACEAA]/40"
            >
              {content.nav.ctaButton}
            </button>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#EACEAA] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#EACEAA] text-xs">/</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chamber & Verified Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#EACEAA] mb-4">
              Court Chamber & Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <span>{content.brand.courtChamber}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <a
                  href={`tel:${content.brand.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {content.brand.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${content.brand.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {content.brand.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Council of India Legal Notice */}
        <div className="py-6 border-b border-white/5 text-[11px] text-neutral-400 leading-relaxed font-sans">
          <p>{content.footer.disclaimer}</p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>{content.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#EACEAA] transition-colors focus-visible:outline-white"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
