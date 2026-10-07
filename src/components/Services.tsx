import React, { useState } from 'react';
import { SiteContent } from '../content/content';
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react';

interface ServicesProps {
  content: SiteContent;
  onSelectServiceToConsult: (matterTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  content,
  onSelectServiceToConsult,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('bail-matters');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {content.services.label}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {content.services.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {content.services.intro}
          </p>
        </div>

        {/* Numbered Editorial List (Not Generic Cards) */}
        <div className="border-t border-neutral-300 divide-y divide-neutral-200">
          {content.services.items.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-white' : 'hover:bg-neutral-100/70'
                }`}
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(service.id)}
                  className="w-full text-left py-6 sm:py-8 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-4 focus-visible:outline-neutral-900 group"
                  aria-expanded={isExpanded}
                  aria-controls={`service-desc-${service.id}`}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8 flex-1">
                    {/* Number with burgundy bullet indicator */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#800000] inline-block" />
                      <span className="font-mono text-sm sm:text-base font-semibold text-[#800000]">
                        {service.number}
                      </span>
                    </div>

                    {/* Title & Short Summary */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#111111] group-hover:text-[#800000] transition-colors">
                        {service.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-xs sm:text-sm text-[#444444] mt-1 line-clamp-1 max-w-2xl font-normal">
                          {service.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Indicator Icon */}
                  <div className="shrink-0 flex items-center gap-2 pt-1 sm:pt-0">
                    <span className="text-xs font-mono text-neutral-400 hidden md:inline">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:border-[#800000] group-hover:text-[#800000] transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#800000]' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Detailed Scope Panel */}
                {isExpanded && (
                  <div
                    id={`service-desc-${service.id}`}
                    className="px-4 sm:px-6 pb-8 pt-1 pl-12 sm:pl-20 animate-in fade-in duration-200"
                  >
                    <div className="max-w-3xl">
                      <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold mb-3">
                          Scope of Practice & Proceedings:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.scope.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                              <Check className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Discuss Your Matter Action */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onSelectServiceToConsult(service.title)}
                          className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 transition-colors inline-flex items-center gap-2 shadow-sm"
                        >
                          <span>{content.services.ctaDiscuss}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#EACEAA]" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
