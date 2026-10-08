'use client';

import React, { useState } from 'react';
import { SiteContent } from '../content/content';
import { ArrowUpRight, ChevronDown, Check, Clock, UserCheck, ShieldAlert } from 'lucide-react';

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

  const { services } = content;
  const activeService = services.items.find((item) => item.id === activeServiceId) || services.items[0];

  return (
    <section id="services" className="bg-[#FBFBFA] py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#800000]"></span>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold">
              {services.eyebrow}
            </p>
          </div>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-tight mb-4">
            {services.headline}
          </h2>
          <p className="text-[#444444] text-base leading-relaxed">
            {services.intro}
          </p>
        </div>

        {/* Desktop: Two-Column Decision-Making Interface (5 cols list, 7 cols detailed decision briefing) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Selector Navigation (5 cols) */}
          <div className="lg:col-span-5 border border-neutral-200 bg-white divide-y divide-neutral-200">
            {services.items.map((item) => {
              const isActive = activeServiceId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveServiceId(item.id)}
                  className={`w-full text-left p-5 transition-all flex items-start justify-between gap-4 group ${
                    isActive
                      ? 'bg-neutral-900 text-white'
                      : 'hover:bg-neutral-50 text-[#111111]'
                  }`}
                  aria-selected={isActive}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs font-semibold mt-0.5 ${
                        isActive ? 'text-[#EACEAA]' : 'text-[#800000]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-semibold leading-snug transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-[#111111] group-hover:text-[#800000]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-1 font-normal ${
                          isActive ? 'text-neutral-300' : 'text-[#555555]'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono mt-1 ${
                      isActive ? 'text-[#EACEAA]' : 'text-neutral-400 group-hover:text-black'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Decision-Making Briefing (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm relative">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#800000] font-bold">
                  Practice Area {activeService.number}
                </span>
                <h3 className="font-editorial-heading text-2xl sm:text-3xl font-normal text-[#111111] mt-1">
                  {activeService.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#555555] border border-neutral-200 px-3 py-1 uppercase">
                Delhi NCR
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-8">
              {activeService.shortDesc}
            </p>

            {/* 4 Decision-Making Framework Blocks */}
            <div className="space-y-6 mb-8">
              {/* Who It Is For */}
              <div className="flex items-start gap-3.5 p-4 bg-neutral-50 border-l-2 border-neutral-900">
                <UserCheck className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 mb-1">
                    {services.decisionLabels.whoItIsFor}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {activeService.whoItIsFor}
                  </p>
                </div>
              </div>

              {/* Problem Solved */}
              <div className="flex items-start gap-3.5 p-4 bg-neutral-50 border-l-2 border-[#800000]">
                <ShieldAlert className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 mb-1">
                    {services.decisionLabels.problemSolved}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {activeService.problemSolved}
                  </p>
                </div>
              </div>

              {/* When To Contact & What Happens Next Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2 text-[#800000]">
                    <Clock className="w-3.5 h-3.5" />
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900">
                      {services.decisionLabels.whenToContact}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {activeService.whenToContact}
                  </p>
                </div>

                <div className="p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2 text-[#800000]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900">
                      {services.decisionLabels.whatHappensNext}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {activeService.whatHappensNext}
                  </p>
                </div>
              </div>
            </div>

            {/* Scope / Proceedings Checklist */}
            <div className="mb-8 pt-6 border-t border-neutral-200">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                {services.decisionLabels.scope}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                {activeService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision Conversion Action */}
            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onSelectServiceToConsult(serviceIdToMatter[activeService.id] || 'Bail Matters')}
                className="bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>{services.ctaDiscuss}</span>
                <ArrowUpRight className="w-4 h-4 text-[#EACEAA]" />
              </button>

              <span className="text-xs font-mono text-neutral-500">
                Direct Advocate Review
              </span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Clean Accordion Stacking */}
        <div className="lg:hidden space-y-4">
          {services.items.map((item) => {
            const isExpanded = activeServiceId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveServiceId(isExpanded ? '' : item.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#800000] mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#555555] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#800000]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-neutral-100 space-y-5 animate-in fade-in duration-200">
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    <div className="p-3 bg-neutral-50 border-l-2 border-neutral-900 text-xs text-neutral-800 space-y-1">
                      <span className="font-mono text-[10px] uppercase font-semibold text-[#800000] block">
                        {services.decisionLabels.whoItIsFor}
                      </span>
                      <p>{item.whoItIsFor}</p>
                    </div>

                    <div className="p-3 bg-neutral-50 border-l-2 border-[#800000] text-xs text-neutral-800 space-y-1">
                      <span className="font-mono text-[10px] uppercase font-semibold text-[#800000] block">
                        {services.decisionLabels.problemSolved}
                      </span>
                      <p>{item.problemSolved}</p>
                    </div>

                    <div className="text-xs text-neutral-700 space-y-2 pt-1">
                      <span className="font-mono text-[10px] uppercase font-semibold text-neutral-900 block">
                        {services.decisionLabels.scope}
                      </span>
                      {item.scope.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectServiceToConsult(serviceIdToMatter[item.id] || 'Bail Matters')}
                      className="w-full bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase py-3 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{services.ctaDiscuss}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#EACEAA]" />
                    </button>
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
