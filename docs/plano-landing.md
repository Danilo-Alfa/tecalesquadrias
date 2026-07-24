# Plano da Landing Page — TEC ALUMI

Objetivo unico: converter visitantes de trafego pago (Google Ads, Meta Ads,
Instagram) em conversas de orcamento no WhatsApp. Nenhum objetivo secundario.

## 1. Estrutura da pagina (ordem e racional de conversao)

### 1. Header (fixo, translucido com blur)
- Logo + 4 ancoras (Produtos, Diferenciais, Projetos, FAQ) + CTA WhatsApp compacto.
- Racional: navegacao minima; o CTA acompanha o usuario o tempo todo.

### 2. Hero (dobra unica, fundo navy)
- Eyebrow: "Esquadrias de aluminio sob medida" com filetes (eco da tagline).
- Headline forte com palavra-chave em gradiente metalico.
  Direcao de copy: "Esquadrias sob medida com precisao de fabrica"
  (refinamos juntos na implementacao).
- Subheadline: producao propria + prazo de resposta + regiao atendida.
- CTA primario verde "Solicitar orcamento no WhatsApp" + secundario "Ver projetos".
- Faixa de confianca sob os CTAs: 4 badges (Producao propria, Sob medida,
  Orcamento rapido, Instalacao inclusa — ajustar aos diferenciais reais).
- Imagem: fachada/janela premium com reflexo, tratada em navy.
- Racional: em 3 segundos o visitante de anuncio entende o que e, para quem e,
  e qual o proximo passo. Uma unica acao dominante.

### 3. Barra de prova (numeros)
- 3 a 4 metricas reais: anos de mercado, projetos entregues, cidades atendidas.
- Racional: autoridade imediata antes de apresentar produtos.

### 4. Produtos (fundo claro)
- Grid de cards: Janelas, Portas, Portoes, Fachadas/pele de vidro, Vidros,
  Projetos sob medida (6 cards, 2 colunas mobile / 3 desktop).
- Cada card: foto grande, titulo, uma linha de descricao, CTA "Solicitar orcamento"
  com mensagem de WhatsApp pre-preenchida especifica do produto.
- Racional: mensagem pre-preenchida por produto qualifica o lead e reduz atrito
  no inicio da conversa.

### 5. Diferenciais (fundo escuro)
- 6 itens com chips de icone: sob medida, producao propria, prazo, garantia,
  acabamento, atendimento direto. Titulo curto + uma linha.
- Racional: remove duvidas de comparacao com concorrentes; escaneavel em 5s.

### 6. Como funciona (fundo claro)
- 4 passos numerados: Chame no WhatsApp -> Medicao/projeto -> Producao ->
  Instalacao. CTA ao final da sequencia.
- Racional: reduz a incerteza de quem nunca comprou esquadria sob medida.

### 7. Galeria de projetos
- Grid de fotos de obras reais com legenda curta (tipo de projeto + cidade).
- Antes/depois somente se houver pares de fotos reais de qualidade.
- Racional: prova visual e o maior gatilho de confianca neste segmento.

### 8. Depoimentos
- 3 a 6 depoimentos reais (nome, bairro/cidade, avaliacao). Integrar com
  avaliacoes do Google se existirem. Nunca depoimentos fabricados.
- Racional: prova social proxima da decisao.

### 9. FAQ (accordion)
- 6 a 8 perguntas que removem objecoes: prazo, medicao, garantia, formas de
  pagamento, regiao atendida, manutencao. Com JSON-LD FAQPage.
- Racional: ultima camada de objecoes antes do CTA final; ganha rich snippet.

### 10. CTA final (fundo navy, espelha o hero)
- Headline de fechamento + botao verde grande + reforco de prazo de resposta.

### 11. Rodape
- Logo, contatos (WhatsApp, telefone, e-mail), endereco, horario, redes,
  CNPJ se disponivel. Limpo, sem links que dispersem.

### Persistente
- Mobile: barra fixa inferior com CTA WhatsApp de largura total (zona do polegar).
- Desktop: bolha flutuante no canto inferior direito.

## 2. Arquitetura tecnica

- Next.js (App Router) + TypeScript + TailwindCSS + Framer Motion + Lucide.
- `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }`,
  `trailingSlash: true` (compatibilidade com Apache/Hostinger).
- Imagens pre-otimizadas em build por script com sharp (AVIF/WebP em multiplos
  tamanhos), servidas com `<picture>`/`srcset` — sem dependencia de Node em producao.
- Fontes locais via `next/font/google` (self-hosted no build).
- Framer Motion com `LazyMotion` + `domAnimation`.
- Entrega inclui `.htaccess` para Hostinger: compressao gzip/brotli, cache
  imutavel de assets, headers de seguranca.

### Estrutura de pastas

```
src/
  app/            layout.tsx, page.tsx, sitemap.ts, robots.ts, icon
  components/
    ui/           Button, Container, SectionEyebrow, Badge, Accordion...
    sections/     Header, Hero, TrustBar, Products, Differentials,
                  Process, Gallery, Testimonials, Faq, FinalCta,
                  Footer, MobileCtaBar
  lib/            constants.ts (dados da empresa), whatsapp.ts (builder de
                  link com mensagem e rastreio), motion.ts (variants), seo.ts
  content/        produtos, diferenciais, passos, depoimentos, faq (TS tipado)
public/images/    otimizadas pelo script de build
```

Todo conteudo editavel centralizado em `src/content/` — trocar texto ou
telefone nao exige tocar em componente.

## 3. SEO

- Metadata API: title, description, canonical, Open Graph, Twitter card.
- JSON-LD: `LocalBusiness` (endereco, telefone, horario, area atendida) +
  `FAQPage` + `Product`/`Service` nos itens do grid.
- `sitemap.ts` e `robots.ts` gerados estaticamente.
- HTML semantico, um unico h1, hierarquia correta de headings.
- `alt` descritivo em todas as imagens com termos do segmento.
- Palavras-alvo: "esquadrias de aluminio sob medida", "janelas de aluminio",
  "portas de aluminio", "fachada de vidro" + cidade (definir com o cliente).

## 4. Performance (meta: Lighthouse ~100)

- LCP: imagem do hero em AVIF/WebP com `fetchpriority="high"` e preload;
  demais imagens lazy.
- Zero JS de terceiros no carregamento critico; pixels de rastreio carregados
  apos interacao ou com `strategy` adiada.
- CLS zero: dimensoes explicitas em todas as imagens e fontes com
  `size-adjust`/`font-display: swap`.
- Code splitting natural do App Router; sem bibliotecas alem das definidas.

## 5. Rastreamento de conversao (essencial para trafego pago)

- Evento `whatsapp_click` (com secao de origem e produto) disparado em todo CTA.
- Google Ads: conversao via gtag no clique. Meta Pixel: evento `Contact`/`Lead`.
- UTMs capturadas na chegada e anexadas ao rastreio (nao a mensagem do usuario).
- IDs de GA4/Ads/Pixel configuraveis por constantes (sem hardcode).

## 6. Dados necessarios do cliente (bloqueiam o conteudo final, nao o build)

1. Numero de WhatsApp comercial (com DDD).
2. Cidade/regiao atendida (define copy e SEO local).
3. Fotos reais de obras/fabrica (galeria e cards; stock so como fallback).
4. Depoimentos reais ou link do perfil no Google (avaliacoes).
5. Diferenciais reais confirmados (garantia? prazo medio? instalacao propria?).
6. Dominio final (canonical, OG, sitemap).
7. Endereco/CNPJ para o rodape e JSON-LD.

## 7. Fases de implementacao

1. Scaffold do projeto + tokens do design system + fontes + layout base.
2. Componentes de UI (Button, Eyebrow, Container, Accordion, cards).
3. Secoes na ordem da pagina, mobile-first, com conteudo placeholder marcado.
4. Animacoes (hero + reveals + micro interacoes).
5. SEO completo (metadata, JSON-LD, sitemap, robots).
6. Otimizacao de imagens + auditoria Lighthouse + ajustes de CWV.
7. Rastreamento de conversao.
8. Build estatico, `.htaccess`, teste do pacote final e guia de deploy na Hostinger.
