import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { VideoEmbed } from "@/components/video-embed";
import { Badge } from "@/components/ui/badge";
import { canaisVideo, videos } from "@/lib/site-data";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — Cícero João" },
      {
        name: "description",
        content:
          "Vídeos de Cícero João: prestação de contas, explicação de propostas e registros das visitas aos bairros de Sorocaba.",
      },
      { property: "og:title", content: "Vídeos — Cícero João" },
      {
        property: "og:description",
        content: "Assista às últimas gravações, propostas explicadas e prestação de contas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://parlegis-cicerojoao.lovable.app/videos" },
    ],
    links: [{ rel: "canonical", href: "https://parlegis-cicerojoao.lovable.app/videos" }],
  }),
  component: Videos,
});

function Videos() {
  const [destaque, ...demais] = videos;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Vídeos"
        title="Assista e entenda"
        description="Propostas explicadas em linguagem simples, prestação de contas e registros do trabalho feito na rua — direto para você assistir."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {destaque ? (
          <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
            <VideoEmbed youtubeId={destaque.youtubeId} titulo={destaque.titulo} />
            <div>
              <Badge className="bg-[var(--champagne)] text-[var(--grafite)] hover:bg-[var(--champagne)]">
                {destaque.tema}
              </Badge>
              <h2 className="mt-4 font-display text-3xl text-[var(--bordo)]">
                {destaque.titulo}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {destaque.descricao}
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {destaque.data}
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demais.map((v) => (
            <article key={v.slug} className="card-premium flex flex-col p-5">
              <VideoEmbed youtubeId={v.youtubeId} titulo={v.titulo} />
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="outline" className="border-[var(--ouro)] text-[var(--bordo)]">
                  {v.tema}
                </Badge>
                <span className="text-xs text-muted-foreground">{v.data}</span>
              </div>
              <h3 className="mt-3 font-display text-lg text-[var(--bordo)]">{v.titulo}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{v.descricao}</p>
            </article>
          ))}
        </div>

        <div className="card-premium mt-16 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-[var(--bordo)]">
              Acompanhe as gravações mais recentes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Novos vídeos são publicados nos canais oficiais. Inscreva-se para
              receber cada atualização.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={canaisVideo.youtube}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--champagne)] px-5 py-3 text-sm font-semibold text-[var(--grafite)] ring-1 ring-[var(--ouro)] hover:bg-[var(--ouro)] hover:text-[var(--branco-quente)]"
            >
              Canal no YouTube <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--ouro)] px-5 py-3 text-sm font-semibold text-[var(--bordo)] hover:bg-[var(--creme)]"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
