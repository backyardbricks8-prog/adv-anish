import React from 'react';
import { MessageCircle } from 'lucide-react';

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

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 print:hidden"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Advocate Anish on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#800000] hover:bg-[#660000] active:scale-95 text-white py-3 px-4 sm:px-5 rounded-full sm:rounded-none border border-[#800000] hover:border-[#EACEAA]/50 shadow-2xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000]"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider font-sans whitespace-nowrap">
          Chat with Advocate Anish
        </span>
      </a>
    </aside>
  );
};
