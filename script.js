/* FAQ ACCORDION */
document.querySelectorAll('.faq-item').forEach(item=>{
  const q=item.querySelector('.faq-q');
  if(!q)return;
  q.addEventListener('click',()=>{
    const open=item.classList.toggle('open');
    q.setAttribute('aria-expanded',String(open));
  });
});

/* HAMBURGER */
const ham=document.getElementById('hamburger');
const mMenu=document.getElementById('mobile-menu');
ham.setAttribute('aria-expanded','false');
ham.addEventListener('click',()=>{
  const open=ham.classList.toggle('open');
  ham.setAttribute('aria-expanded',String(open));
  if(open){mMenu.classList.add('open');document.body.style.overflow='hidden'}
  else{mMenu.classList.remove('open');document.body.style.overflow=''}
});
mMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  ham.classList.remove('open');mMenu.classList.remove('open');document.body.style.overflow='';
}));

/* NAV SCROLL */
const nav=document.getElementById('main-nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60),{passive:true});

/* CURSOR */
const isTouch=(()=>{
  if(navigator.maxTouchPoints>0)return true;
  if(window.matchMedia('(pointer:coarse)').matches)return true;
  if(window.matchMedia('(hover:none)').matches)return true;
  return false;
})();
if(!isTouch){
  document.body.classList.add('has-pointer');
  const cur=document.getElementById('cursor');
  const ring=document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
  (function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();
  document.querySelectorAll('a,button,.feat-card,.aud-card,.vision-card,.cs-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.style.width='18px';cur.style.height='18px';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='rgba(59,184,175,.7)'});
    el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(59,184,175,.5)'});
  });
}

/* CANVAS — Particles + Stream Lines */
const canvas=document.getElementById('hero-canvas');
const ctx=canvas.getContext('2d');
let W,H;
function resizeCanvas(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight}
resizeCanvas();
window.addEventListener('resize',resizeCanvas,{passive:true});
const reducedMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!reducedMotion){
  class Particle{
    constructor(){this.reset(true)}
    reset(init){this.x=Math.random()*W;this.y=init?Math.random()*H:H+10;this.vx=(Math.random()-.5)*.25;this.vy=-(Math.random()*.35+.12);this.size=Math.random()*1.2+.3;this.alpha=Math.random()*.45+.08;this.life=0;this.maxLife=Math.random()*500+250;const r=Math.random();this.color=r>.65?'0,201,167':r>.4?'0,212,255':r>.15?'139,92,246':'240,165,0'}
    update(){this.x+=this.vx;this.y+=this.vy;this.life++;if(this.life>this.maxLife||this.y<-10)this.reset(false)}
    draw(){const p=this.life/this.maxLife;const f=p<.1?p*10:p>.85?(1-p)/.15:1;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`rgba(${this.color},${this.alpha*f})`;ctx.fill()}
  }
  class StreamLine{
    constructor(){this.reset(true)}
    reset(init){this.x=Math.random()*W;this.y=init?Math.random()*H:-20;this.len=Math.random()*80+20;this.speed=Math.random()*1.2+.4;this.alpha=Math.random()*.06+.015;this.color=Math.random()>.5?'0,201,167':'0,212,255'}
    update(){this.y+=this.speed;if(this.y>H+this.len)this.reset(false)}
    draw(){const g=ctx.createLinearGradient(this.x,this.y-this.len,this.x,this.y);g.addColorStop(0,`rgba(${this.color},0)`);g.addColorStop(1,`rgba(${this.color},${this.alpha})`);ctx.beginPath();ctx.moveTo(this.x,this.y-this.len);ctx.lineTo(this.x,this.y);ctx.strokeStyle=g;ctx.lineWidth=1;ctx.stroke()}
  }
  const pCount=window.innerWidth<768?50:110;
  const lCount=window.innerWidth<768?16:34;
  const particles=[],lines=[];
  for(let i=0;i<pCount;i++)particles.push(new Particle());
  for(let i=0;i<lCount;i++)lines.push(new StreamLine());
  function animCanvas(){ctx.clearRect(0,0,W,H);lines.forEach(l=>{l.update();l.draw()});particles.forEach(p=>{p.update();p.draw()});requestAnimationFrame(animCanvas)}
  animCanvas();
}

/* SCROLL REVEAL */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target)}});
},{threshold:.06,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* TICKER */
let tickBase=12847;
setInterval(()=>{
  tickBase+=Math.floor(Math.random()*3);
  document.querySelectorAll('#ticker-count,#ticker-count2').forEach(el=>el.textContent=tickBase.toLocaleString());
},3400);

/* COUNTER ANIMATION */
function animCount(el){
  const target=parseInt(el.dataset.target,10);
  const suffix=el.dataset.suffix||'';
  const dur=1800;const start=performance.now();
  function tick(now){
    const prog=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-prog,3);
    const val=Math.round(eased*target);
    el.textContent=(target>999?val.toLocaleString():val)+suffix;
    if(prog<1)requestAnimationFrame(tick);
  }
  if(reducedMotion){el.textContent=(target>999?target.toLocaleString():target)+suffix}
  else requestAnimationFrame(tick);
}
const cObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.count[data-target]').forEach(animCount);
      cObs.unobserve(e.target);
    }
  });
},{threshold:.4});
const statsRow=document.querySelector('.hero-stats');
if(statsRow)cObs.observe(statsRow);

/* 21st.dev Aceternity — Mouse-tracking card glow */
document.querySelectorAll('.feat-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);
    card.style.setProperty('--mouse-y',`${e.clientY-r.top}px`);
  });
});

/* PAGE-FLIP — scroll-driven on desktop, click-only carousel on mobile/tablet */
(function flipBook(){
  const wrap=document.getElementById('demo-scroll');
  const stage=document.getElementById('flip-stage');
  if(!wrap||!stage)return;
  const pages=[...stage.querySelectorAll('.flip-page')];
  const dots=[...stage.querySelectorAll('.flip-dots span')];
  const steps=[...document.querySelectorAll('#demo-steps .demo-step')];
  const label=document.getElementById('flip-label');
  const labels=['01 Login','02 Profile','03 Patients & Rx','04 Verify Controlled Substance'];
  const N=pages.length;
  const mq=matchMedia('(max-width:1024px)');
  const isMobile=()=>mq.matches;
  let raf=null,manualIdx=null,manualUntil=0,activeIdx=0;
  pages.forEach(p=>{p.style.transition='transform .35s cubic-bezier(.6,.04,.3,1), box-shadow .6s ease, opacity .35s ease';});

  function setIndicators(idx){
    dots.forEach((d,i)=>d.classList.toggle('active',i===idx));
    steps.forEach((s,i)=>s.classList.toggle('active',i===idx));
    if(label)label.textContent=labels[idx];
  }
  function applyMobile(idx){
    pages.forEach((p,i)=>{p.style.transform='none';p.classList.toggle('active',i===idx);p.classList.remove('flipped');});
    setIndicators(idx);
    activeIdx=idx;
  }
  function applyContinuous(t){
    pages.forEach((page,i)=>{
      const local=Math.max(0,Math.min(1,t-i));
      page.style.transform=`rotateY(${-178*local}deg)`;
      page.classList.toggle('flipped',local>=.5);
      page.classList.remove('active');
    });
    const idx=Math.max(0,Math.min(N-1,Math.round(t)));
    setIndicators(idx);
    activeIdx=idx;
  }
  function update(){
    raf=null;
    if(isMobile())return; // mobile uses click-only path
    if(manualIdx!==null && performance.now()<manualUntil){applyContinuous(manualIdx);return;}
    manualIdx=null;
    const r=wrap.getBoundingClientRect();
    const total=wrap.offsetHeight-window.innerHeight;
    const p=Math.max(0,Math.min(1,total>0?-r.top/total:0));
    applyContinuous(p*(N-1));
  }
  function schedule(){if(raf===null)raf=requestAnimationFrame(update);}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',()=>{
    if(isMobile())applyMobile(activeIdx);else schedule();
  });
  mq.addEventListener('change',()=>{if(isMobile())applyMobile(activeIdx);else schedule();});

  function go(i){
    const idx=Math.max(0,Math.min(N-1,i));
    if(isMobile()){applyMobile(idx);return;}
    manualIdx=idx;manualUntil=performance.now()+1400;schedule();
    const r=wrap.getBoundingClientRect();
    const total=wrap.offsetHeight-window.innerHeight;
    window.scrollTo({top:window.scrollY+r.top+(idx/(N-1))*total,behavior:'smooth'});
  }
  function curIdx(){
    if(isMobile())return activeIdx;
    return Math.round(((-wrap.getBoundingClientRect().top)/(wrap.offsetHeight-window.innerHeight))*(N-1));
  }
  document.getElementById('flip-next').addEventListener('click',()=>go(curIdx()+1));
  document.getElementById('flip-prev').addEventListener('click',()=>go(curIdx()-1));
  dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));
  steps.forEach(s=>s.addEventListener('click',()=>go(+s.dataset.i)));
  if(isMobile())applyMobile(0);else update();
})();

/* VIDEO — auto-fullscreen on mobile/tablet play (iOS native rotation) */
(function videoFullscreen(){
  const v=document.querySelector('.video-frame video');
  if(!v)return;
  v.addEventListener('play',()=>{
    if(!matchMedia('(max-width:1024px)').matches)return;
    // iOS Safari uses webkitEnterFullscreen on the element directly
    if(typeof v.webkitEnterFullscreen==='function'){try{v.webkitEnterFullscreen();}catch(e){}}
    else if(typeof v.requestFullscreen==='function'){v.requestFullscreen().catch(()=>{});}
  });
})();

/* COOKIE CONSENT — single dismissable banner */
(function cookies(){
  if(localStorage.getItem('getrx_consent'))return;
  const bar=document.createElement('div');
  bar.className='cookie-bar';
  bar.innerHTML='<span>We use cookies to keep this site running and improve your experience. By using getRx you agree to our <a href="#privacy">Privacy</a>.</span><button class="cookie-accept">Got it</button>';
  document.body.appendChild(bar);
  bar.querySelector('.cookie-accept').addEventListener('click',()=>{
    localStorage.setItem('getrx_consent','1');
    bar.classList.add('hide');
    setTimeout(()=>bar.remove(),300);
  });
  setTimeout(()=>bar.classList.add('show'),200);
})();

/* LEGAL MODAL — Privacy / Terms / ID Verification footer links open here */
(function legalModal(){
  const KEYS={'#privacy':'tpl-privacy','#terms':'tpl-terms','#identity-verification':'tpl-identity-verification','#direct-trust-cert':'tpl-direct-trust-cert'};
  const modal=document.getElementById('modal');
  const body=document.getElementById('modal-body');
  if(!modal||!body)return;
  function open(key){
    const tpl=document.getElementById(KEYS[key]);
    if(!tpl)return;
    body.replaceChildren(tpl.content.cloneNode(true));
    modal.hidden=false;
    requestAnimationFrame(()=>modal.classList.add('show'));
    document.body.classList.add('modal-open');
  }
  function close(){
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(()=>{modal.hidden=true;body.replaceChildren();},250);
  }
  document.querySelectorAll('a').forEach(a=>{
    const h=a.getAttribute('href');
    if(KEYS[h]){a.addEventListener('click',e=>{e.preventDefault();open(h);});}
  });
  document.getElementById('modal-close').addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close();});
})();

/* INIT ICONS */
lucide.createIcons();
