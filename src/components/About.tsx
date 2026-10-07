import React from 'react';
import { SiteContent } from '../content/content';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const About: React.FC<AboutProps> = ({ content, onConsultClick }) => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Photo of Adv. Anish Kumar (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="border border-neutral-300 p-2 bg-neutral-50 shadow-sm">
                <img
                  src="/assets/about_opt.webp"
                  alt="Adv. Anish Kumar in chamber"
                  className="w-full h-auto object-cover aspect-[3/4] filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Verified Chamber Badge Card */}
              <div className="mt-4 p-4 bg-neutral-900 text-white border-l-4 border-[#800000]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#EACEAA]">
                  Advocate Chamber
                </p>
                <p className="text-sm font-medium mt-0.5">
                  271 Saket Court Complex, New Delhi 110017
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Practicing across District Courts & High Court of Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#800000]"></span>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
                {content.about.label}
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-[1.15] mb-8">
              {content.about.headline}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-[#444444] text-base leading-relaxed mb-10">
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-200 mb-10">
              {content.about.pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-mono text-[#800000] font-bold mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-[#111111] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#444444] leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action */}
            <div>
              <button
                type="button"
                onClick={onConsultClick}
                className="bg-[#111111] hover:bg-[#800000] text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>{content.about.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
