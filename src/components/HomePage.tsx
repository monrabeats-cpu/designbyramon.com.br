'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import LogoSVG from './LogoSVG'

const LB_CASES: Record<string, { name: string; imgs: string[] }> = {
  thais: {
    name: 'Dra. Thais Favilla',
    imgs: [
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
  g10: {
    name: 'G10 Academia',
    imgs: [
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
  toof: {
    name: 'TOOF Challenge Day',
    imgs: [
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
  greencoast: {
    name: 'Green Coast Tour',
    imgs: [
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

const SERVICES = [
  { name: 'Identidade Visual Completa', price: 'R$3.5–5k', min: 3500, max: 5000, monthly: false },
  { name: 'Projeto de Branding Completo', price: 'R$8–12.5k', min: 8000, max: 12500, monthly: false },
  { name: 'Social Media · Gestão Visual', price: 'R$1.2–2.5k/mês', min: 1200, max: 2500, monthly: true },
  { name: 'Landing Page / Website', price: 'R$3–6k', min: 3000, max: 6000, monthly: false },
  { name: 'Brand Book / Manual de Marca', price: 'R$800–1.5k', min: 800, max: 1500, monthly: false },
  { name: 'Consultoria de Posicionamento', price: 'R$600–1.2k', min: 600, max: 1200, monthly: false },
]

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [loaderHidden, setLoaderHidden] = useState(false)
  const [heroIn, setHeroIn] = useState(false)
  const [openStep, setOpenStep] = useState(0)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [lbState, setLbState] = useState<{ key: string; idx: number } | null>(null)
  const [lbFade, setLbFade] = useState(false)

  const [formNome, setFormNome] = useState('')
  const [formWhats, setFormWhats] = useState('')
  const [formNeg, setFormNeg] = useState('')
  const [formSvc, setFormSvc] = useState('')
  const [formObs, setFormObs] = useState('')
  const [formBot, setFormBot] = useState('')
  const [errNome, setErrNome] = useState('')
  const [errWhats, setErrWhats] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const submitLogRef = useRef({ count: 0, lastAt: 0 })

  const revealedRef = useRef<Set<Element>>(new Set())
  const animatedStatsRef = useRef<Set<Element>>(new Set())
  const heroTextDoneRef = useRef(false)
  const lbarRef = useRef<HTMLDivElement>(null)
  const lbarwrapRef = useRef<HTMLDivElement>(null)
  const loaderLogoRef = useRef<HTMLDivElement>(null)
  const hcurtainRef = useRef<HTMLDivElement>(null)
  const hclogoRef = useRef<HTMLDivElement>(null)
  const hccueRef = useRef<HTMLDivElement>(null)
  const heroVeilRef = useRef<HTMLDivElement>(null)
  const lbImgRef = useRef<HTMLImageElement>(null)

  const slideTimersRef = useRef<ReturnType<typeof setInterval>[]>([])
  const [slideIdxes, setSlideIdxes] = useState([0, 0, 0])

  const triggerHeroText = useCallback(() => {
    if (heroTextDoneRef.current) return
    heroTextDoneRef.current = true
    setHeroIn(true)
  }, [])

  const animateCounter = useCallback((el: Element) => {
    if (animatedStatsRef.current.has(el)) return
    animatedStatsRef.current.add(el)
    const target = +(el as HTMLElement).dataset.target!
    const prefix = (el as HTMLElement).dataset.prefix || ''
    const suffix = (el as HTMLElement).dataset.suffix || ''
    const duration = 1200
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(eased * target)
      el.textContent = prefix + value + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [])

  const initReveal = useCallback(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (revealedRef.current.has(el)) return
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight - 80) {
        el.classList.add('in')
        revealedRef.current.add(el)
      }
    })
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight - 40) animateCounter(el)
    })
  }, [animateCounter])

  useEffect(() => {
    if (loaderLogoRef.current) {
      setTimeout(() => {
        if (loaderLogoRef.current) {
          loaderLogoRef.current.style.transition = 'opacity 0.9s var(--ease),transform 0.9s cubic-bezier(0.34,1.3,0.64,1)'
          loaderLogoRef.current.style.opacity = '1'
          loaderLogoRef.current.style.transform = 'scale(1)'
        }
      }, 120)
    }

    let pct = 0
    const intv = setInterval(() => {
      pct += Math.random() * 8 + 2
      if (pct >= 100) {
        pct = 100
        if (lbarRef.current) lbarRef.current.style.width = '100%'
        clearInterval(intv)
        setTimeout(() => {
          if (loaderLogoRef.current) {
            loaderLogoRef.current.style.transition = 'transform 0.5s cubic-bezier(0.76,0,0.24,1)'
            loaderLogoRef.current.style.transform = 'scale(1.12)'
          }
          if (lbarwrapRef.current) lbarwrapRef.current.style.opacity = '0'
        }, 200)
        setTimeout(() => {
          setLoaderHidden(true)
          const isMobile = window.innerWidth <= 1024
          if (isMobile) {
            if (hclogoRef.current) {
              hclogoRef.current.style.transition = 'opacity 0.8s var(--ease),transform 1s cubic-bezier(0.34,1.25,0.64,1)'
              hclogoRef.current.style.opacity = '1'
              hclogoRef.current.style.transform = 'scale(1)'
              setTimeout(() => { if (hclogoRef.current) hclogoRef.current.style.transition = 'none' }, 1200)
            }
            setTimeout(() => { if (hccueRef.current) hccueRef.current.style.opacity = '1' }, 900)
          } else {
            triggerHeroText()
          }
        }, 750)
        return
      }
      if (lbarRef.current) lbarRef.current.style.width = pct + '%'
    }, 60)

    return () => clearInterval(intv)
  }, [triggerHeroText])

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      const vh = window.innerHeight
      setNavScrolled(sy > 60)
      initReveal()

      const isMobile = window.innerWidth <= 1024
      if (!isMobile) { triggerHeroText(); return }

      const snap = vh * 0.4
      if (sy >= snap) {
        if (hcurtainRef.current) { hcurtainRef.current.style.opacity = '0'; hcurtainRef.current.style.pointerEvents = 'none' }
        if (heroVeilRef.current) heroVeilRef.current.style.opacity = '0'
        triggerHeroText()
      } else {
        if (hcurtainRef.current) {
          hcurtainRef.current.style.opacity = '1'
          hcurtainRef.current.style.pointerEvents = 'none'
          hcurtainRef.current.style.transform = `translateY(${-sy * 2}px)`
        }
        const prog = sy / snap
        if (heroVeilRef.current) heroVeilRef.current.style.opacity = `${Math.max(0, 1 - prog * 1.4)}`
        if (hclogoRef.current) {
          hclogoRef.current.style.transform = `translateY(${-sy * 0.8}px) scale(${Math.max(0.2, 1 - prog * 0.82)})`
          hclogoRef.current.style.opacity = `${Math.max(0, 1 - prog * 1.8)}`
        }
        if (hccueRef.current) hccueRef.current.style.opacity = `${Math.max(0, 1 - prog * 6)}`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [initReveal, triggerHeroText])

  useEffect(() => {
    slideTimersRef.current.forEach(t => clearInterval(t))
    slideTimersRef.current = [0, 1, 2].map(stepIdx => {
      return setInterval(() => {
        setSlideIdxes(prev => {
          const next = [...prev]
          next[stepIdx] = (prev[stepIdx] + 1) % 4
          return next
        })
      }, 3000)
    })
    return () => slideTimersRef.current.forEach(t => clearInterval(t))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false)
        setMobileMenuOpen(false)
        setLbState(null)
      }
      if (lbState) {
        if (e.key === 'ArrowLeft') lbGo(-1)
        if (e.key === 'ArrowRight') lbGo(1)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  useEffect(() => {
    document.body.style.overflow = (modalOpen || mobileMenuOpen || lbState) ? 'hidden' : ''
  }, [modalOpen, mobileMenuOpen, lbState])

  const lbGo = (dir: number) => {
    if (!lbState) return
    const imgs = LB_CASES[lbState.key].imgs
    setLbFade(true)
    setTimeout(() => {
      setLbState(prev => prev ? { ...prev, idx: (prev.idx + dir + imgs.length) % imgs.length } : null)
      setLbFade(false)
    }, 200)
  }

  const lbTouchXRef = useRef(0)

  const sanitize = (s: string) => s.replace(/[<>"'`;&\\]/g, '').substring(0, 500)
  const validPhone = (s: string) => /^[\d\s()\-+]{8,20}$/.test(s)
  const validName = (s: string) => s.length >= 2 && s.length <= 120 && !/[<>"'`;&]/.test(s)

  const handleSubmit = async () => {
    if (formBot) return
    const nome = sanitize(formNome.trim())
    const whats = formWhats.trim()
    const neg = sanitize(formNeg.trim())
    const svc = sanitize(formSvc)
    const obs = sanitize(formObs.trim())

    setErrNome('')
    setErrWhats('')
    let hasError = false

    if (!nome || !validName(nome)) {
      setErrNome(!nome ? 'Por favor, informe seu nome.' : 'Nome inválido (mínimo 2 caracteres).')
      hasError = true
    }
    if (!whats || !validPhone(whats)) {
      setErrWhats(!whats ? 'Por favor, informe seu WhatsApp.' : 'Formato inválido. Ex: (24) 99999-9999')
      hasError = true
    }
    if (hasError) return

    const log = submitLogRef.current
    const now = Date.now()
    if (log.count >= 3) { setErrWhats('Muitas tentativas. Tente novamente em alguns minutos.'); return }
    if (log.lastAt !== 0 && now - log.lastAt < 30000) { setErrWhats('Aguarde alguns segundos antes de tentar novamente.'); return }
    log.count++; log.lastAt = now

    setSubmitting(true)
    try {
      const r = await fetch('https://formspree.io/f/maqknbvl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ nome, whatsapp: whats, negocio: neg || 'Não informado', servico: svc || 'Não informado', observacoes: obs || 'Não informado' }),
      })
      if (!r.ok) throw new Error()
      setModalOpen(false)
      setSubmitting(false)
      alert('Solicitação recebida! Retorno em até 24h.')
      const msg = `Olá, Ramon! Me chamo ${nome}.\nWhatsApp: ${whats}\nNegócio: ${neg || 'Não informado'}\nServiço: ${svc || 'Não informado'}\nObservações: ${obs || 'Não informado'}`
      window.open(`https://wa.me/5524993127696?text=${encodeURIComponent(msg)}`, '_blank')
    } catch {
      setSubmitting(false)
      alert('Erro ao enviar. Tente novamente.')
    }
  }

  const calcResult = () => {
    if (!selectedServices.length) return null
    let min = 0, max = 0, hasMonthly = false
    selectedServices.forEach(i => {
      const s = SERVICES[i]
      if (!s.monthly) { min += s.min; max += s.max } else { hasMonthly = true }
    })
    return { min, max, hasMonthly }
  }

  const calc = calcResult()

  const methodSteps = [
    {
      num: '01', title: 'Estratégia de Marca',
      body: 'Posicionamento definido, proposta de valor e tom de voz. Você sai sabendo exatamente o que sua marca representa, para quem fala e como se diferencia no mercado.',
      imgs: ['/img/thais-estrategia.jpg', '/img/g10-estrategia.jpg', '/img/toof-estrategia.jpg', '/img/greencoast-estrategia.jpg'],
      alts: ['Thais Favilla · Estratégia', 'G10 Academia · Estratégia', 'TOOF Challenge Day · Estratégia', 'Green Coast Tour · Estratégia'],
    },
    {
      num: '02', title: 'Sistema Visual',
      body: 'Logo, paleta, tipografia e elementos gráficos que formam uma identidade coesa. Uma linguagem visual que funciona do cartão ao outdoor, do post ao site.',
      imgs: ['/img/thais-sistema-visual.jpg', '/img/g10-sinalizacao.png', '/img/toof-cracha.jpg', '/img/greencoast-uniforme.jpg'],
      alts: ['Thais Favilla · Sistema Visual', 'G10 Academia · Sistema Visual', 'TOOF Challenge Day · Sistema Visual', 'Green Coast Tour · Sistema Visual'],
    },
    {
      num: '03', title: 'Brand Book',
      body: 'Manual completo com todas as regras e aplicações da marca. Qualquer pessoa que trabalhar com sua comunicação saberá exatamente como usar cada elemento.',
      imgs: ['/img/thais-brandbook.jpg', '/img/g10-brandbook.jpg', '/img/toof-brandbook.jpg', '/img/greencoast-brandbook.jpg'],
      alts: ['Thais Favilla · Brand Book', 'G10 Academia · Brand Book', 'TOOF Challenge Day · Brand Book', 'Green Coast Tour · Brand Book'],
    },
  ]

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={loaderHidden ? 'hidden' : ''}>
        <div className="loader-logo-wrap" ref={loaderLogoRef}>
          <LogoSVG height={52} />
        </div>
        <div className="loader-bar-wrap" ref={lbarwrapRef}>
          <div className="loader-bar" ref={lbarRef} />
        </div>
      </div>

      {/* HERO CURTAIN (mobile) */}
      <div id="hero-curtain" ref={hcurtainRef}>
        <div id="hc-logo" ref={hclogoRef}>
          <LogoSVG height={140} />
        </div>
        <div id="hc-cue" ref={hccueRef}>
          <span id="hc-cue-label">scroll</span>
          <div id="hc-line" />
        </div>
      </div>

      {/* NAV */}
      <nav id="nav" className={navScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoSVG height={28} />
        </a>
        <ul className="nav-links">
          <li><a href="#problems">Diagnóstico</a></li>
          <li><a href="#method">Método</a></li>
          <li><a href="#portfolio">Projetos</a></li>
          <li><a href="#calculator">Orçamento</a></li>
        </ul>
        <button className="nav-cta" onClick={() => setModalOpen(true)} id="nav-cta-desk">Iniciar projeto</button>
        <button
          className={`nav-hamburger${mobileMenuOpen ? ' open' : ''}`}
          id="nav-hamburger"
          aria-label="Abrir menu"
          onClick={() => setMobileMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`} id="mobile-menu">
        <a href="#problems" onClick={() => setMobileMenuOpen(false)}>Diagnóstico</a>
        <a href="#method" onClick={() => setMobileMenuOpen(false)}>Método</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
        <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Investimento</a>
        <button className="mobile-menu-cta" onClick={() => { setMobileMenuOpen(false); setModalOpen(true) }}>Iniciar projeto</button>
      </div>

      {/* HERO */}
      <div id="intro-spacer" />
      <section id="hero" style={{ padding: 0, minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 4rem 7rem' }}>
          <div className={`hero-tag${heroIn ? ' in' : ''}`} id="htag">Designer de Marca · Angra dos Reis</div>
          <h1 id="hh1" className={heroIn ? 'in' : ''}>
            Sua marca vale<br />o que você <span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>cobra?</span>
          </h1>
          <p className={`hero-sub${heroIn ? ' in' : ''}`} id="hsub">
            Crio identidades visuais e estratégias de marca para negócios que querem transmitir valor real e parar de competir por preço.
          </p>
          <div className={`hero-ctas${heroIn ? ' in' : ''}`} id="hctas">
            <button className="btn-primary" onClick={() => setModalOpen(true)}>Iniciar projeto</button>
            <button className="btn-ghost" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Ver projetos →</button>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/hero-ramon.jpg"
            alt="Ramon, Designer de Marca"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', filter: 'brightness(0.92) contrast(1.05)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,var(--black) 0%,transparent 30%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(transparent,var(--black))', pointerEvents: 'none' }} />
        </div>
        <div className="hero-scroll" style={{ left: 'auto', right: '4rem' }}>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
        <div id="hero-veil" ref={heroVeilRef} />
      </section>

      {/* STATS */}
      <div id="stats">
        <div className="stat reveal">
          <div className="stat-num" data-target="20" data-prefix="+">+20</div>
          <div className="stat-label">Marcas construídas</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num" data-target="7" data-suffix="+">7+</div>
          <div className="stat-label">Anos de experiência</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num" data-target="100" data-suffix="%">100%</div>
          <div className="stat-label">Clientes satisfeitos</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">RJ</div>
          <div className="stat-label">Angra dos Reis &amp; além</div>
        </div>
      </div>

      {/* PROBLEMS */}
      <section id="problems">
        <div className="section-tag reveal">Diagnóstico</div>
        <h2 className="section-title reveal">
          Seu negócio está invisível<br />ou parece <span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>menor do que é?</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginBottom: 0 }} className="reveal">
          Identifique os sintomas antes de contratar qualquer serviço de design ou marketing.
        </p>
        <div className="problems-grid">
          {[
            { num: '01', title: 'Conversa e Alinhamento', desc: 'Antes de qualquer coisa, preciso entender o seu negócio de verdade. Em uma call ou reunião, alinhamos expectativas, escopo e o que precisa ser resolvido. Nada é criado sem antes ser compreendido.' },
            { num: '02', title: 'Pesquisa e Absorção', desc: 'Com o briefing validado, mergulho no seu mercado, concorrência e público. Tudo que é absorvido nessa etapa fundamenta as decisões que vêm depois. Sem achismo no processo.' },
            { num: '03', title: 'Criação e Validação', desc: 'A criação é a materialização de tudo que foi pesquisado e alinhado. Cada decisão visual tem uma razão estratégica. Você valida porque entende o por quê de cada escolha.' },
          ].map(p => (
            <div className="problem-card reveal" key={p.num}>
              <div className="problem-num">{p.num}</div>
              <div className="problem-title">{p.title}</div>
              <div className="problem-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section id="method">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div className="section-tag reveal">Método</div>
            <h2 className="section-title reveal">
              O que você leva<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>ao final do projeto</span>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, paddingTop: '4rem' }} className="reveal">
            Não entrego só arquivos. Entrego uma marca que comunica, convence e cresce com o negócio. Todo projeto inclui três entregas fundamentais que garantem que sua marca funciona hoje e escala no futuro.
          </p>
        </div>
        <div id="msteps" style={{ marginTop: '4rem' }}>
          {methodSteps.map((step, i) => (
            <div
              key={step.num}
              className={`method-step${openStep === i ? ' open' : ''}`}
              onClick={() => setOpenStep(openStep === i ? -1 : i)}
            >
              <div className="method-step-head">
                <div className="method-step-label">
                  <span className="method-step-num">{step.num}</span>
                  <span className="method-step-title">{step.title}</span>
                </div>
                <span className="method-step-icon">+</span>
              </div>
              <div className="method-step-body">
                <div className="method-step-inner">
                  <p>{step.body}</p>
                  <div className="method-step-img">
                    {step.imgs.map((src, j) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={src} src={src} alt={step.alts[j]} className={`slide${slideIdxes[i] === j ? ' active' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-tag reveal">Projetos</div>
        <h2 className="section-title reveal">
          Cases com contexto.<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>Não só imagens.</span>
        </h2>
        <div className="portfolio-grid reveal" id="pgrid">
          {[
            { key: 'thais', img: '/img/thais-portfolio.jpg', alt: 'Dra. Thais Favilla', cat: 'Branding · Identidade Visual · Social Media', title: 'Dra. Thais Favilla · Psiquiatria Humanizada', result: 'Brand book completo, sistema visual e gestão de conteúdo.' },
            { key: 'g10', img: '/img/g10-portfolio.jpg', alt: 'G10 Academia', cat: 'Branding · Identidade Visual', title: 'G10 Academia · Identidade que transmite força', result: 'Logotipo, sistema visual completo e brand book.' },
            { key: 'toof', img: '/img/toof-portfolio.jpg', alt: 'TOOF Challenge Day', cat: 'Branding · Identidade Visual · Evento', title: 'TOOF Challenge Day · Cultura de Rua', result: 'Identidade visual completa para evento de skate e BMX.' },
            { key: 'greencoast', img: '/img/greencoast-portfolio.jpg', alt: 'Green Coast Tour', cat: 'Branding · Identidade Visual · Turismo', title: 'Green Coast Tour · Natureza com sofisticação', result: 'Identidade visual completa para serviço de transfer premium na Costa Verde.' },
          ].map(c => (
            <div className="portfolio-case" key={c.key} onClick={() => setLbState({ key: c.key, idx: 0 })}>
              <div className="case-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="case-info">
                <div className="case-cat">{c.cat}</div>
                <div className="case-title">{c.title}</div>
                <div className="case-result"><strong>Entrega:</strong> {c.result}</div>
              </div>
              <div className="case-overlay">Ver case completo →</div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator">
        <div className="section-tag reveal">Investimento</div>
        <h2 className="section-title reveal">
          Calcule o investimento<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>do seu projeto</span>
        </h2>
        <div className="calc-wrap">
          <div>
            <p className="calc-intro reveal">Selecione os serviços que você precisa. O investimento é estimado com base no escopo. O valor final é definido após briefing.</p>
            <div className="services-grid" id="svcgrid">
              {SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className={`service-item${selectedServices.includes(i) ? ' selected' : ''}`}
                  onClick={() => setSelectedServices(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                >
                  <div className="service-check">
                    <svg width="10" height="8" viewBox="0 0 10 8"><polyline points="1,4 4,7 9,1" fill="none" stroke="white" strokeWidth="1.5" /></svg>
                  </div>
                  <span className="service-name">{s.name}</span>
                  <span className="service-price">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="calc-result-box reveal">
            <div className="calc-result-label">Estimativa de investimento</div>
            <div className="calc-result-range" id="crange">
              {calc ? (calc.min === 0 && calc.max === 0 ? 'Veja os valores ao lado' : `R$${(calc.min / 1000).toFixed(1)}k – R$${(calc.max / 1000).toFixed(1)}k`) : 'Selecione os serviços'}
            </div>
            <div className="calc-result-items" id="citems">
              {selectedServices.length === 0
                ? <span className="calc-empty">Nenhum serviço selecionado ainda.</span>
                : selectedServices.map(i => (
                  <div className="calc-result-item" key={i}>
                    <span>{SERVICES[i].name}</span>
                    <span>{SERVICES[i].price}</span>
                  </div>
                ))
              }
            </div>
            {calc?.hasMonthly && (
              <div style={{ display: 'block', fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                * Social Media é um valor mensal recorrente, não incluso no total acima.
              </div>
            )}
            <button className="calc-cta" onClick={() => setModalOpen(true)}>Solicitar proposta formal →</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Pronto para começar?</div>
        <h2 className="cta-headline reveal">
          Sua marca pode ser<br /><span style={{ fontFamily: 'var(--font-didot)', fontStyle: 'italic', fontWeight: 400 }}>o seu melhor vendedor.</span>
        </h2>
        <p className="cta-sub reveal">Vamos construir juntos uma identidade que gera autoridade, atrai os clientes certos e justifica o preço que você merece cobrar.</p>
        <div className="cta-actions reveal">
          <button className="btn-primary" onClick={() => setModalOpen(true)}>Iniciar projeto agora</button>
          <a href="https://wa.me/5524993127696" className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Falar no WhatsApp →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LogoSVG height={20} />
        </div>
        <div className="footer-info">
          Angra dos Reis, Rio de Janeiro<br />
          designbyramon.com.br
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/designbyramon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a href="https://wa.me/5524993127696" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
        </div>
      </footer>

      {/* MODAL */}
      <div className={`modal-overlay${modalOpen ? ' open' : ''}`} id="modal" onClick={e => { if (e.target === e.currentTarget) setModalOpen(false) }}>
        <div className="modal-box">
          <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
          <div className="modal-title">Iniciar projeto</div>
          <div className="modal-sub">Preencha as informações abaixo. Retorno em até 24h com as próximas etapas.</div>
          <div className="modal-field">
            <label>Nome completo</label>
            <input type="text" value={formNome} onChange={e => setFormNome(e.target.value)} placeholder="Seu nome" className={errNome ? 'invalid' : ''} />
            {errNome && <span className="modal-field-error" style={{ display: 'block' }}>{errNome}</span>}
          </div>
          <div className="modal-field">
            <label>WhatsApp</label>
            <input type="tel" value={formWhats} onChange={e => setFormWhats(e.target.value)} placeholder="(24) 99999-9999" className={errWhats ? 'invalid' : ''} />
            {errWhats && <span className="modal-field-error" style={{ display: 'block' }}>{errWhats}</span>}
          </div>
          <div className="modal-field">
            <label>Tipo de negócio</label>
            <input type="text" value={formNeg} onChange={e => setFormNeg(e.target.value)} placeholder="Ex: restaurante, clínica, consultoria..." />
          </div>
          <div className="modal-field">
            <label>Serviço de interesse</label>
            <select value={formSvc} onChange={e => setFormSvc(e.target.value)}>
              <option value="">Selecione...</option>
              <option>Identidade Visual Completa</option>
              <option>Projeto de Branding Completo</option>
              <option>Social Media</option>
              <option>Landing Page / Website</option>
              <option>Brand Book</option>
              <option>Consultoria de Posicionamento</option>
              <option>Não sei ainda, quero conversar</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Contexto do projeto (opcional)</label>
            <textarea value={formObs} onChange={e => setFormObs(e.target.value)} placeholder="Conta um pouco sobre o seu negócio e o que precisa..." />
          </div>
          <div className="modal-honeypot" aria-hidden="true">
            <label>Não preencha este campo<input type="text" value={formBot} onChange={e => setFormBot(e.target.value)} name="bot-field" autoComplete="off" tabIndex={-1} /></label>
          </div>
          <button className="modal-submit" onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar solicitação'}
          </button>
        </div>
      </div>

      {/* LIGHTBOX */}
      <div
        id="lb-overlay"
        className={`lb-overlay${lbState ? ' open' : ''}`}
        onClick={e => { if (e.target === e.currentTarget) setLbState(null) }}
        onTouchStart={e => { lbTouchXRef.current = e.touches[0].clientX }}
        onTouchEnd={e => { const diff = lbTouchXRef.current - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) lbGo(diff > 0 ? 1 : -1) }}
      >
        <div className="lb-header">
          <span className="lb-client" id="lb-client">{lbState ? LB_CASES[lbState.key].name : ''}</span>
          <span className="lb-counter" id="lb-counter">
            {lbState ? `${String(lbState.idx + 1).padStart(2, '0')} / ${String(LB_CASES[lbState.key].imgs.length).padStart(2, '0')}` : ''}
          </span>
          <button className="lb-close" aria-label="Fechar galeria" onClick={() => setLbState(null)}>×</button>
        </div>
        <button className="lb-arrow lb-prev" aria-label="Imagem anterior" onClick={() => lbGo(-1)}>←</button>
        <div className="lb-img-wrap">
          {lbState && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={lbImgRef}
              src={LB_CASES[lbState.key].imgs[lbState.idx]}
              alt=""
              className={lbFade ? 'fade' : ''}
            />
          )}
        </div>
        <button className="lb-arrow lb-next" aria-label="Próxima imagem" onClick={() => lbGo(1)}>→</button>
      </div>
    </>
  )
}
