import { useState } from 'react';
import { Locale } from './types';
import { contentData } from './content/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustClarification } from './components/TrustClarification';
import { Services } from './components/Services';
import { FeaturedBail } from './components/FeaturedBail';
import { Approach } from './components/Approach';
import { WhyWorkWith } from './components/WhyWorkWith';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Profile } from './components/Profile';
import { ConsultationForm } from './components/ConsultationForm';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [selectedMatter, setSelectedMatter] = useState<string>('Bail Matters');

  const content = contentData[locale];

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const scrollToConsultation = (matter?: string) => {
    if (matter) {
      setSelectedMatter(matter);
    }
    const consultationEl = document.getElementById('consultation');
    if (consultationEl) {
      const navOffset = 80;
      const elementPosition = consultationEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      const navOffset = 80;
      const elementPosition = servicesEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans">
      {/* Skip to main content landmark for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#800000] focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Global Sticky Navigation */}
      <Navbar
        content={content}
        locale={locale}
        onToggleLocale={toggleLocale}
        onNavigateToConsultation={() => scrollToConsultation()}
      />

      {/* Main Page Flow: Problem → Relevance → Expertise → Trust → Process → Action */}
      <main id="main-content" className="flex-grow">
        {/* 01: Hero Section */}
        <Hero
          content={content}
          onConsultClick={() => scrollToConsultation()}
          onExploreClick={scrollToServices}
        />

        {/* 02: Problem → Consequence → Solution Transformation */}
        <TrustClarification
          content={content}
          onConsultClick={() => scrollToConsultation()}
        />

        {/* 03: Decision-Making Services Interface (01-07) */}
        <Services
          content={content}
          onSelectServiceToConsult={(serviceTitle) => scrollToConsultation(serviceTitle)}
        />

        {/* 04: Featured Bail Matters Section */}
        <FeaturedBail
          content={content}
          onBailConsultClick={() => scrollToConsultation('Bail Matters')}
        />

        {/* 05: Practice Methodology: 4-Stage Approach */}
        <Approach
          content={content}
          onConsultClick={() => scrollToConsultation()}
        />

        {/* 06: Core Principles & Verified Differentiators */}
        <WhyWorkWith content={content} />

        {/* 07: About the Advocate (Philosophy & Chamber) */}
        <About
          content={content}
          onConsultClick={() => scrollToConsultation()}
        />

        {/* 08: Frequently Asked Questions (Accordion) */}
        <FAQ
          content={content}
          onConsultClick={() => scrollToConsultation()}
        />

        {/* 09: Personal Professional Profile */}
        <Profile
          content={content}
          onSpeakClick={() => scrollToConsultation()}
        />

        {/* 10: Primary Consultation & Lead Capture Section */}
        <ConsultationForm
          content={content}
          selectedMatter={selectedMatter}
          onSelectMatter={(m) => setSelectedMatter(m)}
        />
      </main>

      {/* Persistent Fixed WhatsApp Conversion Layer */}
      <WhatsAppCTA phone={content.brand.phone} />

      {/* Editorial Footer */}
      <Footer
        content={content}
        onNavigateToConsultation={() => scrollToConsultation()}
      />
    </div>
  );
}
