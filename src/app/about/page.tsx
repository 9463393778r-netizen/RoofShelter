import type { Metadata } from 'next'
import AboutClient from './AboutClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const metadata: Metadata = {
  title: 'About Us – Sydney\'s Trusted Roofing Experts',
  description: 'Learn about RoofShelter – Sydney\'s trusted roofing company with 15+ years of experience. Licensed & insured team of certified roofing specialists in Rosehill NSW. 500+ projects completed.',
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    url: `${siteUrl}/about`,
    title: 'About RoofShelter – Sydney\'s Trusted Roofing Experts',
    description: 'Meet Sydney\'s trusted roofing experts. 15+ years experience, 500+ projects, licensed & insured. Certified roofing specialists in Rosehill NSW.',
    images: [{ url: '/images/about2.png', width: 1200, height: 630, alt: 'RoofShelter team – professional roofing experts Sydney' }],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: 'About RoofShelter – Sydney\'s Professional Roofing Experts',
  description: 'RoofShelter has 15+ years of experience delivering premium roofing services across Sydney NSW.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${siteUrl}/about` },
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#business`,
    name: 'RoofShelter',
    foundingDate: '2009',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
    description: 'Professional roofing solutions for residential and commercial properties across Sydney NSW.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2/12-16 Prospect Street',
      addressLocality: 'Rosehill',
      addressRegion: 'NSW',
      postalCode: '2142',
      addressCountry: 'AU',
    },
    telephone: '+61434115094',
    url: siteUrl,
  },
  inLanguage: 'en-AU',
  dateModified: new Date().toISOString(),
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutClient />
    </>
  )
}
