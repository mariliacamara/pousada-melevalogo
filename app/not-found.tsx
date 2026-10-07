import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-pool text-white">
      <div className="wrap flex flex-col items-start gap-5">
        <p className="eyebrow text-sun">Game over · 404</p>
        <h1 className="h2">Essa página não existe</h1>
        <p className="max-w-[32em] text-lg">
          O endereço pode ter mudado. A página inicial tem tudo sobre a pousada.
        </p>
        <Link href="/" className="btn btn-sun">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
