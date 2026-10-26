(()=>{
 const control=document.querySelector('#motion');
 const note=document.querySelector('#motion-note');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let saved=true;try{saved=localStorage.getItem('agua-motion')!=='off'}catch{}
 let unmount=()=>{};
 function enabled(){return saved&&!preference.matches}
 function cleanup(){unmount();unmount=()=>{}}
 function mount(){
  cleanup();const article=document.querySelector('.single-story');if(!article)return;
  const stage=article.querySelector('.water-stage');const backdrop=article.querySelector('.hero-atmosphere');const hero=article.querySelector('.story-hero');const scene=article.querySelector('.scene-1 .scene-art');
  const active=enabled();stage.disabled=!active;
  if(!active){stage.querySelector('.water-ripples').replaceChildren();return}
  const abort=new AbortController();const opts={signal:abort.signal,passive:true};let frame=0;let pointer={x:0,y:0};const timers=new Set();
  function draw(){frame=0;if(document.hidden)return;const r=hero.getBoundingClientRect();const y=Math.max(-12,Math.min(12,-r.top*.045));backdrop.style.setProperty('--tide-y',y+'px');stage.style.setProperty('--water-x',(pointer.x*7)+'px');stage.style.setProperty('--water-y',(pointer.y*5+y*.35)+'px');stage.style.setProperty('--water-tilt',(pointer.x*.5)+'deg');const sr=scene.getBoundingClientRect();scene.style.setProperty('--scene-y',Math.max(-9,Math.min(9,(innerHeight*.5-sr.top-sr.height*.5)*.025))+'px')}
  function request(){if(!frame)frame=requestAnimationFrame(draw)}
  function ripple(x=.5,y=.7){const surface=stage.querySelector('.water-ripples');const ring=document.createElement('span');ring.className='water-ring';ring.style.left=(x*100)+'%';ring.style.top=(y*100)+'%';surface.replaceChildren(ring);const timer=setTimeout(()=>{ring.remove();timers.delete(timer)},950);timers.add(timer)}
  window.addEventListener('scroll',request,opts);window.addEventListener('resize',request,opts);
  stage.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=stage.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;pointer={x:(x-.5)*2,y:(y-.5)*2};stage.style.setProperty('--shine-x',(x*100)+'%');stage.style.setProperty('--shine-y',(y*100)+'%');request()},opts);
  stage.addEventListener('pointerleave',()=>{pointer={x:0,y:0};request()},opts);
  stage.addEventListener('click',e=>{const r=stage.getBoundingClientRect();ripple(e.detail?Math.max(.1,Math.min(.9,(e.clientX-r.left)/r.width)):.5,e.detail?Math.max(.1,Math.min(.9,(e.clientY-r.top)/r.height)):.7)},{signal:abort.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;stage.querySelector('.water-ripples').replaceChildren()}else request()},opts);
  request();unmount=()=>{abort.abort();cancelAnimationFrame(frame);timers.forEach(clearTimeout);for(const el of [stage,backdrop,scene])for(const key of ['--water-x','--water-y','--water-tilt','--tide-y','--scene-y'])el.style.removeProperty(key);stage.querySelector('.water-ripples').replaceChildren()};
 }
 function sync(){const on=enabled();document.body.classList.toggle('effects-on',on);document.body.classList.toggle('effects-off',!on);control.setAttribute('aria-pressed',String(on));control.textContent=on?'Efeitos: ligados':'Efeitos: desligados';control.setAttribute('aria-label','Efeitos de água');control.disabled=preference.matches;note.textContent=preference.matches?'Movimento reduzido conforme seu aparelho.':'';mount()}
 control.addEventListener('click',()=>{saved=!saved;try{localStorage.setItem('agua-motion',saved?'on':'off')}catch{}sync()});preference.addEventListener('change',sync);window.addEventListener('pagehide',cleanup);window.addEventListener('pageshow',sync);window.waterEffects={mount,cleanup};sync();
})();
