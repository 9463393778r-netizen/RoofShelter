import './globals.css'
import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const viewport: Viewport = {
  themeColor: '#FF6B35',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | RoofShelter Sydney',
    default: 'RoofShelter – Professional Roofing Solutions in Sydney NSW',
  },
  description: 'RoofShelter delivers expert residential & commercial roofing across Sydney NSW. Services include roof restoration, leak repair, gutter installation & 24/7 emergency repairs. Licensed & fully insured. Call +61 434 115 094.',
  keywords: [
    'roofing sydney', 'roof restoration sydney', 'roof repairs sydney',
    'commercial roofing sydney', 'residential roofing nsw', 'emergency roof repairs sydney',
    'gutter installation sydney', 'roof replacement sydney', 'licensed roofer sydney nsw',
    'roofshelter', 'rosehill roofing', 'parramatta roofing', 'western sydney roofing',
    'leak detection sydney', 'solar roofing sydney', 'roof waterproofing sydney',
    'roof maintenance sydney', 'colorbond roofing sydney', 'tile roofing sydney',
  ],
  authors: [{ name: 'RoofShelter', url: siteUrl }],
  creator: 'RoofShelter',
  publisher: 'RoofShelter',
  category: 'construction',
  classification: 'Roofing Services',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'RoofShelter',
    title: 'RoofShelter – Professional Roofing Solutions in Sydney NSW',
    description: 'Expert residential & commercial roofing in Sydney. Restoration, leak repair, gutters & 24/7 emergency services. Licensed & fully insured.',
    images: [
      {
        url: '/images/hero1.jpeg',
        width: 1200,
        height: 630,
        alt: 'RoofShelter – Professional Roofing Sydney NSW',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoofShelter – Professional Roofing Sydney NSW',
    description: 'Expert residential & commercial roofing in Sydney NSW. Call +61 434 115 094.',
    images: ['/images/hero1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/images/favicon.png', type: 'image/png' }],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'msapplication-TileColor': '#FF6B35',
    'msapplication-config': '/browserconfig.xml',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'RoofingContractor'],
  '@id': `${siteUrl}/#business`,
  name: 'RoofShelter',
  legalName: 'RoofShelter',
  description: 'Professional roofing solutions for residential and commercial properties across Sydney NSW. Services include roof restoration, leak detection, gutter systems, emergency repairs and solar integration.',
  url: siteUrl,
  telephone: '+61434115094',
  email: 'parmindersinghasr@yahoo.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2/12-16 Prospect Street',
    addressLocality: 'Rosehill',
    addressRegion: 'NSW',
    postalCode: '2142',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8234,
    longitude: 151.0234,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFT',
  areaServed: [
    { '@type': 'City', name: 'Sydney', sameAs: 'https://en.wikipedia.org/wiki/Sydney' },
    { '@type': 'City', name: 'Parramatta' },
    { '@type': 'City', name: 'Rosehill' },
    { '@type': 'AdministrativeArea', name: 'New South Wales' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Roofing Services Sydney',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Roofing', description: 'Complete home roofing installation, repairs, and maintenance in Sydney NSW' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Roofing', description: 'Professional commercial roofing for businesses and industrial facilities' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Restoration', description: 'Extend your roof lifespan with professional restoration and coating services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Roof Repairs', description: '24/7 emergency roofing services for storm damage and leaks in Sydney' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Systems', description: 'Complete gutter installation, repair and maintenance services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Integration', description: 'Solar-ready roofing and solar panel installation services' } },
    ],
  },
  image: `${siteUrl}/images/hero1.jpeg`,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/logo.png`,
    width: 200,
    height: 80,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'RoofShelter',
  description: 'Professional roofing solutions in Sydney NSW – residential, commercial, restoration & emergency services.',
  inLanguage: 'en-AU',
  publisher: {
    '@id': `${siteUrl}/#business`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Rosehill, Sydney, New South Wales, Australia" />
        <meta name="geo.position" content="-33.8234;151.0234" />
        <meta name="ICBM" content="-33.8234, 151.0234" />
        <meta name="language" content="en-AU" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Australia" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        {children}
      </body>
    </html>
  )
}
