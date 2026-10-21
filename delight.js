// 装饰性交互独立于作品与文章功能，便于调整或移除。
(() => {
 const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
 const heroStar = document.querySelector('.hero-star');
 if(heroStar){
  const button=document.createElement('button');button.className='hero-star playful-star';button.type='button';button.setAttribute('aria-label','点一下，收获一点设计灵感');button.textContent='✳';heroStar.replaceWith(button);
  const caption=document.createElement('span');caption.className='star-caption';caption.textContent='点一下，灵感发生';button.after(caption);
  const thoughts=['换个角度，或许就有新发现。','留一点白，也留一点想象。','好的细节，值得再看一眼。','今天，也保持好奇心。'];let turn=0;
  button.onclick=()=>{turn++;button.style.setProperty('--star-turn',`${12+turn*90}deg`);caption.textContent=thoughts[(turn-1)%thoughts.length];caption.classList.add('inspired');if(!reduced){for(let i=0;i<7;i++){const dot=document.createElement('i');dot.className='spark-dot';dot.style.setProperty('--dx',`${Math.cos(i/7*Math.PI*2)*85}px`);dot.style.setProperty('--dy',`${Math.sin(i/7*Math.PI*2)*85}px`);dot.style.setProperty('--delay',`${i*15}ms`);button.append(dot);setTimeout(()=>dot.remove(),1000)}}};
 }
 const top=document.createElement('button');top.className='reading-top';top.type='button';top.setAttribute('aria-label','回到顶部');top.innerHTML='<span>↑</span><small>回顶部</small>';document.body.append(top);
 let queued=false;function progress(){const available=document.documentElement.scrollHeight-innerHeight;const amount=available>0?Math.min(1,Math.max(0,scrollY/available)):0;top.style.setProperty('--reading-progress',`${amount*360}deg`);top.classList.toggle('is-visible',scrollY>400);top.tabIndex=scrollY>400?0:-1;queued=false}
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(progress)}},{passive:true});addEventListener('resize',progress);top.onclick=()=>window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});progress();
 if(!reduced&&matchMedia('(hover: hover) and (pointer: fine)').matches){
  let active=null;
  document.addEventListener('pointermove',event=>{const cover=event.target.closest('.project-cover, .note-card > button');if(active&&active!==cover){active.style.removeProperty('transform');active=null}if(!cover)return;const box=cover.getBoundingClientRect();const x=(event.clientX-box.left)/box.width-.5,y=(event.clientY-box.top)/box.height-.5;cover.style.transform=`perspective(1000px) rotateX(${-y*3}deg) rotateY(${x*3}deg)`;active=cover},{passive:true});
  document.addEventListener('pointerout',event=>{if(active&&!active.contains(event.relatedTarget)){active.style.removeProperty('transform');active=null}});
 }
 const footer=document.querySelector('footer');if(footer){const greeting=document.createElement('button');greeting.className='footer-greeting';greeting.type='button';greeting.innerHTML='<span aria-hidden="true">✳</span> 谢谢看到这里';const replies=['带一点灵感离开吧 :)','愿我们都保持好奇。','下一次，再带新作品见面。'];let count=0;greeting.onclick=()=>{greeting.textContent=replies[count++%replies.length]};footer.append(greeting)}
})();
