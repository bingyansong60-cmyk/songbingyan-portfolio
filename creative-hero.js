(() => {
 const content=document.querySelector('#hero-mode-content');if(!content)return;
 const initial=content.innerHTML;
 const templates={visual:initial,experience:'<span class="window-kicker">每一步，都有清晰的回应。</span><div class="hero-mini-layout experience-demo"><div class="experience-flow"><b>发现需求</b><i></i><b>梳理路径</b><i></i><b>体验验证</b></div><div class="experience-path">看得懂，也用得顺。</div><div class="mini-baseline"><i></i><i></i><i></i></div></div>',ai:'<span class="window-kicker">AI 放大可能，设计决定方向。</span><div class="ai-prompt">让这个想法，再多一种可能。<span>↑</span></div><div class="ai-response"><span>✳</span><p>更快探索，也更认真判断。<br>让想法，成为可体验的设计。</p></div>'};
 const live=document.createElement('span');live.className='hero-mode-live';live.setAttribute('role','status');content.after(live);
 document.querySelectorAll('[data-hero-mode]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-hero-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));content.innerHTML=templates[button.dataset.heroMode];live.textContent='已切换到'+button.textContent+'工作台'}));
 const sticker=document.querySelector('#experience-sticker');let angle=0;if(sticker)sticker.onclick=()=>{angle+=90;sticker.style.setProperty('--flower-angle',angle+'deg')};
})();
