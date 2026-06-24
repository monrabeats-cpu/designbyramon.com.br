# Roadmap · designbyramon.com.br

> Site de portfólio e funil de conversão para Ramon Oliveira — designer de marca, Angra dos Reis.  
> Objetivo: substituir a proposta comercial em PDF por uma experiência digital que pré-vende valor antes da conversa.

---

## Status Atual

**Branch de desenvolvimento:** `claude/great-brown-v8d7au` → mergeado em `main`  
**Stack:** Next.js 16 · React 19 · TypeScript · CSS global (sem Tailwind) · Vercel  
**Build:** ✅ 11 páginas estáticas, 0 erros  
**Última atualização:** 2026-06-24

---

## O que está pronto

### Infraestrutura
- [x] Migração completa de `index.html` monolítico (1.79MB) para Next.js App Router
- [x] Roteamento multi-página: `/`, `/sobre`, `/identidade-visual`, `/cases`, `/cases/[slug]`, `/contato`
- [x] CSS preservado integralmente (variáveis, animações, responsivo, breakpoints)
- [x] 53 imagens em `/public/img/`
- [x] Hero image extraída do base64 e servida via Next.js
- [x] `LogoSVG.tsx` — componente reutilizável
- [x] Headers de segurança em `vercel.json`

### Página Principal (`/`)
- [x] Loader animado com barra de progresso
- [x] Hero com foto + headline + CTAs
- [x] Mobile: curtain reveal com logo ao scroll
- [x] Desktop: layout 40/60 com foto editorial
- [x] Stats com contador animado ao scroll
- [x] Seção de diagnóstico (3 cards)
- [x] Seção de método (accordion com slideshow por etapa)
- [x] Portfólio (4 cases com lightbox)
- [x] Calculadora de investimento interativa
- [x] CTA final
- [x] Footer
- [x] Modal de contato com validação, honeypot, rate limiting
- [x] Submissão via Formspree + redirect para WhatsApp

### Cases
- [x] `/cases` — hub com grid de 4 projetos
- [x] `/cases/thais-favilla` — narrativa completa + galeria
- [x] `/cases/g10-academia` — narrativa completa + galeria
- [x] `/cases/toof-challenge-day` — narrativa completa + galeria
- [x] `/cases/green-coast-tour` — narrativa completa + galeria

### Páginas
- [x] `/contato` — WhatsApp + Instagram
- [x] `/sobre` — trajetória, filosofia, diferenciais (foto placeholder até sessão editorial)
- [x] `/identidade-visual` — landing page de conversão completa (R$5.000)

### SEO
- [x] `robots.txt`
- [x] `sitemap.xml` — 9 URLs com prioridades
- [x] Open Graph + Twitter Card com `hero-ramon.jpg`
- [x] JSON-LD schema: Person + LocalBusiness com OfferCatalog
- [x] Meta descriptions e title template por página

---

## Próximos passos (por prioridade)

### Alta prioridade

#### 1. Depoimentos — próxima entrega de conteúdo
- [ ] Ramon coleta 2–3 depoimentos (estratégia: pedir mensagem de WhatsApp → transformar em citação com autorização)
- [ ] Adicionar seção entre Portfólio e Calculadora na homepage
- [ ] Estrutura: nome + tipo de negócio + citação + foto (opcional)
- **Quem:** Ramon coleta, Claude implementa
- **Candidatos:** Dra. Thais Favilla, G10 Academia, TOOF, Green Coast Tour

#### 2. Foto editorial
- [ ] Foto de Ramon em ambiente profissional/autoral
- [ ] Substituir `/img/hero-ramon.jpg` no hero e no `/sobre`
- [ ] Gerar nova imagem Open Graph 1200×630px
- **Quem:** Ramon providencia sessão fotográfica

---

### Média prioridade

#### 3. Analytics
- [ ] Google Analytics 4 ou Plausible (privacy-first)
- [ ] Evento de conversão: modal aberto, formulário enviado, clique no WhatsApp

#### 4. Página `/proposta` — funil de proposta digital
- [ ] Página que substitui o PDF enviado pelo WhatsApp
- [ ] Escopo, investimento, processo, prazo, próximo passo
- [ ] Versão por serviço (ID Visual, Branding, Site)

---

### Baixa prioridade / futuro

#### 5. Blog / Conteúdo
- [ ] Artigos curtos sobre posicionamento, identidade visual, casos do mercado
- [ ] Melhora SEO de cauda longa

#### 6. Novos cases
- [ ] Adicionar cases futuros à medida que projetos são concluídos
- [ ] Estrutura já pronta em `/cases/[slug]`

#### 7. Versão `/proposta` por cliente
- [ ] Proposta personalizada acessível via link único
- [ ] Requer backend simples (Supabase ou similar)

---

## Decisões técnicas registradas

| Decisão | Motivo |
|---|---|
| CSS global em vez de Tailwind | Preservar fidelidade ao design original sem reescrever classes |
| `'use client'` em `HomePage.tsx` | Toda interatividade (loader, lightbox, scroll, modal) requer DOM/browser APIs |
| `<img>` nativo em vez de `next/image` | Evitar layout shift nos casos com dimensões variáveis; imagens já otimizadas |
| Formspree como backend do formulário | Zero infraestrutura, suficiente para o volume atual |
| Rate limiting client-side no modal | Proteção básica contra spam sem precisar de backend |
| `generateStaticParams` para cases | Build estático, zero custo de servidor, Vercel Edge |

---

## Arquitetura de arquivos

```
src/
  app/
    layout.tsx          # RootLayout — metadata, Open Graph, JSON-LD, Google Fonts
    page.tsx            # Wrapper → <HomePage />
    globals.css         # Todo o CSS (variáveis, componentes, responsive)
    sobre/page.tsx      # Trajetória, filosofia, diferenciais
    identidade-visual/page.tsx  # Landing page de conversão R$5.000
    contato/page.tsx
    cases/
      page.tsx          # Hub com grid dos 4 cases
      [slug]/page.tsx   # Template dinâmico com narrativa + galeria
  components/
    HomePage.tsx        # Componente 'use client' — toda a homepage
    LogoSVG.tsx         # SVG do logotipo como componente React

public/
  img/                  # 53 imagens (portfolio, cases, hero)
  robots.txt
  sitemap.xml
```

---

## Conteúdo pendente de Ramon

- [ ] Depoimentos de clientes (nome, negócio, citação via WhatsApp)
- [ ] Foto editorial para hero e `/sobre`
