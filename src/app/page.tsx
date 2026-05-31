import type { Metadata } from 'next'
import HomeClient from './HomeClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const metadata: Metadata = {
  title: { absolute: 'RoofShelter – #1 Professional Roofing Solutions in Sydney NSW' },
  description: 'Sydney\'s trusted roofing experts since 2009. Residential & commercial roofing, roof restoration, gutter systems & 24/7 emergency repairs. Licensed, insured & satisfaction guaranteed. Free quotes!',
  alternates: { canonical: siteUrl },
  openGraph: {
    url: siteUrl,
    title: 'RoofShelter – Professional Roofing Sydney NSW | Free Quotes',
    description: 'Trusted roofing experts in Sydney. Residential & commercial roofing, restoration, gutters & 24/7 emergency services. Licensed & insured.',
    images: [{ url: '/images/hero1.jpeg', width: 1200, height: 630, alt: 'RoofShelter professional roofing team Sydney' }],
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  url: siteUrl,
  name: 'RoofShelter – Professional Roofing Solutions in Sydney NSW',
  description: 'Trusted roofing experts in Sydney NSW offering residential, commercial, restoration and emergency roofing services.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#business` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    ],
  },
  inLanguage: 'en-AU',
  dateModified: new Date().toISOString(),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeClient />
    </>
  )
}
