import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoofShelter – Professional Roofing Sydney',
    short_name: 'RoofShelter',
    description: 'Expert residential & commercial roofing services in Sydney NSW. Licensed & insured.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FF6B35',
    icons: [
      {
        src: '/images/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['construction', 'business', 'home'],
    lang: 'en-AU',
    dir: 'ltr',
  }
}
