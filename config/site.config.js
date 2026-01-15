/**
 * PTW Site Configuration
 * Centralized configuration for SEO, meta tags, and site-wide settings
 * Edit this file to customize your site's metadata
 */

export const siteConfig = {
  // Basic Site Info
  site: {
    name: 'Prove Them Wrong',
    shortName: 'PTW',
    url: 'https://provethemwrong.now',
    language: 'en',
    locale: 'en_US'
  },

  // SEO & Meta
  meta: {
    title: 'Prove Them Wrong | Software Development & Developer Academy | Durham, NC',
    description: 'Social enterprise software agency + developer academy in Durham, NC. Custom software, AI apps, mobile development. Enhanced support for nonprofits & underserved businesses. Launch your tech career.',
    keywords: 'software development, web development, Durham NC, Raleigh NC, Triangle, developer academy, coding bootcamp, nonprofit technology, POC-led business, social enterprise',
    author: 'Prove Them Wrong',
    robots: 'index, follow'
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    title: 'Prove Them Wrong | Software Development & Developer Academy',
    description: 'Social enterprise software agency + developer academy. Custom software, AI apps, mobile development. Enhanced discounts for nonprofits & POC-led businesses.',
    image: '/og-image.png'
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Prove Them Wrong | Software Development & Developer Academy',
    description: 'Social enterprise software agency + developer academy. Custom software, AI apps, mobile development. Enhanced discounts for nonprofits & POC-led businesses.',
    image: '/og-image.png'
  },

  // Location / Geo
  geo: {
    region: 'US-NC',
    placename: 'Durham',
    position: '35.9940;-78.8986',
    icbm: '35.9940, -78.8986'
  },

  // Contact Info
  contact: {
    email: 'hello@provethemwrong.now',
    phone: '+1-574-298-4881',
    address: {
      locality: 'Durham',
      region: 'NC',
      country: 'US'
    }
  },

  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/in/eugene-s-59352b1a4/'
  },

  // Business Info (for JSON-LD)
  business: {
    priceRange: '$2,500 - $7,000',
    areasServed: ['Durham', 'Raleigh', 'Chapel Hill'],
    services: [
      'Custom Software Development',
      'AI-Enabled Applications',
      'Mobile App Development',
      'CRM Integration'
    ]
  },

  // Assets
  assets: {
    logo: '/logo.png',
    ogImage: '/og-image.png',
    favicon: '/favicon.ico'
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX' // Replace with your actual GA4 ID
  },

  // Fonts (Google Fonts)
  fonts: {
    families: [
      'Bebas Neue',
      'DM Sans:ital,wght@0,400;0,500;0,600;0,700;1,400',
      'Space Mono:wght@400;700',
      'Playfair Display:ital,wght@0,700;1,700'
    ]
  },

  // Preconnect URLs
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com'
  ],

  // DNS Prefetch URLs
  dnsPrefetch: [
    'https://api.hsforms.com'
  ]
};

export default siteConfig;
