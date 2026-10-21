const data = window.portfolio;
document.querySelectorAll('[data-name]').forEach(el => el.textContent = data.name);
const miniNav = '<div class="mini-nav"><b>◈</b><span>概览</span><span>发现</span><span>收藏</span><i>●</i></div>';
const visuals = {
 mobile: `<div class="mobile-composition"><div class="floating-note">Every little moment.<span>记录生活的小美好 ↗</span></div><div class="phone phone-back"><div class="phone-bar">9:41 <span>▮▮ ●</span></div><small>YOUR DAILY INSPIRATION</small><h3>发现生活<br>的另一面。</h3><div class="plant"><i></i><i></i><i></i><i></i><b></b></div><div class="mini-card">慢下来，感受日常 <span>↗</span></div></div><div class="phone phone-front"><div class="phone-bar">9:41 <span>▮▮ ●</span></div><div class="phone-title">早上好，<br><b>今天也有新发现 ☀</b></div><div class="mobile-tabs">为你推荐　 灵感　 生活</div><div class="abstract-photo"><span>寻一处<br>自在角落</span><i></i></div><div class="mini-cards"><div>☕<small>一杯好时光</small></div><div>✳<small>周末灵感</small></div></div><div class="phone-bottom">⌂　⌕　♡　◉</div></div></div>`,
 dashboard:`<div class="desktop-window"><div class="window-top"><span class="dots">● ● ●</span><small>序 · WORKSPACE</small></div><div class="dashboard-layout"><aside><b>▧ 序</b><span class="selected">◫ 工作概览</span><span>▦ 项目空间</span><span>◷ 我的任务</span><span>▤ 团队文档</span><small>工作空间 / DESIGN</small></aside><div class="dashboard-body"><div class="dash-title"><div><small>星期一，新的开始</small><h3>工作概览</h3></div><b>＋ 创建项目</b></div><div class="metric-row"><div>进行中项目<b>12 <em>↗</em></b></div><div>本周完成<b>28 <em>+16%</em></b></div><div>团队成员<b>08 <em>●</em></b></div></div><div class="chart"><div>项目进度 <small>本周 ⌄</small></div><div class="bars">${[36,60,48,78,64,92,75,100,84,112,96,122].map(h=>`<i style="height:${h}px"></i>`).join('')}</div></div><div class="task-row">◉　品牌官网视觉探索 <span>进行中</span></div><div class="task-row">◉　移动端组件规范整理 <span>待评审</span></div></div></div></div>`,
 web:`<div class="web-window">${miniNav}<div class="interior-copy"><small>CURATED FOR EVERYDAY LIVING</small><h3>住进<br>喜欢的日常。</h3><p>Objects with stories.<br>Spaces with soul.</p><span>探索灵感 ↗</span></div><div class="room-scene"><div class="sunlight"></div><div class="vase"></div><div class="chair"><i></i></div><div class="room-caption">THE QUIET COLLECTION — 01</div></div></div>`,
 finance:`<div class="finance-layout"><div class="finance-title">有数<span>让每一份积累<br>都清晰可见。</span><small>CLARITY IN EVERY NUMBER.</small></div><div class="phone finance-phone"><div class="phone-bar">9:41 <span>▮▮ ●</span></div><div class="phone-title">我的资产 <span>◉</span></div><div class="balance"><small>总资产（元）</small><strong>128,650<em>.00</em></strong><small>本月结余　+ 3,250.00 ↗</small></div><div class="finance-actions"><span>↗<small>转入</small></span><span>↙<small>转出</small></span><span>▤<small>账单</small></span></div><h4>资产分布 <span>详情 ↗</span></h4><div class="donut"></div><div class="finance-legend">● 稳健理财　● 活期储蓄</div><div class="mini-card">本月收支 <span>＋ ¥3,250</span></div></div></div>`,
 system:`<div class="system-board"><div class="system-title">Forma<span>Design language, connected.</span><b>✳</b></div><div class="system-grid"><div class="type-tile"><small>TYPOGRAPHY</small><strong>Aa</strong><span>清晰 · 有序 · 一致</span></div><div class="color-tile"><small>COLOR PALETTE</small><div><i></i><i></i><i></i><i></i></div><span>#5853D9　#B9B7EF</span></div><div class="component-tile"><small>COMPONENTS</small><span class="fake-button">主要按钮 ↗</span><span class="fake-input">搜索你需要的内容　⌕</span></div><div class="toggle-tile"><small>DETAILS MATTER</small><b>✓ <i></i> ◉</b><span>8pt spacing system</span></div></div></div>`,
 travel:`<div class="travel-window"><div class="travel-nav"><b>山野 / WILD</b><span>探索目的地　 关于山野　 ↗</span></div><div class="mountains"><i></i><i></i><i></i></div><div class="travel-copy"><small>LESS NOISE. MORE NATURE.</small><h3>去山野，<br>找回自己的节奏。</h3><span>开启下一段旅程 ↗</span></div><div class="travel-bottom">01 / 山间漫游 <span>向自然，再靠近一点。</span></div></div>`
};
const isArchive = document.body.dataset.page === 'archive';
let selectedType = '全部', selectedIndustry = '全部', shown = 12;
const grid = document.querySelector('#project-grid');
const types = window.PortfolioCases.types;
const industries = ['全部',...new Set(data.projects.map(p=>p.industry).filter(Boolean))];
function featuredCard(p){return `<article class="featured-project real-project"><button class="featured-project-button" data-project="${p.id}" aria-label="查看${p.title}项目详情"><div class="featured-project-heading"><span class="project-phase">${p.phase}</span><h3>${p.title}</h3><p>${p.subtitle}</p><div class="featured-project-tags">${p.tags.slice(0,3).map(tag=>'<span>'+tag+'</span>').join('')}</div></div><div class="featured-project-stage ${p.theme}">${window.PortfolioCases.artwork(p)}</div><span class="featured-view">查看项目 ↗</span></button></article>`}
function card(p){if(!isArchive)return featuredCard(p);return `<article class="project real-project"><button class="project-cover ${p.theme}" data-project="${p.id}" aria-label="查看${p.title}详情">${window.PortfolioCases.artwork(p)}<span class="cover-arrow">↗</span></button><div class="project-info"><div><span class="project-phase">${p.phase}</span><h3><button data-project="${p.id}">${p.title} <span>↗</span></button></h3><p>${p.subtitle}</p></div><span class="category">${window.PortfolioCases.projectTypes(p).join(' / ')} · ${p.industry}</span></div></article>`}
function renderFilters(){
 for(const [id,values,selection,field,otherField,other] of [['type-filters',types,selectedType,'category','industry',selectedIndustry],['industry-filters',industries,selectedIndustry,'industry','category',selectedType]]){
 const available=values.filter(value=>value==='全部'||data.projects.some(p=>field==='category'?window.PortfolioCases.projectTypes(p).includes(value):p[field]===value));
 document.getElementById(id).innerHTML=available.map(value=>{const count=data.projects.filter(p=>(value==='全部'||(field==='category'?window.PortfolioCases.projectTypes(p).includes(value):p[field]===value))&&(other==='全部'||(otherField==='category'?window.PortfolioCases.projectTypes(p).includes(other):p[otherField]===other))).length;return `<button data-dimension="${field}" data-value="${value}" aria-pressed="${value===selection}" class="${value===selection?'active':''}" ${count===0?'disabled':''}>${value}<small>${count}</small></button>`}).join('');
 }
}

function render(){
 const projects=isArchive?data.projects.filter(p=>(selectedType==='全部'||window.PortfolioCases.projectTypes(p).includes(selectedType))&&(selectedIndustry==='全部'||p.industry===selectedIndustry)):data.projects.filter(p=>p.featured);
 grid.innerHTML=projects.slice(0,shown).map(card).join('');
 document.querySelector('#filter-status').textContent=`${isArchive?'找到':'精选'} ${projects.length} 个作品${isArchive?' · 已显示 '+Math.min(shown,projects.length)+' 个':''}`;
 document.querySelector('#load-more')?.remove();
 if(!projects.length)grid.innerHTML='<div class="empty-state"><span>⌕</span><h3>这个分类的作品还未添加</h3><p>可以选择其他类型或行业，继续浏览作品。</p><button data-reset>查看全部作品 ↗</button></div>';
 if(projects.length>shown){const b=document.createElement('button');b.id='load-more';b.className='load-more';b.textContent=`查看更多作品（还有 ${projects.length-shown} 个）`;b.onclick=()=>{shown+=12;render()};grid.after(b)}
 if(isArchive)renderFilters();
}
function resetFilters(){selectedType='全部';selectedIndustry='全部';shown=12;render()}
render();
document.querySelectorAll('[data-total-count]').forEach(el=>el.textContent=String(data.projects.length).padStart(2,'0'));
document.addEventListener('click',e=>{const filter=e.target.closest('[data-dimension]');if(filter){if(filter.dataset.dimension==='category')selectedType=filter.dataset.value;else selectedIndustry=filter.dataset.value;shown=12;render()}if(e.target.closest('[data-reset]'))resetFilters()});
document.querySelector('#reset-filters')?.addEventListener('click',resetFilters);
const dialog=document.querySelector('#detail-dialog');
function caseFooter(){return '<section class="case-footer" aria-label="联系与个人资料">'+window.PortfolioUI.footerMarkup(true)+'</section>';}

let caseObserver;
function showProject(id){
 const p=data.projects.find(p=>p.id===id);if(!p)return;
 const index=data.projects.indexOf(p),previous=data.projects[(index-1+data.projects.length)%data.projects.length],next=data.projects[(index+1)%data.projects.length];
 dialog.classList.add('project-dialog');
 document.querySelector('#dialog-content').innerHTML=window.PortfolioCases.render(p,index,data.projects,visuals,caseFooter());
 dialog.setAttribute('aria-labelledby','case-title');if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.querySelector('.case-content').scrollTop=0;
 const address=new URL(location.href);address.searchParams.set('project',p.id);history.replaceState(null,'',address);
 caseObserver?.disconnect();
 const scroller=matchMedia('(max-width:700px)').matches?dialog:document.querySelector('.case-content');
 caseObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('[data-case-anchor]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.caseAnchor===entry.target.id));}}},{root:scroller,rootMargin:'0px 0px -65% 0px',threshold:0});
 document.querySelectorAll('.case-chapter').forEach(section=>caseObserver.observe(section));
}
document.addEventListener('click',e=>{const anchor=e.target.closest('[data-case-anchor]');if(anchor){document.getElementById(anchor.dataset.caseAnchor)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});document.querySelectorAll('[data-case-anchor]').forEach(a=>a.removeAttribute('aria-current'));anchor.setAttribute('aria-current','location');}const button=e.target.closest('[data-project]'),switcher=e.target.closest('[data-case-switch]');if(button)showProject(button.dataset.project);if(switcher)showProject(switcher.dataset.caseSwitch);if(e.target.closest('[data-close-project]'))dialog.close()});
document.querySelector('.close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('visible'),3500)}
if(document.querySelector('#resume-button')) document.querySelector('#resume-button').onclick=()=>{if(data.resumeUrl)window.open(data.resumeUrl,'_blank','noopener');else toast('简历尚未添加。请在 content.js 中配置你的简历文件。')};
if(data.email && document.querySelector('#contact-hint'))document.querySelector('#contact-hint').textContent=data.email;
if(document.querySelector('#contact-button')) document.querySelector('#contact-button').onclick=async()=>{if(!data.email)return toast('联系方式尚未添加。请在 content.js 中填入真实邮箱。');try{await navigator.clipboard.writeText(data.email);toast('邮箱已复制：'+data.email)}catch{location.href='mailto:'+data.email}};

const socialGrid=document.querySelector('#social-grid');
if(socialGrid){
 socialGrid.innerHTML=(data.social||[]).map((social)=>`<a class="social-card" href="learning.html?platform=${encodeURIComponent(social.name)}"><span class="social-icon ${social.tone}">${social.mark}</span><span class="social-copy"><strong>${social.name}</strong><small>浏览学习内容</small></span><span class="social-arrow">↗</span></a>`).join('');
 document.querySelector('.social-note').innerHTML='<a href="learning.html">查看全部学习内容 ↗</a>';
}
// 底部项目图标可直达对应案例。
const linkedProject=new URLSearchParams(location.search).get('project');
if(linkedProject&&data.projects.some(p=>p.id===linkedProject))showProject(linkedProject);

document.addEventListener('click',event=>{const wechat=event.target.closest('[data-case-wechat]');if(wechat){const panel=document.querySelector('.case-wechat-panel');panel.hidden=!panel.hidden;wechat.setAttribute('aria-expanded',String(!panel.hidden))}if(event.target.closest('[data-case-resume]')){document.querySelector('.case-footer-status').textContent='简历文件待上传。'}});

// Shared full-size viewer keeps screen evidence readable on desktop and mobile.
const imageViewer=document.createElement('dialog');imageViewer.className='case-image-viewer';imageViewer.setAttribute('aria-label','设计稿放大预览');
imageViewer.innerHTML='<div class="image-viewer-toolbar"><p id="image-caption"></p><button type="button" data-image-scale aria-label="切换图片原尺寸">原尺寸</button><button type="button" data-image-close aria-label="关闭设计稿预览">关闭 ×</button></div><div class="image-viewer-canvas"><img alt=""></div>';
document.body.append(imageViewer);
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-case-image]');if(trigger){const image=imageViewer.querySelector('img');image.src=trigger.dataset.caseImage;image.alt=trigger.dataset.imageCaption;imageViewer.querySelector('#image-caption').textContent=trigger.dataset.imageCaption;imageViewer.classList.remove('image-original');imageViewer.showModal();imageViewer.querySelector('.image-viewer-canvas').scrollTop=0;}if(e.target.closest('[data-image-close]'))imageViewer.close();if(e.target.closest('[data-image-scale]'))imageViewer.classList.toggle('image-original');});
imageViewer.addEventListener('click',e=>{if(e.target===imageViewer)imageViewer.close()});
dialog.addEventListener('close',()=>{caseObserver?.disconnect();const address=new URL(location.href);address.searchParams.delete('project');history.replaceState(null,'',address);});
