import { PlayCircle } from "lucide-react";

type Props = {
  youtubeId?: string | null;
  titulo: string;
};

export function VideoEmbed({ youtubeId, titulo }: Props) {
  if (!youtubeId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--ouro)]/50 bg-[var(--creme)] text-center">
        <PlayCircle className="h-8 w-8 text-[var(--bordo)]/60" />
        <p className="px-6 text-sm font-medium text-[var(--bordo)]">
          Vídeo em gravação
        </p>
        <p className="px-8 text-xs text-muted-foreground">
          Em breve, a explicação em vídeo sobre {titulo.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-[var(--ouro)]/40 shadow-elegant">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={titulo}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
