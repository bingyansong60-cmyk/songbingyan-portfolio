/* Project reader: shared navigation and real source data, without design placeholders. */
(() => {
  'use strict';
  const app=window.Portfolio2026;if(!app)return;
  const {projects,esc,asset}=app;
  const reader=document.createElement('dialog');reader.id='detail-dialog';reader.className='project-dialog';reader.tabIndex=-1;reader.setAttribute('aria-labelledby','case-title');document.body.append(reader);
  let chapterObserver,demoObserver,chapterScrollController,returnFocus,activeId;
  const galleryFor=p=>{
    const seen=new Set();const images=(p.gallery?.length?p.gallery:p.coverScreens||[]).map(g=>typeof g==='string'?{src:g,label:p.title}:g).filter(g=>g.src&&!seen.has(g.src)&&seen.add(g.src));
    return images;
  };
  function image(g,wide=false){return `<figure class="case-image ${wide?'wide':''}"><button type="button" data-case-image="${esc(g.src)}" data-image-caption="${esc(g.label||'项目界面')}" aria-label="放大查看${esc(g.label||'项目界面')}"><img src="${esc(g.src)}" alt="${esc(g.label||'项目界面')}" loading="lazy" decoding="async"></button><figcaption>${esc(g.label||'')}</figcaption></figure>`;}
  const normalizeScope=p=>String(p.scope||'').trim();
  const scopeLines=p=>normalizeScope(p).split(/\n+/).map(s=>s.trim()).filter(Boolean);
  function demoBlock(html,title,description){return `<div class="case-demo"><div class="case-design-heading"><h3>${title}</h3><p class="case-copy">${description}</p></div><div class="demo-region">${html}</div><div class="demo-controls"><span>登录、侧栏、输入与回复 · 26 秒循环演示</span><button type="button" data-demo-pause aria-pressed="false">暂停演示</button></div></div>`;}
  function overview(p){
    const detailed=p.id==='daily';
    const meta=[p.status,p.date,p.platform].filter(Boolean);
    const facts=[['项目类型',p.projectType||p.sourceFields?.['项目类型']||p.category||p.platform],['团队',p.team],['我的角色','UI 设计师'],['时间线',p.date]].filter(([,v])=>v);
    return `<div class="case-hero">${!detailed&&p.cover?`<img src="${esc(p.cover)}" alt="${esc(p.title)}项目封面">`:''}<button type="button" data-jump-design>${detailed?'在线体验':'查看设计'}</button></div><div class="case-overview"><div class="case-meta">${meta.map((v,i)=>`<span class="${i===0?'case-status':''}">${esc(v)}</span>`).join('')}</div><h2 id="case-title" class="case-title">${esc(p.title)}</h2><p class="case-lead">${esc(p.background||p.subtitle||'')}</p>${detailed?'<button type="button" class="case-visit" data-jump-design>在线体验</button>':''}<dl class="case-facts">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`;
  }
  function chaptersFor(p){
    const story=window.PortfolioStoryCases?.render(p,{image,overview,gallery:galleryFor(p)});
    if(story)return story;
    const gallery=galleryFor(p),scope=normalizeScope(p),full=p.id==='daily'||p.id==='hzy-3';
    const demos=p.id==='daily'?[demoBlock(window.PortfolioFigures.demo,'登录与对话流程','从一键登录、进入首页，到输入问题与查看 AI 回复。'),window.PortfolioFigures.demoAgent?demoBlock(window.PortfolioFigures.demoAgent,'智能对话与侧栏交互','查看侧栏展开、内容输入及流式回复的交互过程。'):''].join(''):'';
    const design=`${demos}${gallery.length?`<div class="case-visuals ${gallery.length>1&&p.platform!=='WEB'&&p.platform!=='官网'?'case-image-pair':''}">${gallery.map(g=>image(g,p.platform==='WEB'||p.platform==='官网')).join('')}</div>`:p.cover?image({src:p.cover,label:p.title},true):'<p class="case-copy">'+esc(p.background||p.title)+'</p>'}`;
    const work=scopeLines(p);
    const details=[];
    if(full){
      details.push(['highlights','核心成果',`<h3>我的工作</h3><p class="case-copy">${esc(scope)}</p>`]);
      details.push(['background','背景与目标',`<h3>平台背景</h3><p class="case-copy">${esc(p.background)}</p>`]);
      details.push(['strategy','设计策略',`<h3>负责范围</h3><ul class="case-work-lines">${work.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>`]);
    }else if(scope){details.push(['highlights','我的工作',`<h3>我的工作</h3><p class="case-copy">${esc(scope)}</p>`]);}
    details.push(['design','重点设计展示',`<h3>重点设计展示</h3>${design}`]);
    const delivery=work.filter(s=>/规范|组件|适配|状态|多语言/.test(s));
    if(full&&delivery.length)details.push(['delivery','规范与落地',`<h3>规范与落地</h3><p class="case-copy">${esc(delivery.join('\n'))}</p>`]);
    const release=[p.status,p.releaseNote,p.notes].filter(Boolean).join('\n');
    if(release)details.push(['reflection',full?'成果与复盘':'项目状态',`<h3>${full?'成果与复盘':'项目状态'}</h3><p class="case-release">${esc(release)}</p>`]);
    return [['overview','项目概览',overview(p)],...details];
  }
  function showProject(id){
    const p=projects.find(p=>p.id===id);if(!p)return false;
    reader.classList.toggle('story-reader',Boolean(window.PortfolioStoryCases?.has(p.id)));reader.dataset.story=p.id;
    const index=projects.indexOf(p),prev=projects[(index-1+projects.length)%projects.length],next=projects[(index+1)%projects.length],chapters=chaptersFor(p);
    if(!reader.open)returnFocus=document.activeElement;
    activeId=id;chapterObserver?.disconnect();demoObserver?.disconnect();chapterScrollController?.abort();reader.querySelectorAll('.figma-figure').forEach(el=>app.resizeObserver.unobserve(el));
    reader.innerHTML=`<aside class="case-sidebar"><button class="case-back" data-close-project><img src="${asset('331-49126','imgIcon','svg')}" alt="" width="24" height="24"><span>返回</span></button><nav class="case-chapter-nav" aria-label="项目目录">${chapters.map(([key,title],i)=>`<button type="button" data-case-anchor="case-${key}" ${i===0?'aria-current="location"':''}><span>${String(i+1).padStart(2,'0')}</span>${title}</button>`).join('')}</nav><button type="button" class="case-return-top" data-case-anchor="case-overview"><img src="${asset('331-49126','imgIcon1','svg')}" alt="" width="16" height="16">返回顶部</button></aside><div class="case-content"><div class="case-body">${chapters.map(([key,,content])=>`<section id="case-${key}" class="case-section" aria-label="${esc(key==='overview'?'项目概览':chapters.find(c=>c[0]===key)[1])}">${content}</section>`).join('')}<div class="case-pagination"><button type="button" data-case-switch="${esc(prev.id)}"><span class="page-arrow" aria-hidden="true">←</span><span><small>上一个项目</small><strong>${esc(prev.title)}</strong></span></button><button type="button" data-case-switch="${esc(next.id)}"><span><small>下一个项目</small><strong>${esc(next.title)}</strong></span><span class="page-arrow" aria-hidden="true">→</span></button></div></div></div>`;
    if(!reader.open){reader.showModal();reader.focus({preventScroll:true});document.body.style.overflow='hidden';}
    reader.scrollTop=0;reader.querySelector('.case-content').scrollTop=0;
    const u=new URL(location.href);u.searchParams.set('project',id);history.replaceState(null,'',u);
    const scroller=matchMedia('(max-width:800px)').matches?reader:reader.querySelector('.case-content');
    const sections=Array.from(reader.querySelectorAll('.case-section'));
    const updateChapter=()=>{
      const rootTop=scroller.getBoundingClientRect().top;
      let current=sections[0];for(const s of sections){if(s.getBoundingClientRect().top<=rootTop+170)current=s;}
      reader.querySelectorAll('[data-case-anchor]').forEach(b=>b.toggleAttribute('aria-current',b.dataset.caseAnchor===current.id));
    };
    chapterObserver=new IntersectionObserver(updateChapter,{root:scroller,rootMargin:'-10% 0px -65% 0px',threshold:[0,.01,1]});
    sections.forEach(s=>chapterObserver.observe(s));
    chapterScrollController=new AbortController();let scrollQueued=false;
    scroller.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(()=>{scrollQueued=false;if(reader.open)updateChapter();});}},{passive:true,signal:chapterScrollController.signal});
    app.sizeFigures();
    const demos=reader.querySelectorAll('.demo-region');
    if(demos.length){demoObserver=new IntersectionObserver(entries=>{for(const entry of entries){const demo=entry.target;if(!demo.dataset.userPaused)demo.style.setProperty('--figure-play-state',entry.isIntersecting?'running':'paused');}},{root:scroller,threshold:.1});demos.forEach(demo=>{demo.style.setProperty('--figure-play-state','paused');demoObserver.observe(demo);});}
    return true;
  }
  function closeProject(){reader.close();}
  reader.addEventListener('close',()=>{chapterObserver?.disconnect();demoObserver?.disconnect();chapterScrollController?.abort();document.body.style.overflow='';const u=new URL(location.href);u.searchParams.delete('project');history.replaceState(null,'',u);returnFocus?.focus({preventScroll:true});activeId=null;});
  const viewer=document.createElement('dialog');viewer.className='image-viewer';viewer.setAttribute('aria-label','项目界面放大预览');viewer.innerHTML='<div class="image-viewer-toolbar"><p id="image-caption"></p><button type="button" data-image-scale>原尺寸</button><button type="button" data-image-close>关闭</button></div><div class="image-viewer-canvas"><img alt=""></div>';document.body.append(viewer);
  document.addEventListener('click',e=>{
    const trigger=e.target.closest('[data-project]');if(trigger){e.preventDefault();showProject(trigger.dataset.project);}
    const switcher=e.target.closest('[data-case-switch]');if(switcher){showProject(switcher.dataset.caseSwitch);reader.querySelector('.case-back').focus({preventScroll:true});}
    if(e.target.closest('[data-close-project]'))closeProject();
    const anchor=e.target.closest('[data-case-anchor]');if(anchor){reader.querySelector('#'+anchor.dataset.caseAnchor)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});}
    if(e.target.closest('[data-jump-design]'))reader.querySelector('#case-design')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
    const pause=e.target.closest('[data-demo-pause]');if(pause){const d=pause.closest('.case-demo').querySelector('.demo-region'),paused=pause.getAttribute('aria-pressed')!=='true';pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'继续演示':'暂停演示';if(paused)d.dataset.userPaused='true';else delete d.dataset.userPaused;d.style.setProperty('--figure-play-state',paused?'paused':'running');}
    const image=e.target.closest('[data-case-image]');if(image){viewer.classList.remove('original');viewer.querySelector('[data-image-scale]').textContent='原尺寸';const img=viewer.querySelector('img');img.src=image.dataset.caseImage;img.alt=image.dataset.imageCaption||'';viewer.querySelector('#image-caption').textContent=img.alt;viewer.showModal();viewer.querySelector('.image-viewer-canvas').scrollTop=0;}
    if(e.target.closest('[data-image-close]'))viewer.close();
    const scale=e.target.closest('[data-image-scale]');if(scale){viewer.classList.toggle('original');scale.textContent=viewer.classList.contains('original')?'适合宽度':'原尺寸';}
  });
  const linked=new URLSearchParams(location.search).get('project');if(linked&&!showProject(linked))app.toast('这个项目已调整，请从全部项目中查看新版。');
  window.PortfolioReader={showProject,closeProject,get activeId(){return activeId;}};
})();
