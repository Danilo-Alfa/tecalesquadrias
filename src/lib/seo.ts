import { FAQ } from "@/content/faq";
import { SITE } from "@/lib/site";

/*
 * Dados estruturados (JSON-LD) para SEO local e rich snippets.
 * TODO(cliente): revisar telefone, endereco e horario quando os dados chegarem.
 */
export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    telephone: `+${SITE.whatsapp}`,
    email: SITE.email,
    image: `${SITE.url}/images/og-tecalumi.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "BR",
    },
    areaServed: SITE.region,
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };
}

export function faqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
