'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface ApproachProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const Approach: React.FC<ApproachProps> = ({ content, onConsultClick }) => {
  const { approach } = content;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="approach" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {approach.eyebrow}
            </p>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold text-[#111111] leading-[1.2] mb-4">
            A disciplined framework for{' '}
            <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
              strategic legal advocacy.
            </span>
          </h2>
          <p className="text-[#444444] text-base leading-[1.6] font-sans">
            {approach.intro}
          </p>
        </ScrollReveal>

        {/* 4-Stage Horizontal Editorial Sequence with Sequential Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {approach.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FBFBFA] transition-all duration-200 group relative border-t-2 border-transparent hover:border-[#800000]"
            >
              <div>
                {/* Step number with clean line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-light text-neutral-300 group-hover:text-[#800000] transition-colors duration-200">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-neutral-700 transition-colors">
                    Phase {step.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-xl font-bold text-[#111111] mb-1 tracking-tight group-hover:text-[#800000] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs font-editorial text-[#800000] not-italic italic mb-4 font-normal">
                  {step.subtitle}
                </p>

                {/* Details */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-6 font-normal font-sans">
                  {step.details}
                </p>
              </div>

              {/* Client takeaway box: makes the user feel clear & supported */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2 text-xs text-neutral-800 bg-neutral-50 p-3 border border-neutral-200/80 group-hover:border-neutral-300 font-sans transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                  <span className="leading-snug">{step.clientTakeaway}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA prompt with ScrollReveal */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#444444] mb-4 font-sans">
            Uncertainty narrows your options. A 15-minute consultation establishes your legal position.
          </p>
          <motion.button
            type="button"
            onClick={onConsultClick}
            whileHover={shouldReduceMotion ? {} : { x: 3 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#800000] hover:text-[#660000] border-b border-[#800000] pb-1 transition-colors cursor-pointer group"
          >
            <span>Start With Phase 01 — Schedule an Initial Review</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};
