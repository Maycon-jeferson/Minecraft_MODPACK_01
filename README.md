# INVICTUS — Modpack Minecraft

Modpack pessoal focado em exploração, tecnologia, automação e progressão guiada por quests.

## Ambiente

- **Minecraft:** 1.21.1
- **Loader:** NeoForge 21.1.262
- **Scripts:** KubeJS 2101.7.2
- **Receitas e tags:** Almost Unified 1.21.1-1.4.2 e AllTheOres 3.2.0
- **Quests:** FTB Quests 2101.1.36
- **Mods de suporte:** JEI, Polymorph e FTB Library/Teams

## Mods e progressão em destaque

O perfil inclui Create, Mekanism, Immersive Engineering, Applied Energistics 2, Ars Nouveau, Occultism, Industrial Foregoing, Powah, MineColonies, Farmer’s Delight e Apotheosis, entre outros. A lista completa e as versões instaladas estão na pasta `mods/`.

O livro de quests possui o grupo **Tutoriais de Tecnologia**, com capítulos para:

- **Create:** liga de andesito, transmissão cinética, roda d’água, prensa, misturador e rodas de esmagamento.
- **Mekanism:** materiais unificados, enriquecimento, infusão, processamento avançado, Crusher e Digital Miner.
- **Immersive Engineering:** rede LV, Metal Press, Crusher e Arc Furnace.
- **Applied Energistics 2:** Certus Quartz, Fluix, Inscriber, Controller, armazenamento e autocrafting.

As descrições das quests explicam a montagem, as entradas e saídas e a configuração básica das máquinas. O progresso pode ser expandido nos arquivos SNBT em `config/ftbquests/quests/`.

## Integração de materiais

Os scripts do KubeJS ficam em `kubejs/`:

- `server_scripts/recipes.js` adiciona receitas de conversão de itens de Mekanism e Immersive Engineering para formas do AllTheOres, principalmente para compatibilidade com itens já existentes em mundos. As receitas nativas dos mods continuam sendo as rotas de processamento.
- `client_scripts/jei_hide.js` remove do visualizador os itens duplicados listados de Mekanism e Immersive Engineering. Ele usa `RecipeViewerEvents`, API do KubeJS para Minecraft 1.21+.
- Almost Unified ajuda a escolher formas dominantes em tags compartilhadas.

> A unificação atual é uma camada de compatibilidade para os materiais configurados; não substitui todas as receitas, loot tables ou minérios gerados por todos os mods. A geração de minérios duplicados precisa ser ajustada nas configurações/datapacks dos mods correspondentes.

## Recarregar alterações

- **Receitas e scripts do servidor:** use `/reload` em um mundo com comandos habilitados.
- **Ocultação e scripts do cliente:** pressione `F3+T` ou reinicie o jogo.
- **Quests e traduções:** reinicie o jogo para garantir que os arquivos em `config/ftbquests/quests/` sejam carregados.
- **Logs do KubeJS:** consulte `logs/kubejs/` quando disponível; erros de carregamento também aparecem no log principal do jogo.

## Arquivos principais

```text
config/ftbquests/quests/
  chapters/                 # Capítulos e estrutura das quests
  lang/en_us.snbt           # Títulos e descrições localizados
  chapter_groups.snbt       # Grupo de capítulos
kubejs/
  client_scripts/           # Ajustes do JEI/visualizador
  server_scripts/           # Receitas e integração de materiais
  startup_scripts/          # Alterações aplicadas na inicialização
mods/                       # Mods instalados pelo perfil CurseForge
```

## Notas de manutenção

- Confira os IDs reais dos itens e as tags do modpack antes de adicionar receitas: IDs podem mudar entre versões.
- Ao atualizar mods ou KubeJS, revise scripts, configurações de geração e receitas em um mundo de teste antes de continuar um mundo existente.
- Polymorph permite escolher entre resultados conflitantes de crafting quando as receitas continuam compartilhando os mesmos ingredientes.
