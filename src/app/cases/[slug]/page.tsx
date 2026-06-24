import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type NarrativeBlock =
  | { type: 'context' | 'insight' | 'decision' | 'result'; label: string; text: string }

const CASES: Record<string, {
  client: string
  category: string
  headline: string
  description: string
  deliverables: string
  narrative: NarrativeBlock[]
  images: string[]
}> = {
  'thais-favilla': {
    client: 'Dra. Thais Favilla',
    category: 'Psiquiatria · Saúde Mental',
    headline: 'Como transformamos um elefante em uma marca que cuida',
    description: 'A Dra. Thais tinha uma logo e só isso. Sem sistema, sem identidade, sem possibilidade de aplicação profissional. O projeto foi construir uma marca inteira a partir de um símbolo que ela não queria abandonar.',
    deliverables: 'Identidade visual completa · Brand book · Sistema de papelaria · Templates de comunicação',
    narrative: [
      {
        type: 'context',
        label: 'O ponto de partida',
        text: 'A Dra. Thais chegou com uma logo. Só uma logo. Um elefante com óculos — feito com carinho, mas sem sistema, sem estratégia, sem possibilidade de aplicação profissional em nenhuma superfície. Ela queria atualizar a marca, mas não abrir mão do elefante: os pacientes reconheciam, ela tinha afeto genuíno pela figura.',
      },
      {
        type: 'insight',
        label: 'O que o briefing não diz',
        text: 'As pessoas não voltam para a consulta por causa do elefante. Voltam pela Thais — pelo acolhimento, pela escuta, pela segurança que ela transmite. O elefante era um símbolo de afeto interno. A marca precisava ser uma ferramenta de comunicação.',
      },
      {
        type: 'decision',
        label: 'A decisão estratégica',
        text: 'Simplificamos o elefante até ele virar geometria limpa — aplicável em qualquer superfície, qualquer escala. E criamos o sistema que faltava: quatro elementos gráficos que contam a jornada do paciente. Linhas contínuas — no início embaralhadas, representando a confusão do primeiro contato. À medida que avançam, os traços se tornam fluidos. Da desordem à clareza. O processo natural de um acompanhamento bem-feito, traduzido em forma.',
      },
      {
        type: 'result',
        label: 'O que foi entregue',
        text: 'Sistema completo de comunicação: pasta, timbrado, template de Google Doc, todos os pontos de contato pensados para que a Dra. Thais se apresente com consistência — do primeiro e-mail ao último documento entregue ao paciente.',
      },
    ],
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
    headline: 'Quando a cor do equipamento determina a identidade visual',
    description: 'Um desafio incomum: a academia já tinha encomendado equipamentos em uma cor específica antes de ter identidade visual. O projeto começou de trás para frente.',
    deliverables: 'Identidade visual · Sistema de cores · Uniforme · Papelaria · Brand book',
    narrative: [
      {
        type: 'context',
        label: 'Um problema fora do padrão',
        text: 'A G10 chegou com um desafio que poucos clientes têm: tinham encomendado equipamentos em um verde específico, de difícil revenda. A identidade visual precisaria partir desse verde — não o contrário. A marca teria que abraçar uma cor que já existia antes dela.',
      },
      {
        type: 'decision',
        label: 'O processo',
        text: 'Desenhei um escudo robusto sintetizando o G10 — posicionamento de força, identidade que comunica comunidade e performance. O cliente aprovou o conceito e as cores. Mas queria também um braço forte na marca. Literalmente. Nem todo projeto termina exatamente como você planejou. Às vezes o cliente sabe o que quer e o trabalho é executar bem o que foi pedido.',
      },
      {
        type: 'result',
        label: 'Impacto imediato',
        text: 'Uniforme, material impresso, sistema completo. Quando a equipe saiu uniformizada pela primeira vez, o efeito foi instantâneo — academia com presença visual coesa, equipamentos e comunicação integrados. O desafio que ficou: o manual de marca existe, mas nem sempre é seguido por quem aplica os materiais.',
      },
    ],
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
    headline: 'Uma silhueta, um skatista, uma marca feita de dentro',
    description: 'O TOOF Challenge Day não nasceu como um projeto de marketing. Nasceu de uma galera. A marca foi feita para refletir isso — partir de dentro da cultura, não interpretar de fora.',
    deliverables: 'Identidade visual do evento · Backdrop · Banners · Uniforme · Crachá · Adesivos · Sinalização',
    narrative: [
      {
        type: 'context',
        label: 'De onde veio a ideia',
        text: 'O TOOF Challenge Day nasceu de uma galera de skate e BMX — de quem vivia aquilo, ensinava crianças a andarem de skate, construía uma cena. Leandro Olhadinha, um dos idealizadores do projeto, não sabia que um dia viraria uma marca.',
      },
      {
        type: 'decision',
        label: 'A decisão que definiu tudo',
        text: 'A silhueta central da marca veio de uma foto dele. Sintetizada, simplificada, transformada em identidade. A lógica era direta: criar reconhecimento instantâneo com quem já fazia parte daquela cultura. Não representar o skate de fora — partir de uma pessoa real que estava dentro.',
      },
      {
        type: 'insight',
        label: 'Por que funcionou',
        text: 'Marcas de eventos de cultura urbana costumam errar na tentativa de parecer autênticas. Aqui não havia tentativa — havia autenticidade. A figura era real, a história era real, a galera reconhecia porque era deles.',
      },
      {
        type: 'result',
        label: 'Presença do início ao fim',
        text: 'Backdrop, banner, testeira, uniforme, adesivo, crachá. O evento teve identidade visual coerente em todos os pontos de contato — e a marca foi bem recebida pelo público porque ela pertencia àquele espaço.',
      },
    ],
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
    headline: 'Do zero ao refinado: construindo uma marca antes do negócio',
    description: 'Não havia logo, não havia material, não havia histórico. Havia uma ideia clara: ser a referência premium de transfer na Costa Verde. O projeto foi construir uma marca à altura dessa ambição.',
    deliverables: 'Identidade visual completa · Sistema de cores · Tipografia · Elementos gráficos · Brand book',
    narrative: [
      {
        type: 'context',
        label: 'Começar do zero',
        text: 'O Green Coast Tour não tinha nada além de uma visão: ser a marca premium de transfer na Costa Verde — atender clientes de hotéis, pousadas e resorts com um serviço que transmitisse sofisticação sem ser inacessível. Sem logo anterior, sem referência visual, sem histórico. O projeto começou de uma ideia.',
      },
      {
        type: 'decision',
        label: 'O elemento que definiu tudo',
        text: 'A decisão central foi usar um elemento da natureza local como símbolo de mobilidade. Uma folha de costela-de-adão — geometrizada, sintetizada em um quadrado limpo. Natural e refinado ao mesmo tempo. Um elemento que pertence à Costa Verde, transformado em logotipo. Natureza com sofisticação — não apenas um conceito, mas a forma da marca.',
      },
      {
        type: 'result',
        label: 'Onde o projeto está',
        text: 'A identidade foi entregue e validada. A expansão para novos materiais e canais depende de uma fase financeira que o cliente ainda está atravessando. A marca está pronta para crescer. O negócio, construindo as bases para isso.',
      },
    ],
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

const labelColors: Record<string, string> = {
  context: 'var(--muted)',
  insight: 'var(--blue)',
  decision: 'var(--off)',
  result: 'var(--blue)',
}

export default async function CaseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = CASES[slug]
  if (!c) notFound()

  return (
    <main style={{ paddingTop: '8rem' }}>
      {/* HEADER */}
      <section style={{ padding: '8rem 4rem 4rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          {c.category}
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 800, marginBottom: '2rem' }}>
          {c.headline}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {c.description}
        </p>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          {c.deliverables}
        </div>
      </section>

      {/* HERO IMAGE */}
      <div style={{ padding: '0 4rem' }}>
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.images[0]}
            alt={c.client}
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* NARRATIVE */}
      <section style={{ padding: '6rem 4rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {c.narrative.map((block, i) => (
            <div
              key={i}
              style={{
                background: 'var(--black)',
                padding: '3rem',
                gridColumn: block.type === 'decision' ? '1 / -1' : 'auto',
              }}
            >
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: labelColors[block.type] || 'var(--muted)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-didot)',
                fontStyle: 'italic',
              }}>
                {block.label}
              </div>
              <p style={{
                fontSize: block.type === 'decision' ? '1.05rem' : '0.9rem',
                lineHeight: 1.75,
                color: block.type === 'decision' ? 'var(--off)' : 'var(--muted)',
                maxWidth: block.type === 'decision' ? 760 : 'none',
              }}>
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section style={{ padding: '0 4rem 8rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2rem' }}>
          Aplicações
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {c.images.slice(1).map((img, i) => (
            <div key={img} style={{ background: 'var(--black)', overflow: 'hidden', aspectRatio: '4/3' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${c.client} — aplicação ${i + 2}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 4rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Próximo passo
        </div>
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Seu negócio tem o mesmo potencial.
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Cada marca que construí começou com uma conversa. Vamos ter a sua?
        </p>
        <a
          href="https://wa.me/5524993127696"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--off)', padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}
        >
          Falar com Ramon →
        </a>
      </section>
    </main>
  )
}
