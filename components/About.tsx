'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const About: React.FC<AboutProps> = ({ content, onConsultClick }) => {
  const { about } = content;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Photo of Adv. Anish Kumar (5 cols) with subtle image fade-in */}
          <ScrollReveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="border border-neutral-300 p-2 bg-[#FBFBFA] shadow-md overflow-hidden">
                <img
                  src="/assets/about_opt.webp"
                  alt="Adv. Anish Kumar in chamber"
                  width={1000}
                  height={1333}
                  className="w-full h-auto object-cover aspect-[3/4] filter contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Verified Chamber Badge Card */}
              <div className="mt-4 p-5 bg-neutral-900 text-white border-l-4 border-[#800000] shadow-sm">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#EACEAA]">
                  Advocate Chamber
                </p>
                <p className="text-sm font-medium mt-1 font-sans">
                  271 Saket Court Complex, New Delhi 110017
                </p>
                <p className="text-xs text-neutral-400 mt-1 font-sans">
                  Serving District Courts across Delhi NCR & High Court of Delhi
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative & Credentials (7 cols) with ScrollReveal */}
          <ScrollReveal delay={0.15} className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#800000]"></span>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
                {about.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold text-[#111111] leading-[1.15] mb-8">
              Legal representation begins with{' '}
              <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
                understanding the matter.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-[#444444] text-base leading-[1.6] mb-10 font-sans max-w-2xl">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Verified Facts & Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-200 mb-10 text-xs font-sans">
              {about.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase text-[#800000] font-semibold block mb-0.5">
                    {cred.label}
                  </span>
                  <span className="text-neutral-900 font-medium">
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action with refined hover */}
            <div>
              <motion.button
                type="button"
                onClick={onConsultClick}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group bg-[#111111] hover:bg-[#800000] text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 transition-colors duration-200 inline-flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>{about.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
