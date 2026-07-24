# Design System — TEC ALUMI

Identidade visual derivada da logo (navy profundo, cromo, reflexos azul-eletricos)
e adaptada para uma landing page de conversao via WhatsApp.

## 1. Direcao estetica

**Nome:** Precisao Metalica (industrial premium + minimalismo de luxo)

**Tese:** a pagina deve parecer feita do mesmo material que a empresa vende —
aluminio usinado, vidro e luz. Superficies escuras profundas, filetes finos como
perfis de esquadria, texto com brilho metalico e muito espaco negativo.

**Ancora de diferenciacao (o que torna a pagina reconhecivel sem a logo):**
1. Reflexo diagonal de luz (motivo extraido dos vidros da logo) usado como
   varredura de brilho na headline, em divisores de secao e no hover dos cards.
2. Bordas hairline com gradiente metalico (1px), imitando arestas de perfil
   de aluminio.
3. Eyebrows de secao no estilo da tagline da logo: caixa alta, espacamento
   largo, ladeadas por filetes horizontais.

**DFII:** Impacto 4 + Fit 5 + Viabilidade 5 + Performance 4 − Risco 2 = **16 (Excelente)**

## 2. Paleta

Uma historia de cor dominante (navy), um sistema neutro (pratas), um acento
de marca (azul metalico) e um acento de conversao (verde WhatsApp, usado
exclusivamente em CTAs de contato).

| Token | Hex | Uso |
|---|---|---|
| `navy-950` | `#050B1A` | Fundo mais profundo (footer, vinhetas) |
| `navy-900` | `#0A1733` | Fundo primario escuro (hero, CTA final) — cor da logo |
| `navy-800` | `#0F2148` | Superficies elevadas sobre escuro |
| `navy-700` | `#173064` | Bordas e detalhes sobre escuro |
| `azul-500` | `#2F6BE8` | Acento de marca (links, detalhes, ícones ativos) |
| `azul-400` | `#5B8CFF` | Gradientes e estados hover do acento |
| `prata-50` | `#F6F8FB` | Fundo claro de secoes alternadas |
| `prata-100` | `#ECEFF4` | Superficies claras secundarias |
| `prata-200` | `#D9DFE9` | Bordas hairline sobre claro |
| `prata-300` | `#AEB9C9` | Texto terciario sobre escuro |
| `prata-400` | `#8B97AB` | Texto secundario sobre escuro |
| `grafite-900` | `#10151F` | Texto principal sobre claro |
| `grafite-600` | `#46536A` | Texto secundario sobre claro |
| `verde-600` | `#16A34A` | CTAs WhatsApp (fundo de botao, texto branco) |
| `verde-500` | `#25D366` | Icone/bolha WhatsApp (verde oficial, reconhecimento) |

Gradientes assinatura:

- **Metalico (texto de destaque):** `linear-gradient(115deg, #E8ECF2 0%, #B9C2D0 35%, #F4F7FA 55%, #9AA6B8 100%)`
- **Azul eletrico (detalhes):** `linear-gradient(120deg, #2F6BE8, #5B8CFF)`
- **Hairline metalica (bordas):** `linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,.04))`

Regras:
- Verde aparece somente em acoes de conversao. Nunca em decoracao.
- Azul-500 nunca vira fundo de botao primario (reservado a detalhes de marca).
- Secoes alternam escuro (impacto) e claro (leitura): hero escuro, produtos
  claro, diferenciais escuro, processo claro, etc.

## 3. Tipografia

Carregada via `next/font/google` (self-hosted no build — zero requisicao externa).

| Papel | Fonte | Pesos | Racional |
|---|---|---|---|
| Display / headings | **Space Grotesk** | 500, 600, 700 | Geometrica com carater tecnico, ecoa o wordmark estendido da logo sem imita-lo |
| Corpo / UI | **Manrope** | 400, 500, 600, 700 | Neutra humanista, excelente legibilidade em telas pequenas |

Escala (mobile-first, com `clamp`):

| Papel | Tamanho | Detalhes |
|---|---|---|
| Display (h1) | `clamp(2.5rem, 8vw, 4.25rem)` | Space Grotesk 700, leading 1.05, tracking -0.02em |
| H2 | `clamp(1.875rem, 5vw, 3rem)` | Space Grotesk 600, leading 1.15 |
| H3 | `1.25rem` a `1.5rem` | Space Grotesk 600 |
| Corpo | `1rem` (mobile) / `1.0625rem` (desktop) | Manrope 400, leading 1.65 |
| Eyebrow | `0.8125rem` | Manrope 600, caixa alta, tracking 0.16em, filetes laterais |
| Micro (badges, legendas) | `0.8125rem` | Manrope 500 |

Palavra-chave da headline recebe o gradiente metalico via `background-clip: text`.

## 4. Espacamento, grid e responsividade

- Base de 4px (escala Tailwind padrao).
- Container: `max-w-7xl` (1280px), padding lateral `px-5` mobile / `px-8` desktop.
- Secoes: `py-16` mobile / `py-24`–`py-28` desktop.
- Grid: 12 colunas desktop, 4 mobile; gutter 24px.
- Breakpoints Tailwind padrao; desenvolvimento mobile-first, ajustes em `md` e `lg`.
- Alvos de toque: minimo 48px de altura em qualquer elemento interativo.

## 5. Componentes

### Botoes
- **Primario (WhatsApp):** fundo `verde-600`, texto branco 600, icone WhatsApp,
  `rounded-xl`, altura 52–56px, largura total no mobile. Hover: elevacao sutil
  (translateY -2px) + brilho; active: scale 0.98. Sombra esverdeada suave.
- **Secundario (sobre escuro):** borda `white/20` com blur de fundo, texto branco.
  Hover: borda `white/40`.
- **Secundario (sobre claro):** borda `prata-200`, texto `grafite-900`.
- **Link:** `azul-500`, sublinhado no hover.

### Cards de produto
- Fundo branco sobre secao `prata-50`, `rounded-2xl`, borda hairline `prata-200`.
- Foto 4:3 ocupando o topo, titulo H3, descricao de uma linha, CTA verde
  com mensagem de WhatsApp pre-preenchida especifica do produto.
- Hover: lift de 4px + reflexo diagonal translucido deslizando sobre a foto.

### Chips de icone (diferenciais)
- Icone Lucide stroke 1.5 dentro de moldura quadrada `rounded-xl` com borda
  hairline metalica — referencia visual aos perfis de esquadria.

### Eyebrow de secao
- Componente assinatura: texto em caixa alta espacada com filetes horizontais
  nas laterais (eco direto da tagline "Qualidade que Reflete").

### Accordion (FAQ)
- Bordas hairline, icone chevron rotacionando, animacao de altura suave.

### Barra flutuante mobile
- Barra fixa inferior no mobile com CTA WhatsApp de largura total (zona do
  polegar). No desktop, bolha flutuante no canto inferior direito.

## 6. Iconografia

- Biblioteca unica: **Lucide** (tree-shakeable).
- Stroke 1.5, tamanhos 20 (inline), 24–28 (destaque).
- Cores: `azul-400` sobre escuro, `azul-500` sobre claro. Nunca multicolorido.

## 7. Animacao

Framer Motion com `LazyMotion` + `domAnimation` (bundle reduzido).

- **Filosofia:** uma entrada forte no hero, reveals discretos no scroll, micro
  interacoes nos CTAs. Nada alem disso.
- Entrada do hero: stagger de 80ms, fade + rise de 16px, 600ms.
- Varredura metalica na headline: uma unica vez, 1.2s apos a entrada.
- Reveals de secao: fade + rise 12px, 400ms, `viewport once`, margin -80px.
- Hover: 200ms. Easing padrao: `cubic-bezier(0.22, 1, 0.36, 1)`.
- `prefers-reduced-motion`: reveals viram fade simples, varredura desativada.

## 8. Acessibilidade

- Contraste minimo AA em todo texto (verificar verde-600 + branco em botoes:
  compensado com peso 600 e tamanho >= 16px; texto informativo nunca em verde).
- Foco visivel customizado (anel `azul-400` de 2px).
- HTML semantico: `header`, `main`, `section` com `aria-labelledby`, `footer`.
- Imagens com `alt` descritivo real (tambem requisito de SEO).
- Navegacao completa por teclado no accordion e nos links.
