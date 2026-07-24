# TEC ALUMI — Landing Page

Landing page de conversao para esquadrias de aluminio sob medida.
Objetivo unico: gerar orcamentos via WhatsApp a partir de trafego pago.

Stack: Next.js (App Router, `output: export`) + TypeScript + TailwindCSS v4 +
Framer Motion + Lucide. Documentacao de design em `docs/design-system.md` e
plano completo em `docs/plano-landing.md`.

## Comandos

```bash
npm run dev     # desenvolvimento em http://localhost:3000
npm run build   # gera o site estatico na pasta out/
npm run lint    # ESLint
npm run imagens # otimiza fotos de fotos-originais/ para public/images/
```

## Dados do cliente (obrigatorio antes de publicar)

Todos os dados editaveis estao centralizados — nenhum texto exige mexer em
componente:

| Arquivo | Conteudo |
|---|---|
| `src/lib/site.ts` | WhatsApp, telefone, e-mail, dominio, endereco, horario, CNPJ, redes |
| `src/content/products.ts` | Produtos e mensagens de WhatsApp por produto |
| `src/content/stats.ts` | Numeros da barra de confianca (usar somente dados reais) |
| `src/content/differentials.ts` | Diferenciais |
| `src/content/steps.ts` | Passos do "Como funciona" |
| `src/content/gallery.ts` | Galeria de projetos |
| `src/content/testimonials.ts` | Depoimentos (PLACEHOLDERS — trocar por reais) |
| `src/content/faq.ts` | Perguntas frequentes |

Busque por `TODO(cliente)` para localizar tudo que precisa de dado real:

```bash
grep -rn "TODO(cliente)" src/
```

IMPORTANTE: os depoimentos atuais sao placeholders de layout. Depoimentos
inventados violam as politicas do Google Ads e Meta Ads. Substituir por
depoimentos reais antes de subir campanha.

## Fotos reais

As ilustracoes em SVG (`ProjectPlaceholder`) sao temporarias. Quando as fotos
chegarem:

1. Colocar os originais (JPG/PNG) na pasta `fotos-originais/` (raiz do projeto).
2. Rodar `npm run imagens` — gera WebP + AVIF em 800px e 1200px dentro de
   `public/images/`.
3. Trocar o `ProjectPlaceholder` por `<img>` com `srcset` nos cards de
   produto e na galeria, com `alt` descritivo (importante para SEO).

## Rastreamento de conversao e LGPD

- IDs de GA4, Google Ads e Meta Pixel ficam em `src/lib/tracking.ts` —
  preencher e rebuildar. Nada mais e necessario.
- Os scripts SO carregam apos o visitante aceitar o aviso de cookies
  (banner LGPD em `src/components/consent/CookieConsent.tsx`). Quem recusa
  navega normalmente, sem cookies de medicao.
- Todo clique em CTA de WhatsApp dispara `whatsapp_click` (GA4/Ads) e
  `Contact` (Meta Pixel), com UTMs capturadas na chegada.
- Politica de privacidade em `/privacidade/` (`src/app/privacidade/page.tsx`).
  Revisar o texto com apoio juridico antes de campanhas de grande escala.

## Google Search Console e Business Profile

Search Console (indexacao e desempenho de busca):

1. Com o dominio comprado, acessar https://search.google.com/search-console
   e adicionar a propriedade.
2. Escolher verificacao por "tag HTML" e copiar apenas o valor de `content`.
3. Colar em `googleSiteVerification` no `src/lib/site.ts`, rebuildar e publicar.
4. Apos verificar, enviar o sitemap: `https://dominio/sitemap.xml`.

Google Business Profile (mapa, avaliacoes e busca local):

1. Criar/reivindicar o perfil em https://business.google.com com o endereco
   R. Dr. Edmundo Jose de Lima, 222 — Jardim Esmeralda, Sao Paulo/SP.
2. Categoria principal sugerida: "Fornecedor de janelas" ou "Servico de
   esquadrias de aluminio"; adicionar fotos reais e horario.
3. Gerar o link curto de avaliacoes e enviar a clientes satisfeitos apos a
   instalacao — essas avaliacoes alimentam a secao de depoimentos do site e
   o selo de estrelas no Google.

## Deploy na Hostinger

1. `npm run build` — o site completo fica em `out/` (inclui `.htaccess` com
   compressao, cache e headers de seguranca).
2. No hPanel, abrir o Gerenciador de Arquivos e apontar para `public_html/`.
3. Apagar o conteudo antigo de `public_html/` e enviar TODO o conteudo de
   `out/` (incluindo o `.htaccess` e a pasta `_next/`).
4. Ativar SSL (Let's Encrypt) e forcar HTTPS no hPanel.
5. Conferir `https://dominio/`, `robots.txt` e `sitemap.xml` no navegador.

Antes do deploy definitivo, atualizar `SITE.url` em `src/lib/site.ts` com o
dominio real e rodar o build novamente (canonical, OG e sitemap dependem dele).
