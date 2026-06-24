import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre · Ramon Oliveira · Designer de Marca',
  description: 'Ramon Oliveira chegou no design por acaso e ficou porque viu que toda marca tem potencial quando bem trabalhada. Designer de marca em Angra dos Reis.',
}

export default function SobrePage() {
  return (
    <main style={{ paddingTop: '8rem' }}>

      {/* HEADER */}
      <section style={{ padding: '8rem 4rem 6rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-didot)',
              fontSize: '0.85rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--blue)',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}>
              Sobre
            </div>
            <h1 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(2.5rem,5vw,4.5rem)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}>
              Ramon Oliveira
            </h1>
            <p style={{
              fontFamily: 'var(--font-didot)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}>
              Designer de marca. Angra dos Reis.
            </p>
          </div>

          {/* Foto — slot reservado */}
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            background: 'var(--surface)',
            overflow: 'hidden',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hero-ramon.jpg"
              alt="Ramon Oliveira — Designer de Marca"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            paddingTop: '0.4rem',
          }}>
            Trajetória
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--off)', lineHeight: 1.8 }}>
              Cheguei no design por acaso. Fiquei porque percebi que toda marca tem potencial quando bem ajustada — e que a maioria dos negócios nunca chega perto disso.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Com o tempo, entendi que o problema raramente é estético. É estratégico. Uma marca que não comunica valor antes da conversa acontecer já começa em desvantagem — competindo por preço quando poderia competir por posicionamento.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Trabalho em Angra dos Reis e atendo em todo o Brasil. A distância nunca foi obstáculo — o que importa é o processo, e ele funciona da mesma forma independente de onde o cliente está.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            paddingTop: '0.4rem',
          }}>
            Como trabalho
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--off)', lineHeight: 1.8 }}>
              Acompanho o cliente em toda a jornada — e valido cada fase antes de avançar. Não entrego arquivos no final e sumo. Entrego decisões justificadas ao longo do processo.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Explico o porquê de cada escolha. Cor, forma, tipografia — nada é arbitrário. Quando você entende a lógica por trás do sistema, fica mais fácil usá-lo bem e defender o valor da sua marca.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Prefiro trabalhar com quem confia no processo. Não porque quero controle — mas porque projetos bons nascem de colaboração, não de disputa. Se você já sabe exatamente como a marca tem que ser antes de conversar, provavelmente não precisa de mim.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE ENTREGO */}
      <section style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '4rem',
          }}>
            O que entrego
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
          }}>
            {[
              {
                label: 'Não só arquivos',
                text: 'Você recebe um sistema visual completo com regras claras de uso. Qualquer fornecedor consegue aplicar os materiais com consistência.',
              },
              {
                label: 'Não só estética',
                text: 'Cada decisão visual parte de uma estratégia. A marca reflete o posicionamento — não o gosto pessoal do designer.',
              },
              {
                label: 'Não só o começo',
                text: 'Acompanho a implementação. Uma marca entregue sem suporte não garante consistência — e consistência é o que constrói reconhecimento.',
              },
            ].map((item) => (
              <div key={item.label} style={{ background: 'var(--black)', padding: '3rem' }}>
                <div style={{
                  fontFamily: 'var(--font-didot)',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: 'var(--blue)',
                  marginBottom: '1rem',
                }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}
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
          maxWidth: 560,
          margin: '0 auto 1.5rem',
        }}>
          Se faz sentido, vamos conversar.
        </h2>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--muted)',
          maxWidth: 400,
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          Uma conversa rápida para entender o seu negócio e ver se tem fit para trabalharmos juntos.
        </p>
        <a
          href="https://wa.me/5524993127696"
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
