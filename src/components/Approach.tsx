import React from 'react';
import { SiteContent } from '../content/content';

interface ApproachProps {
  content: SiteContent;
}

export const Approach: React.FC<ApproachProps> = ({ content }) => {
  return (
    <section id="approach" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {content.approach.label}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {content.approach.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {content.approach.intro}
          </p>
        </div>

        {/* 4-Stage Horizontal Editorial Sequence (Collapses to vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {content.approach.steps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-neutral-50/80 transition-colors group"
            >
              <div>
                {/* Step number with clean line */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl sm:text-3xl font-mono font-light text-neutral-300 group-hover:text-[#800000] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Stage
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#111111] mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono text-[#800000] uppercase tracking-wider mb-4 font-semibold">
                  {step.description}
                </p>

                {/* Details */}
                <p className="text-sm text-[#444444] leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-[11px]">Advocate Anish</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#800000]">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
