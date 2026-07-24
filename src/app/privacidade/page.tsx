import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a TEC ALUMI trata seus dados pessoais: cookies, medição de campanhas e seus direitos segundo a LGPD.",
  alternates: { canonical: "/privacidade" },
};

/*
 * Texto-base de politica de privacidade para landing page sem formularios.
 * TODO(cliente): revisar com apoio juridico antes de campanhas de grande
 * escala e completar CNPJ/razao social quando disponiveis.
 */
export default function PrivacidadePage() {
  return (
    <main className="bg-white">
      <header className="border-b border-white/10 bg-navy-950">
        <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link href="/">
            <Logo idPrefix="logo-privacidade" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-prata-300 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Voltar ao site
          </Link>
        </Container>
      </header>

      <Container className="max-w-3xl py-14 md:py-20">
        <h1 className="font-display text-3xl font-bold tracking-tight text-grafite-900 md:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-grafite-600">
          Última atualização: julho de 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-[0.9375rem] leading-relaxed text-grafite-600 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-grafite-900">
          <section>
            <h2>1. Quem somos</h2>
            <p className="mt-3">
              Este site é operado pela {SITE.name}, empresa de esquadrias de
              alumínio sob medida localizada em {SITE.address.street},{" "}
              {SITE.address.district}, {SITE.address.city}/{SITE.address.state}
              , CEP {SITE.address.zip}. Para assuntos relacionados a dados
              pessoais, fale conosco pelo WhatsApp {SITE.phoneDisplay} ou pelo
              e-mail {SITE.email}.
            </p>
          </section>

          <section>
            <h2>2. Quais dados coletamos</h2>
            <p className="mt-3">
              Este site não possui formulários e não armazena dados pessoais em
              servidores próprios. O contato acontece diretamente pelo
              WhatsApp: ao clicar em um dos botões, você é direcionado ao
              aplicativo e a conversa passa a ser regida pela política de
              privacidade do WhatsApp.
            </p>
            <p className="mt-3">
              Com o seu consentimento, utilizamos cookies de medição (Google
              Analytics, Google Ads e Meta Pixel) que coletam dados de
              navegação de forma pseudonimizada — como páginas visitadas,
              origem do acesso e interações com os botões — para avaliar o
              desempenho das nossas campanhas.
            </p>
          </section>

          <section>
            <h2>3. Finalidade e base legal</h2>
            <p className="mt-3">
              Os dados de navegação são tratados com base no seu consentimento
              (art. 7º, I, da LGPD), com a finalidade exclusiva de medir e
              otimizar campanhas publicitárias. Você pode navegar normalmente
              recusando os cookies de medição: nenhuma funcionalidade do site
              depende deles.
            </p>
          </section>

          <section>
            <h2>4. Compartilhamento</h2>
            <p className="mt-3">
              Quando autorizados, os dados de medição são processados pelo
              Google (Analytics e Ads) e pela Meta (Pixel), que atuam como
              operadores e podem processá-los fora do Brasil, seguindo suas
              próprias políticas de privacidade. Não vendemos nem
              compartilhamos seus dados com terceiros para outras finalidades.
            </p>
          </section>

          <section>
            <h2>5. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Você pode solicitar a confirmação de tratamento, o acesso, a
              correção ou a eliminação dos seus dados, além de revogar o
              consentimento a qualquer momento — basta limpar os cookies do
              navegador ou entrar em contato pelos canais da seção 1.
            </p>
          </section>

          <section>
            <h2>6. Cookies utilizados</h2>
            <p className="mt-3">
              Essenciais: apenas o registro da sua escolha de consentimento,
              armazenado no seu próprio navegador. Medição (opcionais): cookies
              do Google Analytics/Ads e do Meta Pixel, ativados somente após o
              aceite no aviso de cookies.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
