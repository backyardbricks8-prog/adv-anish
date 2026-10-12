'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface WhatsAppCTAProps {
  phone: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({ phone }) => {
  // Safe generic WhatsApp outbound link without sensitive form data or internal IDs
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(
    'Hello Advocate Anish, I would like to consult regarding a legal matter.'
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 print:hidden"
    >
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Advocate Anish on WhatsApp"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 16 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        className="group flex items-center gap-2.5 bg-[#800000] hover:bg-[#660000] text-white py-3 px-4 sm:px-5 rounded-full sm:rounded-none border border-[#800000] hover:border-[#EACEAA]/50 shadow-2xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000] cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0 transition-transform duration-200 group-hover:rotate-6" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider font-sans whitespace-nowrap">
          Chat with Advocate Anish
        </span>
      </motion.a>
    </aside>
  );
};
