export type Locale = 'en' | 'hi';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  scope: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ValuePrinciple {
  number: string;
  title: string;
  description: string;
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
