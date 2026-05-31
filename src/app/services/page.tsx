import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.roofshelter.com.au'

export const metadata: Metadata = {
  title: 'Roofing Services Sydney – Residential, Commercial & Emergency',
  description: 'Complete roofing services in Sydney NSW: residential roofing from $8,500, commercial roofing, roof restoration from $4,200, 24/7 emergency repairs, gutter systems & solar integration. Licensed & insured.',
  keywords: [
    'residential roofing sydney', 'commercial roofing sydney', 'roof restoration sydney',
    'emergency roof repairs sydney', 'gutter systems sydney', 'solar roofing sydney',
    'roof repair sydney price', 'roof replacement cost sydney',
  ],
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    url: `${siteUrl}/services`,
    title: 'Roofing Services Sydney – Complete Solutions | RoofShelter',
    description: 'Residential roofing from $8,500, commercial roofing, roof restoration, 24/7 emergency repairs, gutters & solar. Licensed Sydney roofers.',
    images: [{ url: '/images/heroServices.png', width: 1200, height: 630, alt: 'RoofShelter roofing services Sydney NSW' }],
  },
}

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/services#webpage`,
  url: `${siteUrl}/services`,
  name: 'Roofing Services Sydney – RoofShelter',
  description: 'Comprehensive roofing services in Sydney NSW including residential, commercial, restoration, emergency and solar roofing.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
    ],
  },
  inLanguage: 'en-AU',
  dateModified: new Date().toISOString(),
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roofing Services by RoofShelter Sydney',
  description: 'Professional roofing services available in Sydney NSW',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Residential Roofing',
        description: 'Complete home roofing solutions including new installations, repairs, and maintenance for all roof types in Sydney NSW.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        offers: {
          '@type': 'Offer',
          price: '8500',
          priceCurrency: 'AUD',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '8500', priceCurrency: 'AUD' },
        },
        url: `${siteUrl}/services`,
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Commercial Roofing',
        description: 'Professional commercial roofing services for businesses, warehouses, and industrial facilities in Sydney.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        url: `${siteUrl}/services`,
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Roof Restoration',
        description: 'Extend your roof lifespan with professional restoration and coating services in Sydney NSW.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        offers: {
          '@type': 'Offer',
          price: '4200',
          priceCurrency: 'AUD',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '4200', priceCurrency: 'AUD' },
        },
        url: `${siteUrl}/services`,
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'EmergencyService',
        name: 'Emergency Roof Repairs',
        description: '24/7 emergency roofing services for storm damage and leaks in Sydney NSW.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        offers: {
          '@type': 'Offer',
          price: '350',
          priceCurrency: 'AUD',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '350', priceCurrency: 'AUD' },
        },
        url: `${siteUrl}/services`,
        availableChannel: {
          '@type': 'ServiceChannel',
          servicePhone: '+61434115094',
          availableLanguage: 'en',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Gutter Systems',
        description: 'Complete gutter installation, repair and maintenance services in Sydney NSW.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        offers: {
          '@type': 'Offer',
          price: '1800',
          priceCurrency: 'AUD',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '1800', priceCurrency: 'AUD' },
        },
        url: `${siteUrl}/services`,
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Solar Integration',
        description: 'Solar-ready roofing installations and retrofits for energy efficiency in Sydney.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: 'Sydney, NSW, Australia',
        offers: {
          '@type': 'Offer',
          price: '12000',
          priceCurrency: 'AUD',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '12000', priceCurrency: 'AUD' },
        },
        url: `${siteUrl}/services`,
      },
    },
  ],
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  )
}
