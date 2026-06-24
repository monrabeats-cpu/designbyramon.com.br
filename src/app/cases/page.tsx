import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cases · Design by Ramon · Estudos de Caso',
  description: 'Estudos de caso completos de branding e identidade visual. Veja o processo, a estratégia e os resultados de cada projeto.',
}

const cases = [
  {
    slug: 'thais-favilla',
    client: 'Dra. Thais Favilla',
    category: 'Psiquiatria · Saúde Mental',
    title: 'Psiquiatria Humanizada',
    description: 'Identidade visual e estratégia de marca para psiquiatra com foco em humanização e acolhimento.',
    img: '/img/thais-portfolio.jpg',
  },
  {
    slug: 'g10-academia',
    client: 'G10 Academia',
    category: 'Fitness · Academia',
    title: 'Identidade que transmite força',
    description: 'Sistema visual completo para academia com identidade que reflete performance e comunidade.',
    img: '/img/g10-portfolio.jpg',
  },
  {
    slug: 'toof-challenge-day',
    client: 'TOOF Challenge Day',
    category: 'Evento · Cultura Urbana',
    title: 'Cultura de Rua',
    description: 'Identidade visual para evento de skate e BMX que captura a essência da cultura urbana.',
    img: '/img/toof-portfolio.jpg',
  },
  {
    slug: 'green-coast-tour',
    client: 'Green Coast Tour',
    category: 'Turismo · Transfer Premium',
    title: 'Natureza com sofisticação',
    description: 'Branding completo para serviço de transfer premium na Costa Verde com posicionamento de luxo acessível.',
    img: '/img/greencoast-portfolio.jpg',
  },
]

export default function CasesPage() {
  return (
    <main style={{ paddingTop: '8rem' }}>
      <section style={{ padding: '8rem 4rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Projetos
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.02em', maxWidth: 700, marginBottom: '1rem' }}>
          Cases com contexto.<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>Não só imagens.</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginBottom: '4rem' }}>
          Cada projeto tem uma história. Um problema real, uma decisão estratégica, um resultado concreto.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {cases.map(c => (
            <Link key={c.slug} href={`/cases/${c.slug}`} style={{ textDecoration: 'none', color: 'inherit', background: 'var(--black)', display: 'block', overflow: 'hidden', position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.client} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s var(--ease)' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{c.category}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{c.client} · {c.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c.description}</div>
                <div style={{ marginTop: '1.5rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)' }}>Ver case completo →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
