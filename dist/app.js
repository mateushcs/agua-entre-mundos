const app = document.querySelector('#app');
const themeButton = document.querySelector('#theme');
const IDS = ['aria','onepiece','nmixx','wjsn'];
const book = Object.fromEntries(WORLDS.filter(w=>IDS.includes(w.id)).map(w=>[w.id,{...w,...STORY_DATA[w.id]}]));
const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = (pair, cls='') => `<a ${cls?'class="'+cls+'" ':''}href="${escape(pair[1])}">${escape(pair[0])}<span aria-hidden="true"> ↗</span></a>`;
const compass = '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="43"/><circle cx="60" cy="60" r="35"/><path d="M60 3 69 51 117 60 69 69 60 117 51 69 3 60 51 51Z"/><path d="m31 31 29 21 29-21-21 29 21 29-29-21-29 21 21-29Z"/><circle cx="60" cy="60" r="7"/></svg>';
let initial = true;
let storedTheme = matchMedia('(prefers-color-scheme: dark)').matches;
try { const saved=localStorage.getItem('agua-theme'); if(saved) storedTheme=saved==='dark'; } catch {}
function setTheme(dark){document.body.classList.toggle('dark',dark);themeButton.setAttribute('aria-pressed',String(dark));}
setTheme(storedTheme);
themeButton.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');setTheme(dark);try{localStorage.setItem('agua-theme',dark?'dark':'light')}catch{}});
function pauseAudio(){document.querySelector('audio')?.pause()}
function sourceBlock(w){return `<details class="reference"><summary>Fontes e limites desta história</summary><p>Este conto foi escrito para o projeto. As fontes abaixo explicam as obras citadas e os temas sobre água; o conto não faz parte das histórias oficiais.</p><ul><li>${external(w.source)}</li>${w.extra?`<li>${external(w.extra)}</li>`:''}<li>${external(['ONU — ODS 6','https://sdgs.un.org/goals/goal6'])}</li><li>${external(['PNUMA — poluição da terra ao mar','https://www.unep.org/en/what-we-do/ocean-seas-and-coasts/tackling-ecosystem-degradation-pollution'])}</li></ul></details>`}
function home(){
 document.title='Qual mundo da água você quer explorar? — Água entre mundos';
 app.innerHTML=`<section class="gateway" aria-labelledby="page-title"><div class="home-question"><h1 id="page-title" tabindex="-1">Qual mundo da água <br><em>você quer explorar?</em></h1></div><div class="portal-grid" role="group" aria-labelledby="page-title">${IDS.map(id=>{const w=book[id];return `<a class="portal ${w.visual}" href="#mundo/${w.id}" aria-label="Entrar em ${w.name}: ${w.title}"><span class="portal-art" aria-hidden="true"></span><span class="portal-title"><span class="portal-tag">${escape(w.kind)}</span><strong>${escape(w.name)}</strong><small>${escape(w.title)}</small><span class="portal-enter">Entrar <span aria-hidden="true">↗</span></span></span></a>`}).join('')}<svg class="x-split" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 50 50 100 0M0 100 50 50 100 100"/></svg><span class="x-center" aria-hidden="true">${compass}</span></div></section>`;
}
function finalQuestion(w){
 const q=w.question;
 return `<section class="final-question" aria-labelledby="question-title-${w.id}"><div class="final-question-inner"><p class="eyebrow">A história continua com você</p><h2 id="question-title-${w.id}">E você nessa história?</h2><form class="story-question"><fieldset aria-describedby="question-hint-${w.id}"><legend>${escape(q.prompt)}</legend><p class="question-hint" id="question-hint-${w.id}">Escolha uma opção e veja o comentário. Você pode tentar outra.</p><div class="final-choices">${q.choices.map((choice,i)=>`<label class="final-choice" for="answer-${w.id}-${i}"><input id="answer-${w.id}-${i}" type="radio" name="answer-${w.id}" value="${i}" required><span class="choice-copy">${escape(choice.text)}</span></label>`).join('')}</div></fieldset><button class="question-submit" type="submit">Ver comentário <span aria-hidden="true">→</span></button><p class="question-feedback" role="status" aria-atomic="true"></p></form></div></section>`;
}
function bindFinalQuestion(w){
 const form=app.querySelector('.story-question');
 const feedback=form.querySelector('.question-feedback');
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const answer=form.querySelector('input:checked');
  if(answer) feedback.textContent=w.question.choices[Number(answer.value)].feedback;
 });
 form.addEventListener('change',()=>{feedback.textContent=''});
}
function story(w){
 document.title=`${w.name} — Água entre mundos`;
 app.innerHTML=`<article class="single-story world-${w.id}" style="--story-accent:${w.palette}"><div class="story-hero ${w.visual}"><div class="hero-atmosphere" aria-hidden="true"></div><a class="hero-back" href="#inicio">← Escolher outro mundo</a><button class="water-stage" type="button" aria-label="Criar ondas na ilustração de ${escape(w.name)}" aria-describedby="water-hint"><img class="hero-foreground" src="art-${w.id}.png" alt="" aria-hidden="true" decoding="async" width="${w.id==='aria'?1536:w.id==='onepiece'?1312:1024}" height="${w.id==='aria'?1024:w.id==='onepiece'?1199:1536}"><span class="water-glint" aria-hidden="true"></span><span class="water-ripples" aria-hidden="true"></span><span class="water-invite" aria-hidden="true">Toque na ilustração</span></button><div class="story-hero-copy"><p class="story-kicker">Rota ${w.number} / 04 · ${escape(w.kind)}</p><div class="world-logotype" aria-hidden="true">${escape(w.name)}</div><h1 id="page-title" tabindex="-1">${escape(w.title)}</h1><p class="story-hook">${escape(w.hook)}</p><a class="story-scroll" href="#conto-${w.id}">Entre na história <span aria-hidden="true">↓</span></a></div><div class="hero-ornament" aria-hidden="true">${compass}</div></div><p id="water-hint" class="sr-only">Efeito visual opcional. O botão Efeitos de água permite desligar o movimento. A descrição e a história continuam disponíveis.</p><div class="description-band"><div><p class="eyebrow">A ilustração em palavras</p><details class="description-text"><summary>Ler a descrição da imagem</summary><p>${escape(w.describe)}</p></details></div><div class="audio-control"><label for="audio-${w.id}">Ouvir audiodescrição</label><audio id="audio-${w.id}" controls preload="metadata" aria-label="Audiodescrição da ilustração de ${escape(w.name)}"><source src="audio/${w.id}.mp3" type="audio/mpeg">Seu navegador não reproduz MP3. Leia a descrição da imagem.</audio></div></div><div class="story-body" id="conto-${w.id}" tabindex="-1"><p class="story-label">Conto original inspirado neste universo</p><div class="scene-stack">${w.scenes.map((s,i)=>`<section class="scene scene-${i+1}" aria-labelledby="scene-${i}"><div class="scene-art ${w.visual}" aria-hidden="true"><span class="scene-compass">${compass}</span></div><div class="scene-content"><p class="eyebrow">${escape(s.label)}</p><h2 id="scene-${i}">${escape(s.title)}</h2>${s.text.split(/\n\n/).map(part=>`<p class="narrative">${escape(part)}</p>`).join('')}</div><span class="scene-folio" aria-hidden="true">${['I','II','III'][i]}</span></section>`).join('')}</div><div class="field-notes"><div class="notes-heading"><p class="eyebrow">Caderno de campo</p><h2>Por trás<br><em>da história</em></h2><span aria-hidden="true">✧</span></div><div class="two-realms"><section class="realm media" aria-labelledby="media-title"><p class="eyebrow">01 / Na obra · no conceito</p><h3 id="media-title">${escape(w.mediaTitle)}</h3><p>${escape(w.mediaText)}</p>${external(w.source,'text-link')}</section><section class="realm water" aria-labelledby="water-title"><p class="eyebrow">02 / Aqui · no nosso mundo</p><h3 id="water-title">${escape(w.sustTitle)}</h3><p>${escape(w.sustText)}</p>${external(['Conhecer o ODS 6','https://sdgs.un.org/goals/goal6'],'text-link')}</section></div></div><div class="takeaway"><p class="eyebrow">O que fica dessa história</p><p>${escape(w.idea)}</p></div>${finalQuestion(w)}<div class="story-end">${sourceBlock(w)}<nav class="next-world" aria-label="Continuar explorando"><a class="primary" href="#inicio">Escolher outro mundo <span aria-hidden="true">→</span></a><a href="leitura.html">Ler tudo em sequência</a></nav></div></div></article>`;
 bindFinalQuestion(w);
 app.querySelector('.story-scroll').addEventListener('click',event=>{event.preventDefault();const target=document.querySelector('.story-body');target.focus({preventScroll:true});target.scrollIntoView()});
}
function render(){pauseAudio();window.waterEffects?.cleanup();let id=location.hash.replace(/^#/,'').split('/')[1];const inStory=Boolean(book[id]&&location.hash.startsWith('#mundo/'));document.body.classList.toggle('home-view',!inStory);const tools=document.querySelector('.site-tools');document.querySelector(inStory?'.top':'#footer-tools').append(tools);if(inStory)story(book[id]);else home();window.waterEffects?.mount();if(!initial){document.querySelector('#page-title').focus();scrollTo(0,0)}initial=false}
window.addEventListener('hashchange',render);window.addEventListener('pagehide',pauseAudio);render();

// A rem-sized probe follows user text enlargement, including text-only zoom.
const typeProbe=document.createElement('span');
typeProbe.className='type-probe';typeProbe.setAttribute('aria-hidden','true');document.body.append(typeProbe);
const typeObserver=new ResizeObserver(()=>document.body.classList.toggle('large-type',typeProbe.getBoundingClientRect().width>=24));
typeObserver.observe(typeProbe);
