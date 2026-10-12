'use client';

import React, { useState } from 'react';
import { SiteContent } from '../content/content';
import { ArrowUpRight, ChevronDown, Check, Clock, UserCheck, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  content: SiteContent;
  onSelectServiceToConsult: (matterTitle: string) => void;
}

const serviceIdToMatter: Record<string, string> = {
  'bail-matters': 'Bail Matters',
  'civil-criminal': 'Civil & Criminal Matters',
  'business-registration': 'Business Registration',
  'trademark-ip': 'Trademark & Intellectual Property',
  'traffic-challan': 'Traffic Challan Matters',
  'compliance': 'Compliance',
  'legal-documentation': 'Legal Documentation',
};

export const Services: React.FC<ServicesProps> = ({
  content,
  onSelectServiceToConsult,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('bail-matters');
  const shouldReduceMotion = useReducedMotion();

  const { services } = content;
  const activeService = services.items.find((item) => item.id === activeServiceId) || services.items[0];

  return (
    <section id="services" className="bg-[#FBFBFA] py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {services.eyebrow}
            </p>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold text-[#111111] leading-[1.2] mb-4">
            Structured counsel to help you choose the{' '}
            <span className="font-editorial text-[#800000] font-normal not-italic italic inline-block pr-1">
              right legal course.
            </span>
          </h2>
          <p className="text-[#444444] text-base leading-[1.6] font-sans">
            {services.intro}
          </p>
        </ScrollReveal>

        {/* Desktop: Two-Column Decision-Making Interface */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Selector Navigation (5 cols) with subtle hover shifts */}
          <div className="lg:col-span-5 border border-neutral-200 bg-white divide-y divide-neutral-200 shadow-sm">
            {services.items.map((item) => {
              const isActive = activeServiceId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveServiceId(item.id)}
                  className={`w-full text-left p-5 transition-all duration-200 flex items-start justify-between gap-4 group cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-inner'
                      : 'hover:bg-neutral-50/80 text-[#111111]'
                  }`}
                  aria-selected={isActive}
                >
                  {/* Subtle active left border accent */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#800000]"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs font-semibold mt-0.5 transition-colors ${
                        isActive ? 'text-[#EACEAA]' : 'text-[#800000]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`font-heading text-base font-bold leading-snug transition-colors duration-150 ${
                          isActive
                            ? 'text-white'
                            : 'text-[#111111] group-hover:text-[#800000]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-1 font-normal font-sans transition-colors duration-150 ${
                          isActive ? 'text-neutral-300' : 'text-[#555555]'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono mt-1 transition-transform duration-200 ${
                      isActive
                        ? 'text-[#EACEAA] translate-x-1'
                        : 'text-neutral-400 group-hover:text-black group-hover:translate-x-1'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Decision Briefing Card (7 cols) with smooth animated transition */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between min-h-[580px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header with tag and number */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-6">
                    <div>
                      <span className="text-xs font-mono text-[#800000] font-semibold uppercase tracking-wider block mb-1">
                        Practice Area {activeService.number}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                        {activeService.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center font-mono text-sm text-[#800000] font-bold">
                      {activeService.number}
                    </div>
                  </div>

                  {/* Subtitle & Short Statement */}
                  <p className="font-editorial text-base text-[#800000] not-italic italic mb-4 leading-snug">
                    {activeService.subtitle}
                  </p>
                  <p className="text-sm text-[#444444] leading-relaxed mb-8 font-sans">
                    {activeService.shortDesc}
                  </p>

                  {/* 4 Decision Attributes Grid with subtle hover lift */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs font-sans">
                    {/* 1. Who It Is For */}
                    <div className="bg-neutral-50 p-4 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-neutral-900 font-semibold font-mono uppercase text-[11px] tracking-wider">
                        <UserCheck className="w-3.5 h-3.5 text-[#800000]" />
                        <span>{services.decisionLabels.whoItIsFor}</span>
                      </div>
                      <p className="text-[#444444] leading-relaxed">
                        {activeService.whoItIsFor}
                      </p>
                    </div>

                    {/* 2. Core Problem Solved */}
                    <div className="bg-neutral-50 p-4 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-neutral-900 font-semibold font-mono uppercase text-[11px] tracking-wider">
                        <ShieldAlert className="w-3.5 h-3.5 text-[#800000]" />
                        <span>{services.decisionLabels.problemSolved}</span>
                      </div>
                      <p className="text-[#444444] leading-relaxed">
                        {activeService.problemSolved}
                      </p>
                    </div>

                    {/* 3. When to Contact */}
                    <div className="bg-neutral-50 p-4 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-neutral-900 font-semibold font-mono uppercase text-[11px] tracking-wider">
                        <Clock className="w-3.5 h-3.5 text-[#800000]" />
                        <span>{services.decisionLabels.whenToContact}</span>
                      </div>
                      <p className="text-[#444444] leading-relaxed">
                        {activeService.whenToContact}
                      </p>
                    </div>

                    {/* 4. What Happens Next */}
                    <div className="bg-neutral-50 p-4 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-neutral-900 font-semibold font-mono uppercase text-[11px] tracking-wider">
                        <Check className="w-3.5 h-3.5 text-[#800000]" />
                        <span>{services.decisionLabels.whatHappensNext}</span>
                      </div>
                      <p className="text-[#444444] leading-relaxed">
                        {activeService.whatHappensNext}
                      </p>
                    </div>
                  </div>

                  {/* Scope of Practice Tag Cloud */}
                  <div className="mb-8">
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2.5 tracking-wider">
                      {services.decisionLabels.scope}
                    </span>
                    <div className="flex wrap gap-2">
                      {activeService.scope.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white text-neutral-700 px-3 py-1 border border-neutral-200 font-sans hover:border-[#800000]/40 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Consultation Link for this specific service */}
                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-mono">
                    Direct Advocate Review · Saket Chamber
                  </span>

                  <motion.button
                    type="button"
                    onClick={() =>
                      onSelectServiceToConsult(
                        serviceIdToMatter[activeService.id] || activeService.title
                      )
                    }
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="group bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-6 py-3 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{services.ctaDiscuss}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Collapsible Accordion Cards with smooth animation */}
        <div className="lg:hidden space-y-4">
          {services.items.map((item) => {
            const isExpanded = activeServiceId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-white border transition-colors duration-200 overflow-hidden ${
                  isExpanded ? 'border-[#800000]' : 'border-neutral-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveServiceId(isExpanded ? '' : item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#800000]">
                      {item.number}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#111111]">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-neutral-400 shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-neutral-100 font-sans">
                        <p className="font-editorial text-sm text-[#800000] not-italic italic mb-2 mt-4">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-[#444444] leading-relaxed mb-5">
                          {item.shortDesc}
                        </p>

                        <div className="space-y-3 mb-5 text-xs">
                          <div className="bg-neutral-50 p-3 border border-neutral-200">
                            <span className="font-mono font-semibold text-[10px] uppercase text-[#800000] block mb-1">
                              {services.decisionLabels.whoItIsFor}
                            </span>
                            <p className="text-[#444444]">{item.whoItIsFor}</p>
                          </div>

                          <div className="bg-neutral-50 p-3 border border-neutral-200">
                            <span className="font-mono font-semibold text-[10px] uppercase text-[#800000] block mb-1">
                              {services.decisionLabels.problemSolved}
                            </span>
                            <p className="text-[#444444]">{item.problemSolved}</p>
                          </div>

                          <div className="bg-neutral-50 p-3 border border-neutral-200">
                            <span className="font-mono font-semibold text-[10px] uppercase text-[#800000] block mb-1">
                              {services.decisionLabels.whenToContact}
                            </span>
                            <p className="text-[#444444]">{item.whenToContact}</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            onSelectServiceToConsult(
                              serviceIdToMatter[item.id] || item.title
                            )
                          }
                          className="w-full bg-[#800000] active:bg-[#660000] text-white text-xs font-semibold uppercase tracking-wider py-3 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <span>{services.ctaDiscuss}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#EACEAA]" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
