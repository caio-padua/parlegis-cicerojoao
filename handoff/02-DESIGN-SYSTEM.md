# 02 — Sistema de design

Stack de origem: Tailwind CSS v4 (tokens em `src/styles.css`) + shadcn/ui.
Se o outro ambiente usar Tailwind v3, basta transformar os tokens abaixo em
`theme.extend.colors`.

## Paleta (valores exatos)

| Token | HEX | OKLCH | Uso |
|---|---|---|---|
| `--bordo` | `#8B1E2D` | `oklch(0.42 0.14 24)` | Cor primária, títulos, ícones |
| `--vermelho` | `#B3262E` | `oklch(0.48 0.17 25)` | Hover / destaque secundário |
| `--ouro` | `#C99A2E` | `oklch(0.71 0.13 78)` | Bordas, filetes, hover de botão |
| `--champagne` | `#E7C873` | `oklch(0.85 0.10 82)` | Fundo dos botões principais |
| `--creme` | `#F8F3E8` | `oklch(0.96 0.018 85)` | Fundo geral da página |
| `--branco-quente` | `#FFFDF8` | `oklch(0.99 0.008 85)` | Fundo de cards e seções |
| `--petroleo` | `#102D3C` | `oklch(0.27 0.04 230)` | Cabeçalho, rodapé, faixas escuras |
| `--grafite` | `#242424` | `oklch(0.24 0.005 250)` | Texto corrido |

Sombra assinatura:
`--shadow-elegant: 0 18px 45px -20px color-mix(in oklab, #102D3C 35%, transparent);`

Raio base: `--radius: 0.875rem`.

## Tipografia

- **Display (títulos):** `Playfair Display` — pesos 500, 600, 700
- **Texto (corpo/UI):** `Inter` — pesos 400, 500, 600, 700

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
```

Escala usada: eyebrow `text-xs uppercase tracking-[0.22em]` em bordô ·
H1 `text-5xl/6xl` Playfair · H2 `text-3xl/4xl` Playfair · corpo `text-base/lg` Inter.

## Botões (regra do cliente)

O cliente **não gosta de botões redondos (`rounded-full`)**. Padrão aprovado:
retângulo com leve arredondamento (`rounded-md`) e acabamento dourado.

```html
<!-- Botão principal -->
<a class="inline-flex items-center justify-center rounded-md bg-[#E7C873] px-5 py-3
          text-sm font-semibold text-[#242424] ring-1 ring-[#C99A2E]
          transition-colors hover:bg-[#C99A2E] hover:text-[#FFFDF8]">
  Enviar demanda
</a>

<!-- Botão secundário -->
<a class="inline-flex items-center justify-center rounded-md border border-[#C99A2E]
          px-5 py-3 text-sm font-semibold text-[#8B1E2D] hover:bg-[#F8F3E8]">
  Ver projetos
</a>
```

## Card premium

```css
.card-premium {
  background: #FFFDF8;
  border: 1px solid rgb(201 154 46 / 0.35);
  border-radius: 1.25rem;
  box-shadow: 0 18px 45px -20px rgb(16 45 60 / 0.35);
}
```

## Cabeçalho e rodapé

- Cabeçalho: fundo `#102D3C`, texto `#FFFDF8`, links ativos em `#E7C873`,
  filete dourado de 2px na base, `sticky top-0 z-40`.
- Subtítulo ao lado do símbolo CJ: **"Sorocaba · São Paulo"** (nunca cargo).
- Rodapé: fundo `#102D3C`, símbolo CJ + wordmark, colunas
  Institucional / Contato / Redes, linha final apenas com
  `© {ano} Cícero João. Todos os direitos reservados.` e `Sorocaba — SP.`
