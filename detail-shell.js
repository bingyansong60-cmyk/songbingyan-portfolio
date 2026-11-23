(() => {
  window.mountDetailShell = function({root, sections, backHref='#projects', demo=[], onDemo}) {
    window.cleanupDetailShell?.();
    document.body.classList.add('detail-shell-page');
    root.classList.add('detail-shell-content');
    const header=document.createElement('header');header.className='detail-shell-header';
    const back=document.createElement('a');back.className='detail-shell-back';back.href=backHref;back.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>返回作品</span>';
    const trial=document.createElement('button');trial.type='button';trial.className='detail-shell-trial';trial.textContent='试用演示版';
    header.append(back,trial);
    const sidebar=document.createElement('aside');sidebar.className='detail-shell-sidebar';
    const toggle=document.createElement('button');toggle.className='detail-shell-toggle';toggle.textContent='项目目录';toggle.setAttribute('aria-expanded','false');
    const nav=document.createElement('nav');nav.setAttribute('aria-label','项目内容目录');
    sections.forEach(([id,label])=>{const a=document.createElement('a');a.href='#'+id;a.textContent=label;a.addEventListener('click',e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});sidebar.classList.remove('is-expanded');toggle.setAttribute('aria-expanded','false');});nav.append(a);});
    const caption=document.createElement('p');caption.textContent='目录';caption.className='detail-shell-caption';sidebar.append(caption,toggle,nav);
    toggle.addEventListener('click',()=>{const open=sidebar.classList.toggle('is-expanded');toggle.setAttribute('aria-expanded',String(open));});
    root.before(header,sidebar);
    let observer;
    if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-100px 0px -55% 0px',threshold:0});sections.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el);});}
    let dialog;
    if(onDemo)trial.addEventListener('click',onDemo);
    else if(demo.length){
      dialog=document.createElement('dialog');dialog.className='detail-shell-demo';dialog.setAttribute('aria-label','界面流程演示');
      dialog.innerHTML='<div class="detail-demo-bar"><div><strong>界面流程演示</strong><p>浏览项目现有设计界面</p></div><button type="button" aria-label="关闭演示">关闭</button></div><div class="detail-demo-stage"><img alt=""></div><div class="detail-demo-controls"><button type="button" data-step="-1">上一页</button><span role="status"></span><button type="button" data-step="1">下一页</button></div>';
      document.body.append(dialog);let index=0;const update=()=>{dialog.querySelector('img').src=demo[index].src;dialog.querySelector('img').alt=demo[index].label;dialog.querySelector('[role="status"]').textContent=(index+1)+' / '+demo.length+' · '+demo[index].label;dialog.querySelector('[data-step="-1"]').disabled=index===0;dialog.querySelector('[data-step="1"]').disabled=index===demo.length-1;};
      dialog.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{index+=Number(b.dataset.step);update();}));dialog.querySelector('[aria-label="关闭演示"]').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});trial.addEventListener('click',()=>{index=0;update();dialog.showModal();});
    }else{trial.disabled=true;trial.title='此项目暂未提供可用的演示界面';}
    window.cleanupDetailShell=()=>{observer?.disconnect();header.remove();sidebar.remove();dialog?.remove();document.body.classList.remove('detail-shell-page');window.cleanupDetailShell=null;};
  };
})();
