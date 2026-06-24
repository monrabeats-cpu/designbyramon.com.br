import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const CASES: Record<string, {
  client: string
  category: string
  headline: string
  description: string
  images: string[]
}> = {
  'thais-favilla': {
    client: 'Dra. Thais Favilla',
    category: 'Psiquiatria · Saúde Mental',
    headline: 'Como construímos uma identidade que humaniza a psiquiatria',
    description: 'Identidade visual e estratégia de marca para psiquiatra com foco em humanização e acolhimento.',
    images: [
      '/img/thais-portfolio.jpg',
      '/img/thais-estrategia.jpg',
      '/img/thais-sistema-visual.jpg',
      '/img/thais-case-logovars.jpg',
      '/img/thais-case-cores.jpg',
      '/img/thais-case-lobby.jpg',
      '/img/thais-brandbook.jpg',
      '/img/thais-case-bag.jpg',
    ],
  },
  'g10-academia': {
    client: 'G10 Academia',
    category: 'Fitness · Academia',
    headline: 'Como a G10 Academia ganhou uma identidade à altura da sua comunidade',
    description: 'Sistema visual completo para academia com identidade que reflete performance e comunidade.',
    images: [
      '/img/g10-portfolio.jpg',
      '/img/g10-estrategia.jpg',
      '/img/g10-case-logovars.jpg',
      '/img/g10-case-cores.jpg',
      '/img/g10-case-honeycomb.jpg',
      '/img/g10-case-garrafa.jpg',
      '/img/g10-sinalizacao.png',
      '/img/g10-case-social.jpg',
      '/img/g10-brandbook.jpg',
    ],
  },
  'toof-challenge-day': {
    client: 'TOOF Challenge Day',
    category: 'Evento · Cultura Urbana',
    headline: 'Como o TOOF transformou um evento de rua em marca reconhecível',
    description: 'Identidade visual para evento de skate e BMX que captura a essência da cultura urbana.',
    images: [
      '/img/toof-portfolio.jpg',
      '/img/toof-estrategia.jpg',
      '/img/toof-case-logovars.jpg',
      '/img/toof-case-cores.jpg',
      '/img/toof-case-graffiti.jpg',
      '/img/toof-case-stage.jpg',
      '/img/toof-case-festival.jpg',
      '/img/toof-cracha.jpg',
      '/img/toof-brandbook.jpg',
    ],
  },
  'green-coast-tour': {
    client: 'Green Coast Tour',
    category: 'Turismo · Transfer Premium',
    headline: 'Como o Green Coast Tour posicionou a natureza com sofisticação',
    description: 'Branding completo para serviço de transfer premium na Costa Verde com posicionamento de luxo acessível.',
    images: [
      '/img/greencoast-portfolio.jpg',
      '/img/greencoast-estrategia.jpg',
      '/img/greencoast-case-cover.jpg',
      '/img/greencoast-case-logovars.jpg',
      '/img/greencoast-case-cores.jpg',
      '/img/greencoast-case-pattern.jpg',
      '/img/greencoast-uniforme.jpg',
      '/img/greencoast-case-signage.jpg',
      '/img/greencoast-case-card.jpg',
      '/img/greencoast-case-folder.jpg',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(CASES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = CASES[slug]
  if (!c) return {}
  return {
    title: `${c.client} · Cases · Design by Ramon`,
    description: c.description,
  }
}

export default async function CaseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = CASES[slug]
  if (!c) notFound()

  return (
    <main style={{ paddingTop: '8rem' }}>
      <section style={{ padding: '8rem 4rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          {c.category}
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 800, marginBottom: '1.5rem' }}>
          {c.headline}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: '4rem' }}>
          {c.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {c.images.map((img, i) => (
            <div key={img} style={{ background: 'var(--black)', overflow: 'hidden', aspectRatio: i === 0 ? '16/9' : '4/3', gridColumn: i === 0 ? '1 / -1' : 'auto' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${c.client} — imagem ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '6rem', padding: '4rem', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
            Próximo passo
          </div>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Seu negócio tem o mesmo potencial.
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Cada marca que construí começou com uma conversa. Vamos ter a sua?
          </p>
          <a href="https://wa.me/5524993127696" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--off)', padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
            Falar com Ramon →
          </a>
        </div>
      </section>
    </main>
  )
}
