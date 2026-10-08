export type Locale = 'en' | 'hi';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  whoItIsFor: string;
  problemSolved: string;
  whenToContact: string;
  whatHappensNext: string;
  scope: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  clientTakeaway: string;
}

export interface ValuePrinciple {
  number: string;
  title: string;
  description: string;
  proofPoint: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  legalMatter: string;
  briefDescription: string;
}

export interface ConsultationResponse {
  success: boolean;
  message?: string;
  error?: string;
}
