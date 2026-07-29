# 07 — Checklist de aceite

Marcar tudo antes de publicar.

## Conteúdo

- [ ] A palavra **"vereador"** não aparece em nenhum arquivo (`grep -ri "vereador" .`)
- [ ] Nenhum **partido político** citado (sigla, nome ou número)
- [ ] "Câmara Municipal" não aparece como cargo/local do titular
- [ ] Todos os números batem com `03-DADOS.md` (1.039 / 306 / 51 / 12 / 111)
- [ ] Os 6 projetos estão publicados com tema, status, ano e resumo corretos
- [ ] Nota de fonte dos dados presente na página de números

## Identidade visual

- [ ] Símbolo **CJ** no topo, à esquerda (sem wordmark, sem skyline)
- [ ] Wordmark "Cícero João" no rodapé
- [ ] Favicon com o símbolo CJ
- [ ] Cores conforme `02-DESIGN-SYSTEM.md`
- [ ] Fontes Playfair Display + Inter carregando
- [ ] Nenhum botão `rounded-full` — todos `rounded-md` com acabamento dourado

## Vídeos

- [ ] Bloco "Entenda em vídeo" em cada página de projeto
- [ ] Placeholder "Vídeo em gravação" quando não há `youtubeId`
- [ ] Página `/videos` com destaque, grade e link para o canal
- [ ] "Vídeos" presente no menu e no rodapé
- [ ] Embeds usando `youtube-nocookie` e `loading="lazy"`

## Técnico / SEO

- [ ] Um `<h1>` único por página
- [ ] `title` < 60 caracteres e `description` < 160 em todas as páginas
- [ ] `canonical` e `og:url` apontando para a própria página (URL absoluta)
- [ ] JSON-LD `Person` sem cargo, sem empregador e sem partido
- [ ] Imagens com `alt` e `loading="lazy"` abaixo da dobra
- [ ] Layout testado em 360px, 768px e 1280px
- [ ] Formulário de contato com validação e mensagem de sucesso
- [ ] Aviso de privacidade/LGPD no formulário
