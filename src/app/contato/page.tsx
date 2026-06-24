import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato · Design by Ramon · Agende uma Conversa',
  description: 'Vamos conversar sobre o seu projeto. Identidade visual estratégica para negócios que querem parar de competir por preço.',
}

export default function ContatoPage() {
  return (
    <main style={{ paddingTop: '8rem' }}>
      <section style={{ padding: '8rem 4rem', borderTop: '1px solid var(--border)', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-didot)', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Contato
        </div>
        <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Vamos construir<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>sua marca juntos.</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
          O primeiro passo é uma conversa. Sem compromisso, sem formulário longo. Manda uma mensagem direta no WhatsApp ou usa o formulário abaixo.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <a
            href="https://wa.me/5524993127696"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}
          >
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>WhatsApp</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 400 }}>(24) 99312-7696</div>
            </div>
            <span style={{ color: 'var(--blue)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Enviar mensagem →</span>
          </a>

          <a
            href="https://instagram.com/designbyramon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}
          >
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Instagram</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 400 }}>@designbyramon</div>
            </div>
            <span style={{ color: 'var(--blue)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Ver perfil →</span>
          </a>
        </div>
      </section>
    </main>
  )
}
