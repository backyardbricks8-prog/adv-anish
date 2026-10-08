import React from 'react';
import { SiteContent } from '../content/content';
import { CheckCircle2 } from 'lucide-react';

interface ApproachProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const Approach: React.FC<ApproachProps> = ({ content, onConsultClick }) => {
  const { approach } = content;

  return (
    <section id="approach" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {approach.eyebrow}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {approach.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {approach.intro}
          </p>
        </div>

        {/* 4-Stage Horizontal Editorial Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {approach.steps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FBFBFA] transition-colors group"
            >
              <div>
                {/* Step number with clean line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-light text-neutral-300 group-hover:text-[#800000] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Phase {step.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-semibold text-[#111111] mb-1 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#800000] uppercase tracking-wider mb-4 font-semibold">
                  {step.subtitle}
                </p>

                {/* Details */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-6 font-normal">
                  {step.details}
                </p>
              </div>

              {/* Client takeaway box: makes the user feel clear & supported */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2 text-xs text-neutral-800 bg-neutral-50 p-3 border border-neutral-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                  <span className="leading-snug">{step.clientTakeaway}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#444444] mb-4">
            Uncertainty narrows your options. A 15-minute consultation establishes your legal position.
          </p>
          <button
            type="button"
            onClick={onConsultClick}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#800000] hover:text-[#660000] border-b border-[#800000] pb-1 transition-colors"
          >
            <span>Start With Phase 01 — Schedule an Initial Review</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
