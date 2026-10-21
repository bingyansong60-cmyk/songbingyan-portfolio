(() => {
 const icons=[
 '<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',
 '<rect x="3" y="6" width="18" height="15" rx="3"/><path d="M3 10h18M8 6V3h8v3"/>',
 '<path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6m-6 4h6"/>',
 '<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>',
 '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>'
 ];
 document.querySelectorAll('nav[aria-label="主导航"] a').forEach((link,index)=>{const label=link.textContent.trim();link.setAttribute('aria-label',label);link.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(icons[index]||icons[0])+'</svg><span class="rail-label">'+label+'</span>'});
 const fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
 if(fine){document.addEventListener('pointermove',event=>{const card=event.target.closest('.featured-project-button');if(!card)return;const hint=card.querySelector('.featured-view');if(!hint)return;const bounds=card.getBoundingClientRect(),x=Math.min(bounds.width-60,Math.max(65,event.clientX-bounds.left)),y=Math.min(bounds.height-24,Math.max(28,event.clientY-bounds.top));hint.style.left=x+'px';hint.style.top=y+'px';hint.style.right='auto';hint.style.bottom='auto';hint.style.transform='translate(-50%,-50%)'},{passive:true});
 document.addEventListener('pointerout',event=>{const card=event.target.closest('.featured-project-button');if(card&&!card.contains(event.relatedTarget)){const hint=card.querySelector('.featured-view');if(hint)hint.removeAttribute('style')}});
 }
})();
