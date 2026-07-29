# 04 — Módulos "Projetos e Leis" e "Vídeos"

## A. Projetos e Leis

### Rotas

- `/projetos` — listagem em grade (3 colunas no desktop, 2 no tablet, 1 no mobile)
- `/projetos/{slug}` — página de detalhe

### Card da listagem

```
[ Badge tema (fundo champagne) ] [ Badge status (contorno ouro) ]      ano →
Título (Playfair, bordô, text-xl)
Resumo (2–3 linhas, muted)
"Ler resumo →"
```
Hover: `-translate-y-1`, transição suave.

### Página de detalhe — ordem dos blocos

1. Link "← Todos os projetos"
2. Badges (tema, status) + ano
3. `<h1>` com o título
4. Resumo em destaque (`text-lg`)
5. **Bloco "Entenda em vídeo"** (ver seção B)
6. Aviso: texto integral e tramitação nos sistemas oficiais do município
7. CTA: "Falar com a equipe sobre este projeto" → `/contato`

### SEO por projeto

```
title:            {titulo} — Cícero João
description:      {resumo}
og:type:          article
og:url/canonical: https://<dominio>/projetos/{slug}
```

JSON-LD sugerido: `@type: "CreativeWork"` ou `"Legislation"`, com `name`,
`about` (tema) e `datePublished` (ano). **Nunca** incluir cargo ou partido.

---

## B. Vídeos

### Objetivo

1. Um vídeo curto (60–120s) explicando **cada projeto**, na página do projeto.
2. Uma página `/videos` com as **últimas gravações** e link para o canal oficial.

### Modelo de dados

```ts
export type Video = {
  slug: string;
  titulo: string;
  descricao: string;
  data: string;
  tema: string;
  youtubeId: string | null; // null => card "vídeo em gravação"
};

export const canaisVideo = {
  youtube: "https://www.youtube.com/@<canal>",
  instagram: "https://www.instagram.com/<perfil>",
};
```

Em `Projeto`, acrescentar o campo opcional `youtubeId?: string | null`.
Para publicar: de `https://youtu.be/ABC123xyz` use `youtubeId: "ABC123xyz"`.

### Componente de player (com estado "em breve")

Player responsivo 16:9, `youtube-nocookie` (LGPD/cookies), `loading="lazy"`.
Quando `youtubeId` for `null`, renderizar placeholder com moldura tracejada
dourada e o texto **"Vídeo em gravação"** — nunca deixar um buraco na página.
Código pronto em `codigo/video-embed.tsx`.

### Página `/videos`

1. Cabeçalho: eyebrow "Vídeos" · título "Assista e entenda"
2. **Vídeo em destaque** (o mais recente) em layout 2 colunas: player + resumo
3. Grade dos demais vídeos (3 colunas)
4. Faixa final: "Acompanhe as gravações mais recentes" + botão para o canal do
   YouTube + link para `/projetos`

Código pronto em `codigo/videos.tsx`.

### Pauta inicial de gravação (4 vídeos)

| Slug | Título | Tema |
|---|---|---|
| `prestacao-de-contas` | Prestação de contas do trabalho realizado | Transparência |
| `acessibilidade-calcadas` | Acessibilidade: por que rebaixar calçadas muda vidas | Acessibilidade |
| `comercio-de-bairro` | Comércio de bairro: menos burocracia, mais emprego | Economia |
| `sorocaba-nos-bairros` | Nos bairros: ouvindo quem vive o problema | Bairros |

### Boas práticas de produção

- Vertical (9:16) para redes, horizontal (16:9) para o site — publicar o 16:9 no YouTube e embedar.
- Legendas queimadas: a maioria assiste sem som.
- Primeiros 3 segundos: o problema, não a apresentação pessoal.
- Sempre encerrar com o que a pessoa deve fazer (enviar demanda / acompanhar).
- Nunca citar cargo ou partido na fala nem nas artes.
