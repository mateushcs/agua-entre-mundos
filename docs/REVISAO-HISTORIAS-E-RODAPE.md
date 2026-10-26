# Histórias e rodapé — 26/10/2026

As quatro narrativas passaram a ter entre 282 e 295 palavras, com três cenas e dois parágrafos por cena. Os fatos culturais, as fontes e a descrição das ilustrações permanecem separados da ficção original.

Referências consultadas nesta revisão:

- Florida State University, Beginning a Short Story: https://wr.english.fsu.edu/beginning-short-story. Protagonista, lugar e problema apresentados cedo; poucos detalhes específicos; abertura perto do acontecimento. Aplicação: ruído sob a ponte, batida no casco, portal refletido e sombra no fundo do mar.
- William Ryan, Royal Literary Fund, Writing Technique part 2 (13/06/2024): https://www.rlf.org.uk/posts/writing-technique-part-2/. Revelação gradual e pistas sustentam tensão; esconder informação não deve deixar a cena incompreensível. Aplicação: o leitor reconhece o cenário e acompanha o que o personagem consegue descobrir, sem promessas de continuação inexistente.
- NN/g, Teenager’s UX: https://www.nngroup.com/articles/usability-of-websites-for-teenagers/. Blocos curtos, linguagem compreensível e tom não infantilizado. Aplicação: vocabulário cotidiano em português, sem gírias impostas a todos os adolescentes. A pesquisa não constitui validação com jovens brasileiros deste protótipo.
- Reinhart et al., Do LLMs write like humans?: https://arxiv.org/html/2410.16107v1. A recorrência estilística observada no estudo em inglês orienta atenção à variedade; não é uma lista universal de palavras de IA. Não foi usado detector de autoria.

A revisão mantém ritmos diferentes de suspense e muda os desfechos por história, sem repetir máximas sobre sustentabilidade no corpo narrativo. O uso de voz cotidiana não equivale a uma alegação de que o texto não teve assistência de IA.

Rodapé: fundo preto de largura total; bloco da atividade PCI-DD; navegação e link para o código; preferências da home; notas de autoria. Textos claros, foco destacado e organização em uma coluna no celular. Aparência preta do rodapé permanece nas duas opções de tema, com suporte a cores forçadas.

## Verificação da implementação

21 combinações de rota/largura (320, 390 e 1280 CSS px), sem rolagem horizontal. As quatro narrativas têm seis parágrafos cada, com 282–295 palavras. Dez estados auditados com axe-core 4.10.3 (home e quatro histórias, claro/escuro): sem violações detectadas pelas regras A/AA e boas práticas selecionadas; contraste sobre imagens permanece entre os resultados incompletos. Texto a 200% com espaçamento aumentado, em 320px, na home e WJSN: sem rolagem horizontal. Cores forçadas: quatro opções visíveis. Nenhum erro JavaScript observado. Capturas da home em celular/desktop e da segunda cena ARIA inspecionadas. Não substitui teste real com leitores de tela e público juvenil.
