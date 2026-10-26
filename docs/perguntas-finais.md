# Perguntas ao final dos contos — 26/10/2026

Cada um dos quatro percursos termina com uma pergunta de três alternativas sobre a situação narrada e o cuidado com a água. A pessoa escolhe uma opção e aciona “Ver comentário”. Pode mudar a escolha e ler outra explicação, sem pontuação, prazo, envio ou armazenamento de respostas. O acesso aos outros mundos continua disponível sem responder.

Implementação: grupos nativos de radio em fieldset/legend, rótulos clicáveis, botão de envio explícito, validação nativa para envio vazio e retorno em uma região de status persistente. Seleção e retorno não deslocam o foco para outro ponto da página. A leitura contínua inclui as mesmas perguntas e comentários em elementos details, mesmo sem JavaScript.

Orientações consultadas: https://www.w3.org/WAI/tutorials/forms/grouping/ e https://www.w3.org/WAI/tutorials/forms/notifications/.

Verificação: quatro fluxos por teclado, validação de envio vazio, três comentários por pergunta e foco mantido no botão após envio. Doze combinações de rota/largura (320, 390, 1280 CSS px), sem rolagem horizontal. Oito estados de pergunta respondida em claro/escuro com axe-core: nenhuma violação detectada nas regras selecionadas; a análise automática de contraste contém resultados incompletos. NMIXX em 320px com fonte a 200% e espaçamento aumentado: sem rolagem horizontal após o ajuste de layout. Radios visíveis em cores forçadas. Perguntas e comentários disponíveis na leitura sem JavaScript. Nenhum erro JavaScript observado. Captura da pergunta ARIA e do retorno inspecionadas. Isso não substitui testes reais com leitores de tela ou jovens.
