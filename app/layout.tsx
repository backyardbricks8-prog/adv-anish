import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advocate Anish | Legal Advocate in Delhi NCR',
  description:
    'Independent legal practice of Adv. Anish Kumar providing focused guidance and representation for bail, civil, criminal, business, and intellectual property matters across Delhi NCR.',
  metadataBase: new URL('https://advocateanish.com'),
  alternates: {
    canonical: 'https://advocateanish.com/',
  },
  icons: {
    icon: '/assets/logo_opt.png',
    apple: '/assets/logo_opt.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://advocateanish.com/',
    siteName: 'Advocate Anish',
    title: 'Advocate Anish | Legal Advocate in Delhi NCR',
    description:
      'Independent legal practice of Adv. Anish Kumar providing focused guidance and representation for bail, civil, criminal, business, and intellectual property matters across Delhi NCR.',
    images: [
      {
        url: '/assets/hero_opt.webp',
        width: 1200,
        height: 630,
        alt: 'Advocate Anish Legal Practice Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advocate Anish | Legal Advocate in Delhi NCR',
    description:
      'Independent legal practice of Adv. Anish Kumar providing focused guidance and representation for bail, civil, criminal, business, and intellectual property matters across Delhi NCR.',
    images: ['/assets/hero_opt.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Advocate Anish',
  alternateName: 'Adv. Anish Kumar',
  url: 'https://advocateanish.com/',
  logo: 'https://advocateanish.com/assets/logo_opt.png',
  image: 'https://advocateanish.com/assets/hero_opt.webp',
  description:
    'Independent legal practice of Adv. Anish Kumar providing focused guidance and legal representation across Delhi NCR.',
  telephone: '+91-920-446-3290',
  email: 'anishkumarjha17@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '271 Saket Court Complex',
    addressLocality: 'New Delhi',
    postalCode: '110017',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5245,
    longitude: 77.2177,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00',
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Delhi NCR',
    },
  ],
  knowsAbout: [
    'Bail Matters',
    'Anticipatory Bail',
    'Regular Bail',
    'Civil Litigation',
    'Criminal Defence',
    'Business Registration',
    'Trademark & Intellectual Property',
    'Traffic Challan Matters',
    'Corporate Compliance',
    'Legal Documentation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#111111] antialiased selection:bg-[#EACEAA] selection:text-[#111111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
