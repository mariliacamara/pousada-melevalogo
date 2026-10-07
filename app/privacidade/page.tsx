import type { Metadata } from "next";

import WhatsAppLink from "@/components/WhatsAppLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como a ${site.name} trata os dados de quem visita o site e entra em contato.`,
  alternates: { canonical: "/privacidade" },
};

// REVISAR antes de publicar: incluir razão social e CNPJ do responsável
// e conferir o texto com quem cuida do jurídico/contábil da pousada.
const UPDATED_AT = "7 de outubro de 2026";

export default function PrivacyPage() {
  const { address } = site;

  return (
    <article className="section bg-white">
      <div className="wrap flex max-w-[46rem] flex-col gap-6">
        <header className="flex flex-col gap-3">
          <p className="eyebrow text-pool">Privacidade</p>
          <h1 className="h2">Política de privacidade</h1>
          <p className="text-ink-soft">Atualizada em {UPDATED_AT}.</p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Quem é responsável</h2>
          <p>
            {site.name}, {address.street}, {address.neighborhood}, {address.city} -{" "}
            {address.region}, CEP {address.postalCode}. Contato pelo WhatsApp{" "}
            {site.phone.display}.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Quais dados tratamos</h2>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>
              <strong>Contato pelo WhatsApp.</strong> Quando você chama a pousada, recebemos
              seu número, seu nome de perfil e o que você escrever (datas, número de
              hóspedes). Usamos para responder e fazer a reserva.
            </li>
            <li>
              <strong>Dados de navegação.</strong> Com o seu aceite, o Google Analytics e o
              Pixel da Meta registram páginas visitadas, tipo de aparelho, cidade
              aproximada e cliques nos botões de WhatsApp.
            </li>
          </ul>
          <p>O site não tem cadastro, login nem pagamento online.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Cookies</h2>
          <p>
            Cookies de medição e de publicidade só são gravados depois que você aceita no
            aviso que aparece na primeira visita. Se recusar, o site funciona igual. Você
            pode mudar a escolha quando quiser em “Preferências de cookies”, no rodapé.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Com quem compartilhamos</h2>
          <p>
            Com os fornecedores que fazem o site funcionar e medem as visitas: Google
            (Analytics e Maps), Meta (Pixel e WhatsApp) e o serviço de hospedagem. Não
            vendemos dados.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Seus direitos</h2>
          <p>
            Pela Lei Geral de Proteção de Dados (Lei 13.709/2018) você pode pedir acesso,
            correção ou exclusão dos seus dados e retirar o consentimento. É só chamar a
            pousada.
          </p>
          <WhatsAppLink
            message="Olá! Quero falar sobre os meus dados pessoais."
            placement="privacy"
            className="btn btn-pool self-start"
          >
            Falar com a pousada
          </WhatsAppLink>
        </section>
      </div>
    </article>
  );
}
