import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Identidade Visual · Design by Ramon · R$ 5.000',
  description: 'Identidade visual completa com estratégia de marca, sistema visual e brand book. Para negócios que querem parar de competir por preço.',
}

export default function IdentidadeVisualPage() {
  return (
    <main style={{ paddingTop: '8rem' }}>
      <section style={{ padding: '8rem 4rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Serviço
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          Identidade Visual
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
          Esta página está sendo preparada com detalhes completos do serviço, processo e investimento.
        </p>
      </section>
    </main>
  )
}
