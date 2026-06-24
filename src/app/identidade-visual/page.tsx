import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Identidade Visual Completa · Design by Ramon · R$ 5.000',
  description: 'Estratégia de marca, sistema visual e brand book. Para negócios que querem parar de competir por preço e transmitir valor real.',
}

const INCLUDES = [
  {
    number: '01',
    title: 'Estratégia de Marca',
    text: 'Antes de desenhar qualquer coisa, entendemos o negócio: público, posicionamento, diferencial e o que a marca precisa comunicar. Sem estratégia, é só decoração.',
  },
  {
    number: '02',
    title: 'Sistema Visual Completo',
    text: 'Logo em todas as variações necessárias. Paleta de cores com regras de uso. Tipografia com hierarquia definida. Elementos gráficos. Tudo construído para escalar — de cartão de visita a outdoor.',
  },
  {
    number: '03',
    title: 'Brand Book',
    text: 'Manual de marca com as regras do sistema. Você ou qualquer fornecedor consegue aplicar os materiais com consistência — sem improvisar, sem distorcer.',
  },
]

const PROCESS = [
  {
    step: '1',
    title: 'Conversa',
    text: 'Uma chamada para entender o negócio, o momento atual e o que você quer construir. Não é briefing de agência — é conversa direta.',
  },
  {
    step: '2',
    title: 'Pesquisa e Estratégia',
    text: 'Análise de mercado, posicionamento e definição do território visual. Validamos cada direção antes de avançar para o design.',
  },
  {
    step: '3',
    title: 'Criação e Validação',
    text: 'Desenvolvimento do sistema visual com apresentação estruturada. Você entende o porquê de cada decisão — e aprova antes de fechar.',
  },
]

export default function IdentidadeVisualPage() {
  return (
    <main style={{ paddingTop: '8rem' }}>

      {/* HEADER */}
      <section style={{ padding: '8rem 4rem 6rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--font-didot)',
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--blue)',
            marginBottom: '1.5rem',
            fontStyle: 'italic',
          }}>
            Serviço principal
          </div>
          <h1 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(2.5rem,5vw,4.5rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            maxWidth: 700,
          }}>
            Identidade Visual Completa
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--muted)',
            lineHeight: 1.7,
            maxWidth: 540,
            marginBottom: '3rem',
          }}>
            Para negócios que querem parar de competir por preço. Uma marca que comunica valor antes mesmo de você abrir a boca.
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--off)',
              letterSpacing: '-0.02em',
            }}>
              R$ 5.000
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
              investimento único
            </span>
          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '4rem',
          }}>
            O que está incluído
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
          }}>
            {INCLUDES.map((item) => (
              <div key={item.number} style={{ background: 'var(--black)', padding: '3rem' }}>
                <div style={{
                  fontFamily: 'var(--font-didot)',
                  fontSize: '0.75rem',
                  color: 'var(--blue)',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                }}>
                  {item.number}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: 'var(--off)',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              Para quem é
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--off)', lineHeight: 1.8 }}>
              Negócios que já existem — ou estão prestes a existir — e sabem que a aparência importa tanto quanto o serviço. Profissionais, empresas e projetos que querem transmitir valor antes da conversa acontecer.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
              Você não precisa saber o que quer visualmente. Precisa saber o que quer construir. O resto é o trabalho de Ramon.
            </p>
          </div>
          <div>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              Para quem não é
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Quem precisa de um logo rápido para ontem. Quem já decidiu como a marca tem que ser antes de conversar. Quem quer mandar no projeto — e não confiar no processo.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '1.5rem', opacity: 0.6 }}>
              Ser direto sobre isso poupa tempo dos dois lados.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '4rem',
          }}>
            Como funciona
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {PROCESS.map((p) => (
              <div key={p.step} style={{
                background: 'var(--black)',
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: '4rem 1fr',
                gap: '2rem',
                alignItems: 'start',
              }}>
                <div style={{
                  fontFamily: 'var(--font-didot)',
                  fontSize: '2.5rem',
                  color: 'var(--border)',
                  lineHeight: 1,
                  fontStyle: 'italic',
                }}>
                  {p.step}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'var(--off)',
                    marginBottom: '0.75rem',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 600 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRAZO + INVESTIMENTO */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
          <div style={{ background: 'var(--black)', padding: '3rem' }}>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
            }}>
              Prazo
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '2rem',
              fontWeight: 400,
              color: 'var(--off)',
              marginBottom: '0.75rem',
            }}>
              3 a 5 semanas
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              Depende da complexidade e do ritmo de aprovação. Cada fase é validada antes de avançar — sem pressa que comprometa o resultado.
            </p>
          </div>
          <div style={{ background: 'var(--black)', padding: '3rem' }}>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
            }}>
              Investimento
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '2rem',
              fontWeight: 400,
              color: 'var(--off)',
              marginBottom: '0.75rem',
            }}>
              R$ 5.000
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              50% na aprovação do projeto, 50% na entrega final. Inclui todos os arquivos em formatos necessários para uso profissional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 4rem', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-didot)',
          fontSize: '0.85rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--blue)',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}>
          Próximo passo
        </div>
        <h2 style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.8rem,3.5vw,3rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          maxWidth: 600,
          margin: '0 auto 1.5rem',
        }}>
          Começa com uma conversa.
        </h2>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--muted)',
          maxWidth: 420,
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          Sem formulário longo. Sem proposta genérica. Uma conversa para entender se faz sentido trabalhar juntos.
        </p>
        <a
          href="https://wa.me/5524993127696?text=Ol%C3%A1%20Ramon%2C%20tenho%20interesse%20na%20identidade%20visual%20completa."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--black)',
            background: 'var(--off)',
            padding: '1rem 2rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Falar com Ramon →
        </a>
      </section>

    </main>
  )
}
