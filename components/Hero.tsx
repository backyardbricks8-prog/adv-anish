'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Scale } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  content: SiteContent;
  onConsultClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  content,
  onConsultClick,
  onExploreClick,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="hero"
      className="relative bg-[#111111] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-white/10"
    >
      {/* Subtle Architectural Watermark Typography with soft drift */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0.03 } : { opacity: 0, x: 20 }}
        animate={shouldReduceMotion ? { opacity: 0.03 } : { opacity: 0.03, x: 0 }}
        transition={{ duration: 1.4, ease: easeCurve }}
        className="absolute -top-12 right-0 select-none pointer-events-none text-white font-heading font-black text-[14vw] tracking-[0.25em] whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        {content.hero.watermark}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Client-Focused Outcome & Positioning (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Eyebrow with reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                initial={shouldReduceMotion ? { width: 32 } : { width: 0 }}
                animate={shouldReduceMotion ? { width: 32 } : { width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-[1px] bg-[#EACEAA] inline-block"
              />
              <p className="text-[#EACEAA] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono font-medium">
                {content.hero.eyebrow}
              </p>
            </motion.div>

            {/* Main Headline with clamp and restrained italic accent */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
              className="font-heading text-[clamp(2.125rem,4.5vw,3.75rem)] font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl"
            >
              When the matter is serious, your legal representation should be{' '}
              <span className="font-editorial text-[#EACEAA] font-normal not-italic italic inline-block pr-1">
                stronger.
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easeCurve }}
              className="text-neutral-300 text-base sm:text-lg font-normal leading-[1.6] max-w-xl mb-10 font-sans"
            >
              {content.hero.supporting}
            </motion.p>

            {/* Dual CTAs with refined hover and arrow animation */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easeCurve }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <motion.button
                type="button"
                onClick={onConsultClick}
                whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group bg-[#800000] hover:bg-[#660000] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/50 flex items-center justify-center gap-2 shadow-sm focus-visible:outline-white cursor-pointer"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.button>

              <motion.button
                type="button"
                onClick={onExploreClick}
                whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group bg-transparent hover:bg-white/5 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase px-7 py-4 transition-all duration-200 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 focus-visible:outline-white cursor-pointer"
              >
                <span>{content.hero.ctaSecondary}</span>
                <ArrowDown
                  className="w-4 h-4 text-neutral-400 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.button>
            </motion.div>

            {/* Subtle Trust Indicators (Direct, Location, Privilege) with staggered entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: easeCurve }}
              className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-neutral-300 font-sans"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">
                    {content.hero.trustIndicators[0].title}
                  </span>
                  <span className="text-neutral-400 text-[11px] leading-tight block">
                    {content.hero.trustIndicators[0].subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">
                    {content.hero.trustIndicators[1].title}
                  </span>
                  <span className="text-neutral-400 text-[11px] leading-tight block">
                    {content.hero.trustIndicators[1].subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">
                    {content.hero.trustIndicators[2].title}
                  </span>
                  <span className="text-neutral-400 text-[11px] leading-tight block">
                    {content.hero.trustIndicators[2].subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait (5 cols) with subtle image fade-in */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric Swiss Accent Border */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0.3 } : { opacity: 0, x: -6, y: -6 }}
                animate={shouldReduceMotion ? { opacity: 0.3 } : { opacity: 1, x: 8, y: 8 }}
                transition={{ duration: 0.9, delay: 0.4, ease: easeCurve }}
                className="absolute -inset-2 sm:-inset-3 border border-[#EACEAA]/20 -z-10 pointer-events-none"
              />

              {/* Portrait Wrapper with elegant fade-in */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: easeCurve }}
                className="relative bg-neutral-900 border border-white/15 overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/hero_opt.webp"
                  alt="Advocate Anish Kumar - Legal Practitioner in Delhi NCR"
                  width={1600}
                  height={2000}
                  className="w-full h-auto object-cover object-top aspect-[4/5] filter contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Editorial Caption Plate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-12 pb-5 px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-heading text-lg font-semibold tracking-wide">
                        {content.brand.advocateTitle}
                      </p>
                      <p className="text-[#EACEAA] text-[11px] font-mono uppercase tracking-widest">
                        Advocate · Saket Court Complex
                      </p>
                    </div>
                    <span className="text-[10px] text-neutral-300 font-mono border border-white/20 px-2 py-0.5 uppercase">
                      Delhi NCR
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
