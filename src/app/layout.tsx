import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://designbyramon.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Design by Ramon · Identidade Visual Estratégica · Angra dos Reis',
    template: '%s · Design by Ramon',
  },
  description: 'Identidade visual completa com estratégia de marca, sistema visual e brand book. Para negócios que querem parar de competir por preço e transmitir valor real.',
  keywords: ['identidade visual', 'branding', 'design de marca', 'brand book', 'Angra dos Reis', 'Costa Verde', 'designer'],
  authors: [{ name: 'Ramon Oliveira', url: BASE_URL }],
  creator: 'Ramon Oliveira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Design by Ramon',
    title: 'Design by Ramon · Identidade Visual Estratégica',
    description: 'Identidade visual completa com estratégia de marca, sistema visual e brand book. Para negócios que querem parar de competir por preço.',
    images: [
      {
        url: '/img/hero-ramon.jpg',
        width: 1200,
        height: 630,
        alt: 'Ramon Oliveira — Designer de Marca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design by Ramon · Identidade Visual Estratégica',
    description: 'Identidade visual completa com estratégia de marca, sistema visual e brand book.',
    images: ['/img/hero-ramon.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#ramon`,
      name: 'Ramon Oliveira',
      url: BASE_URL,
      jobTitle: 'Designer de Marca',
      description: 'Designer de marca especializado em identidade visual estratégica. Atende negócios em Angra dos Reis e em todo o Brasil.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Angra dos Reis',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
      sameAs: [
        'https://instagram.com/designbyramon',
        'https://wa.me/5524993127696',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: 'Design by Ramon',
      url: BASE_URL,
      telephone: '+55-24-99312-7696',
      description: 'Identidade visual completa com estratégia de marca, sistema visual e brand book. Para negócios que querem parar de competir por preço.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Angra dos Reis',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
      founder: { '@id': `${BASE_URL}/#ramon` },
      priceRange: 'R$3.500 – R$12.500',
      serviceArea: {
        '@type': 'Country',
        name: 'Brasil',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Branding',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Identidade Visual Completa',
              description: 'Estratégia de marca, sistema visual e brand book.',
              url: `${BASE_URL}/identidade-visual`,
            },
            price: '5000',
            priceCurrency: 'BRL',
          },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
