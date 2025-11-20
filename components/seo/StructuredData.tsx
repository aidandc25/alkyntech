import Script from 'next/script'

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema - Use globally
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AlkynTech',
  alternateName: 'AlkynTech LLC',
  url: 'https://alkyntech.com',
  logo: 'https://alkyntech.com/logo.png',
  description: 'Premium web development and intelligent automation services for businesses worldwide. Custom websites, workflow automation, and technical consulting.',
  email: 'info@alkyntech.com',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'AlkynTech',
  },
  sameAs: [
    'https://www.linkedin.com/in/aidan-da-costa/',
    // Add other social profiles here
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@alkyntech.com',
    contactType: 'Customer Service',
    availableLanguage: 'English',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    name: 'Worldwide',
  },
}

// Service Schema - Web Development
export const webDevelopmentServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development',
  description: 'Custom website design and development services including responsive design, e-commerce, payment integration, and SEO optimization.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'AlkynTech',
    url: 'https://alkyntech.com',
  },
  serviceType: 'Web Development',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development',
          description: 'Premium custom websites built with modern technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Solutions',
          description: 'Online stores with payment processing and inventory management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description: 'Search engine optimization to improve visibility',
        },
      },
    ],
  },
}

// Service Schema - Automation
export const automationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workflow Automation',
  description: 'Intelligent workflow automation services including email automation, CRM integration, chatbots, and custom automation solutions.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'AlkynTech',
    url: 'https://alkyntech.com',
  },
  serviceType: 'Business Automation',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Email Automation',
          description: 'Automated email sequences and follow-ups',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbot Integration',
          description: '24/7 customer support with AI-powered chatbots',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM Integration',
          description: 'Connect and automate your business tools',
        },
      },
    ],
  },
}

// FAQ Schema for Services Page
export const servicesFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects are delivered as quick as a week, depending on complexity and scope. Speed prioritized without compromising quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are long-term contracts required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! Projects are handled on a per-project basis with no long-term commitments. Pay only for what you need, when you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies are used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern, proven technologies like React, Next.js, Node.js, and various AI/automation tools to build fast, scalable solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ongoing support provided?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Maintenance and support packages are available to keep your website running smoothly and up-to-date after launch.',
      },
    },
  ],
}

// Breadcrumb Schema Helper
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
