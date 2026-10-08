import React, { useState } from 'react';
import { SiteContent } from '../content/content';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

interface FAQProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ content, onConsultClick }) => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {faq.eyebrow}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {faq.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {faq.intro}
          </p>
        </div>

        {/* Elegant Accordion List */}
        <div className="border-t border-neutral-300 divide-y divide-neutral-200">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#FBFBFA]' : 'hover:bg-neutral-50/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-6 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-4 focus-visible:outline-neutral-900 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#800000] font-bold mt-0.5">
                      Q{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111111] group-hover:text-[#800000] transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:border-[#800000] group-hover:text-[#800000] transition-colors ml-2">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#800000]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-4 sm:px-6 pb-6 pt-1 pl-12 sm:pl-16 text-sm sm:text-base text-[#444444] leading-relaxed animate-in fade-in duration-200"
                  >
                    <p className="max-w-3xl">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-[#800000]">
          <div>
            <div className="flex items-center gap-2 text-[#EACEAA] text-xs font-mono uppercase tracking-widest mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Direct Legal Guidance</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-white">
              {faq.ctaPrompt}
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-6 py-3.5 transition-colors inline-flex items-center gap-2 shrink-0 border border-[#800000] hover:border-[#EACEAA]/40 shadow-sm"
          >
            <span>{faq.ctaButton}</span>
            <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" />
          </button>
        </div>
      </div>
    </section>
  );
};
