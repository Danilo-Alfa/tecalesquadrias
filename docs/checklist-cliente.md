# Checklist — informacoes pendentes do cliente (TEC ALUMI)

O que falta para o site ir ao ar. Cada item indica onde entra no codigo.

## Essencial para publicar

1. **Fotos reais** (substituem as ilustracoes) — `src/content/products.ts` e `gallery.ts`
   - 6 a 12 fotos: janelas, portas, portao, fachada/pele de vidro, box/vidros
     e uma obra completa
   - Horizontais (paisagem), minimo 1600px de largura, sem marca d'agua
   - De preferencia com luz do dia e ambiente arrumado
   - Antes/depois: somente se houver o par das DUAS fotos do mesmo local
   - Processo: colocar em `fotos-originais/` e rodar `npm run imagens`

2. **Depoimentos reais** (os atuais sao placeholders) — `src/content/testimonials.ts`
   - 3 a 6 depoimentos com nome e bairro/cidade de cada cliente
   - Pode ser print de conversa ou avaliacao do Google (com autorizacao)
   - Nunca inventar: viola politicas do Google Ads e Meta Ads

3. **Numeros reais da barra de confianca** — `src/content/stats.ts`
   - Anos de mercado, projetos/obras entregues, cidades atendidas etc.
   - So numeros que a empresa consegue sustentar se questionada

4. **Dominio** (comprar, ex.: tecalumi.com.br) — `SITE.url` em `src/lib/site.ts`
   - Necessario tambem para SSL, Search Console e anuncios

5. **E-mail de contato real** — `SITE.email` em `src/lib/site.ts`
   - O atual (contato@tecalumi.com.br) e chute; confirmar ou criar no dominio

6. **Confirmacoes de negocio** — afetam FAQ, badges e diferenciais
   - Existe garantia? De quanto tempo?
   - Prazo medio de producao + instalacao?
   - Formas de pagamento aceitas?
   - Horario de atendimento (hoje: seg-sex 8h-18h — confirmar)
   - Atende exatamente quais regioes?

## Recomendado (pode entrar depois do lancamento)

7. **CNPJ** — `SITE.cnpj` (aparece no rodape; aumenta confianca)
8. **Redes sociais** — `SITE.social` (Instagram/Facebook, se existirem)
9. **Google Business Profile** — criar/reivindicar em business.google.com
   (endereco Jardim Esmeralda) e comecar a pedir avaliacoes aos clientes
10. **IDs de midia** — `src/lib/tracking.ts` (quando as contas existirem)
    - GA4 (G-XXXX), Google Ads (AW-XXXX), Meta Pixel (numero)
11. **Revisao juridica** da politica de privacidade (`/privacidade/`)
