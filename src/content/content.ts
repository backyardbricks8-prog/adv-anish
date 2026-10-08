import { Locale, ServiceItem, ApproachStep, ValuePrinciple, FAQItem } from '../types';

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
    services: string;
    approach: string;
    about: string;
    faq: string;
    contact: string;
    ctaButton: string;
    switchLang: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watermark: string;
    trustIndicators: { title: string; subtitle: string }[];
  };
  problemSolution: {
    eyebrow: string;
    headline: string;
    intro: string;
    coreProblem: {
      tag: string;
      title: string;
      description: string;
      questions: string[];
    };
    consequence: {
      tag: string;
      title: string;
      description: string;
    };
    solution: {
      tag: string;
      title: string;
      description: string;
      takeaway: string;
    };
  };
  services: {
    eyebrow: string;
    headline: string;
    intro: string;
    ctaDiscuss: string;
    decisionLabels: {
      whoItIsFor: string;
      problemSolved: string;
      whenToContact: string;
      whatHappensNext: string;
      scope: string;
    };
    items: ServiceItem[];
  };
  featuredBail: {
    eyebrow: string;
    headline: string;
    subhead: string;
    intro: string;
    categories: { title: string; desc: string; trigger: string }[];
    statutoryNote: string;
    cta: string;
  };
  approach: {
    eyebrow: string;
    headline: string;
    intro: string;
    steps: ApproachStep[];
  };
  whyChoose: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: ValuePrinciple[];
  };
  about: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    credentials: { label: string; value: string }[];
    cta: string;
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
  faq: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: FAQItem[];
    ctaPrompt: string;
    ctaButton: string;
  };
  consultation: {
    eyebrow: string;
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
      genericError: string;
      newInquiryButton: string;
      orDirectContact: string;
      matterOptions: { value: string; label: string }[];
      validationErrors: {
        nameRequired: string;
        nameLength: string;
        phoneRequired: string;
        phoneInvalid: string;
        emailRequired: string;
        emailInvalid: string;
        matterRequired: string;
        descRequired: string;
        descLength: string;
      };
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
      services: 'Services',
      approach: 'Approach',
      about: 'About',
      faq: 'FAQ',
      contact: 'Consultation',
      ctaButton: 'Consult an Advocate',
      switchLang: 'हिन्दी',
    },
    hero: {
      eyebrow: 'INDEPENDENT LEGAL PRACTICE • DELHI NCR',
      headline: 'When the matter is serious, your legal representation should be stronger.',
      supporting: 'Focused legal guidance and courtroom representation for individuals and businesses navigating critical legal matters across Delhi NCR. You work directly with counsel who personally examines your case material.',
      ctaPrimary: 'Discuss Your Case',
      ctaSecondary: 'Explore Practice Areas',
      watermark: 'ADVOCACY',
      trustIndicators: [
        {
          title: 'Direct Counsel',
          subtitle: 'No delegation to unacquainted juniors',
        },
        {
          title: 'Delhi NCR Courts',
          subtitle: 'Chamber at Saket Court Complex',
        },
        {
          title: 'Discreet & Privileged',
          subtitle: 'Strict statutory client confidentiality',
        },
      ],
    },
    problemSolution: {
      eyebrow: 'CLARITY BEFORE ACTION',
      headline: 'Facing a legal issue is stressful. The difficult part is knowing what to do next.',
      intro: 'When uncertainty arises, conflicting advice and procedural jargon only increase anxiety. The right legal approach replaces doubt with precision.',
      coreProblem: {
        tag: 'The Client Dilemma',
        title: 'Where most people get stuck',
        description: 'You are confronted with an unexpected notice, a dispute, or an urgent summons. The questions compound rapidly:',
        questions: [
          'What are my realistic options under current law?',
          'What happens if I delay or respond improperly?',
          'Do I require immediate court intervention or pre-emptive relief?',
          'How do I protect my personal or commercial interests right now?',
        ],
      },
      consequence: {
        tag: 'The Risk of Inaction',
        title: 'Why early clarity matters',
        description: 'In legal matters—whether criminal, civil, or corporate—procedural windows are strict. Delaying an assessment or submitting unvetted replies often complicates your defence and limits available statutory remedies.',
      },
      solution: {
        tag: 'The Practical Remedy',
        title: 'Understand the facts. Define the strategy. Move forward.',
        description: 'You do not need more legal jargon. You need to understand your exact position, identify verified options, and execute a disciplined legal next step.',
        takeaway: 'Advocate Anish examines the factual record firsthand, provides an unvarnished assessment of risks and remedies, and formulates a tailored legal course.',
      },
    },
    services: {
      eyebrow: 'PRACTICE AREAS & DECISION SUPPORT',
      headline: 'Designed to help you choose the right legal course.',
      intro: 'Review each practice area below to determine whether your situation matches, what immediate problem it resolves, and the recommended first step.',
      ctaDiscuss: 'Discuss This Matter',
      decisionLabels: {
        whoItIsFor: 'Who this is for',
        problemSolved: 'Core problem solved',
        whenToContact: 'When to reach out',
        whatHappensNext: 'What happens next',
        scope: 'Proceedings & scope of practice',
      },
      items: [
        {
          id: 'bail-matters',
          number: '01',
          title: 'Bail Matters',
          subtitle: 'Urgent statutory protection & post-arrest release',
          shortDesc: 'Immediate, strategic representation for anticipatory, regular, and interim bail applications across Sessions Courts and the High Court of Delhi.',
          whoItIsFor: 'Individuals facing apprehension of arrest, registration of a non-bailable FIR, or families seeking release of a detained person.',
          problemSolved: 'Secures constitutional and statutory liberty through urgent court filings, countering unfounded allegations with documented facts.',
          whenToContact: 'Immediately upon learning of an FIR, police inquiry, notice under Section 41A, or imminent custody risk. Early intervention is critical.',
          whatHappensNext: 'Immediate case-diary and FIR analysis, drafting urgent bail petition, and appearance before the Magistrate, Sessions Judge, or High Court.',
          scope: [
            'Anticipatory bail applications',
            'Regular bail hearings',
            'Interim and medical bail applications',
            'Sessions Court matters',
            'High Court bail petitions',
          ],
        },
        {
          id: 'civil-criminal',
          number: '02',
          title: 'Civil & Criminal Matters',
          subtitle: 'Dispute resolution, property claims & criminal defence',
          shortDesc: 'Comprehensive case research, petition drafting, and trial representation in civil suits, property disputes, and criminal defence proceedings.',
          whoItIsFor: 'Parties embroiled in property disputes, breach of agreements, financial recovery, fraud, cheating, domestic violence, or cyber offenses.',
          problemSolved: 'Protects assets, reputations, and rights by countering false charges, enforcing legal entitlements, or obtaining urgent injunctions.',
          whenToContact: 'Upon receipt of a court summons, discovery of fraud/encroachment, or before taking retaliatory legal steps.',
          whatHappensNext: 'Review of contractual or evidentiary timeline, reply to summons/notices, and preparation of pleadings or defence arguments.',
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
          subtitle: 'Corporate structuring, incorporation & commercial permits',
          shortDesc: 'End-to-end statutory structuring, incorporation, and foundational registrations for entrepreneurs, partnerships, and growing companies.',
          whoItIsFor: 'Founders, business owners, and professionals starting a new venture or formalizing an existing partnership.',
          problemSolved: 'Eliminates future regulatory liability and partner disputes by establishing sound corporate entity governance from day one.',
          whenToContact: 'Before committing capital, taking outside investment, signing commercial leases, or billing clients.',
          whatHappensNext: 'Name approval, digital documentation vetting, charter preparation (MOA/AOA), and unified tax registration.',
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
          subtitle: 'Brand protection, registry examination & hearings',
          shortDesc: 'Securing proprietary brands, logos, slogans, and creative assets against infringement through search, prosecution, and hearing representation.',
          whoItIsFor: 'Businesses with established brand equity, creators, and enterprises facing trademark examination objections or third-party infringement.',
          problemSolved: 'Prevents copycats from misusing your commercial goodwill and overcomes Registry objections with grounded legal responses.',
          whenToContact: 'Prior to launching a brand name, or within 30 days of receiving a trademark examination report containing objections.',
          whatHappensNext: 'Thorough clearance search, drafting targeted statutory reply to objections, and personal appearance at registry hearings.',
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
          subtitle: 'Resolution of disputed, compoundable & court challans',
          shortDesc: 'Legal assistance for addressing pending, disputed, and court-referred traffic challans before virtual and regular courts in Delhi NCR.',
          whoItIsFor: 'Vehicle owners, commercial fleet operators, and drivers facing impounded vehicles or court summons for motor vehicle offenses.',
          problemSolved: 'Prevents vehicle seizure and resolves contested notices through legitimate judicial hearings or Lok Adalat disposal.',
          whenToContact: 'When a challan is sent to court, when RC/license is suspended, or when commercial vehicles are detained.',
          whatHappensNext: 'Verification of challan records on the judicial portal, filing appearance or contest before the presiding magistrate.',
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
          subtitle: 'Ongoing statutory filings & corporate governance',
          shortDesc: 'Structured governance and corporate secretarial advisory to keep business operations insulated from statutory penalties and director disqualifications.',
          whoItIsFor: 'Private limited companies, LLPs, and enterprise managers requiring strict alignment with annual statutory mandates.',
          problemSolved: 'Eliminates compounding financial penalties, registry notices, and operational hurdles caused by delayed filings.',
          whenToContact: 'At the start of the financial year, before statutory filing deadlines, or upon receipt of ROC scrutiny notices.',
          whatHappensNext: 'Compliance audit of past records, rectification of pending returns, and execution of board/secretarial documents.',
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
          subtitle: 'Binding contracts, statutory notices & instrument drafting',
          shortDesc: 'Precise drafting, vetting, and negotiation of enforceable commercial contracts, statutory legal notices, and property instruments.',
          whoItIsFor: 'Businesses entering partnerships, employers, property buyers/sellers, and individuals seeking formal legal demands.',
          problemSolved: 'Removes ambiguity that invites future litigation; ensures every clause safeguards your rights under Indian contract law.',
          whenToContact: 'Before signing any agreement with significant financial or legal commitments, or before serving a formal notice.',
          whatHappensNext: 'Clauses risk-audit, redlining terms, redrafting key covenants, and delivering legally enforceable documentation.',
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
      eyebrow: 'URGENT CRIMINAL PROCEEDINGS',
      headline: 'When time matters, clarity matters more.',
      subhead: 'Immediate, disciplined statutory assessment for bail proceedings across Delhi NCR.',
      intro: 'In urgent criminal matters, an initial misstep or delayed action can compound vulnerability. Effective advocacy requires immediate verification of the FIR, examination of allegations, and precise invocation of statutory protections before Sessions Courts and the High Court.',
      categories: [
        {
          title: 'Anticipatory Bail',
          trigger: 'Apprehension of arrest in non-bailable offences',
          desc: 'Urgent petition seeking pre-arrest protection under governing procedural law, demonstrating absence of custodial interrogation necessity.',
        },
        {
          title: 'Regular Bail',
          trigger: 'When an accused is in judicial custody',
          desc: 'Formal applications post-custody securing release subject to statutory conditions, merits of investigation, and evidentiary record.',
        },
        {
          title: 'Interim & Medical Bail',
          trigger: 'Critical health or urgent family crisis',
          desc: 'Time-sensitive petitions for immediate provisional relief on substantiated humanitarian, medical, or urgent circumstances.',
        },
        {
          title: 'Court Advocacy',
          trigger: 'Trial & appellate court appearances',
          desc: 'Direct oral advocacy before Chief Metropolitan Magistrates, Sessions Courts, and the High Court of Delhi.',
        },
      ],
      statutoryNote: 'Professional Ethics Notice: Under the rules of the Bar Council of India, no outcome, release, or timeline can ever be guaranteed. Every matter is argued strictly upon its legal merits, evidentiary record, and prevailing statutory provisions.',
      cta: 'Discuss Your Bail Matter',
    },
    approach: {
      eyebrow: 'HOW WE WORK TOGETHER',
      headline: 'A straightforward approach to complex legal matters.',
      intro: 'A four-stage framework designed to remove procedural ambiguity and give you total clarity from day one.',
      steps: [
        {
          number: '01',
          title: 'Understand',
          subtitle: 'Examine the facts & chronology',
          description: 'We begin with an exhaustive examination of the factual chronology, underlying documents, and the specific objectives of the client.',
          details: 'Nothing is assumed. We review communications, orders, FIRs, notices, or contracts to isolate the exact legal question.',
          clientTakeaway: 'You leave this step knowing your factual record has been thoroughly understood.',
        },
        {
          number: '02',
          title: 'Assess',
          subtitle: 'Map governing statutory provisions',
          description: 'Analyzing governing statutes, precedent, procedural hurdles, and realistic legal remedies available under Indian law.',
          details: 'We evaluate strengths and vulnerabilities transparently, so you understand potential risks before investing resources.',
          clientTakeaway: 'You receive an honest appraisal of your legal position without false promises.',
        },
        {
          number: '03',
          title: 'Strategize',
          subtitle: 'Define steps, timeline & filings',
          description: 'Formulating a clear course of action—outlining immediate steps, required filings, risk considerations, and anticipated timelines.',
          details: 'Every motion, notice, or defense is calculated to protect your position while keeping litigation costs proportionate.',
          clientTakeaway: 'You know exactly what step is being taken and why.',
        },
        {
          number: '04',
          title: 'Represent',
          subtitle: 'Decisive court & legal execution',
          description: 'Providing focused advocacy before courts, judicial tribunals, statutory bodies, or during bilateral negotiations.',
          details: 'Advocate Anish handles court appearances directly, presenting arguments with rigorous preparation and statutory precision.',
          clientTakeaway: 'You have dedicated, prepared counsel standing up for your legal interests.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'GENUINE PRACTICE DIFFERENTIATORS',
      headline: 'Why Clients Work With Advocate Anish',
      intro: 'Independent legal counsel anchored in preparation, direct access, and professional integrity.',
      items: [
        {
          number: '01',
          title: 'Direct Advocate Access',
          description: 'Your matter receives my direct intellectual focus. You speak and strategize with the advocate who argues your case, not an unacquainted associate.',
          proofPoint: 'Personal review of all case files & pleadings',
        },
        {
          number: '02',
          title: 'Clear, Plain-Language Counsel',
          description: 'Legal procedures and realistic outcomes are explained in transparent language. You will never feel alienated by unnecessary legal jargon.',
          proofPoint: 'Transparent discussion of risks & options',
        },
        {
          number: '03',
          title: 'Meticulous Case Preparation',
          description: 'Court outcomes depend on precision in documentation and timing. Every pleading is researched against recent judicial precedents.',
          proofPoint: 'Fact-first evidentiary scrutiny',
        },
        {
          number: '04',
          title: 'Statutory Confidentiality',
          description: 'All discussions, personal details, and sensitive records are held under strict standards of professional privilege and discretion.',
          proofPoint: 'Protected under the Indian Evidence Act',
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT THE ADVOCATE',
      headline: 'Legal representation begins with understanding the matter.',
      paragraphs: [
        'Effective legal counsel does not begin with rigid assumptions or prefabricated templates. It begins with a thorough examination of the actual facts, the governing circumstances, and the specific statutory provisions at play.',
        'As an independent advocate practicing in Delhi NCR, I provide direct, focused legal guidance. When you consult my practice, you speak directly with counsel who personally examines your case material, identifies realistic legal options, and formulates a disciplined strategy tailored to your situation.',
        'Whether addressing an urgent bail matter, resolving a complex civil dispute, or structuring legal safeguards for an enterprise, I prioritize clarity, professional discretion, and decisive legal execution.',
      ],
      credentials: [
        { label: 'Role', value: 'Advocate' },
        { label: 'Practice Type', value: 'Independent Practice' },
        { label: 'Court Chamber', value: '271 Saket Court Complex, New Delhi' },
        { label: 'Jurisdiction', value: 'District Courts & High Court of Delhi' },
      ],
      cta: 'Schedule a Consultation',
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
    faq: {
      eyebrow: 'COMMON CONCERNS',
      headline: 'Frequently Asked Questions',
      intro: 'Answers to key procedural questions before initiating a consultation.',
      items: [
        {
          question: 'When should I contact an advocate?',
          answer: 'You should reach out as soon as a legal dispute, police notice, summons, or statutory deadline emerges. In matters involving bail, commercial disputes, or property claims, early legal intervention preserves critical procedural options that may become unavailable if you wait.',
        },
        {
          question: 'What information or documents should I bring to our first discussion?',
          answer: 'Bring all documents directly related to the issue: copy of the FIR or police notice (if applicable), summons, contract/agreement, relevant written communications (emails, letters), and a brief chronological timeline of events. Having clear dates and papers allows an accurate legal assessment.',
        },
        {
          question: 'What happens during the initial consultation?',
          answer: 'During the consultation, we examine the timeline of events and inspect available documents. Advocate Anish explains where you stand under current law, outlines potential remedies, highlights risks, and recommends a practical next step.',
        },
        {
          question: 'Will I be working directly with Advocate Anish?',
          answer: 'Yes. Unlike larger corporate outfits where inquiries are routinely delegated to multiple junior assistants, this is an independent legal practice. Advocate Anish personally assesses your matter, drafts or vets the paperwork, and represents you in court.',
        },
        {
          question: 'How are urgent bail or stay applications handled?',
          answer: 'Urgent matters are prioritized immediately. We review the FIR or adverse order, identify grounds for pre-arrest or interim relief, draft the petition, and move for urgent listing before the competent Sessions Court or High Court.',
        },
        {
          question: 'Is my information kept strictly confidential?',
          answer: 'Yes, unconditionally. Communications between a client and their advocate are legally privileged under Section 126 of the Indian Evidence Act and the Bar Council of India professional standards. Your information is never disclosed.',
        },
      ],
      ctaPrompt: 'Have a specific question about your matter?',
      ctaButton: 'Speak Directly With Advocate Anish',
    },
    consultation: {
      eyebrow: 'DIRECT LEGAL CONSULTATION',
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
        submittingButton: 'Sending...',
        successTitle: 'Thank you. Your enquiry has been received.',
        successMessage: 'We will review your message and get back to you using the contact details provided.',
        genericError: "We couldn't submit your enquiry right now. Please try again or contact us directly.",
        newInquiryButton: 'Submit Another Inquiry',
        orDirectContact: 'Need immediate contact? Reach Advocate Anish directly:',
        matterOptions: [
          { value: 'Bail Matters', label: '01 — Bail Matters (Anticipatory / Regular / Interim)' },
          { value: 'Civil & Criminal Matters', label: '02 — Civil & Criminal Matters (Litigation / Property / Defence)' },
          { value: 'Business Registration', label: '03 — Business Registration (Company / LLP / GST / MSME)' },
          { value: 'Trademark & Intellectual Property', label: '04 — Trademark & Intellectual Property (Filing / Hearings)' },
          { value: 'Traffic Challan Matters', label: '05 — Traffic Challan Matters (Court / Disputed Notice)' },
          { value: 'Compliance', label: '06 — Compliance (ROC / Annual / Statutory)' },
          { value: 'Legal Documentation', label: '07 — Legal Documentation (Contracts / Agreements / Notices)' },
          { value: 'Other Legal Matter', label: 'Other Legal Matter' },
        ],
        validationErrors: {
          nameRequired: 'Please enter your name.',
          nameLength: 'Full name must be between 2 and 100 characters.',
          phoneRequired: 'Please enter your phone number.',
          phoneInvalid: 'Please enter a valid phone number with area or country code.',
          emailRequired: 'Please enter a valid email address.',
          emailInvalid: 'Please enter a valid email address.',
          matterRequired: 'Please choose the relevant service or practice area.',
          descRequired: 'Please briefly describe your matter.',
          descLength: 'Description must be between 5 and 1,000 characters.',
        },
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
      services: 'विधिक सेवाएं',
      approach: 'कार्यप्रणाली',
      about: 'परिचय',
      faq: 'प्रश्नोत्तरी',
      contact: 'परामर्श',
      ctaButton: 'वकील से परामर्श लें',
      switchLang: 'English',
    },
    hero: {
      eyebrow: 'स्वतंत्र विधिक वकालत • दिल्ली एनसीआर',
      headline: 'जब मामला गंभीर हो, तो आपका कानूनी पक्ष और भी मजबूत होना चाहिए।',
      supporting: 'दिल्ली एनसीआर में महत्वपूर्ण कानूनी मामलों में व्यक्तियों और व्यवसायों के लिए केंद्रित विधिक मार्गदर्शन और अदालत में प्रभावी प्रतिनिधित्व। आप सीधे उस अधिवक्ता से बात करते हैं जो आपके मामले की स्वयं पैरवी करता है।',
      ctaPrimary: 'मामले पर चर्चा करें',
      ctaSecondary: 'कार्यक्षेत्र देखें',
      watermark: 'ADVOCACY',
      trustIndicators: [
        {
          title: 'प्रत्यक्ष परामर्श',
          subtitle: 'बिना किसी कनिष्ठ स्तर के विचलन के सीधा संवाद',
        },
        {
          title: 'दिल्ली एनसीआर न्यायालय',
          subtitle: 'चैम्बर: 271 साकेत कोर्ट कॉम्प्लेक्स',
        },
        {
          title: 'कानूनन सुरक्षित व गोपनीय',
          subtitle: 'बार काउंसिल नियमों के अनुसार पूर्ण गोपनीयता',
        },
      ],
    },
    problemSolution: {
      eyebrow: 'कदम उठाने से पहले स्पष्टता',
      headline: 'कानूनी उलझन तनावपूर्ण होती है। सबसे कठिन होता है अगला सही कदम तय करना।',
      intro: 'जब कोई कानूनी स्थिति उत्पन्न होती है, तो विरोधाभासी राय और जटिल कानूनी शब्दावली केवल चिंता बढ़ाती है। सही विधिक दृष्टिकोण अनिश्चितता को सटीक रणनीति में बदलता है।',
      coreProblem: {
        tag: 'मुवक्किल की दुविधा',
        title: 'अक्सर लोग कहां असमंजस में पड़ते हैं',
        description: 'अचानक कोई नोटिस, विवाद या सम्मन आने पर कई सवाल खड़े हो जाते हैं:',
        questions: [
          'वर्तमान कानून के तहत मेरे पास क्या वास्तविक विकल्प हैं?',
          'यदि मैंने जवाब देने में देरी की तो क्या नुकसान होगा?',
          'क्या मुझे तुरंत अदालत से स्थगनादेश या अग्रिम राहत चाहिए?',
          'मैं इस समय अपने व्यक्तिगत व कारोबारी हितों की रक्षा कैसे करूं?',
        ],
      },
      consequence: {
        tag: 'देरी का जोखिम',
        title: 'शुरुआती समय में कानूनी स्पष्टता क्यों आवश्यक है',
        description: 'कानूनी मामलों में समय-सीमाएं अत्यंत कठोर होती हैं। बिना उचित कानूनी परीक्षण के देरी करना या जल्दबाजी में गलत जवाब देना आपकी विधिक स्थिति को कमजोर कर सकता है।',
      },
      solution: {
        tag: 'व्यावहारिक समाधान',
        title: 'तथ्यों को समझें। रणनीति बनाएं। ठोस कदम उठाएं।',
        description: 'आपको भारी-भरकम कानूनी शब्दों की नहीं, बल्कि अपनी वास्तविक स्थिति, उपलब्ध विधिक विकल्पों और सही अगले कदम की स्पष्ट समझ चाहिए।',
        takeaway: 'एडवोकेट अनीश तथ्यों का स्वयं अध्ययन करते हैं, व्यावहारिक जोखिमों का विश्लेषण करते हैं और आपके हित में ठोस रणनीति तैयार करते हैं।',
      },
    },
    services: {
      eyebrow: 'विधिक कार्यक्षेत्र एवं निर्णय सहायता',
      headline: 'आपके मामले के लिए सही विधिक मार्ग चुनने में सहायक।',
      intro: 'नीचे दिए गए कार्यक्षेत्रों को देखें ताकि आप समझ सकें कि आपकी स्थिति किस श्रेणी में आती है और प्राथमिक कदम क्या होना चाहिए।',
      ctaDiscuss: 'इस मामले पर चर्चा करें',
      decisionLabels: {
        whoItIsFor: 'यह किसके लिए है',
        problemSolved: 'मुख्य समाधान',
        whenToContact: 'कब संपर्क करें',
        whatHappensNext: 'आगे क्या प्रक्रिया होगी',
        scope: 'कार्यक्षेत्र एवं प्रक्रियाएं',
      },
      items: [
        {
          id: 'bail-matters',
          number: '01',
          title: 'जमानत (Bail) संबंधी मामले',
          subtitle: 'अग्रिम विधिक संरक्षण एवं नियमित रिहाई',
          shortDesc: 'सत्र न्यायालय (Sessions Court) और दिल्ली उच्च न्यायालय में सभी प्रकार की जमानत याचिकाओं की त्वरित पैरवी।',
          whoItIsFor: 'वे व्यक्ति जिन्हें गिरफ्तारी की आशंका हो, गैर-जमानती प्राथमिकी दर्ज हुई हो, अथवा हिरासत में लिए गए व्यक्ति के परिजन।',
          problemSolved: 'तथ्यों और वैधानिक नियमों के आधार पर अदालत में मजबूती से पक्ष रखकर व्यक्तिगत स्वतंत्रता की रक्षा करना।',
          whenToContact: 'प्राथमिकी (FIR), पुलिस पूछताछ या सम्मन की जानकारी मिलते ही तुरंत संपर्क करें। समय पर कदम उठाना आवश्यक है।',
          whatHappensNext: 'एफआईआर और साक्ष्यों का परीक्षण, तत्काल जमानत याचिका का प्रारूपण और संबंधित अदालत में तुरंत बहस।',
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
          subtitle: 'विवाद निस्तारण, संपत्ति अधिकार एवं आपराधिक बचाव',
          shortDesc: 'दीवानी मुकदमों, संपत्ति विवादों, वसूली और आपराधिक मुकदमों में गहन तैयारी और अदालत में प्रभावी पैरवी।',
          whoItIsFor: 'संपत्ति विवाद, संविदा उल्लंघन, धन वसूली, धोखाधड़ी, घरेलू हिंसा या साइबर अपराध का सामना कर रहे पक्ष।',
          problemSolved: 'झूठे आरोपों से बचाव, अधिकारों की पुनर्स्थापना और अदालत से आवश्यक स्थगनादेश (Injunction) प्राप्त करना।',
          whenToContact: 'अदालती सम्मन या नोटिस मिलने पर अथवा कानूनी कदम उठाने से पहले।',
          whatHappensNext: 'दस्तावेजों का परीक्षण, नोटिस का विधिक उत्तर और अदालत में ठोस जवाबदावा व पैरवी।',
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
          subtitle: 'कंपनी गठन, व्यापारिक अनुमतियां एवं टैक्स संरचना',
          shortDesc: 'उद्यमियों, साझेदारी फर्मों और कंपनियों के लिए विधिक संरचना और पंजीकरण कार्य।',
          whoItIsFor: 'स्टार्टअप संस्थापक, व्यवसायी और पेशेवर जो नया व्यापार शुरू कर रहे हैं या साझेदारी को कानूनी रूप दे रहे हैं।',
          problemSolved: 'शुरुआत से ही सही कानूनी ढांचा तैयार कर भविष्य के विवादों और विनियामक पेनाल्टी से बचाव।',
          whenToContact: 'व्यापारिक अनुबंध करने, निवेश लेने या व्यावसायिक कार्य शुरू करने से पहले।',
          whatHappensNext: 'नाम अनुमोदन, डिजिटल दस्तावेज सत्यापन, कंपनी चार्टर प्रारूपण और एकीकृत पंजीकरण।',
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
          subtitle: 'ब्रांड सुरक्षा, आपत्ति निस्तारण एवं रजिस्ट्री सुनवाई',
          shortDesc: 'व्यावसायिक पहचान और बौद्धिक संपदा की सुरक्षा, आवेदन, आपत्तियों का उत्तर व सुनवाई।',
          whoItIsFor: 'व्यवसायी और रचनाकार जिनके ब्रांड नाम की नकल हो रही हो या जिनके ट्रेडमार्क पर आपत्ति आई हो।',
          problemSolved: 'आपके ब्रांड नाम और लोगो को वैधानिक सुरक्षा देना और रजिस्ट्री की आपत्तियों का कानूनी समाधान करना।',
          whenToContact: 'ब्रांड नाम सार्वजनिक करने से पहले या परीक्षा रिपोर्ट (Examination Report) मिलने के 30 दिनों के भीतर।',
          whatHappensNext: 'ट्रेडमार्क सर्च, आपत्तियों का कानूनी उत्तर प्रारूपण और रजिस्ट्री के समक्ष प्रत्यक्ष सुनवाई में पैरवी।',
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
          subtitle: 'अदालती व विवादित चालानों का विधिक निस्तारण',
          shortDesc: 'वर्चुअल और नियमित अदालतों में लंबित, विवादित और शमनीय (Compoundable) चालानों का विधिक समाधान।',
          whoItIsFor: 'वाहन स्वामी और चालक जिनके चालान अदालत में भेजे गए हों या वाहन जब्त हुआ हो।',
          problemSolved: 'अदालत या लोक अदालत के माध्यम से चालानों का विधिसम्मत निस्तारण और वाहन जब्ती से राहत।',
          whenToContact: 'जब चालान अदालत में भेज दिया गया हो या जब्ती आदेश जारी हुआ हो।',
          whatHappensNext: 'अदालती पोर्टल पर चालान विवरण जांचना और संबंधित अदालत में हाजिरी देकर निस्तारण।',
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
          subtitle: 'कंपनी गवर्नेंस व वार्षिक विधिक औपचारिकताएं',
          shortDesc: 'कंपनियों और व्यवसायों को जुर्माने व कानूनी उलझनों से बचाने के लिए निरंतर विधिक अनुपालन।',
          whoItIsFor: 'प्राइवेट लिमिटेड कंपनियां और एलएलपी जिन्हें वार्षिक विधिक नियमों का पालन करना अनिवार्य है।',
          problemSolved: 'देरी से होने वाले भारी जुर्माने, नोटिस और निदेशकों की अयोग्यता से पूर्ण सुरक्षा।',
          whenToContact: 'वित्तीय वर्ष के प्रारंभ में या नियामक नोटिस प्राप्त होने पर।',
          whatHappensNext: 'कंपनी दस्तावेजों का विधिक ऑडिट और समयबद्ध विधिक विवरणियों का निस्तारण।',
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
          subtitle: 'कानूनी अनुबंध, समझौते एवं वैधानिक लीगल नोटिस',
          shortDesc: 'कानूनी रूप से सुरक्षित अनुबंधों, समझौतों, लीगल नोटिसों और महत्वपूर्ण विलेखों का प्रारूपण।',
          whoItIsFor: 'व्यवसायी, साझेदार, नियोक्ता और संपत्ति के लेन-देन से जुड़े व्यक्ति।',
          problemSolved: 'अस्पष्ट शर्तों को दूर कर भविष्य के विवादों को रोकना और भारतीय संविदा अधिनियम के तहत अधिकारों को सुरक्षित करना।',
          whenToContact: 'किसी भी महत्वपूर्ण वित्तीय या व्यावसायिक अनुबंध पर हस्ताक्षर करने से पहले।',
          whatHappensNext: 'शर्तों की कानूनी जांच, जोखिमों का विश्लेषण और कानूनी रूप से प्रभावी मसौदा तैयार करना।',
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
      eyebrow: 'आपातकालीन कानूनी सहायता',
      headline: 'जब समय महत्वपूर्ण हो, तो स्पष्टता और भी अधिक आवश्यक होती है।',
      subhead: 'दिल्ली एनसीआर में जमानत की कार्यवाही के लिए त्वरित और संयमित विधिक मूल्यांकन।',
      intro: 'आपराधिक मामलों में एक गलत कदम या अनावश्यक देरी स्थिति को बिगाड़ सकती है। प्रभावी पैरवी के लिए प्राथमिकी (FIR) का तुरंत अध्ययन, आरोपों का विश्लेषण और संबंधित अदालत में सटीक वैधानिक प्रावधानों के तहत तर्क प्रस्तुत करना आवश्यक है।',
      categories: [
        {
          title: 'अग्रिम जमानत (Anticipatory Bail)',
          trigger: 'गैर-जमानती मामलों में गिरफ्तारी की आशंका',
          desc: 'गिरफ्तारी से पूर्व वैधानिक राहत हेतु याचिका, जिसमें यह स्थापित किया जाता है कि हिरासत में पूछताछ आवश्यक नहीं है।',
        },
        {
          title: 'नियमित जमानत (Regular Bail)',
          trigger: 'हिरासत में होने की स्थिति में',
          desc: 'जांच के तथ्यों और साक्ष्यों के आधार पर अदालत से वैधानिक शर्तों पर रिहाई हेतु याचिका।',
        },
        {
          title: 'अंतरिम एवं चिकित्सकीय जमानत',
          trigger: 'स्वास्थ्य आपातकाल या पारिवारिक संकट',
          desc: 'मानवीय व चिकित्सा आधार पर तात्कालिक अस्थायी राहत हेतु समयबद्ध याचिका।',
        },
        {
          title: 'अदालती पैरवी',
          trigger: 'सत्र एवं उच्च न्यायालय में प्रत्यक्ष उपस्थिति',
          desc: 'मुख्य मेट्रोपॉलिटन मजिस्ट्रेट, सत्र न्यायालय एवं दिल्ली उच्च न्यायालय में प्रत्यक्ष एवं प्रभावी बहस।',
        },
      ],
      statutoryNote: 'बार काउंसिल ऑफ इंडिया के नियमों के अनुसार किसी परिणाम या त्वरित रिहाई की पूर्व-गारंटी नहीं दी जा सकती। प्रत्येक मामला उसके वास्तविक कानूनी गुण-दोषों और साक्ष्यों पर ही निर्भर करता है।',
      cta: 'जमानत मामले पर चर्चा करें',
    },
    approach: {
      eyebrow: 'कार्यप्रणाली',
      headline: 'जटिल कानूनी मामलों के प्रति एक सीधी और स्पष्ट रणनीति।',
      intro: 'अनिश्चितता को समाप्त कर स्पष्टता, ठोस तैयारी और प्रभावी निष्पादन के लिए चार-चरणीय कार्यपद्धति।',
      steps: [
        {
          number: '01',
          title: 'समझें (Understand)',
          subtitle: 'तथ्यों एवं कालक्रम की जांच',
          description: 'मामले की कालक्रमिक घटनाओं, उपलब्ध दस्तावेजों और मुवक्किल के वास्तविक लक्ष्यों का गहन अध्ययन।',
          details: 'किसी भी पूर्व-धारणा के बिना एफआईआर, नोटिस या अनुबंध का तथ्यात्मक परीक्षण किया जाता है।',
          clientTakeaway: 'आपको विश्वास होता है कि आपके मामले के प्रत्येक तथ्य को ध्यानपूर्वक समझा गया है।',
        },
        {
          number: '02',
          title: 'मूल्यांकन (Assess)',
          subtitle: 'कानूनी स्थिति व विकल्पों का विश्लेषण',
          description: 'भारतीय कानून, न्यायिक नज़ीरों और प्रक्रियात्मक सीमाओं के परिप्रेक्ष्य में उपलब्ध विधिक उपचारों का विश्लेषण।',
          details: 'संभावित जोखिमों और मजबूत पक्षों की निष्पक्ष चर्चा, ताकि आप वास्तविक स्थिति से अवगत रहें।',
          clientTakeaway: 'आपको बिना किसी झूठे वादे के अपनी कानूनी स्थिति का वास्तविक ज्ञान प्राप्त होता है।',
        },
        {
          number: '03',
          title: 'रणनीति (Strategize)',
          subtitle: 'ठोस कार्य-योजना व समय-सीमा',
          description: 'अदालती दस्तावेजों का प्रारूपण, अपेक्षित समय-सीमा और जोखिमों को ध्यान में रखते हुए कार्य-योजना तैयार करना।',
          details: 'प्रत्येक कदम मुवक्किल के अधिकारों की सुरक्षा और अनावश्यक कानूनी व्यय को नियंत्रित रखने के उद्देश्य से तय होता है।',
          clientTakeaway: 'आपको स्पष्ट पता होता है कि अगला कदम क्या है और क्यों उठाया जा रहा है।',
        },
        {
          number: '04',
          title: 'प्रतिनिधित्व (Represent)',
          subtitle: 'अदालत में सशक्त पैरवी',
          description: 'संबंधित न्यायालयों, अधिकरणों या प्राधिकारियों के समक्ष आपके पक्ष की सशक्त और प्रभावी प्रस्तुति।',
          details: 'एडवोकेट अनीश स्वयं अदालत में उपस्थित होकर पूरी तैयारी के साथ आपके पक्ष में वैधानिक तर्क प्रस्तुत करते हैं।',
          clientTakeaway: 'आपके पास एक समर्पित और सुसज्जित वकील होता है जो आपके कानूनी अधिकारों के लिए खड़ा है।',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'वकालत के प्रमुख आधार',
      headline: 'एडवोकेट अनीश के साथ कार्य करने के मुख्य कारण',
      intro: 'स्वतंत्र विधिक वकालत के चार अपरिवर्तनीय मूल्य: ठोस तैयारी, सीधा संवाद और व्यावसायिक सत्यनिष्ठा।',
      items: [
        {
          number: '01',
          title: 'प्रत्यक्ष अधिवक्ता संपर्क',
          description: 'आपके मामले पर सीधे मेरा व्यक्तिगत व बौद्धिक ध्यान रहता है। आप उसी वकील से रणनीति बनाते हैं जो अदालत में बहस करता है।',
          proofPoint: 'सभी अदालती फाइलों व दस्तावेजों का स्वयं अध्ययन',
        },
        {
          number: '02',
          title: 'सरल व पारदर्शी भाषा',
          description: 'कानूनी जटिलताओं और संभावित कदमों को आम बोलचाल की भाषा में स्पष्ट समझाया जाता है, बिना किसी अनावश्यक शब्दावली के।',
          proofPoint: 'जोखिमों और विकल्पों पर खुली व ईमानदार चर्चा',
        },
        {
          number: '03',
          title: 'गहन अदालती तैयारी',
          description: 'अदालती नतीजे सटीक दस्तावेजों और पूर्व-निर्णयों (Precedents) के अध्ययन पर निर्भर करते हैं। प्रत्येक अर्जी गहन शोध के बाद ही दाखिल होती है।',
          proofPoint: 'तथ्यों और साक्ष्यों की सूक्ष्म जांच',
        },
        {
          number: '04',
          title: 'कानूनन सुरक्षित गोपनीयता',
          description: 'आपकी समस्त निजी जानकारी, दस्तावेज और बातचीत बार काउंसिल के कठोरतम गोपनीयता नियमों से सुरक्षित हैं।',
          proofPoint: 'भारतीय साक्ष्य अधिनियम की धारा 126 के तहत पूर्ण विशेषाधिकार',
        },
      ],
    },
    about: {
      eyebrow: 'अधिवक्ता का परिचय',
      headline: 'प्रभावी कानूनी प्रतिनिधित्व मामले की गहरी समझ से शुरू होता है।',
      paragraphs: [
        'सार्थक कानूनी सहायता किसी पूर्व-निर्धारित सांचे या सतही मान्यताओं से शुरू नहीं होती। यह वास्तविक तथ्यों, परिस्थितियों और लागू वैधानिक प्रावधानों की सूक्ष्म जांच से आरंभ होती है।',
        'दिल्ली एनसीआर में एक स्वतंत्र अधिवक्ता के रूप में, मैं प्रत्यक्ष और ठोस कानूनी मार्गदर्शन प्रदान करता हूं। जब आप मुझसे संपर्क करते हैं, तो आप सीधे उस अधिवक्ता से बात करते हैं जो आपके मामले का स्वयं अध्ययन करता है और व्यावहारिक रणनीति तैयार करता है।',
        'चाहे वह जमानत का त्वरित मामला हो, कोई दीवानी या फौजदारी विवाद हो, अथवा किसी व्यवसाय के लिए कानूनी अनुबंध तैयार करना हो—मेरी प्राथमिकता स्पष्टता, गोपनीयता और प्रभावी पैरवी है।',
      ],
      credentials: [
        { label: 'पद', value: 'अधिवक्ता (Advocate)' },
        { label: 'वकालत स्वरूप', value: 'स्वतंत्र विधिक प्रैक्टिस' },
        { label: 'अदालती चैम्बर', value: '271 साकेत कोर्ट कॉम्प्लेक्स, नई दिल्ली' },
        { label: 'कार्यक्षेत्र', value: 'जिला न्यायालय एवं दिल्ली उच्च न्यायालय' },
      ],
      cta: 'परामर्श का समय निर्धारित करें',
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
    faq: {
      eyebrow: 'सामान्य प्रश्न',
      headline: 'अक्सर पूछे जाने वाले सवाल',
      intro: 'परामर्श लेने से पहले महत्वपूर्ण प्रक्रियाओं से संबंधित स्पष्ट उत्तर।',
      items: [
        {
          question: 'मुझे वकील से कब संपर्क करना चाहिए?',
          answer: 'जैसे ही कोई कानूनी विवाद, पुलिस नोटिस, अदालती सम्मन या वैधानिक समय-सीमा सामने आए, तुरंत संपर्क करें। जमानत, संपत्ति या व्यापारिक विवादों में समय पर की गई कानूनी कार्रवाई उन विकल्पों को सुरक्षित रखती है जो देरी करने पर हाथ से निकल सकते हैं।',
        },
        {
          question: 'पहली चर्चा के लिए मुझे कौन से दस्तावेज लाने चाहिए?',
          answer: 'मामले से जुड़े सभी मूल या प्रति दस्तावेज लाएं: एफआईआर या पुलिस नोटिस की प्रति (यदि हो), अदालती सम्मन, संबंधित अनुबंध/समझौता, लिखित पत्राचार (ईमेल, पत्र) और घटनाओं की तारीखवार संक्षिप्त सूची।',
        },
        {
          question: 'प्रारंभिक परामर्श के दौरान क्या होता है?',
          answer: 'परामर्श के दौरान घटनाओं के क्रम और उपलब्ध दस्तावेजों का विश्लेषण किया जाता है। एडवोकेट अनीश यह स्पष्ट करते हैं कि वर्तमान कानून के तहत आपकी क्या स्थिति है, क्या विकल्प उपलब्ध हैं और अगला व्यावहारिक कदम क्या होना चाहिए।',
        },
        {
          question: 'क्या मैं सीधे एडवोकेट अनीश से बात करूंगा/करूंगी?',
          answer: 'हां। यह एक स्वतंत्र कानूनी प्रैक्टिस है। एडवोकेट अनीश व्यक्तिगत रूप से आपके मामले का अध्ययन करते हैं, विधिक दस्तावेज तैयार करते हैं और अदालत में स्वयं आपका प्रतिनिधित्व करते हैं।',
        },
        {
          question: 'जमानत या आपातकालीन मामलों में प्रक्रिया कैसे होती है?',
          answer: 'आपातकालीन मामलों को प्राथमिकता दी जाती है। एफआईआर या आदेश का तुरंत अध्ययन कर याचिका तैयार की जाती है और सक्षम सत्र न्यायालय या उच्च न्यायालय के समक्ष तत्काल सुनवाई हेतु प्रस्तुत की जाती है।',
        },
        {
          question: 'क्या मेरी जानकारी पूरी तरह गोपनीय रहेगी?',
          answer: 'हां, पूर्ण रूप से। भारतीय साक्ष्य अधिनियम की धारा 126 और बार काउंसिल ऑफ इंडिया के नियमों के तहत मुवक्किल और वकील के बीच का संवाद कानूनी रूप से विशेषाधिकार प्राप्त और अत्यंत गोपनीय होता है।',
        },
      ],
      ctaPrompt: 'क्या आपके मामले से संबंधित कोई विशिष्ट प्रश्न है?',
      ctaButton: 'एडवोकेट अनीश से सीधे परामर्श लें',
    },
    consultation: {
      eyebrow: 'प्रत्यक्ष परामर्श',
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
        submittingButton: 'भेजा जा रहा है…',
        successTitle: 'धन्यवाद। आपका अनुरोध प्राप्त हो गया है।',
        successMessage: 'हम आपके विवरण की समीक्षा कर प्रदान किए गए संपर्क विवरण पर आपसे संपर्क करेंगे।',
        genericError: 'हम इस समय आपका अनुरोध नहीं भेज सके। कृपया पुनः प्रयास करें अथवा फ़ोन या ईमेल द्वारा सीधे संपर्क करें।',
        newInquiryButton: 'एक और अनुरोध भेजें',
        orDirectContact: 'त्वरित संपर्क की आवश्यकता है? सीधे संपर्क करें:',
        matterOptions: [
          { value: 'Bail Matters', label: '01 — जमानत (Bail) संबंधी मामले (अग्रिम / नियमित / अंतरिम)' },
          { value: 'Civil & Criminal Matters', label: '02 — दीवानी एवं फौजदारी मामले (विवाद / संपत्ति / बचाव)' },
          { value: 'Business Registration', label: '03 — व्यवसाय एवं कंपनी पंजीकरण (कंपनी / एलएलपी / जीएसटी)' },
          { value: 'Trademark & Intellectual Property', label: '04 — ट्रेडमार्क एवं बौद्धिक संपदा (पंजीकरण / सुनवाई)' },
          { value: 'Traffic Challan Matters', label: '05 — ट्रैफिक चालान संबंधी मामले (अदालती / विवादित)' },
          { value: 'Compliance', label: '06 — वैधानिक अनुपालन (Compliance)' },
          { value: 'Legal Documentation', label: '07 — विधिक दस्तावेज एवं संविदा (Contracts)' },
          { value: 'Other Legal Matter', label: 'अन्य कानूनी विषय' },
        ],
        validationErrors: {
          nameRequired: 'कृपया अपना पूरा नाम दर्ज करें।',
          nameLength: 'पूरा नाम 2 से 100 अक्षरों के बीच होना चाहिए।',
          phoneRequired: 'कृपया संपर्क फ़ोन नंबर दर्ज करें।',
          phoneInvalid: 'कृपया मान्य फ़ोन नंबर दर्ज करें।',
          emailRequired: 'कृपया अपना ईमेल पता दर्ज करें।',
          emailInvalid: 'कृपया एक मान्य ईमेल पता दर्ज करें (उदा. name@example.com)।',
          matterRequired: 'कृपया संबंधित कानूनी श्रेणी चुनें।',
          descRequired: 'कृपया अपने मामले का संक्षिप्त विवरण दें।',
          descLength: 'विवरण 5 से 1,000 अक्षरों के बीच होना चाहिए।',
        },
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
