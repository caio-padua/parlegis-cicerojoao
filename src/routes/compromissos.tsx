import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { compromissosEstaduais } from "@/lib/site-data";

export const Route = createFileRoute("/compromissos")({
  head: () => ({
    meta: [
      { title: "Compromissos — Cícero João" },
      {
        name: "description",
        content:
          "Bandeiras estaduais de Cícero João: saúde regional, segurança, educação técnica, mobilidade, comércio de bairro e acessibilidade.",
      },
      { property: "og:title", content: "Compromissos — Cícero João" },
      {
        property: "og:description",
        content: "As bandeiras estaduais defendidas por Cícero João, tema por tema.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/compromissos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/compromissos" }],
  }),
  component: Compromissos,
});

function Compromissos() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Compromissos · São Paulo"
        title="Bandeiras para o Estado"
        description="Sorocaba é a base, mas os problemas são de toda a região. Cada bandeira aqui tem o problema, a proposta e o que muda na vida da pessoa."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {compromissosEstaduais.map((c) => (
            <article key={c.slug} className="card-premium flex flex-col p-8">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--ouro)]">
                {c.tema}
              </span>
              <h2 className="mt-2 font-display text-2xl text-[var(--bordo)]">
                {c.titulo}
              </h2>

              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-foreground">O problema</dt>
                  <dd className="text-muted-foreground">{c.problema}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">A proposta</dt>
                  <dd className="text-muted-foreground">{c.proposta}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">O que muda para você</dt>
                  <dd className="text-muted-foreground">{c.impacto}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--champagne)] px-4 py-2 text-sm font-semibold text-[var(--grafite)] ring-1 ring-[var(--ouro)] transition-colors hover:bg-[var(--ouro)] hover:text-[var(--branco-quente)]"
                >
                  {c.cta}
                </Link>
                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center rounded-md border border-[var(--ouro)]/50 px-4 py-2 text-sm font-medium text-[var(--bordo)] transition-colors hover:bg-[var(--champagne)]/30"
                >
                  Ver projetos do tema
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="card-premium mt-12 flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-[var(--bordo)]">
              Falta alguma bandeira na sua cidade?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Conte o problema do seu bairro ou da sua região. Cada demanda é
              registrada, organizada e respondida.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[var(--champagne)] px-5 py-3 text-sm font-semibold text-[var(--grafite)] ring-1 ring-[var(--ouro)] transition-colors hover:bg-[var(--ouro)] hover:text-[var(--branco-quente)]"
          >
            Enviar uma demanda
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
