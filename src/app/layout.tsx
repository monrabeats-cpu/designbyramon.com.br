import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DBR · Design by Ramon · Branding Estratégico · Angra dos Reis',
  description: 'Branding estratégico, identidade visual e posicionamento para negócios que querem transmitir valor real e cobrar mais por isso.',
  openGraph: {
    title: 'Design by Ramon · Branding Estratégico',
    description: 'Identidade visual estratégica para negócios que querem parar de competir por preço.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
