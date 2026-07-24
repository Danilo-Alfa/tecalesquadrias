/*
 * Dados centrais da empresa.
 * Campos vazios ("") sao ocultados automaticamente na interface.
 */
export const SITE = {
  name: "TEC ALUMI",
  tagline: "Qualidade que Reflete",
  description:
    "Esquadrias de alumínio sob medida com produção própria em São Paulo: janelas, portas, portões, fachadas e vidros. Orçamento rápido pelo WhatsApp.",

  // TODO(cliente): dominio final (usado em canonical, Open Graph e sitemap)
  url: "https://www.tecalumi.com.br",

  whatsapp: "5511968167225",
  phoneDisplay: "(11) 96816-7225",

  // TODO(cliente): e-mail de contato real
  email: "contato@tecalumi.com.br",

  region: "São Paulo e região",

  address: {
    street: "R. Dr. Edmundo José de Lima, 222",
    district: "Jardim Esmeralda",
    city: "São Paulo",
    state: "SP",
    zip: "05366-100",
  },

  // TODO(cliente): confirmar horario de atendimento
  businessHours: "Segunda a sexta, das 8h às 18h",

  // TODO(cliente): CNPJ (vazio = nao exibido no rodape)
  cnpj: "",

  // TODO(cliente): URLs das redes (vazio = icone nao exibido)
  social: {
    instagram: "",
    facebook: "",
  },

  // TODO(cliente): codigo de verificacao do Google Search Console
  // (Configuracoes > Propriedade > tag HTML — somente o valor de "content")
  googleSiteVerification: "",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vi o site da TEC ALUMI e quero um orçamento de esquadrias sob medida.";
