# Água entre mundos

Página demonstrativa de Mat para a atividade prática da seleção à bolsa PCI-DD de Design UX/UI e acessibilidade do projeto **Plataforma Digital de Informação para a Sustentabilidade para o público juvenil**.

A pergunta inicial é **“Qual mundo da água você quer explorar?”**. Quatro respostas em X abrem histórias inspiradas em ARIA, One Piece, NMIXX e WJSN, conectando os imaginários culturais ao saneamento, aos rios e à vida aquática. O público proposto é de 13 a 17 anos. As cenas são ficção original, não acontecimentos oficiais das obras ou campanhas dos artistas.

## Executar localmente

O projeto contém HTML, CSS e JavaScript, sem dependências de build. Com Python instalado:

```sh
python -m http.server 8000 --directory dist
```

Abra http://localhost:8000. Para editar a página, altere os arquivos em `dist/`.

## Estrutura

- `dist/index.html`: estrutura, rodapé e recursos de acessibilidade.
- `dist/app.js`: navegação entre a pergunta e os quatro mundos.
- `dist/story-data.js`: narrativas e conexões ambientais.
- `dist/worlds.js`: referências culturais e metadados.
- `dist/water.js`: efeitos opcionais de água e parallax.
- `dist/style.css`, `v3.css`, `v4.css`: estilos da experiência.
- `dist/leitura.html`: histórias completas, disponíveis sem JavaScript.
- `dist/sobre.html`: fontes, autoria e limites de acessibilidade.
- `dist/audio/` e `dist/fonts/`: audiodescrições e fontes locais.
- `.github/workflows/pages.yml`: publicação automática no GitHub Pages.

## Publicação

Em **Settings → Pages**, use **GitHub Actions** como origem. Cada push em `main` publica a pasta `dist`. Também é possível executar manualmente o workflow **Publicar no GitHub Pages**, na aba Actions. Não há servidor de aplicação, banco de dados ou chave secreta a configurar.

Os caminhos de recursos são relativos, para funcionar também no endereço de projeto `usuario.github.io/agua-entre-mundos/`.

## Acessibilidade

A meta de implementação é WCAG 2.2 AA. Há navegação por teclado, foco visível, descrição das ilustrações em texto e áudio opcional, temas claro/escuro e leitura sem JavaScript. O controle de efeitos mantém a preferência local; `prefers-reduced-motion` sempre desliga o movimento. As animações são decorativas, não movem texto ou controles e não transmitem informação essencial.

Os testes automatizados e de emulação realizados não constituem certificação nem declaração de conformidade integral. Ainda são necessários testes com NVDA, TalkBack, aparelhos reais e jovens com diferentes necessidades de acesso. Os registros e limites estão em `docs/`.

## Autoria e referências

Narrativas e ilustrações criadas para esta demonstração. As ilustrações foram geradas com IA sob direção editorial; os áudios usam voz sintética em português. As obras e artistas citados não participam deste projeto. As informações culturais e ambientais têm fontes na página **Fontes e acessibilidade**.

Cormorant Garamond e Barlow Condensed são distribuídas com suas licenças OFL em `dist/fonts/`. As marcas e obras citadas pertencem a seus respectivos titulares.
