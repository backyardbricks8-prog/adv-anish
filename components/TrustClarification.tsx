'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { HelpCircle, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface TrustClarificationProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const TrustClarification: React.FC<TrustClarificationProps> = ({
  content,
  onConsultClick,
}) => {
  const { problemSolution } = content;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white text-[#111111] py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Main Headline with ScrollReveal */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {problemSolution.eyebrow}
            </p>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold text-[#111111] leading-[1.2] mb-4">
            Facing a legal issue is stressful. The critical challenge is{' '}
            <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
              knowing what to do next.
            </span>
          </h2>
          <p className="text-[#444444] text-base sm:text-lg leading-[1.6] font-sans">
            {problemSolution.intro}
          </p>
        </ScrollReveal>

        {/* 3-Column Problem → Consequence → Solution Transformation Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Client Problem & Questions (4 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            className="lg:col-span-4 bg-[#FBFBFA] border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#800000] font-semibold">
                  01 · {problemSolution.coreProblem.tag}
                </span>
                <HelpCircle className="w-4 h-4 text-neutral-400" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#111111] mb-3">
                {problemSolution.coreProblem.title}
              </h3>

              <p className="text-sm text-[#444444] mb-6 leading-relaxed font-sans">
                {problemSolution.coreProblem.description}
              </p>

              <div className="space-y-3">
                {problemSolution.coreProblem.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-neutral-800 py-1.5 border-b border-neutral-200/60 last:border-0 font-sans"
                  >
                    <span className="font-mono text-[#800000] font-bold text-[10px] mt-0.5">
                      Q{idx + 1}
                    </span>
                    <span className="font-editorial text-sm text-[#111111] font-normal not-italic italic leading-snug">
                      "{q}"
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 font-mono">
              The root problem is lack of statutory clarity.
            </div>
          </motion.div>

          {/* Card 2: Consequence / Risk of Delay (3 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            className="lg:col-span-3 bg-neutral-900 text-white p-8 flex flex-col justify-between border-t-4 border-[#800000] shadow-sm transition-transform"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#EACEAA] font-semibold">
                  02 · {problemSolution.consequence.tag}
                </span>
                <AlertTriangle className="w-4 h-4 text-[#EACEAA]" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {problemSolution.consequence.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {problemSolution.consequence.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#EACEAA] font-mono">
              Timely legal intervention preserves options.
            </div>
          </motion.div>

          {/* Card 3: Solution & Defined Outcome (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            className="lg:col-span-5 bg-white border-2 border-[#111111] p-8 flex flex-col justify-between shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#800000] font-semibold">
                  03 · {problemSolution.solution.tag}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#800000]" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] mb-3 leading-snug">
                Understand the facts.{' '}
                <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
                  Define the strategy.
                </span>{' '}
                Move forward.
              </h3>

              <p className="text-sm text-[#444444] leading-relaxed mb-4 font-sans">
                {problemSolution.solution.description}
              </p>

              <blockquote className="p-4 bg-neutral-50 border-l-2 border-[#800000] text-xs text-neutral-800 leading-relaxed font-sans mb-6">
                {problemSolution.solution.takeaway}
              </blockquote>
            </div>

            <div>
              <motion.button
                type="button"
                onClick={onConsultClick}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group w-full bg-[#111111] hover:bg-[#800000] text-white text-xs font-semibold tracking-wider uppercase py-3.5 px-6 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Strategic Direction on Your Matter</span>
                <ArrowRight className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
