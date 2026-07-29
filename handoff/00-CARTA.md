# Carta de handoff — Projeto Cícero João

**De:** equipe do portal `parlegis-cicerojoao` (Lovable)
**Para:** equipe/agente responsável pelo projeto no Replit
**Assunto:** padronização de conteúdo, identidade visual e novos módulos (Projetos e Leis + Vídeos)
**Data:** julho de 2026

---

Olá,

Estamos desenvolvendo, em paralelo, o portal institucional de **Cícero João da Silva**
(Sorocaba — SP) no repositório `parlegis-cicerojoao`. Para que as duas versões
falem a mesma língua, reunimos **todo o conteúdo, a identidade visual e o código
de referência** na pasta `handoff/` deste repositório.

Nada precisa ser adivinhado: dados, textos, cores exatas, fontes, estrutura de
páginas e componentes prontos estão documentados arquivo por arquivo.

## Por onde começar

Leia, nesta ordem:

1. `handoff/README.md` — índice geral do pacote
2. `handoff/01-BRIEFING.md` — quem é, posicionamento e **regras de comunicação obrigatórias**
3. `handoff/02-DESIGN-SYSTEM.md` — cores em HEX/OKLCH, tipografia, botões, componentes
4. `handoff/03-DADOS.md` — **todos os dados exatos**: projetos, números, bairros, agenda, notícias
5. `handoff/04-PROJETOS-E-VIDEOS.md` — módulo "Projetos e Leis" + módulo "Vídeos"
6. `handoff/05-ESTRUTURA-DE-PAGINAS.md` — mapa de rotas, SEO e conteúdo de cada página
7. `handoff/06-ROADMAP-CAMPANHA.md` — o que um pré-candidato a Deputado Estadual precisa ter
8. `handoff/07-CHECKLIST.md` — checklist de aceite
9. `handoff/codigo/` — código-fonte real dos componentes (React + Tailwind), para copiar ou adaptar

## Três regras que não podem ser quebradas

1. **Não usar a palavra "vereador"** em nenhum lugar do site (títulos, textos,
   SEO, dados estruturados, alt de imagem). O posicionamento agora é de
   liderança pública de Sorocaba.
2. **Não citar partido político** (sigla, número ou nome). Filiações mudam; o
   site não pode envelhecer por causa disso.
3. **Não usar a silhueta/skyline da cidade** que aparece na arte original da
   logo. Usar apenas o **símbolo "CJ"** (no menu) e o **wordmark "Cícero João"**
   (no rodapé).

## O que pedimos

- Replicar o módulo **Projetos e Leis** com os dados exatos de `03-DADOS.md`;
- Implementar o módulo **Vídeos**: um vídeo explicativo por projeto + uma página
  com os últimos vídeos gravados e link para o canal oficial;
- Remover todas as menções a cargo e partido, conforme a regra acima;
- Manter a identidade visual de `02-DESIGN-SYSTEM.md` (bordô, ouro velho,
  champagne, petróleo — Playfair Display + Inter).

Qualquer dúvida de conteúdo, a fonte da verdade é a pasta `handoff/`.
Se algo estiver faltando, avise que complementamos.

Atenciosamente,
**Equipe Parlegis — portal Cícero João**
