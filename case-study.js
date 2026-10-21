/* 案例内容集中入口：项目可在 content.js 中添加 types 与 caseStudy 字段。 */
(()=>{
const types=['全部','APP 设计','小程序设计','网站设计','后台与数据可视化','H5 与运营设计','设计系统'];
const aliases={'APP':'APP 设计','小程序':'小程序设计','官网':'网站设计','网站':'网站设计','后台系统':'后台与数据可视化','数据大屏':'后台与数据可视化','H5':'H5 与运营设计'};
const projectTypes=p=>[...new Set((p.types?.length?p.types:[p.category]).map(t=>aliases[t]||t))];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chapters=[['overview','项目概览'],['highlights','核心成果'],['background','背景与目标'],['strategy','设计策略'],['design','重点设计展示'],['delivery','规范与落地'],['reflection','成果与复盘']];
const modules={
 'APP 设计':['首页与信息组织','核心业务流程','个人中心与反馈'],
 '小程序设计':['轻量入口与首页','核心任务与服务流程','授权与操作反馈'],
 '网站设计':['品牌首屏与产品表达','内容浏览与信息层级','咨询入口与移动端适配'],
 '后台与数据可视化':['工作台与数据概览','列表筛选与业务操作','权限、异常与状态反馈'],
 'H5 与运营设计':['活动入口与视觉主题','参与流程与规则说明','结果反馈与分享传播'],
 '设计系统':['基础样式与设计原则','核心组件与交互状态','组件使用与维护规则']
};
function block(id,title,body){return `<section id="case-${id}" class="case-chapter" aria-labelledby="heading-${id}"><div class="case-chapter-heading"><span>${String(chapters.findIndex(c=>c[0]===id)+1).padStart(2,'0')}</span><h3 id="heading-${id}">${title}</h3></div>${body}</section>`;}
function imageSlot(src,title){return src?`<figure class="case-evidence"><img src="${esc(src)}" alt="${esc(title)}" loading="lazy"><figcaption>${esc(title)}</figcaption></figure>`:`<div class="case-upload-slot"><span aria-hidden="true">＋</span><strong>${esc(title)}</strong><p>待补充真实设计稿</p></div>`;}
function render(p,index,projects,visuals,footer){
 const c=p.caseStudy||{},previous=projects[(index-1+projects.length)%projects.length],next=projects[(index+1)%projects.length];
 const status=p.example===false?(c.status||'项目状态待补充'):'概念示例';
 const facts=[['项目时间',c.period||'待补充'],['我的职责',c.role||'待补充负责范围'],['项目状态',status],['产品类型',projectTypes(p).join(' / ')]];
 const stage=p.cover?`<img class="case-cover-image" src="${esc(p.cover)}" alt="${esc(p.title)}封面">`:(visuals[p.visual]||'');
 const overview=`<p class="case-lead">${esc(c.summary||p.subtitle)}</p><dl class="case-overview-facts">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl><div class="detail-preview ${esc(p.theme)}">${stage}</div>`;
 const highlights=`<p class="case-chapter-intro">先看代表界面与关键改进，再展开设计判断。</p>${imageSlot(c.highlightImage,'代表界面 / 核心改进')}<div class="case-insight-grid">${(c.highlights?.length?c.highlights:['待补充：解决的关键问题','待补充：个人负责的设计改进','待补充：实际交付或验证结果']).map(t=>`<div>${esc(t)}</div>`).join('')}</div>`;
 const background=`<div class="case-text-grid">${[['产品与用户',c.background||'待补充产品定位、目标用户与使用场景。'],['关键问题',c.problem||'待补充原有体验的问题及实际依据。'],['设计目标',c.goal||'待补充需要改善的体验，以及判断是否有效的标准。']].map(([h,t])=>`<article><h4>${h}</h4><p>${esc(t)}</p></article>`).join('')}</div>`;
 const strategies=c.strategies?.length?c.strategies:[{problem:'关键问题待补充',decision:'说明为什么优先解决这个问题',solution:'补充最终方案与选择依据'}];
 const strategy=`<p class="case-chapter-intro">围绕真实问题，说明设计选择与取舍。</p>${strategies.map(t=>`<div class="case-strategy-row"><div><span>问题</span><p>${esc(t.problem)}</p></div><b aria-hidden="true">→</b><div><span>判断</span><p>${esc(t.decision)}</p></div><b aria-hidden="true">→</b><div><span>方案</span><p>${esc(t.solution)}</p></div></div>`).join('')}${c.ai?`<aside class="case-ai-note"><strong>AI 辅助与我的判断</strong><p>${esc(c.ai)}</p></aside>`:''}`;
 const designModules=c.modules?.length?c.modules:(modules[projectTypes(p)[0]]||modules['APP 设计']).map(title=>({title}));
 const design=designModules.map((m,i)=>`<article class="case-business-module"><div class="case-module-label">模块 ${String(i+1).padStart(2,'0')}</div><h4>${esc(m.title)}</h4><p class="case-module-conclusion">${esc(m.conclusion||'待补充该模块的设计结论')}</p><p>${esc(m.description||'说明原有问题、具体调整，以及为什么这样设计。')}</p>${m.image?imageSlot(m.image,m.title+' · 关键界面'):p.example===false?'':imageSlot('',m.title+' · 关键界面')}${m.gallery?`<div class="case-screen-gallery">${m.gallery.map(g=>imageSlot(g.src,g.label)).join('')}</div>`:''}${m.before||m.after?`<div class="case-comparison">${imageSlot(m.before,'2.0 · 首页')}${imageSlot(m.after,'3.0 · 首页')}</div>`:''}</article>`).join('');
 const delivery=`<div class="case-text-grid">${[['组件与视觉规范',c.system||'待补充字体、色彩、间距、组件与交互状态。'],['适配与边界状态',c.adaptation||'待补充多端适配、加载、空状态及错误反馈。'],['开发协作与还原',c.delivery||'待补充交付方式、验收过程与上线还原情况。']].map(([h,t])=>`<article><h4>${h}</h4><p>${esc(t)}</p></article>`).join('')}</div>${c.deliveryImage?imageSlot(c.deliveryImage,'组件规范 / 设计落地'):p.example===false?'':imageSlot('','组件规范 / 设计落地')}`;
 const reflection=`<div class="case-text-grid">${[['实际成果',c.result||'待补充上线、交付或验证情况；没有真实数据时不填写提升比例。'],['设计取舍',c.tradeoff||'待补充限制条件、比较过的方案与最终选择。'],['后续改进',c.next||'待补充尚未解决的问题与下一步计划。']].map(([h,t])=>`<article><h4>${h}</h4><p>${esc(t)}</p></article>`).join('')}</div>`;
 return `<div class="case-layout case-domestic"><aside class="case-sidebar"><button class="case-back" data-close-project>← 返回作品</button><div class="case-intro"><span class="eyebrow">${esc(status)} / ${String(index+1).padStart(2,'0')}</span><h2 id="case-title">${esc(p.title)}</h2><p class="case-summary">${esc(p.subtitle)}</p><div class="case-tags">${[...projectTypes(p),p.industry].filter(Boolean).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div><nav class="case-chapter-nav" aria-label="案例目录">${chapters.map(([id,title],i)=>`<button data-case-anchor="case-${id}" ${i===0?'aria-current="location"':''}><span>${String(i+1).padStart(2,'0')}</span>${title}</button>`).join('')}</nav><p class="case-disclaimer">${p.example===false?'个人贡献以各模块说明为准。':'当前为概念示例，案例过程与结果待补充。'}</p></aside><div class="case-content">${chapters.map(([id,title],i)=>block(id,title,[overview,highlights,background,strategy,design,delivery,reflection][i])).join('')}<div class="case-thanks"><h3>感谢阅读，期待交流。</h3></div><div class="case-pagination"><button data-case-switch="${esc(previous.id)}">← <span><small>上一个项目</small>${esc(previous.title)}</span></button><button class="case-all" data-close-project>返回作品</button><button data-case-switch="${esc(next.id)}"><span><small>下一个项目</small>${esc(next.title)}</span> →</button></div>${footer}</div></div>`;
}
window.PortfolioCases={types,projectTypes,render};
})();
