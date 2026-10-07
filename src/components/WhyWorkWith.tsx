import React from 'react';
import { SiteContent } from '../content/content';
import { UserCheck, MessageSquareQuote, Target, LockKeyhole } from 'lucide-react';

interface WhyWorkWithProps {
  content: SiteContent;
}

export const WhyWorkWith: React.FC<WhyWorkWithProps> = ({ content }) => {
  const icons = [UserCheck, MessageSquareQuote, Target, LockKeyhole];

  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {content.principles.label}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {content.principles.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {content.principles.intro}
          </p>
        </div>

        {/* 4 Core Principles in a 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.principles.items.map((principle, idx) => {
            const IconComponent = icons[idx % icons.length];

            return (
              <div
                key={principle.number}
                className="bg-white p-8 sm:p-10 border border-neutral-200/80 hover:border-neutral-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-[#800000] bg-neutral-50">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      Principle {principle.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] mb-3 tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
                  <span>Advocate Anish Practice Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
