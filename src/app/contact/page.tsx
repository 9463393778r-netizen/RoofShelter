import type { Metadata } from 'next'
import ContactClient from './ContactClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const metadata: Metadata = {
  title: 'Contact Us – Free Roofing Quote Sydney',
  description: 'Contact RoofShelter for a free roofing quote in Sydney NSW. Call +61 434 115 094 or visit us at 2/12-16 Prospect St, Rosehill NSW 2142. Mon–Fri 8am–6pm, Sat 9am–4pm.',
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    url: `${siteUrl}/contact`,
    title: 'Contact RoofShelter – Free Roofing Quote Sydney',
    description: 'Get a free roofing quote. Call +61 434 115 094 or visit 2/12-16 Prospect St, Rosehill NSW 2142. Fast response, no obligation.',
    images: [{ url: '/images/hero1.jpeg', width: 1200, height: 630, alt: 'Contact RoofShelter – Free roofing quote Sydney' }],
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteUrl}/contact#webpage`,
  url: `${siteUrl}/contact`,
  name: 'Contact RoofShelter – Free Roofing Quote Sydney NSW',
  description: 'Contact RoofShelter for a free roofing quote, emergency repairs or general enquiries.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
    ],
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'RoofShelter',
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
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '16:00' },
    ],
  },
  inLanguage: 'en-AU',
  dateModified: new Date().toISOString(),
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  )
}
