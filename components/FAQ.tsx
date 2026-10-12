'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface FAQProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ content, onConsultClick }) => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {faq.eyebrow}
            </p>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold text-[#111111] leading-[1.2] mb-4">
            Clear answers before you take the{' '}
            <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
              first legal step.
            </span>
          </h2>
          <p className="text-[#444444] text-base leading-[1.6] font-sans">
            {faq.intro}
          </p>
        </ScrollReveal>

        {/* Elegant Accordion List with Smooth Expand/Collapse */}
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
                  className="w-full text-left py-6 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-4 focus-visible:outline-neutral-900 group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#800000] font-bold mt-0.5">
                      Q{idx + 1}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#800000] transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:border-[#800000] group-hover:text-[#800000] transition-colors ml-2">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#800000]' : ''}`}
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-1 pl-12 sm:pl-16 text-sm sm:text-base text-[#444444] leading-[1.6] font-sans">
                        <p className="max-w-3xl">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner with ScrollReveal */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="p-6 sm:p-8 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-[#800000] shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#EACEAA] text-xs font-mono uppercase tracking-widest mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Direct Legal Guidance</span>
              </div>
              <p className="font-sans text-sm sm:text-base font-medium text-white">
                {faq.ctaPrompt}
              </p>
            </div>

            <motion.button
              type="button"
              onClick={onConsultClick}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="group bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-6 py-3.5 transition-all duration-200 inline-flex items-center gap-2 shrink-0 border border-[#800000] hover:border-[#EACEAA]/40 shadow-sm cursor-pointer"
            >
              <span>{faq.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
