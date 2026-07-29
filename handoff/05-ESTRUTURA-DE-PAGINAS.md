# 05 — Estrutura de páginas

Mapa de rotas do portal (versão Lovable). Reproduzir a mesma arquitetura.

| Rota | Página | Conteúdo principal |
|---|---|---|
| `/` | Início | Hero, áreas de atuação, números, canal do cidadão, bairros, projetos em destaque, notícias + agenda |
| `/biografia` | Biografia | Trajetória, vida pública, estilo de trabalho, ficha resumida |
| `/mandato` | Mandato em números | Os 5 indicadores + texto das duas legislaturas |
| `/projetos` | Projetos e Leis | Grade com os 6 projetos |
| `/projetos/{slug}` | Detalhe do projeto | Resumo + vídeo explicativo + CTA |
| `/videos` | Vídeos | Destaque + grade + canal oficial |
| `/bairros` | Bairros | Lista de regiões atendidas + envio de demanda |
| `/agenda` | Agenda pública | Compromissos fixos |
| `/noticias` | Notícias | Atuação recente |
| `/contato` | Contato | Formulário de demanda + canais oficiais |

## Menu (nesta ordem)

Início · Biografia · Mandato · Projetos e Leis · Vídeos · Bairros · Agenda ·
Notícias · Contato · **[botão dourado] Enviar demanda**

## Padrão de `<head>` por página

```
title:       {Assunto} — Cícero João        (máx. 60 caracteres)
description: {frase única, máx. 155 caracteres, sem cargo e sem partido}
og:title / og:description: iguais aos acima
og:type:     website (ou article nas páginas de projeto)
og:url + canonical: URL absoluta da própria página
twitter:card: summary_large_image
```

Um único `<h1>` por página. HTML semântico (`header`, `nav`, `main`, `section`,
`article`, `footer`). Imagens com `alt` descritivo e `loading="lazy"` fora do
primeiro dobra.

## JSON-LD do site (raiz)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cícero João da Silva",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sorocaba",
    "addressRegion": "SP",
    "addressCountry": "BR"
  }
}
```

Sem `jobTitle`, sem `worksFor`, sem `memberOf`.

## Hero da home (texto aprovado)

- Eyebrow: `Canal do Cidadão · Sorocaba`
- H1: `Cícero João`
- Linha de apoio: `Trabalho público em Sorocaba`
- Parágrafo: *"Um trabalho próximo, organizado e aberto para ouvir a população.
  Atendimento, presença nos bairros e transparência em um só lugar."*
- Botões: `Enviar uma demanda` · `Agendar atendimento` · `Conhecer projetos` · `Assistir vídeos`
