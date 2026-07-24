"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ALUMINUM_COLORS, type Product } from "@/content/products";
import { whatsappUrl } from "@/lib/whatsapp";

interface CalcularButtonProps {
  product: Product;
}

const formatMetros = (value: number): string =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

/*
 * Calculador de medidas: o visitante informa largura x altura, cor e
 * quantidade, e a mensagem chega estruturada no WhatsApp — lead
 * pre-qualificado com as especificacoes do pedido.
 * Medidas fora da faixa comum NAO bloqueiam o envio (nunca perder lead):
 * apenas sinalizamos que precisam de avaliacao tecnica.
 */
export function CalcularButton({ product }: CalcularButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [cor, setCor] = useState<string>(ALUMINUM_COLORS[0]);
  const [quantidade, setQuantidade] = useState("1");
  const [erro, setErro] = useState<string | null>(null);

  const { medidas } = product;
  const larguraNum = Number.parseFloat(largura.replace(",", "."));
  const alturaNum = Number.parseFloat(altura.replace(",", "."));
  const medidasValidas =
    Number.isFinite(larguraNum) &&
    larguraNum > 0 &&
    Number.isFinite(alturaNum) &&
    alturaNum > 0;

  const foraDaFaixa =
    medidasValidas &&
    (larguraNum < medidas.larguraMin ||
      larguraNum > medidas.larguraMax ||
      alturaNum < medidas.alturaMin ||
      alturaNum > medidas.alturaMax);

  const mensagem = [
    "Olá! Quero um orçamento sob medida:",
    `- Produto: ${product.title}`,
    medidasValidas
      ? `- Medidas: ${formatMetros(larguraNum)} x ${formatMetros(alturaNum)} m (L x A)`
      : null,
    `- Cor do alumínio: ${cor}`,
    `- Quantidade: ${quantidade}`,
  ]
    .filter(Boolean)
    .join("\n");

  const abrir = () => {
    setErro(null);
    dialogRef.current?.showModal();
  };

  const fechar = () => dialogRef.current?.close();

  const aoClicarEnviar = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!medidasValidas) {
      event.preventDefault();
      setErro("Informe a largura e a altura para montar o orçamento.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-navy-900 text-[0.8125rem] font-semibold text-white transition-all hover:bg-navy-800 active:scale-[0.98]"
      >
        <WhatsAppIcon className="size-4 text-verde-500" />
        Calcular sob medida
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`Calcular ${product.title} sob medida`}
        className="m-auto w-[calc(100vw-2rem)] max-w-md rounded-2xl p-0 shadow-2xl backdrop:bg-navy-950/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-prata-200 bg-navy-900 px-5 py-4">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-azul-400">
              Sob medida
            </p>
            <h3 className="font-display mt-0.5 text-lg font-bold text-white">
              {product.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-prata-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-5 py-5">
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-grafite-900">
                Largura (m)
              </span>
              <input
                type="text"
                inputMode="decimal"
                value={largura}
                onChange={(event) => setLargura(event.target.value)}
                placeholder={`Ex.: ${formatMetros(medidas.larguraMin)}`}
                className="h-11 rounded-lg border border-prata-200 px-3 text-sm text-grafite-900 placeholder:text-grafite-600/50 focus:border-azul-500 focus:outline-none"
              />
              <span className="text-[0.6875rem] text-grafite-600">
                Mín: {formatMetros(medidas.larguraMin)} m · Máx:{" "}
                {formatMetros(medidas.larguraMax)} m
              </span>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-grafite-900">
                Altura (m)
              </span>
              <input
                type="text"
                inputMode="decimal"
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                placeholder={`Ex.: ${formatMetros(medidas.alturaMin)}`}
                className="h-11 rounded-lg border border-prata-200 px-3 text-sm text-grafite-900 placeholder:text-grafite-600/50 focus:border-azul-500 focus:outline-none"
              />
              <span className="text-[0.6875rem] text-grafite-600">
                Mín: {formatMetros(medidas.alturaMin)} m · Máx:{" "}
                {formatMetros(medidas.alturaMax)} m
              </span>
            </label>
          </div>

          <div className="grid grid-cols-[1fr_5.5rem] gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-grafite-900">
                Cor do alumínio
              </span>
              <select
                value={cor}
                onChange={(event) => setCor(event.target.value)}
                className="h-11 rounded-lg border border-prata-200 bg-white px-3 text-sm text-grafite-900 focus:border-azul-500 focus:outline-none"
              >
                {ALUMINUM_COLORS.map((corOpcao) => (
                  <option key={corOpcao} value={corOpcao}>
                    {corOpcao}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-grafite-900">
                Qtde.
              </span>
              <input
                type="number"
                min={1}
                max={99}
                value={quantidade}
                onChange={(event) => setQuantidade(event.target.value)}
                className="h-11 rounded-lg border border-prata-200 px-3 text-sm text-grafite-900 focus:border-azul-500 focus:outline-none"
              />
            </label>
          </div>

          {foraDaFaixa && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs leading-relaxed text-amber-900">
              Medida fora da faixa mais comum deste produto. Sem problema:
              envie mesmo assim e nossa equipe faz a avaliação técnica.
            </p>
          )}

          {erro && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-800">
              {erro}
            </p>
          )}

          <a
            href={whatsappUrl(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            data-wa={`calculadora-${product.id}`}
            onClick={aoClicarEnviar}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-verde-600 text-[0.9375rem] font-semibold text-white shadow-[0_10px_28px_-10px_rgba(21,128,61,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
          >
            <WhatsAppIcon />
            Receber orçamento no WhatsApp
          </a>
          <p className="-mt-1 text-center text-[0.6875rem] text-grafite-600">
            Gratuito e sem compromisso · Resposta em horário comercial
          </p>
        </div>
      </dialog>
    </>
  );
}
