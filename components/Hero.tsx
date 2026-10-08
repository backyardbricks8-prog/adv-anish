import React from 'react';
import { SiteContent } from '../content/content';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Scale } from 'lucide-react';

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
  return (
    <section
      id="hero"
      className="relative bg-[#111111] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-white/10"
    >
      {/* Subtle Architectural Watermark Typography */}
      <div
        className="absolute -top-12 right-0 select-none pointer-events-none opacity-[0.03] text-white font-brand-mark text-[14vw] tracking-[0.25em] whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        {content.hero.watermark}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Client-Focused Outcome & Positioning (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#EACEAA]"></span>
              <p className="text-[#EACEAA] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono font-medium">
                {content.hero.eyebrow}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial-heading text-3xl sm:text-5xl md:text-[3.5rem] font-normal tracking-tight text-white leading-[1.1] mb-6 max-w-2xl">
              {content.hero.headline}
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-10 font-sans">
              {content.hero.supporting}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onConsultClick}
                className="bg-[#800000] hover:bg-[#660000] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/50 flex items-center justify-center gap-2 shadow-sm focus-visible:outline-white"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="bg-transparent hover:bg-white/5 active:scale-[0.98] text-neutral-200 hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase px-7 py-4 transition-all duration-200 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 focus-visible:outline-white"
              >
                <span>{content.hero.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" aria-hidden="true" />
              </button>
            </div>

            {/* Subtle Trust Indicators (Direct, Location, Privilege) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-neutral-300">
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
            </div>
          </div>

          {/* Right Column: Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric Swiss Accent Border */}
              <div className="absolute -inset-2 sm:-inset-3 border border-[#EACEAA]/20 -z-10 translate-x-2 translate-y-2 pointer-events-none" />

              {/* Portrait Wrapper */}
              <div className="relative bg-neutral-900 border border-white/15 overflow-hidden shadow-2xl">
                <img
                  src="/assets/hero_opt.webp"
                  alt="Advocate Anish Kumar - Legal Practitioner in Delhi NCR"
                  width={1600}
                  height={2000}
                  className="w-full h-auto object-cover object-top aspect-[4/5] filter contrast-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Editorial Caption Plate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-12 pb-5 px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-serif text-lg font-medium tracking-wide">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
