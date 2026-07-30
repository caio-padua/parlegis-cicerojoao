export const bairros = [
  "Centro", "Zona Norte", "Zona Leste", "Éden", "Ipanema",
  "Aparecidinha", "Brigadeiro Tobias", "Cajuru", "Wanel Ville",
  "Vila Haro", "Além Ponte", "Vila Helena", "Jardim Maria Eugênia",
  "Vila Barão", "Júlio de Mesquita",
];

export const areasTematicas = [
  { titulo: "Saúde", desc: "UBS, atendimento e prevenção." },
  { titulo: "Segurança", desc: "Iluminação, GCM e prevenção." },
  { titulo: "Acessibilidade", desc: "Calçadas e rebaixamentos." },
  { titulo: "Zeladoria", desc: "Limpeza, poda e manutenção." },
  { titulo: "Trânsito", desc: "Sinalização e mobilidade." },
  { titulo: "Bairros", desc: "Demandas locais ouvidas." },
  { titulo: "Comércio local", desc: "Apoio ao pequeno empreendedor." },
  { titulo: "Educação", desc: "Escolas, creches e cultura." },
] as const;

export type Compromisso = {
  slug: string;
  tema: string;
  titulo: string;
  problema: string;
  proposta: string;
  impacto: string;
  cta: string;
};

export const compromissosEstaduais: Compromisso[] = [
  {
    slug: "saude-regional",
    tema: "Saúde",
    titulo: "Fila menor na saúde da região",
    problema:
      "Quem mora na região de Sorocaba espera meses por consulta com especialista, exame e cirurgia eletiva.",
    proposta:
      "Ampliar mutirões de exames e cirurgias, com repasse estadual vinculado a metas de espera e transporte garantido entre as cidades.",
    impacto:
      "Menos tempo de espera, diagnóstico mais cedo e ninguém deixando de tratar por falta de condução.",
    cta: "Contar meu caso na saúde",
  },
  {
    slug: "seguranca",
    tema: "Segurança",
    titulo: "Bairro iluminado e patrulhado",
    problema:
      "Ruas escuras, praças abandonadas e ronda espaçada fazem o crime crescer justamente na periferia.",
    proposta:
      "Programa estadual de iluminação em LED e videomonitoramento integrado com as polícias e as guardas municipais.",
    impacto:
      "Voltar do trabalho à noite com segurança e usar a praça do bairro sem medo.",
    cta: "Indicar um ponto crítico",
  },
  {
    slug: "educacao-tecnica",
    tema: "Educação técnica",
    titulo: "Curso técnico perto de casa",
    problema:
      "O jovem termina o ensino médio sem qualificação e a indústria da região não encontra mão de obra treinada.",
    proposta:
      "Expandir vagas técnicas e cursos noturnos em parceria com escolas estaduais e empresas da região.",
    impacto:
      "Primeiro emprego mais rápido, salário melhor e o jovem ficando na própria cidade.",
    cta: "Sugerir um curso para meu bairro",
  },
  {
    slug: "mobilidade",
    tema: "Mobilidade",
    titulo: "Estrada boa e sem pedágio abusivo",
    problema:
      "Rodovias da região concentram acidentes e tarifas que pesam no bolso de quem trabalha entre cidades.",
    proposta:
      "Cobrar duplicações, recuperação de trechos críticos e revisão de tarifas e de novos pedágios em vias urbanas.",
    impacto:
      "Viagem mais segura para o trabalho e menos custo no transporte do dia a dia.",
    cta: "Relatar um trecho perigoso",
  },
  {
    slug: "comercio-de-bairro",
    tema: "Comércio e emprego",
    titulo: "Menos burocracia para o pequeno comércio",
    problema:
      "Abrir e manter um comércio de bairro exige licenças demoradas e custo que o pequeno não aguenta.",
    proposta:
      "Simplificar licenciamento estadual, ampliar linhas de crédito ao microempreendedor e apoiar feiras e associações de bairro.",
    impacto:
      "Mais loja aberta, mais emprego perto de casa e dinheiro circulando no próprio bairro.",
    cta: "Falar como empreendedor",
  },
  {
    slug: "acessibilidade-zeladoria",
    tema: "Acessibilidade",
    titulo: "Cidade que o idoso e o cadeirante conseguem usar",
    problema:
      "Calçada quebrada, sem rebaixamento e travessia sem sinalização isolam idosos, cadeirantes e mães com carrinho.",
    proposta:
      "Linha estadual de recursos para calçada acessível, travessia elevada e sinalização em pontos de grande fluxo.",
    impacto:
      "Sair de casa, ir ao posto e à escola com segurança, sem depender de ninguém.",
    cta: "Apontar um local sem acesso",
  },
];

export const mandatoNumeros = [
  { numero: "1.039", label: "Requerimentos" },
  { numero: "306", label: "Indicações" },
  { numero: "51", label: "Projetos de Lei" },
  { numero: "12", label: "Leis Ordinárias" },
  { numero: "111", label: "Emendas" },
] as const;

export type Projeto = {
  slug: string;
  titulo: string;
  tema: string;
  status: "Aprovado" | "Em tramitação" | "Sancionado";
  resumo: string;
  ano: string;
  /** ID do vídeo no YouTube explicando o projeto (null = em breve). */
  youtubeId?: string | null;
};

export const projetos: Projeto[] = [
  {
    slug: "lei-13219-2025-pedagio",
    titulo: "Lei 13.219/2025 — Manifestação contrária à instalação de pedágio",
    tema: "Mobilidade",
    status: "Sancionado",
    resumo:
      "Estabelece manifestação institucional do Município contra a instalação de pedágios em vias urbanas de Sorocaba.",
    ano: "2025",
  },
  {
    slug: "rebaixamento-calcadas",
    titulo: "Rebaixamento de calçadas para acessibilidade",
    tema: "Acessibilidade",
    status: "Aprovado",
    resumo:
      "Indicação para rebaixamento de calçadas em pontos críticos de tráfego, garantindo passagem segura a pedestres e cadeirantes.",
    ano: "2024",
  },
  {
    slug: "iluminacao-publica-bairros",
    titulo: "Reforço de iluminação pública nos bairros",
    tema: "Segurança",
    status: "Em tramitação",
    resumo:
      "Requerimentos para substituição de luminárias por LED e ampliação da iluminação em ruas e praças de bairros periféricos.",
    ano: "2024",
  },
  {
    slug: "apoio-comercio-local",
    titulo: "Apoio ao comércio local e empreendedorismo",
    tema: "Economia",
    status: "Em tramitação",
    resumo:
      "Conjunto de propostas para desburocratizar licenças e fortalecer pequenos comércios de bairro em Sorocaba.",
    ano: "2025",
  },
  {
    slug: "trafego-zona-norte",
    titulo: "Reordenação de tráfego — Zona Norte",
    tema: "Trânsito",
    status: "Aprovado",
    resumo:
      "Indicações para nova sinalização, lombadas e travessias seguras em vias com alto fluxo escolar.",
    ano: "2024",
  },
  {
    slug: "zeladoria-pracas",
    titulo: "Programa permanente de zeladoria de praças",
    tema: "Zeladoria",
    status: "Em tramitação",
    resumo:
      "Cronograma fixo de poda, limpeza e manutenção de praças, com canal direto para moradores reportarem problemas.",
    ano: "2025",
  },
];

export const noticias = [
  {
    titulo: "Cícero João solicita rebaixamento de calçada para tráfego seguro",
    data: "12 de maio de 2025",
    resumo:
      "Indicação protocolada pede adequação em via de grande circulação para garantir acessibilidade.",
  },
  {
    titulo: "Reunião com lideranças da Zona Leste discute zeladoria",
    data: "28 de março de 2025",
    resumo:
      "Encontro com moradores e associações tratou de pavimentação, iluminação e limpeza urbana.",
  },
  {
    titulo: "Audiência pública debate apoio ao comércio de bairro",
    data: "10 de fevereiro de 2025",
    resumo:
      "Cícero João participa de debate com pequenos empresários sobre desburocratização e crédito.",
  },
];

export const agenda = [
  { data: "Toda terça · 14h", titulo: "Atendimento no Gabinete", local: "Escritório de atendimento — Centro" },
  { data: "1ª quinta do mês · 19h", titulo: "Reunião aberta — Zona Norte", local: "Salão paroquial — Aparecidinha" },
  { data: "Sábados alternados · 9h", titulo: "Cícero nos Bairros", local: "Roteiro divulgado nas redes" },
];

/* ---------------------------------------------------------------
 * VÍDEOS
 * Para publicar um vídeo, preencha `youtubeId` com o ID do vídeo
 * (ex.: https://youtu.be/ABC123xyz  ->  youtubeId: "ABC123xyz").
 * Enquanto estiver null, o card aparece como "gravação em breve".
 * ------------------------------------------------------------- */

export type Video = {
  slug: string;
  titulo: string;
  descricao: string;
  data: string;
  tema: string;
  youtubeId: string | null;
};

export const canaisVideo = {
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};

export const videos: Video[] = [
  {
    slug: "prestacao-de-contas",
    titulo: "Prestação de contas do trabalho realizado",
    descricao:
      "Resumo em vídeo das principais entregas, propostas e resultados alcançados junto à população.",
    data: "2025",
    tema: "Transparência",
    youtubeId: null,
  },
  {
    slug: "acessibilidade-calcadas",
    titulo: "Acessibilidade: por que rebaixar calçadas muda vidas",
    descricao:
      "Explicação prática sobre a proposta de acessibilidade e o impacto para idosos, cadeirantes e famílias.",
    data: "2025",
    tema: "Acessibilidade",
    youtubeId: null,
  },
  {
    slug: "comercio-de-bairro",
    titulo: "Comércio de bairro: menos burocracia, mais emprego",
    descricao:
      "Conversa com pequenos empreendedores sobre licenças, crédito e geração de renda no bairro.",
    data: "2025",
    tema: "Economia",
    youtubeId: null,
  },
  {
    slug: "sorocaba-nos-bairros",
    titulo: "Nos bairros: ouvindo quem vive o problema",
    descricao:
      "Registro das visitas semanais, com demandas de zeladoria, iluminação e segurança.",
    data: "2025",
    tema: "Bairros",
    youtubeId: null,
  },
];
