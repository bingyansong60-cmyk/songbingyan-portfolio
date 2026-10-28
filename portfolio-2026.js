/* Shared native views for the October portfolio. Project facts live in content.js. */
(() => {
  'use strict';
  const data=window.portfolio;
  if(!data)return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset=(context,name,ext='png')=>`assets/figma-20261028/${context}-${name}.${ext}`;
  const projects=data.projects;
  const file=location.pathname.split('/').pop()||'index.html';
  const page=file==='home-alternate.html'?'index.html':file;
  const main=document.querySelector('main');
  const figure=window.PortfolioFigures||{};
  const briefcase=`<img src="${asset('297-2783','imgIcon','svg')}" width="16" height="16" alt="" aria-hidden="true">`;
  const nav=[['index.html','首页'],['all-works.html','全部项目'],['about.html','关于我'],['downloads.html','简历'],['about.html#contact','联系我']];
  document.querySelector('.site-header').innerHTML=`<nav aria-label="主导航">${nav.map(([url,title])=>`<a href="${url}" ${url===page?'aria-current="page"':''}>${title}</a>`).join('')}</nav>`;
  const header=document.querySelector('.site-header');
  const updateHeader=()=>header.classList.toggle('is-scrolled',scrollY>8);
  addEventListener('scroll',updateHeader,{passive:true});addEventListener('pageshow',updateHeader);updateHeader();
  function footer(){return '<p>感谢你的访问，保持好奇，认真设计。</p><p>© 2026 · UI 设计师作品集</p>';}
  document.querySelector('footer').innerHTML=footer();
  function contact(copyDirect=false){return `<section id="contact" class="contact-block" aria-labelledby="contact-title"><h2 id="contact-title">需要一位认真负责的设计师吗？<br>很高兴能为您提供帮助，期待与您聊聊！</h2><button class="primary" ${copyDirect?'data-copy="wechat"':'data-contact'}>${copyDirect?'复制微信':'联系面试'}</button></section>`;}
  function careers(){
    const logos=['imgRectangle34634859','imgRectangle34634860','imgRectangle34634861'];
    return `<section class="career-section" aria-labelledby="career-title"><div class="section-heading"><h2 id="career-title" class="section-title">工作历程</h2></div><div class="career-list">${(data.experience||[]).map((job,i)=>`<article class="career-row"><img class="career-logo" src="${asset('297-2783',logos[i])}" width="80" height="80" alt="${esc(job.company)}标识" loading="lazy"><div class="career-copy"><h3>${esc(job.company)}</h3><p>${briefcase}${esc(job.role.replace('UI设计','UI 设计'))}</p></div><div class="career-meta"><span>${esc(job.period.replace(/(\d{4})\.(\d{2})/g,(_,y,m)=>y+'年'+Number(m)+'月'))}</span><small>全职</small></div></article>`).join('')}</div></section>`;
  }
  const learning=[
    {title:'ChatGPT 做ui界面改版 并生成源文件工作流',description:'AI 不是替代设计师，而是帮我们更快完成前期工作。',icons:['imgImage','imgImage1'],url:'https://www.xiaohongshu.com/discovery/item/6a0f1e5c000000000803ddff?source=webshare&xhsshare=pc_web&xsec_token=ABUaPJ0Y2fFTV9bFtp2ZZdemdnoVGEy6GF60uKFFfjSR8=&xsec_source=pc_share'},
    {title:'UI 设计师一定要学的 Codex + Figma 工作流',description:'Codex 连接 Figma 后不是简单“截图生成代码”，而是可以读取 Figma 里的页面结构、组件、变量、布局信息，再根据你的提示词，帮你做这些事：',icons:['imgImage1'],url:'https://www.xiaohongshu.com/discovery/item/6a03548e0000000006036346?source=webshare&xhsshare=pc_web&xsec_token=ABz8ZM79oNwEca-_wIYqsfJMUCXM-qsWbWXWE--69IGUE=&xsec_source=pc_share'},
    {title:'Gemini 生成 界面 一键导入 Figma 全流程',description:'碰到模糊的需求以及陌生的样式不知道怎么办就用AI生成思路/灵感吧，大大提升效率！',icons:['imgImage2'],url:'https://www.xiaohongshu.com/discovery/item/69d66a1900000000220263e6?source=webshare&xhsshare=pc_web&xsec_token=ABe9iyK_z0rzdLSfxwuZ8nxUp-nZOptqibtEuIoVQBk78=&xsec_source=pc_share'},
    {title:'ChatGPT＋Figma 制作抽奖页面和中奖弹窗',description:'这次用 ChatGPT＋Figma，制作抽奖页面和中奖弹窗，再把页面里的元素动起来。',icons:['imgImage3','imgImage4'],url:'https://www.xiaohongshu.com/explore/6aad733f0000000025035832?xsec_token=AB43fp8grF9ZS3HaUgiXcP2AqtQNyApVGyvadPwhC9rQY=&xsec_source=pc_user'},
    {title:'Codex 到 Figma 生成源文件的完整工作流',description:'最近在做 AI App 和web 用 chatGPT Codex非常多',icons:['imgImage5'],url:'https://www.bilibili.com/video/BV1skR2BkEEs?t=81.4'},
    {title:'ChatGPT 做ui界面改版 并生成源文件工作流',description:'📝 最近用 ChatGPT 做了一套小程序 ui 改版，流程还挺实用，分享给大家参考',icons:['imgImage1'],url:'https://www.bilibili.com/video/BV1AxGn6FEnK?t=146.7'}
  ];
  function learningSection(){return `<section id="ai" aria-labelledby="learning-title"><div class="section-heading learning-heading"><h2 id="learning-title" class="section-title">我如何使用 AI</h2><p>AI 工具不可避免。下方是我尝试以合乎伦理且积极主动的方式运用人工智能的方法。</p></div><div class="learning-list">${learning.map(n=>`<a class="learning-row" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer"><span class="learning-brand ${n.icons.length>1?'pair':''}" aria-hidden="true">${n.icons.map(icon=>`<img src="${asset('297-2783',icon)}" alt="" width="64" height="64" loading="lazy">`).join('')}</span><div><h3>${esc(n.title)}</h3><p>${esc(n.description)}</p></div></a>`).join('')}</div></section>`;}
  function cover(p,featured=false){
    const src=featured?(p.featureCover||p.cover):p.cover;
    if(src&&!src.startsWith('assets/figma-20261028/')){
      const palette=(p.coverPalette||['#f5f3fa','#eeebf5']).filter(c=>/^#[0-9a-f]{6}$/i.test(c));
      return `<div class="screen-cover ${p.coverLayout==='desktop'?'screen-cover-wide':''}" style="--screen-start:${palette[0]||'#f5f3fa'};--screen-end:${palette[1]||'#eeebf5'}"><img src="${esc(src)}" alt="${esc(p.title)}项目界面" loading="lazy" decoding="async"></div>`;
    }
    return src?`<img src="${esc(src)}" alt="${esc(p.title)}项目界面" loading="lazy" decoding="async">`:`<div class="cover-type"><small>${esc(p.platform||p.category)}</small><strong>${esc(p.title)}</strong></div>`;
  }
  function shortDate(p){const raw=p.date||'';if(!raw)return '';return raw.split(' · ')[0];}
  function featuredCard(p){const tags=p.tags?.length?p.tags.slice(0,3):[p.platform,'UI/UX Design'];return `<article class="featured-card"><a href="all-works.html?project=${encodeURIComponent(p.id)}" data-project="${esc(p.id)}"><div class="featured-cover">${cover(p,true)}</div><div class="featured-copy"><h3>${esc(p.title)}</h3><p>${esc(p.subtitle||p.background)}</p><div class="project-tags">${tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></a></article>`;}
  function home(){
    const order=['hzy-3','ezvend','hsh-life','grabot','hsh-merchant','hzying'];
    const selected=order.map(id=>projects.find(p=>p.id===id)).filter(Boolean);
    main.innerHTML=`<section class="home-hero" aria-labelledby="hero-title"><h1 id="hero-title"><span>我是<span class="hero-name">宋冰艳，<img src="${asset('292-1860','imgVector','svg')}" alt="" aria-hidden="true" width="177" height="10"></span>5年 UI 设计经验</span><span>独立负责 50+ 项目并上线</span></h1><p>AI工具已经完全融入日常工作高达90%</p><button class="primary" data-contact>联系面试</button></section><div class="home-content page-shell"><section id="work" aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title" class="section-title">精选作品</h2><a class="more-link" href="all-works.html">查看更多 ${projects.length}</a></div><div id="project-grid" class="featured-grid">${selected.map(featuredCard).join('')}</div></section>${careers()}${learningSection()}${contact()}</div>`;
  }
  let selectedType='全部项目',selectedIndustry='所有类别';
  const types=['全部项目','APP','小程序','H5','终端硬件','后台管理','官网','UI运营活动','设计系统'];
  const industries=['所有类别','AI','金融产品','电商产品','海外产品','医疗健康','娱乐潮玩','生活方式'];
  const platform=p=>({'硬件大屏':'终端硬件',WEB:p.id==='hxf-admin'?'后台管理':'官网'}[p.platform]||p.platform||p.category);
  function industryMatches(p,value){
    const tags=p.industries||[p.industry].filter(Boolean);
    const aliases={'人工智能':'AI','内容娱乐':'娱乐潮玩','潮玩':'娱乐潮玩','电商':'电商产品','硬件':'生活方式','生活方式':'生活方式','汽车服务':'电商产品','医疗':'医疗健康'};
    return tags.some(t=>(aliases[t]||t)===value)||(value==='海外产品'&&/海外|Haieasy|EZvend|GRABOT/.test(p.title));
  }
  function archiveCard(p){return `<article class="archive-card"><a href="all-works.html?project=${encodeURIComponent(p.id)}" data-project="${esc(p.id)}"><div class="archive-cover">${cover(p)}</div><div class="archive-caption"><h2>${esc(p.title)}</h2>${p.date?`<time>${esc(shortDate(p))}</time>`:''}</div></a></article>`;}
  function renderArchive(){
    const shown=projects.filter(p=>(selectedType==='全部项目'||platform(p)===selectedType||(selectedType==='设计系统'&&/规范|组件/.test(p.scope||'')))&&(selectedIndustry==='所有类别'||industryMatches(p,selectedIndustry)));
    document.querySelector('#type-filters').innerHTML=types.map(t=>`<button data-filter-type="${esc(t)}" aria-pressed="${t===selectedType}" class="${t===selectedType?'active':''}">${t}</button>`).join('');
    document.querySelector('#industry-filters').innerHTML=industries.map(t=>`<button data-filter-industry="${esc(t)}" aria-pressed="${t===selectedIndustry}" class="${t===selectedIndustry?'active':''}">${t}</button>`).join('');
    document.querySelector('#project-grid').innerHTML=shown.length?shown.map(archiveCard).join(''):'<div class="empty-state"><h2>这个分类暂时没有作品</h2><button class="secondary" data-reset-filters>查看全部项目</button></div>';
    document.querySelector('#filter-status').textContent=`显示 ${shown.length} 个项目`;
  }
  function archive(){main.innerHTML=`<section class="library-section page-shell" aria-labelledby="library-title"><h1 id="library-title" class="library-title">以下展示项目由本人独立完成</h1><div class="archive-filters"><div id="type-filters" class="type-filters" role="group" aria-label="项目平台"></div><div id="industry-filters" class="industry-filters" role="group" aria-label="所属类别"></div></div><p id="filter-status" class="sr-only" aria-live="polite"></p><div id="project-grid" class="project-grid"></div><div class="archive-contact">${contact(true)}</div></section>`;renderArchive();}
  function about(){main.innerHTML=`<h1 class="sr-only">关于宋冰艳</h1><section class="about-intro" aria-label="关于宋冰艳"><div class="about-portrait" role="img" aria-label="宋冰艳的个人照片">${figure.portrait||''}</div><div class="about-copy"><p>Hi，你好 👋</p><p>我是<strong> 宋冰艳，拥有5年经验的 UI 设计</strong>师，专注于数字产品的用户体验与视觉设计，拥有 App、小程序、Web、H5 及智能硬件终端等多端设计经验。我始终认为，好的设计不仅要有视觉表现力，更要解决实际问题，让产品更好用、更有价值。</p><p>在过往工作中，我参与了<strong>恒生活、恒智易 AI App、EZvend 海外产品及智能终端</strong>等多个项目，涵盖产品从 0 到 1 的设计、版本迭代、视觉升级及设计规范建设。能够独立推进设计任务，从需求理解、交互梳理到视觉落地，兼顾用户体验、业务需求与设计品质。</p><p>我始终保持对设计的热情，也在不断探索 AI 工具与设计工作流的结合，希望通过更高效的设计方法解决问题、提升产品体验。<strong>期待与优秀的团队一起，创造真正有价值的产品。</strong></p><div class="about-actions"><button class="primary" data-copy="phone">复制电话</button><button class="secondary" data-copy="wechat">复制微信</button></div></div></section><div class="about-content">${careers()}<section aria-labelledby="tools-title"><div class="section-heading"><h2 id="tools-title" class="section-title">工具包</h2></div><div class="tools-figure">${figure.tools||''}</div></section>${learningSection()}${contact()}</div>`;}
  function resources(){
    if(page==='learning.html'){main.innerHTML=`<h1 class="sr-only">学习文章</h1><div class="resource-page">${learningSection()}${contact()}</div>`;return;}
    if(page==='code.html'){
      main.innerHTML=`<section class="resource-page"><h1>设计与开发的小工具</h1><div class="resource-cards"><article id="portfolio" class="resource-card"><h2>我的网站</h2><p>从作品集到字体资源，把设计想法带到可以使用的页面。</p><a class="secondary" href="index.html">作品集网站</a><a class="secondary" href="https://bingyansong60-cmyk.github.io/font-library/" target="_blank" rel="noopener noreferrer">字体资源网站</a></article><article id="plugins" class="resource-card"><h2>Figma 插件</h2><p>设计工具与工作流的探索记录。</p><a class="secondary" href="https://github.com/bingyansong60-cmyk" target="_blank" rel="noopener noreferrer">查看代码项目</a></article><article class="resource-card"><h2>学习文章</h2><p>记录 AI 工具、Figma 与设计开发实践。</p><a class="secondary" href="learning.html">浏览学习文章</a></article></div>${contact()}</section>`;return;
    }
    main.innerHTML=`<section class="resource-page resume-page"><h1>宋冰艳 · UI 设计师</h1><div class="resume-contact"><span>微信：${esc(data.wechatId)}</span><a href="tel:${esc(data.phone)}">电话：${esc(data.phone)}</a><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></div><div class="print-actions"><button class="primary" data-print>保存为 PDF</button></div><div class="resume-facts"><h2>个人介绍</h2><p>5 年 UI 设计经验，独立负责 50+ 项目的设计与上线。覆盖 App、小程序、Web、H5 及智能硬件终端，关注产品体验、视觉品质与设计落地。</p><h2>工作历程</h2></div>${careers()}<div class="resume-facts"><h2>代表项目</h2>${projects.filter(p=>p.featured).slice(0,6).map(p=>`<article class="resource-card"><h3>${esc(p.title)}</h3><p>${esc(p.scope||p.background)}</p><a href="all-works.html?project=${encodeURIComponent(p.id)}">查看项目</a></article>`).join('')}</div>${contact()}</section>`;
  }
  if(page==='index.html')home();else if(page==='all-works.html')archive();else if(page==='about.html')about();else resources();
  let toastTimer;
  function toast(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),2600);}
  async function copy(value,label,button){
    try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(value);else throw new Error('clipboard');}
    catch{const t=document.createElement('textarea');t.value=value;t.className='sr-only';document.body.append(t);t.select();const done=document.execCommand('copy');t.remove();if(!done){toast(`${label}：${value}`);return;}}
    toast(`${label}已复制：${value}`);if(button){const text=button.textContent;button.textContent='已复制';setTimeout(()=>{if(button.isConnected)button.textContent=text;},2000);}
  }
  const contactDialog=document.createElement('dialog');contactDialog.className='contact-dialog';contactDialog.setAttribute('aria-labelledby','contact-dialog-title');contactDialog.innerHTML=`<button class="dialog-dismiss" data-dismiss-contact aria-label="关闭联系方式">×</button><h2 id="contact-dialog-title">很高兴与你交流</h2><p>微信：${esc(data.wechatId)}<br>电话：${esc(data.phone)}</p><div class="contact-options"><button class="primary" data-copy="wechat">复制微信</button><a class="secondary" href="tel:${esc(data.phone)}">打电话</a></div>`;document.body.append(contactDialog);
  document.addEventListener('click',e=>{
    const c=e.target.closest('[data-copy]');if(c){const kind=c.dataset.copy;copy(kind==='wechat'?data.wechatId:data.phone,kind==='wechat'?'微信号':'电话号码',c);}
    if(e.target.closest('[data-contact]'))contactDialog.showModal();
    if(e.target.closest('[data-dismiss-contact]')||e.target===contactDialog)contactDialog.close();
    if(e.target.closest('[data-print]'))window.print();
    const type=e.target.closest('[data-filter-type]'),industry=e.target.closest('[data-filter-industry]');
    if(type){selectedType=type.dataset.filterType;renderArchive();}if(industry){selectedIndustry=industry.dataset.filterIndustry;renderArchive();}
    if(e.target.closest('[data-reset-filters]')){selectedType='全部项目';selectedIndustry='所有类别';renderArchive();}
  });
  const top=document.createElement('button');top.className='reading-top';top.setAttribute('aria-label','回到顶部');top.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h12M12 19V9m-5 5 5-5 5 5"/></svg>';document.body.append(top);top.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'}));const updateTop=()=>top.classList.toggle('is-visible',scrollY>600);addEventListener('scroll',updateTop,{passive:true});updateTop();
  const resizeObserver=new ResizeObserver(entries=>{for(const entry of entries){const el=entry.target,canvas=el.querySelector('.figure-canvas');if(!canvas)continue;const w=Number(el.dataset.figureWidth),h=Number(el.dataset.figureHeight);const scale=Math.min(1,entry.contentRect.width/w);canvas.style.transform=`scale(${scale})`;el.style.height=`${h*scale}px`;}});
  function sizeFigures(){document.querySelectorAll('.figma-figure').forEach(el=>resizeObserver.observe(el));}
  sizeFigures();
  window.Portfolio2026={data,projects,esc,asset,toast,sizeFigures,resizeObserver};
  if(location.hash)setTimeout(()=>{try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();}catch{}},100);
})();
