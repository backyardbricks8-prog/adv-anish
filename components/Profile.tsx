'use client';

import React from 'react';
import { SiteContent } from '../content/content';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface ProfileProps {
  content: SiteContent;
  onSpeakClick: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ content, onSpeakClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="profile" className="bg-white py-20 sm:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#111111] text-white p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden shadow-xl">
            {/* Background accent line */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-[#800000]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Professional Profile Photo (4 cols) */}
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="border border-white/20 p-2 bg-neutral-900 shadow-2xl overflow-hidden">
                    <img
                      src="/assets/profile_opt.webp"
                      alt="Adv. Anish Kumar, Advocate"
                      width={1000}
                      height={1333}
                      className="w-full h-auto object-cover aspect-[3/4] filter contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#800000] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 shadow-md">
                    Advocate
                  </div>
                </div>
              </div>

              {/* Right: Verified Professional Profile Details (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1px] bg-[#EACEAA]"></span>
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#EACEAA] font-semibold">
                    {content.profile.label}
                  </p>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-1">
                  {content.profile.name}
                </h2>

                <p className="text-[#EACEAA] font-mono text-xs uppercase tracking-widest mb-6">
                  {content.profile.designation}
                </p>

                <p className="text-neutral-200 text-base sm:text-lg font-editorial not-italic italic mb-6">
                  "{content.profile.headline}"
                </p>

                <p className="text-neutral-300 text-sm sm:text-base leading-[1.6] mb-8 max-w-2xl font-sans">
                  {content.profile.description}
                </p>

                {/* Verified Information Grid with hover transitions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8 text-xs font-sans">
                  <div className="flex items-start gap-3 p-2 rounded-sm hover:bg-white/5 transition-colors">
                    <MapPin className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">
                        {content.profile.chamberTitle}
                      </span>
                      <span className="text-white font-medium">
                        {content.profile.chamberValue}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-sm hover:bg-white/5 transition-colors">
                    <Phone className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">
                        Direct Chamber Contact
                      </span>
                      <a
                        href={`tel:${content.brand.phone}`}
                        className="text-white hover:text-[#EACEAA] font-medium transition-colors"
                      >
                        {content.brand.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-sm hover:bg-white/5 transition-colors">
                    <Mail className="w-4 h-4 text-[#EACEAA] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">
                        Verified Email
                      </span>
                      <a
                        href={`mailto:${content.brand.email}`}
                        className="text-white hover:text-[#EACEAA] font-medium transition-colors"
                      >
                        {content.brand.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-sm hover:bg-white/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <div>
                      <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">
                        {content.profile.jurisdictionTitle}
                      </span>
                      <span className="text-white font-medium">
                        {content.profile.jurisdictionValue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <motion.button
                    type="button"
                    onClick={onSpeakClick}
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="group bg-[#800000] hover:bg-[#660000] text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 transition-colors inline-flex items-center gap-2 border border-[#800000] hover:border-[#EACEAA]/50 shadow-sm cursor-pointer"
                  >
                    <span>{content.profile.cta}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#EACEAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
