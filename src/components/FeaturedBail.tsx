import React from 'react';
import { SiteContent } from '../content/content';
import { Clock, ShieldAlert, ArrowUpRight, Scale } from 'lucide-react';

interface FeaturedBailProps {
  content: SiteContent;
  onBailConsultClick: () => void;
}

export const FeaturedBail: React.FC<FeaturedBailProps> = ({
  content,
  onBailConsultClick,
}) => {
  return (
    <section className="bg-[#111111] text-white py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
      {/* Subtle border geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-[#EACEAA]/5 rotate-45 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Urgent Positioning & Ethics (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-4 h-4 text-[#EACEAA]" />
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#EACEAA] font-semibold">
                {content.featuredBail.label}
              </p>
            </div>

            <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.12] mb-4">
              {content.featuredBail.headline}
            </h2>

            <p className="text-[#EACEAA] text-sm sm:text-base font-serif italic mb-6">
              {content.featuredBail.subhead}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              {content.featuredBail.intro}
            </p>

            {/* Ethical BCI Compliance Disclaimer Box */}
            <div className="p-4 sm:p-5 bg-neutral-900/90 border border-[#EACEAA]/25 mb-8">
              <div className="flex items-start gap-3">
                <Scale className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {content.featuredBail.statutoryNote}
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onBailConsultClick}
                className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-7 py-4 transition-all duration-200 border border-[#800000] hover:border-[#EACEAA]/40 inline-flex items-center gap-2 shadow-lg"
              >
                <span>{content.featuredBail.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Category Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.featuredBail.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-neutral-900/70 border border-white/10 hover:border-[#EACEAA]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#EACEAA]">0{idx + 1}</span>
                    <ShieldAlert className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Sessions & High Court</span>
                  <span className="text-[#EACEAA]">Delhi NCR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
