import type { Metadata } from 'next'
import TermsClient from './TermsClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'RoofShelter Terms and Conditions for roofing services in Sydney NSW. Read our service agreement, payment terms, warranties, and consumer rights under Australian Consumer Law.',
  alternates: { canonical: `${siteUrl}/terms` },
  openGraph: {
    url: `${siteUrl}/terms`,
    title: 'Terms & Conditions | RoofShelter Sydney',
    description: 'Read RoofShelter\'s Terms and Conditions for roofing services across Sydney NSW, including warranties, payment terms and Australian Consumer Law rights.',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: `${siteUrl}/terms`,
  name: 'Terms & Conditions – RoofShelter',
  description: 'Terms and Conditions for RoofShelter roofing services in Sydney NSW.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',              item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Terms & Conditions', item: `${siteUrl}/terms` },
    ],
  },
  inLanguage: 'en-AU',
  dateModified: new Date().toISOString(),
}

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TermsClient />
    </>
  )
}
