# Verificação da versão 4 — 26/10/2026

## Fluxo verificado

Home com uma pergunta e quatro respostas em X. Cabeçalho e introduções removidos da home; controles de aparência e efeitos ficam no rodapé. Nas histórias, controles no cabeçalho. Quatro narrativas reescritas; perguntas internas retiradas também da leitura contínua. Audiodescrições preservadas, pois os mesmos objetos e cenários continuam representados.

## Execução

- Chromium headless: 20 combinações (home e quatro histórias × larguras 320/390/768/1280 CSS px), sem rolagem horizontal após corrigir o excesso lateral da camada de fundo.
- Texto a 200% com altura de linha 1,5, letras 0,12em, palavras 0,16em e margem de parágrafos 2em: sete rotas em 320 CSS px, sem rolagem horizontal. O seletor passa à lista linear quando há texto ampliado.
- axe-core 4.10.3: 10 estados (home + quatro histórias em claro/escuro), zero violações nas regras A/AA 2.0/2.1/2.2 e boas práticas selecionadas. Contraste sobre imagens permanece entre as verificações incompletas, não convertido em aprovação.
- Enter abre história com foco no título. Há quatro links de resposta na home e zero controles de questionário nas histórias. Nenhuma seção introdutória extra foi encontrada na home. Os quatro textos descritivos e fontes MP3 permanecem presentes.
- Ondas ativadas com Enter nas quatro ilustrações. Parallax observado nas camadas de fundo das quatro histórias. Desligar efeitos desativa o acionador, remove ondas e zera as transformações. Preferência desligada persiste após recarregar.
- prefers-reduced-motion emulado: controle e acionador desativados, transformações ausentes. Alterar a preferência em tempo de execução também foi verificado.
- Emulação de toque em 390px: toque criou uma onda e o elemento foi removido após 950ms. Imagem sem transformação sob redução de movimento. Sem laço requestAnimationFrame permanente: atualização somente em resposta a rolagem, ponteiro e redimensionamento.
- Alto contraste emulado: quatro respostas disponíveis, sem rolagem horizontal. Sem JavaScript: as quatro histórias estão presentes e não há cabeçalhos de perguntas antigas.
- Zero erros JavaScript observados. Arquivos JS verificados com node --check. Capturas de home 320/390/1280, ARIA mobile, NMIXX desktop e movimento reduzido inspecionadas.

## Limites

Emulação de toque não substitui Redmi 12C/Firefox real. Ainda são necessários NVDA, TalkBack, zoom real, desempenho em aparelho de entrada, contraste sobre artes e validação com jovens e pessoas sensíveis a movimento. Os efeitos são dispensáveis, podem ser desligados e não carregam informação essencial. Isso não autoriza prometer impacto nulo nem conformidade integral. Arquivos de testes: v4-results.json e v4-touch-results.json. Os relatórios anteriores são históricos.
