# Roadmap · designbyramon.com.br

> Site de portfólio e funil de conversão para Ramon Oliveira — designer de marca, Angra dos Reis.  
> Objetivo: substituir a proposta comercial em PDF por uma experiência digital que pré-vende valor antes da conversa.

---

## Status Atual

**Branch de desenvolvimento:** `claude/great-brown-v8d7au`  
**Stack:** Next.js 16 · React 19 · TypeScript · CSS global (sem Tailwind) · Vercel  
**Build:** ✅ 11 páginas estáticas, 0 erros

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

### Páginas auxiliares
- [x] `/contato` — WhatsApp + Instagram
- [x] `/sobre` — placeholder
- [x] `/identidade-visual` — placeholder

---

## Próximos passos (por prioridade)

### Alta prioridade

#### 1. Depoimentos — placeholder já estruturado
- [ ] Coletar 2–3 depoimentos reais de clientes
- [ ] Adicionar seção entre Portfólio e Calculadora na homepage
- [ ] Estrutura sugerida: nome + tipo de negócio + citação + foto (opcional)
- **Quem:** Ramon coleta, Claude implementa

#### 2. Página `/sobre` — história real
- [ ] Foto editorial de Ramon (quando disponível)
- [ ] Texto sobre trajetória: chegou no marketing por acaso, vê potencial em toda marca
- [ ] Filosofia: acompanha o cliente em toda a jornada, valida cada fase
- [ ] Diferencial: não entrega só arquivos — entrega marca que escala
- **Quem:** Ramon fornece conteúdo, Claude implementa

#### 3. Página `/identidade-visual` — landing page de conversão
- [ ] Página dedicada ao pacote principal (R$5.000)
- [ ] O que inclui: estratégia de marca + sistema visual + brand book
- [ ] Processo em etapas (baseado no método já explicado no site)
- [ ] Investimento transparente
- [ ] CTA direto para WhatsApp ou modal
- **Objetivo:** substituir proposta PDF para leads que chegam pelo WhatsApp

#### 4. SEO mínimo
- [ ] `robots.txt`
- [ ] `sitemap.xml` gerado estaticamente
- [ ] Open Graph image (1200×630px) — foto de Ramon ou mockup de marca
- [ ] JSON-LD schema (Person + LocalBusiness)
- [ ] Meta description revisada por página

---

### Média prioridade

#### 5. Analytics
- [ ] Google Analytics 4 ou Plausible (privacy-first)
- [ ] Evento de conversão: modal aberto, formulário enviado, clique no WhatsApp

#### 6. Página `/proposta` — funil de proposta digital
- [ ] Página privada (ou pública) que substitui o PDF
- [ ] Escopo, investimento, processo, prazo, próximo passo
- [ ] Versão por serviço (ID Visual, Branding, Site)
- [ ] Link que Ramon envia pelo WhatsApp para leads

#### 7. Foto editorial
- [ ] Foto de Ramon em ambiente profissional/autoral
- [ ] Usar no hero (já tem slot reservado com `/img/hero-ramon.jpg`)
- [ ] Usar na página `/sobre`
- **Quem:** Ramon providencia sessão fotográfica

---

### Baixa prioridade / futuro

#### 8. Blog / Conteúdo
- [ ] Artigos curtos sobre posicionamento, identidade visual, casos do mercado
- [ ] Melhora SEO de cauda longa
- [ ] Posiciona Ramon como referência, não só executor

#### 9. Novos cases
- [ ] Adicionar cases futuros à medida que projetos são concluídos
- [ ] Estrutura já pronta em `/cases/[slug]`

#### 10. Versão `/proposta` por cliente
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
    layout.tsx          # RootLayout com metadata, lang="pt-BR", Google Fonts
    page.tsx            # Wrapper → <HomePage />
    globals.css         # Todo o CSS (variáveis, componentes, responsive)
    sobre/page.tsx
    identidade-visual/page.tsx
    contato/page.tsx
    cases/
      page.tsx          # Hub com grid dos 4 cases
      [slug]/page.tsx   # Template dinâmico com narrativa + galeria
  components/
    HomePage.tsx        # Componente 'use client' — toda a homepage
    LogoSVG.tsx         # SVG do logotipo como componente React

public/
  img/                  # 53 imagens (portfolio, cases, hero)
```

---

## Conteúdo pendente de Ramon

- [ ] Depoimentos de clientes (nome, negócio, citação)
- [ ] Texto sobre sua trajetória para `/sobre`
- [ ] Foto editorial para hero e `/sobre`
- [ ] Confirmação dos preços na calculadora (corretos conforme conversa: ID Visual R$3.5–5k, Branding R$8–12.5k)
