import { Locale, ServiceItem, ApproachStep, ValuePrinciple } from '../types';

export interface SiteContent {
  brand: {
    name: string;
    advocateTitle: string;
    tagline: string;
    courtChamber: string;
    phone: string;
    displayPhone: string;
    email: string;
    jurisdiction: string;
  };
  nav: {
    about: string;
    services: string;
    approach: string;
    profile: string;
    contact: string;
    ctaButton: string;
    switchLang: string;
  };
  hero: {
    label: string;
    headline: string;
    supporting: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watermark: string;
    badge: string;
  };
  trustStrip: {
    questionsTitle: string;
    questions: string[];
    clarityStatement: string;
    verifiedFacts: { label: string; value: string; detail: string }[];
  };
  about: {
    label: string;
    headline: string;
    paragraphs: string[];
    pillars: { title: string; desc: string }[];
    cta: string;
  };
  services: {
    label: string;
    headline: string;
    intro: string;
    ctaDiscuss: string;
    items: ServiceItem[];
  };
  featuredBail: {
    label: string;
    headline: string;
    subhead: string;
    intro: string;
    categories: { title: string; desc: string }[];
    statutoryNote: string;
    cta: string;
  };
  approach: {
    label: string;
    headline: string;
    intro: string;
    steps: ApproachStep[];
  };
  principles: {
    label: string;
    headline: string;
    intro: string;
    items: ValuePrinciple[];
  };
  profile: {
    label: string;
    name: string;
    designation: string;
    headline: string;
    description: string;
    chamberTitle: string;
    chamberValue: string;
    jurisdictionTitle: string;
    jurisdictionValue: string;
    cta: string;
  };
  consultation: {
    label: string;
    headline: string;
    subhead: string;
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      matterLabel: string;
      matterPlaceholder: string;
      descLabel: string;
      descPlaceholder: string;
      privacyConsent: string;
      submitButton: string;
      submittingButton: string;
      successTitle: string;
      successMessage: string;
      newInquiryButton: string;
      orDirectContact: string;
    };
    contactCard: {
      title: string;
      chamberLabel: string;
      chamberAddress: string;
      phoneLabel: string;
      emailLabel: string;
      availabilityLabel: string;
      availabilityValue: string;
    };
  };
  footer: {
    brandName: string;
    descriptor: string;
    disclaimer: string;
    copyright: string;
  };
}

export const contentData: Record<Locale, SiteContent> = {
  en: {
    brand: {
      name: 'ADVOCATE ANISH',
      advocateTitle: 'Adv. Anish Kumar',
      tagline: 'Independent Legal Practice',
      courtChamber: '271 Saket Court Complex, New Delhi 110017',
      phone: '+919204463290',
      displayPhone: '+91 920-446-3290',
      email: 'anishkumarjha17@gmail.com',
      jurisdiction: 'Delhi NCR',
    },
    nav: {
      about: 'About',
      services: 'Services',
      approach: 'Approach',
      profile: 'Advocate',
      contact: 'Consultation',
      ctaButton: 'Consult an Advocate',
      switchLang: 'हिन्दी',
    },
    hero: {
      label: 'ADVOCATE • DELHI NCR',
      headline: 'When the matter is serious, your legal representation should be stronger.',
      supporting: 'Focused legal guidance and representation for individuals and businesses navigating important legal matters across Delhi NCR.',
      ctaPrimary: 'Consult an Advocate',
      ctaSecondary: 'Explore Services',
      watermark: 'ADVOCACY',
      badge: 'Independent Practice · Delhi NCR',
    },
    trustStrip: {
      questionsTitle: 'Navigating Legal Uncertainty',
      questions: [
        'What are my options?',
        'What should I do first?',
        'What happens if I wait?',
        'Do I need legal representation?',
      ],
      clarityStatement:
        'You do not need more legal jargon. You need to understand the situation, identify the available options, and decide on the appropriate next step.',
      verifiedFacts: [
        {
          label: 'Primary Jurisdiction',
          value: 'Delhi NCR',
          detail: 'District Courts & High Court of Delhi',
        },
        {
          label: 'Chamber Location',
          value: 'Saket Court',
          detail: '271 Saket Court Complex, New Delhi',
        },
        {
          label: 'Representation',
          value: 'Independent',
          detail: 'Direct counsel & personal case attention',
        },
        {
          label: 'Professional Duty',
          value: 'Discreet',
          detail: 'Strict statutory client confidentiality',
        },
      ],
    },
    about: {
      label: 'ABOUT THE ADVOCATE',
      headline: 'Legal representation begins with understanding the matter.',
      paragraphs: [
        'Effective legal assistance does not begin with rigid assumptions or prefabricated templates. It begins with a thorough examination of the actual facts, the governing circumstances, and the specific statutory provisions at play.',
        'As an independent advocate practicing in Delhi NCR, I provide direct, focused legal guidance. When you consult my practice, you speak directly with counsel who personally examines your case material, identifies realistic legal options, and formulates a disciplined strategy tailored to your situation.',
        'Whether addressing an urgent bail matter, resolving a complex civil dispute, or structuring legal safeguards for a growing enterprise, I prioritize clarity, professional discretion, and decisive legal execution.',
      ],
      pillars: [
        {
          title: 'Fact-First Assessment',
          desc: 'Uncompromising attention to documents, timeline, and evidentiary reality before proposing any legal step.',
        },
        {
          title: 'Direct Personal Counsel',
          desc: 'Your matter receives my direct intellectual focus rather than being passed between multiple layers.',
        },
        {
          title: 'Absolute Professional Discretion',
          desc: 'All communications and documents are protected under strict standards of advocate-client confidentiality.',
        },
      ],
      cta: 'Consult an Advocate',
    },
    services: {
      label: 'LEGAL SERVICES',
      headline: 'Focused representation across key areas of law.',
      intro: 'Providing structured legal counsel, court representation, and advisory services tailored to individual and commercial matters across Delhi NCR.',
      ctaDiscuss: 'Discuss Your Matter',
      items: [
        {
          id: 'bail-matters',
          number: '01',
          title: 'Bail Matters',
          shortDesc: 'Urgent and strategic representation for all categories of bail applications across Sessions Courts and the High Court of Delhi.',
          scope: [
            'Anticipatory bail applications',
            'Regular bail hearings',
            'Interim bail and urgent relief',
            'Sessions Court matters',
            'High Court bail petitions',
          ],
        },
        {
          id: 'civil-criminal',
          number: '02',
          title: 'Civil & Criminal Matters',
          shortDesc: 'Thorough case preparation and assertive advocacy in civil litigation, property disputes, and criminal defence.',
          scope: [
            'Civil suits & injunction proceedings',
            'Property & title disputes',
            'Money recovery suits',
            'Criminal defence proceedings',
            'Fraud, cheating & economic offences',
            'Domestic violence legal matters',
            'Cyber crime complaints & defence',
          ],
        },
        {
          id: 'business-registration',
          number: '03',
          title: 'Business Registration',
          shortDesc: 'End-to-end legal structuring, incorporation, and commercial registrations for founders, partnerships, and growing companies.',
          scope: [
            'Private Limited & OPC incorporation',
            'LLP & Partnership registrations',
            'GST registration & tax setup',
            'MSME / Udyam registration',
            'Shop & Establishment trade licences',
          ],
        },
        {
          id: 'trademark-ip',
          number: '04',
          title: 'Trademark & Intellectual Property',
          shortDesc: 'Protecting commercial identity and proprietary assets through filing, prosecution, hearing representation, and enforcement.',
          scope: [
            'Trademark search & filing',
            'Examination reply & objections',
            'Trademark hearings representation',
            'Renewals & maintenance',
            'Copyright registration',
            'Design registration & patent matters',
          ],
        },
        {
          id: 'traffic-challan',
          number: '05',
          title: 'Traffic Challan Matters',
          shortDesc: 'Statutory legal assistance for resolving pending, disputed, and compoundable traffic challans before virtual and regular courts.',
          scope: [
            'Disputed challan representation',
            'Virtual court challan resolution',
            'Commercial vehicle impound matters',
            'Special Lok Adalat challan disposal',
          ],
        },
        {
          id: 'compliance',
          number: '06',
          title: 'Compliance',
          shortDesc: 'Ongoing statutory governance and regulatory compliance to keep businesses protected from penalties and legal exposure.',
          scope: [
            'ROC annual filings & secretarial compliance',
            'GST statutory returns',
            'Labour law compliance advisory',
            'Corporate governance reviews',
          ],
        },
        {
          id: 'legal-documentation',
          number: '07',
          title: 'Legal Documentation',
          shortDesc: 'Drafting and vetting of binding contracts, formal legal notices, commercial agreements, and certified instrument copies.',
          scope: [
            'Commercial contracts & service agreements',
            'Employment agreements & policies',
            'Partnership deeds & founder arrangements',
            'Vendor agreements & supply contracts',
            'Non-Disclosure Agreements (NDAs) & MOUs',
            'Statutory legal notices & responses',
            'Certified property document verification',
          ],
        },
      ],
    },
    featuredBail: {
      label: 'URGENT LEGAL COUNSEL',
      headline: 'When time matters, clarity matters more.',
      subhead: 'Immediate, disciplined assessment for bail proceedings across Delhi NCR.',
      intro: 'In urgent criminal matters, an initial misstep or delayed action can compound vulnerability. Effective advocacy requires immediate verification of the FIR, examination of allegations, and precise invocation of statutory protections before Sessions Courts and the High Court.',
      categories: [
        {
          title: 'Anticipatory Bail',
          desc: 'Pre-arrest protection seeking statutory relief against apprehensions of arrest in non-bailable matters.',
        },
        {
          title: 'Regular Bail',
          desc: 'Formal applications post-custody securing release subject to statutory conditions and procedural merits.',
        },
        {
          title: 'Interim & Medical Bail',
          desc: 'Time-sensitive petitions for immediate provisional relief on humanitarian, medical, or urgent family grounds.',
        },
        {
          title: 'Court Representation',
          desc: 'Appearance and advocacy before Chief Metropolitan Magistrates, Sessions Courts, and the High Court of Delhi.',
        },
      ],
      statutoryNote: 'Note: As an advocate bound by professional ethics, no outcome or instant release can ever be guaranteed. Every matter is argued strictly upon its legal merits, evidentiary record, and prevailing statutory provisions.',
      cta: 'Discuss Your Matter',
    },
    approach: {
      label: 'PRACTICE METHODOLOGY',
      headline: 'A straightforward approach to complex legal matters.',
      intro: 'A rigorous four-stage framework designed to replace uncertainty with clarity, strategic preparation, and decisive execution.',
      steps: [
        {
          number: '01',
          title: 'Understand',
          description: 'Facts, circumstances, and objectives.',
          details: 'We begin with an exhaustive examination of the factual chronology, underlying documents, and the specific objectives of the client.',
        },
        {
          number: '02',
          title: 'Assess',
          description: 'Legal position and available options.',
          details: 'Analyzing governing statutes, precedent, procedural hurdles, and realistic legal remedies available under Indian law.',
        },
        {
          number: '03',
          title: 'Strategize',
          description: 'Practical legal approach.',
          details: 'Formulating a clear course of action—outlining immediate steps, required filings, risk considerations, and anticipated timelines.',
        },
        {
          number: '04',
          title: 'Represent',
          description: 'Appropriate legal representation.',
          details: 'Providing focused advocacy before courts, judicial tribunals, statutory bodies, or during bilateral negotiations.',
        },
      ],
    },
    principles: {
      label: 'PRACTICE STANDARDS',
      headline: 'Why Clients Work With Advocate Anish',
      intro: 'Built on four non-negotiable principles of independent advocacy.',
      items: [
        {
          number: '01',
          title: 'Personal Attention',
          description: 'Every accepted matter receives focused individual attention. You work directly with counsel who knows every nuance of your case.',
        },
        {
          number: '02',
          title: 'Clear Communication',
          description: 'Legal frameworks, realistic options, and procedural steps are explained in transparent, understandable language without needless jargon.',
        },
        {
          number: '03',
          title: 'Strategic Approach',
          description: 'Rigorous assessment anchored in the matter’s specific facts rather than formulaic templates or superficial assumptions.',
        },
        {
          number: '04',
          title: 'Professional Discretion',
          description: 'All sensitive information, documents, and discussions are held in absolute confidentiality under strict professional standards.',
        },
      ],
    },
    profile: {
      label: 'ADVOCATE PROFILE',
      name: 'Adv. Anish Kumar',
      designation: 'Advocate · Independent Practice',
      headline: 'Direct legal counsel grounded in statutory precision.',
      description: 'Adv. Anish Kumar operates an independent legal practice in Delhi NCR, providing guidance and representation across bail proceedings, civil disputes, criminal defence, business structuring, and intellectual property. His practice is characterized by thorough case research, direct client consultation, and practical legal strategy.',
      chamberTitle: 'Chamber Address',
      chamberValue: '271 Saket Court Complex, New Delhi 110017',
      jurisdictionTitle: 'Primary Jurisdiction',
      jurisdictionValue: 'District Courts across Delhi NCR & High Court of Delhi',
      cta: 'Speak With Advocate Anish',
    },
    consultation: {
      label: 'DIRECT CONSULTATION',
      headline: "Have a legal matter? Let's discuss it.",
      subhead: 'Share the basic details of your matter and get in touch for an initial discussion about the appropriate next step.',
      form: {
        fullNameLabel: 'Full Name',
        fullNamePlaceholder: 'Enter your full name',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+91 XXXXX XXXXX',
        emailLabel: 'Email Address',
        emailPlaceholder: 'name@example.com',
        matterLabel: 'Legal Matter Category',
        matterPlaceholder: 'Select relevant category',
        descLabel: 'Brief Description',
        descPlaceholder: 'Provide a concise overview of the facts or legal question (avoid uploading sensitive files here)...',
        privacyConsent: 'I understand this inquiry is for an initial discussion regarding legal representation and is treated with professional confidentiality.',
        submitButton: 'Request a Consultation',
        submittingButton: 'Transmitting Details...',
        successTitle: 'Consultation Request Received',
        successMessage: 'Your inquiry has been securely received. Advocate Anish will review the details and reach out to you shortly to schedule an initial discussion.',
        newInquiryButton: 'Submit Another Inquiry',
        orDirectContact: 'Need immediate contact? Reach Advocate Anish directly:',
      },
      contactCard: {
        title: 'Chamber & Direct Details',
        chamberLabel: 'Court Chamber',
        chamberAddress: '271 Saket Court Complex, New Delhi 110017',
        phoneLabel: 'Direct Phone',
        emailLabel: 'Email Address',
        availabilityLabel: 'Consultation Hours',
        availabilityValue: 'By prior scheduled appointment (Mon – Sat)',
      },
    },
    footer: {
      brandName: 'ADVOCATE ANISH',
      descriptor: 'Independent Legal Practice · Delhi NCR',
      disclaimer: 'As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This platform is maintained strictly for informational purposes to provide basic facts regarding the independent practice of Adv. Anish Kumar. The information herein does not constitute legal advice or create an advocate-client relationship.',
      copyright: '© 2026 Advocate Anish. All rights reserved.',
    },
  },

  hi: {
    brand: {
      name: 'एडवोकेट अनीश',
      advocateTitle: 'एडवोकेट अनीश कुमार',
      tagline: 'स्वतंत्र विधिक परामर्श व वकालत',
      courtChamber: '271 साकेत कोर्ट कॉम्प्लेक्स, नई दिल्ली 110017',
      phone: '+919204463290',
      displayPhone: '+91 920-446-3290',
      email: 'anishkumarjha17@gmail.com',
      jurisdiction: 'दिल्ली एनसीआर',
    },
    nav: {
      about: 'परिचय',
      services: 'विधिक सेवाएं',
      approach: 'कार्यप्रणाली',
      profile: 'अधिवक्ता',
      contact: 'परामर्श',
      ctaButton: 'वकील से परामर्श लें',
      switchLang: 'English',
    },
    hero: {
      label: 'अधिवक्ता • दिल्ली एनसीआर',
      headline: 'जब मामला गंभीर हो, तो आपका कानूनी पक्ष और भी मजबूत होना चाहिए।',
      supporting: 'दिल्ली एनसीआर में महत्वपूर्ण कानूनी मामलों में व्यक्तियों और व्यवसायों के लिए केंद्रित विधिक मार्गदर्शन और अदालत में प्रभावी प्रतिनिधित्व।',
      ctaPrimary: 'वकील से परामर्श लें',
      ctaSecondary: 'सेवाएं देखें',
      watermark: 'ADVOCACY',
      badge: 'स्वतंत्र वकालत · दिल्ली एनसीआर',
    },
    trustStrip: {
      questionsTitle: 'कानूनी असमंजस का समाधान',
      questions: [
        'मेरे पास क्या विकल्प हैं?',
        'मुझे सबसे पहले क्या कदम उठाना चाहिए?',
        'यदि मैंने देरी की तो क्या परिणाम होंगे?',
        'क्या मुझे कानूनी प्रतिनिधित्व की आवश्यकता है?',
      ],
      clarityStatement:
        'आपको जटिल कानूनी शब्दावली की नहीं, बल्कि वास्तविक स्थिति को समझने, उपलब्ध विकल्पों की पहचान करने और सही अगले कदम तय करने की आवश्यकता है।',
      verifiedFacts: [
        {
          label: 'कार्यक्षेत्र',
          value: 'दिल्ली एनसीआर',
          detail: 'जिला न्यायालय एवं दिल्ली उच्च न्यायालय',
        },
        {
          label: 'चैम्बर पता',
          value: 'साकेत कोर्ट',
          detail: '271 साकेत कोर्ट कॉम्प्लेक्स, नई दिल्ली',
        },
        {
          label: 'वकालत स्वरूप',
          value: 'व्यक्तिगत',
          detail: 'प्रत्यक्ष परामर्श एवं प्रत्येक मामले पर विशेष ध्यान',
        },
        {
          label: 'व्यावसायिक गोपनीयता',
          value: 'पूर्ण सुरक्षा',
          detail: 'कानूनन सुरक्षित एवं अत्यंत गोपनीय संवाद',
        },
      ],
    },
    about: {
      label: 'अधिवक्ता का परिचय',
      headline: 'प्रभावी कानूनी प्रतिनिधित्व मामले की गहरी समझ से शुरू होता है।',
      paragraphs: [
        'सार्थक कानूनी सहायता किसी पूर्व-निर्धारित सांचे या सतही मान्यताओं से शुरू नहीं होती। यह वास्तविक तथ्यों, परिस्थितियों और लागू वैधानिक प्रावधानों की सूक्ष्म जांच से आरंभ होती है।',
        'दिल्ली एनसीआर में एक स्वतंत्र अधिवक्ता के रूप में, मैं प्रत्यक्ष और ठोस कानूनी मार्गदर्शन प्रदान करता हूं। जब आप मुझसे संपर्क करते हैं, तो आप सीधे उस अधिवक्ता से बात करते हैं जो आपके मामले का स्वयं अध्ययन करता है और व्यावहारिक रणनीति तैयार करता है।',
        'चाहे वह जमानत का त्वरित मामला हो, कोई दीवानी या फौजदारी विवाद हो, अथवा किसी व्यवसाय के लिए कानूनी अनुबंध तैयार करना हो—मेरी प्राथमिकता स्पष्टता, गोपनीयता और प्रभावी पैरवी है।',
      ],
      pillars: [
        {
          title: 'तथ्यों का गहन विश्लेषण',
          desc: 'कोई भी कानूनी कदम उठाने से पहले दस्तावेजों, समय-रेखा और साक्ष्यों की निष्पक्ष जांच।',
        },
        {
          title: 'प्रत्यक्ष व्यक्तिगत ध्यान',
          desc: 'आपके मामले पर सीधे मेरा बौद्धिक और कानूनी ध्यान रहता है।',
        },
        {
          title: 'व्यावसायिक गोपनीयता',
          desc: 'सभी विधिक संवाद और दस्तावेज अधिवक्ता-मुवक्किल गोपनीयता के तहत पूर्णतः सुरक्षित रहते हैं।',
        },
      ],
      cta: 'वकील से परामर्श लें',
    },
    services: {
      label: 'विधिक सेवाएं',
      headline: 'प्रमुख कानूनी क्षेत्रों में केंद्रित पैरवी और मार्गदर्शन।',
      intro: 'दिल्ली एनसीआर में व्यक्तिगत और व्यावसायिक मामलों के लिए पारदर्शी विधिक सलाह, अदालत में पैरवी और कानूनी दस्तावेज सेवाएं।',
      ctaDiscuss: 'मामले पर चर्चा करें',
      items: [
        {
          id: 'bail-matters',
          number: '01',
          title: 'जमानत (Bail) संबंधी मामले',
          shortDesc: 'सत्र न्यायालय (Sessions Court) और दिल्ली उच्च न्यायालय में सभी प्रकार की जमानत याचिकाओं की त्वरित पैरवी।',
          scope: [
            'अग्रिम जमानत याचिका (Anticipatory Bail)',
            'नियमित जमानत (Regular Bail)',
            'अंतरिम जमानत एवं आपातकालीन राहत',
            'सत्र न्यायालय में सुनवाई',
            'उच्च न्यायालय में जमानत याचिकाएं',
          ],
        },
        {
          id: 'civil-criminal',
          number: '02',
          title: 'दीवानी एवं फौजदारी मामले',
          shortDesc: 'दीवानी मुकदमों, संपत्ति विवादों, वसूली और आपराधिक बचाव में संपूर्ण तैयारी व अदालत में पैरवी।',
          scope: [
            'दीवानी मुकदमे एवं स्थगनादेश (Injunction)',
            'संपत्ति व मालिकाना हक संबंधी विवाद',
            'धन वसूली के वाद (Recovery Suits)',
            'आपराधिक मुकदमों में बचाव',
            'धोखाधड़ी, गबन एवं आर्थिक अपराध',
            'घरेलू हिंसा मामले',
            'साइबर अपराध शिकायतें एवं बचाव',
          ],
        },
        {
          id: 'business-registration',
          number: '03',
          title: 'व्यवसाय एवं कंपनी पंजीकरण',
          shortDesc: 'उद्यमियों, साझेदारी फर्मों और कंपनियों के लिए विधिक संरचना और पंजीकरण कार्य।',
          scope: [
            'प्राइवेट लिमिटेड एवं ओपीसी कंपनी गठन',
            'एलएलपी व साझेदारी फर्म पंजीकरण',
            'जीएसटी पंजीकरण एवं कर संरचना',
            'एमएसएमई / उद्यम पंजीकरण',
            'ट्रेड लाइसेंस एवं दुकान स्थापना अनुमति',
          ],
        },
        {
          id: 'trademark-ip',
          number: '04',
          title: 'ट्रेडमार्क एवं बौद्धिक संपदा',
          shortDesc: 'व्यावसायिक पहचान और बौद्धिक संपदा की सुरक्षा, आवेदन, आपत्तियों का उत्तर व सुनवाई।',
          scope: [
            'ट्रेडमार्क सर्च एवं आवेदन',
            'ट्रेडमार्क परीक्षा रिपोर्ट का उत्तर ও आपत्तियां',
            'ट्रेडमार्क सुनवाई में प्रतिनिधित्व',
            'नवीनीकरण एवं अनुरक्षण',
            'कॉपीराइट एवं डिजाइन पंजीकरण',
            'पेटेंट संबंधी प्राथमिक सहायता',
          ],
        },
        {
          id: 'traffic-challan',
          number: '05',
          title: 'ट्रैफिक चालान संबंधी मामले',
          shortDesc: 'वर्चुअल और नियमित अदालतों में लंबित, विवादित और शमनीय (Compoundable) चालानों का विधिक समाधान।',
          scope: [
            'विवादित चालानों का अदालती निस्तारण',
            'वर्चुअल कोर्ट चालान प्रक्रिया',
            'वाहन जब्ती संबंधी मामले',
            'विशेष लोक अदालत में चालान निस्तारण',
          ],
        },
        {
          id: 'compliance',
          number: '06',
          title: 'वैधानिक अनुपालन (Compliance)',
          shortDesc: 'कंपनियों और व्यवसायों को जुर्माने व कानूनी उलझनों से बचाने के लिए निरंतर विधिक अनुपालन।',
          scope: [
            'आरओसी वार्षिक फाइलिंग व सेक्रेटेरियल कार्य',
            'जीएसटी विधिक रिटर्न',
            'श्रम कानून अनुपालन सलाह',
            'कॉरपोरेट गवर्नेंस समीक्षा',
          ],
        },
        {
          id: 'legal-documentation',
          number: '07',
          title: 'विधिक दस्तावेज एवं संविदा (Contracts)',
          shortDesc: 'कानूनी रूप से सुरक्षित अनुबंधों, समझौतों, लीगल नोटिसों और महत्वपूर्ण विलेखों का प्रारूपण।',
          scope: [
            'व्यावसायिक संविदाएं व सेवा अनुबंध',
            'रोजगार अनुबंध एवं नीतियां',
            'पार्टनरशिप डीड एवं संस्थापक समझौते',
            'वेंडर एग्रीमेंट एवं आपूर्ति अनुबंध',
            'गोपनीयता समझौते (NDA) व सहमति पत्र (MOU)',
            'वैधानिक लीगल नोटिस एवं उनके उत्तर',
            'प्रमाणित संपत्ति दस्तावेजों का सत्यापन',
          ],
        },
      ],
    },
    featuredBail: {
      label: 'आपातकालीन कानूनी सहायता',
      headline: 'जब समय महत्वपूर्ण हो, तो स्पष्टता और भी अधिक आवश्यक होती है।',
      subhead: 'दिल्ली एनसीआर में जमानत की कार्यवाही के लिए त्वरित और संयमित विधिक मूल्यांकन।',
      intro: 'आपराधिक मामलों में एक गलत कदम या अनावश्यक देरी स्थिति को बिगाड़ सकती है। प्रभावी पैरवी के लिए प्राथमिकी (FIR) का तुरंत अध्ययन, आरोपों का विश्लेषण और संबंधित अदालत में सटीक वैधानिक प्रावधानों के तहत तर्क प्रस्तुत करना आवश्यक है।',
      categories: [
        {
          title: 'अग्रिम जमानत (Anticipatory Bail)',
          desc: 'गैर-जमानती मामलों में गिरफ्तारी की आशंका के विरुद्ध अग्रिम विधिक संरक्षण हेतु आवेदन।',
        },
        {
          title: 'नियमित जमानत (Regular Bail)',
          desc: 'हिरासत के उपरांत वैधानिक शर्तों और मामले के तथ्यों के आधार पर रिहाई हेतु याचिका।',
        },
        {
          title: 'अंतरिम एवं चिकित्सकीय जमानत',
          desc: 'मानवीय, गंभीर चिकित्सा या पारिवारिक आपातकाल के आधार पर तात्कालिक अस्थायी राहत।',
        },
        {
          title: 'अदालती प्रतिनिधित्व',
          desc: 'मुख्य मेट्रोपॉलिटन मजिस्ट्रेट, सत्र न्यायालय एवं दिल्ली उच्च न्यायालय में प्रत्यक्ष पैरवी।',
        },
      ],
      statutoryNote: 'नोट: बार काउंसिल ऑफ इंडिया के नियमों के अनुसार किसी परिणाम या त्वरित रिहाई की पूर्व-गारंटी नहीं दी जा सकती। प्रत्येक मामला उसके वास्तविक कानूनी गुण-दोषों और साक्ष्यों पर ही निर्भर करता है।',
      cta: 'मामले पर चर्चा करें',
    },
    approach: {
      label: 'कार्यप्रणाली',
      headline: 'जटिल कानूनी मामलों के प्रति एक सीधी और स्पष्ट रणनीति।',
      intro: 'अनिश्चितता को समाप्त कर स्पष्टता, ठोस तैयारी और प्रभावी निष्पादन के लिए चार-चरणीय कार्यपद्धति।',
      steps: [
        {
          number: '01',
          title: 'समझें (Understand)',
          description: 'तथ्य, परिस्थितियां और उद्देश्य।',
          details: 'मामले की कालक्रमिक घटनाओं, उपलब्ध दस्तावेजों और मुवक्किल के वास्तविक लक्ष्यों का गहन अध्ययन।',
        },
        {
          number: '02',
          title: 'मूल्यांकन (Assess)',
          description: 'कानूनी स्थिति और उपलब्ध विकल्प।',
          details: 'भारतीय कानून, न्यायिक नज़ीरों और प्रक्रियात्मक सीमाओं के परिप्रेक्ष्य में उपलब्ध विधिक उपचारों का विश्लेषण।',
        },
        {
          number: '03',
          title: 'रणनीति (Strategize)',
          description: 'व्यावहारिक कानूनी दृष्टिकोण।',
          details: 'अदालती दस्तावेजों का प्रारूपण, अपेक्षित समय-सीमा और जोखिमों को ध्यान में रखते हुए कार्य-योजना तैयार करना।',
        },
        {
          number: '04',
          title: 'प्रतिनिधित्व (Represent)',
          description: 'अदालत में सटीक पैरवी।',
          details: 'संबंधित न्यायालयों, अधिकरणों या प्राधिकारियों के समक्ष आपके पक्ष की सशक्त और प्रभावी प्रस्तुति।',
        },
      ],
    },
    principles: {
      label: 'वकालत के सिद्धांत',
      headline: 'एडवोकेट अनीश के साथ कार्य करने के मुख्य आधार',
      intro: 'स्वतंत्र विधिक वकालत के चार अपरिवर्तनीय मूल्य।',
      items: [
        {
          number: '01',
          title: 'व्यक्तिगत ध्यान',
          description: 'स्वीकार किए गए प्रत्येक मामले पर सीधा व्यक्तिगत ध्यान। आप सीधे उस वकील से विमर्श करते हैं जो आपके मामले को पूर्णतः जानता है।',
        },
        {
          number: '02',
          title: 'पारदर्शी संवाद',
          description: 'कानूनी जटिलताओं और संभावित कदमों को सरल व स्पष्ट भाषा में समझाना, ताकि आप सही निर्णय ले सकें।',
        },
        {
          number: '03',
          title: 'रणनीतिक दृष्टिकोण',
          description: 'मामले के विशिष्ट तथ्यों पर आधारित ठोस रणनीति, न कि सामान्य सांचों पर आधारित कार्य।',
        },
        {
          number: '04',
          title: 'व्यावसायिक गोपनीयता',
          description: 'आपकी समस्त निजी जानकारी, दस्तावेज और बातचीत बार काउंसिल के कठोरतम गोपनीयता नियमों से सुरक्षित हैं।',
        },
      ],
    },
    profile: {
      label: 'अधिवक्ता विवरण',
      name: 'एडवोकेट अनीश कुमार',
      designation: 'अधिवक्ता · स्वतंत्र विधिक कार्यप्रणाली',
      headline: 'वैधानिक शुद्धता और व्यावहारिक दृष्टिकोण पर आधारित वकालत।',
      description: 'एडवोकेट अनीश कुमार दिल्ली एनसीआर में एक स्वतंत्र कानूनी प्रैक्टिस संचालित करते हैं। वे जमानत मामलों, दीवानी विवादों, आपराधिक बचाव, कंपनी संरचना और ट्रेडमार्क के क्षेत्र में परामर्श और अदालती प्रतिनिधित्व प्रदान करते हैं।',
      chamberTitle: 'चैम्बर का पता',
      chamberValue: '271 साकेत कोर्ट कॉम्प्लेक्स, नई दिल्ली 110017',
      jurisdictionTitle: 'प्राथमिक कार्यक्षेत्र',
      jurisdictionValue: 'दिल्ली एनसीआर के जिला न्यायालय एवं दिल्ली उच्च न्यायालय',
      cta: 'एडवोकेट अनीश से बात करें',
    },
    consultation: {
      label: 'प्रत्यक्ष परामर्श',
      headline: 'क्या आपका कोई कानूनी मामला है? आइए चर्चा करें।',
      subhead: 'अपने मामले का संक्षिप्त विवरण साझा करें और आगे के उचित कदम के बारे में प्रारंभिक विमर्श हेतु संपर्क करें।',
      form: {
        fullNameLabel: 'पूरा नाम',
        fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
        phoneLabel: 'फ़ोन नंबर',
        phonePlaceholder: '+91 XXXXX XXXXX',
        emailLabel: 'ईमेल पता',
        emailPlaceholder: 'name@example.com',
        matterLabel: 'कानूनी मामले का प्रकार',
        matterPlaceholder: 'संबंधित विषय चुनें',
        descLabel: 'संक्षिप्त विवरण',
        descPlaceholder: 'मामले के तथ्यों या कानूनी प्रश्न का संक्षिप्त विवरण दें...',
        privacyConsent: 'मैं समझता/समझती हूं कि यह प्रारंभिक विमर्श कानूनी प्रतिनिधित्व के संदर्भ में है और पूर्ण व्यावसायिक गोपनीयता के अधीन है।',
        submitButton: 'परामर्श का अनुरोध करें',
        submittingButton: 'विवरण भेजा जा रहा है...',
        successTitle: 'परामर्श अनुरोध प्राप्त हुआ',
        successMessage: 'आपका विवरण सुरक्षित रूप से प्राप्त हो गया है। एडवोकेट अनीश मामले का अवलोकन कर शीघ्र ही आपसे संपर्क करेंगे।',
        newInquiryButton: 'एक और अनुरोध भेजें',
        orDirectContact: 'त्वरित संपर्क की आवश्यकता है? सीधे संपर्क करें:',
      },
      contactCard: {
        title: 'चैम्बर एवं संपर्क विवरण',
        chamberLabel: 'अदालती चैम्बर',
        chamberAddress: '271 साकेत कोर्ट कॉम्प्लेक्स, नई दिल्ली 110017',
        phoneLabel: 'प्रत्यक्ष फ़ोन',
        emailLabel: 'ईमेल',
        availabilityLabel: 'परामर्श समय',
        availabilityValue: 'पूर्व निर्धारित समयानुसार (सोमवार - शनिवार)',
      },
    },
    footer: {
      brandName: 'एडवोकेट अनीश',
      descriptor: 'स्वतंत्र विधिक परामर्श व वकालत · दिल्ली एनसीआर',
      disclaimer: 'बार काउंसिल ऑफ इंडिया के नियमों के अनुसार वकीलों को विज्ञापन करने या मुवक्किल आमंत्रित करने की अनुमति नहीं है। यह मंच केवल एडवोकेट अनीश कुमार की स्वतंत्र वकालत से संबंधित बुनियादी सूचना प्रदान करने के उद्देश्य से है। यह कानूनी सलाह नहीं है।',
      copyright: '© 2026 एडवोकेट अनीश. सर्वाधिकार सुरक्षित।',
    },
  },
};
