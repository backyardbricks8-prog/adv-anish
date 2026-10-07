import React, { useState, useEffect } from 'react';
import { Locale } from '../types';
import { SiteContent } from '../content/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  content: SiteContent;
  locale: Locale;
  onToggleLocale: () => void;
  onNavigateToConsultation: (matter?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  locale,
  onToggleLocale,
  onNavigateToConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.services, href: '#services' },
    { label: content.nav.approach, href: '#approach' },
    { label: content.nav.profile, href: '#profile' },
    { label: content.nav.contact, href: '#consultation' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg'
            : 'bg-[#111111] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 group focus-visible:outline-white"
              aria-label="Advocate Anish Home"
            >
              <div className="w-9 h-9 border border-[#EACEAA]/40 flex items-center justify-center bg-black text-[#EACEAA] font-brand-mark font-bold text-sm tracking-wider group-hover:border-[#EACEAA] transition-colors">
                AA
              </div>
              <div className="flex flex-col">
                <span className="text-white font-brand-mark text-base font-bold tracking-[0.18em] leading-tight">
                  {content.brand.name}
                </span>
                <span className="text-[#EACEAA] text-[10px] tracking-[0.2em] uppercase font-sans font-medium">
                  {content.brand.tagline} · {content.brand.jurisdiction}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-neutral-300 hover:text-white text-sm font-medium tracking-wide transition-colors relative py-1 focus-visible:outline-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#EACEAA] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Bar (Language Switcher + Primary CTA) */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Language toggle */}
              <button
                type="button"
                onClick={onToggleLocale}
                className="text-xs uppercase tracking-widest font-mono text-[#EACEAA] border border-[#EACEAA]/30 hover:border-[#EACEAA] px-2.5 py-1.5 transition-colors focus-visible:outline-white"
                title={`Switch language to ${locale === 'en' ? 'Hindi' : 'English'}`}
                aria-label={`Switch language to ${locale === 'en' ? 'Hindi' : 'English'}`}
              >
                {content.nav.switchLang}
              </button>

              {/* Primary Consultation CTA */}
              <button
                type="button"
                onClick={() => onNavigateToConsultation()}
                className="bg-[#800000] hover:bg-[#660000] active:scale-[0.99] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/40 flex items-center gap-1.5 shadow-sm"
              >
                <span>{content.nav.ctaButton}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onToggleLocale}
                className="text-[11px] uppercase tracking-wider font-mono text-[#EACEAA] border border-[#EACEAA]/30 px-2 py-1 mr-1"
                aria-label={`Switch to ${locale === 'en' ? 'Hindi' : 'English'}`}
              >
                {locale === 'en' ? 'हिन्दी' : 'EN'}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 border border-white/20 focus-visible:outline-white"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-neutral-200 hover:text-white py-2 text-base font-medium border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#EACEAA] text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToConsultation();
                }}
                className="w-full bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase py-3 transition-colors flex items-center justify-center gap-2"
              >
                <span>{content.nav.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
