import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre · Design by Ramon · Branding Estratégico',
  description: 'Conheça Ramon Oliveira, designer de marca com mais de 7 anos de experiência em branding estratégico e identidade visual para negócios em Angra dos Reis e além.',
}

export default function SobrePage() {
  return (
    <main style={{ paddingTop: '8rem' }}>
      <section style={{ padding: '8rem 4rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Sobre
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          Em breve
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
          Esta página está sendo preparada. Em breve você vai encontrar aqui a história por trás da Design by Ramon.
        </p>
      </section>
    </main>
  )
}
