'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '../types';
import { SiteContent } from '../content/content';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

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
  const shouldReduceMotion = useReducedMotion();

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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: content.nav.services, href: '#services' },
    { label: content.nav.approach, href: '#approach' },
    { label: content.nav.about, href: '#about' },
    { label: content.nav.faq, href: '#faq' },
    { label: content.nav.contact, href: '#consultation' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
            ? 'bg-[#111111]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg'
            : 'bg-[#111111] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Mark with uploaded Advocate Anish logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 sm:gap-3.5 group focus-visible:outline-white"
              aria-label="Advocate Anish Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border border-white/20 group-hover:border-[#EACEAA] transition-all duration-200 overflow-hidden bg-black flex items-center justify-center shadow-sm">
                <Image
                  src="/assets/IMG_4309.PNG"
                  alt="Advocate Anish Logo"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-brand-mark text-sm sm:text-base font-bold tracking-[0.18em] leading-tight group-hover:text-neutral-200 transition-colors duration-200">
                  {content.brand.name}
                </span>
                <span className="text-[#EACEAA] text-[10px] tracking-[0.22em] uppercase font-mono font-medium">
                  {content.brand.tagline} · {content.brand.jurisdiction}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-neutral-300 hover:text-white text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 focus-visible:outline-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#EACEAA] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Language Toggle & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <motion.button
                type="button"
                onClick={onToggleLocale}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="text-[11px] uppercase tracking-widest font-mono text-[#EACEAA] border border-[#EACEAA]/30 hover:border-[#EACEAA] hover:bg-[#EACEAA]/5 px-2.5 py-1.5 transition-all duration-200 focus-visible:outline-white cursor-pointer"
                title={`Switch language to ${locale === 'en' ? 'Hindi' : 'English'}`}
                aria-label={`Switch language to ${locale === 'en' ? 'Hindi' : 'English'}`}
              >
                {content.nav.switchLang}
              </motion.button>

              <motion.button
                type="button"
                onClick={() => onNavigateToConsultation()}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/40 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>{content.nav.ctaButton}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onToggleLocale}
                className="text-[11px] uppercase tracking-wider font-mono text-[#EACEAA] border border-[#EACEAA]/30 px-2.5 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center mr-0.5 transition-colors"
                aria-label={`Switch to ${locale === 'en' ? 'Hindi' : 'English'}`}
              >
                {locale === 'en' ? 'हिन्दी' : 'EN'}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center border border-white/20 hover:border-white focus-visible:outline-white transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Polished Mobile Drawer with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#111111] z-50 px-6 py-8 flex flex-col justify-between border-t border-white/10 overflow-y-auto"
            >
              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#EACEAA]">
                  Navigation Menu
                </p>
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.25 }}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-white text-xl font-heading font-semibold py-3 border-b border-white/10 flex items-center justify-between group active:bg-white/5"
                    >
                      <span className="group-hover:text-[#EACEAA] transition-colors">{link.label}</span>
                      <span className="text-xs font-mono text-neutral-400 group-hover:text-[#EACEAA] transition-colors">
                        0{idx + 1} →
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateToConsultation();
                  }}
                  className="w-full bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase py-4 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{content.nav.ctaButton}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" />
                </button>

                <div className="text-center text-xs text-neutral-400 font-mono">
                  Saket Court Complex · New Delhi
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
