import React from 'react';
import { SiteContent } from '../content/content';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

interface TrustClarificationProps {
  content: SiteContent;
  onConsultClick: () => void;
}

export const TrustClarification: React.FC<TrustClarificationProps> = ({
  content,
  onConsultClick,
}) => {
  return (
    <section className="bg-white text-[#111111] py-16 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verified Facts Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-14 border-b border-neutral-200">
          {content.trustStrip.verifiedFacts.map((fact, index) => (
            <div key={index} className="flex flex-col border-l-2 border-[#111111] pl-4 sm:pl-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#444444] mb-1">
                {fact.label}
              </span>
              <span className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight mb-0.5">
                {fact.value}
              </span>
              <span className="text-xs text-[#444444] font-normal leading-snug">
                {fact.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Problem Recognition to Clarity Transformation */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: The Uncertainty / Questions (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 border border-neutral-200">
            <div className="flex items-center gap-2 mb-4 text-[#800000]">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                {content.trustStrip.questionsTitle}
              </span>
            </div>

            <div className="space-y-3.5">
              {content.trustStrip.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-neutral-800 text-sm sm:text-base font-medium py-1.5 border-b border-neutral-200/70 last:border-0"
                >
                  <span className="text-xs font-mono text-neutral-400 mt-1">0{idx + 1}</span>
                  <span className="italic font-serif text-lg text-neutral-900 font-normal">"{q}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Solution & Clarity Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 text-[#800000]">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                The Practical Solution
              </span>
            </div>

            <blockquote className="font-editorial-heading text-2xl sm:text-3xl lg:text-4xl text-[#111111] leading-snug mb-6 font-normal">
              "{content.trustStrip.clarityStatement}"
            </blockquote>

            <p className="text-[#444444] text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Legal concerns can feel overwhelming when compounded by procedural uncertainty. Advocate Anish focuses on untangling the factual record first, ensuring you have complete visibility over your legal position before any court filing or notice is initiated.
            </p>

            <div>
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#800000] hover:text-[#660000] border-b border-[#800000] pb-1 transition-colors group"
              >
                <span>Discuss Your Specific Legal Matter</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
