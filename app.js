const projects = [
  ['ai','恒智易 AI｜智能体创作平台 2.0、3.0','APP','2026.04–05','AI 智能体应用 · 产品改版 · 多端适配','支持以文本、图像和视频指令进行智能对话与内容生成，也可创建个性化智能体。','home-imgRectangle2'],
  ['ai3','恒智易 AI｜智能体创作平台 3.0','APP','2026.09–10','AI 智能体应用 · 产品改版 · 多端适配','围绕智能对话和多模态内容创作进行视觉升级，覆盖手机与 iPad 场景。'],
  ['work','恒智易 Work｜AI 智能办公工作台','macOS / Win','2026.10–11','AI 智能办公 · 桌面端应用','以自然语言交互串联任务发起、过程处理、结果预览和交付。','work-imgRectangle4'],
  ['haieasy','Haieasy｜AI 录音与会议助手','APP','2026.05–06','海外 APP · 多语言本地化 · iPad 适配','面向海外市场的 AI 助手，结合智能对话与 AI 硬件，服务问答及办公记录。'],
  ['life','恒生活｜数字生活用户端','APP','2024.09 至今','数字生活 · 智能零售 · 本地生活','聚合智能货柜、共享充电、生活商城、出行服务和 AI 助手。','home-imgContainer1'],
  ['ezvend','EZvend｜海外智能售货运营端','APP','2026.01–02','海外智能零售 · B 端运营 · 国际化','面向海外运营商、商户与运维人员，覆盖设备、商品、库存、订单和补货运营。','home-imgContainer'],
  ['merchant','恒掌柜｜智能货柜商家端','APP','2024.09 至今','智能货柜 · 商家运营','面向智能零售商家及运营人员，支持商品管理、订单处理和经营数据查看。','home-imgRectangle3'],
  ['studio','恒智影 AI｜智能影像创作平台','APP','2026.07–08','0–1 独立负责 · AI 产品设计','以 AI 辅助影像创作，降低内容创作门槛。','home-imgRectangle4'],
  ['loan','恒生活借款｜消费金融用户端','APP','2025.01–02','消费金融 · 生活服务','在金融服务之外整合智能零售、生活消费与汽车服务等入口。'],
  ['cabinet','恒生活｜智能货柜服务小程序','小程序','2026.04–05','智能零售 · IoT','连接线下智能货柜，覆盖商品选购、自动结算与订单管理。'],
  ['charging','劲来电｜智能充电服务小程序','小程序','2025.04','智能硬件 · IoT · 新能源出行','覆盖设备查找、扫码启动、充电状态查看和费用结算。','work-imgRectangle9'],
  ['arcade','恒生活｜智能游艺与潮玩服务小程序','小程序','','线下游艺 · 潮玩服务','连接抓娃娃机、卡机等游艺设备，承接购买与使用服务。','work-imgRectangle19'],
  ['box','恒生活盲盒／奇点·BOX 扫码小程序','小程序','','智能零售 · 潮玩消费 · 软硬件联动','围绕潮玩自助零售设备设计扫码交易与售后流程。','work-imgRectangle15'],
  ['box-saas','恒生活 · 奇点BOX（SaaS）','小程序','','潮玩零售 · 品牌服务','配合线下潮玩零售场景，承接品牌展示及消费服务。'],
  ['pinball','恒生活 · 弹珠机','小程序','','线下游艺 · 会员服务','连接实体设备与会员账户，覆盖买珠、储珠和积分兑换。','work-imgRectangle11'],
  ['grabot','GRABOT｜海外智能零售品牌官网','官网','','海外品牌 · 智能零售 · B 端营销','呈现智能售货设备与解决方案，帮助访客了解产品和发起咨询。','home-imgContainer2'],
  ['ai-web','恒智易 AI｜网页创作工作台','Web','','AIGC 创作工具 · Web 工作台','面向网页端的 AI 内容创作工作台。'],
  ['retail','智能零售终端｜售货与互动设备 UI','硬件大屏','','智能零售 · 嵌入式设备 · 自助交易','承接待机宣传、操作引导、商品选购与出货反馈。'],
  ['wine','智能酒柜｜零售终端 UI','硬件大屏','','酒类零售 · 自助购买与取货','在同一触控大屏支持商品浏览、购买与凭取货码领取。'],
  ['pos','海外智能售货 POS｜运营终端 UI','硬件大屏','','消费者支付终端 · 英文交互','覆盖刷卡授权、开门购物、支付，以及欠款补缴和设备异常。','pos-cover'],
  ['vertical','盲盒竖屏','硬件大屏','','潮玩零售 · 多尺寸适配','覆盖商品展示、购物车、扫码支付和出货状态。'],
  ['charge-h5','劲来电｜商家运营 H5','H5','','充电运营 · B 端管理','支持场地设备、计费策略、购卡与经营数据管理。','work-imgRectangle8'],
  ['arcade-h5','小橙游艺｜商家运营 H5','H5','','游艺运营 · 设备管理','面向游艺商家与运营人员管理场地、设备、订单与经营数据。'],
  ['drama','恒生活借款｜短剧内容服务 H5','H5','','短视频娱乐 · App 内嵌 H5','覆盖短剧发现、分类推荐、搜索、收藏与继续观看。','work-imgRectangle22'],
  ['book','小说','H5','','数字阅读 · 内容服务','覆盖书城、搜索、作品详情、书架与阅读进度延续。','work-imgRectangle21'],
  ['auto','车商城 H5','H5','','汽车服务 · 车型展示与询价','支持车型浏览、品牌筛选、参数查看和询价。','work-imgRectangle13'],
  ['installment','分期商城 H5','H5','','电商交易 · 分期购物','呈现商品价格与分期条件，衔接确认订单和支付。','work-imgRectangle12'],
  ['local','本地生活 H5','H5','','本地生活 · 券包交易 · 到店核销','连接购券、支付、查看凭证、商家核销与退款。','work-imgRectangle14'],
  ['health','医疗商城 H5','H5','','医疗健康 · 健康商城','整合药品、陪诊、海外医疗与个人服务入口。']
];
projects.push(
  ['work-platform','智易 Work｜平台管理端','后台管理','','企业 AI 服务 · 多租户运营','连接企业租户、AI 服务审核与平台日常运营。'],
  ['work-enterprise','智易 Work｜企业后台','后台管理','','组织管理 · AI 应用与资源','围绕部门、成员、知识库与额度组织企业 AI 管理任务。']
);
projects.push(['channel','恒先锋｜渠道推广运营端','APP','','渠道推广 · 运营工具','面向行业从业者的智能推广与渠道运营工具。']);
const cardDescriptions = Object.fromEntries(projects.map(p=>[p[0],p[5]]));
for(const project of projects){
  const record=workbookProjects[project[0]];
  if(!record)continue;
  project[1]=record.name;
  project[2]=['work-platform','work-enterprise','overseas-admin'].includes(project[0])?'后台管理':record.platform||project[2];
  project[3]=record.date||'';
  project[4]=(record.type||project[4]).replace(/\n/g,' · ');
  project[5]=record.background||project[5];
  if(record.cover)project[6]=record.cover.src.replace('assets/','').replace('.webp','');
}
const app = document.querySelector('#app');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const paths = {首页:'home',项目:'projects',全部项目:'projects',关于我:'about',简历:'resume',联系我:'contact'};
let initialized = false;
let printResume = false;
let platform = '全部项目';
let topic = '所有类别';
const workOrder = ["ai3", "work", "life", "ezvend", "merchant", "studio", "loan", "cabinet", "charging", "arcade", "box", "box-saas", "pinball", "grabot", "wine", "pos", "vertical", "charge-h5", "arcade-h5", "drama", "book", "auto", "installment", "local", "health", "work-platform", "work-enterprise", "haieasy", "ai", "ai-web", "retail", "overseas-admin", "operations", "channel"];
projects.push(
  ['overseas-admin','海外经销商管理系统','后台管理','','海外渠道 · 运营管理','涵盖经销商准入、资料、订单及经营数据。'],
  ['operations','恒生活｜运营活动设计','UI运营活动','','本地生活 · 运营活动','覆盖签到与优惠券等运营活动。']
);
const categories = {
  APP: ['APP','macOS / Win'],
  '终端硬件':['硬件大屏'],
  '后台管理':['后台管理','Web']
};
const topics = {
  AI:/AI|智能体|AIGC/i,
  金融产品:/金融|分期/,
  电商产品:/商城|零售|货柜|售货/,
  海外产品:/海外|EZvend|Haieasy|GRABOT/i,
  医疗健康:/医疗|健康/,
  娱乐潮玩:/潮玩|娱乐|弹珠|小说|短剧/,
  生活方式:/生活|充电|汽车/
};
function node(id){return app.querySelector('[data-node-id="'+id+'"]');}
function action(el,fn){
  if(!el)return;
  el.dataset.action='';
  el.setAttribute('role','button');
  el.tabIndex=0;
  el.addEventListener('click',fn);
  el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn(e);}});
}
function go(el,key){action(el,()=>{if(key==='resume'){window.open('assets/song-bingyan-resume.pdf?v=6730e02933d1','_blank','noopener');}else location.hash=key;});}
function notify(text){
  const notice=document.querySelector('#notice');
  notice.textContent=text;
  clearTimeout(notify.timer);
  notify.timer=setTimeout(()=>{notice.textContent='';},2400);
}
function bindNavigation(page){
  app.querySelectorAll('[data-name="Header"] > div > :is(a,p)').forEach(el=>{
    const key=paths[el.textContent.trim()];
    if(key){
      if(key===page)el.setAttribute('aria-current','page');
      else go(el,key);
    }
  });
  const ids={'292:1854':'contact','612:13649':'resume','292:1861':'projects','614:16774':'contact','614:16782':'contact','614:16789':'contact','644:13607':'projects'};
  Object.entries(ids).forEach(([id,key])=>go(node(id),key));
  go(node('190:15124'),'resume');
  const copy = value => navigator.clipboard.writeText(value).then(()=>notify('已复制'),()=>notify('复制失败，请在简历中查看'));
  action(node('692:14830'),()=>copy('Sliu6de@163.com'));
  action(node('330:47676'),()=>copy('15701242481'));
  ['692:14828','330:47684'].forEach(id=>action(node(id),()=>notify('微信号待补充')));
  if(page==='about'||page==='home'||page==='projects'){
    app.querySelectorAll('p').forEach(el=>{
      if(el.textContent.trim()==='联系我'&&!el.closest('[data-action]'))go(el.parentElement,'contact');
    });
  }
}
function bindWork(){
  const grid=node('297:5334');
  const baseCard=grid.firstElementChild;
  const originalCards=[...grid.children];
  const fallbackCards=Object.fromEntries(['ai3','studio','work','haieasy','ezvend','merchant','loan','charge-h5','charging','retail','pinball','installment','auto','local','box','life','book','drama','arcade','health','box-saas','arcade-h5','grabot','cabinet','ai','ai-web','wine','pos','vertical','overseas-admin','operations'].map((id,i)=>[id,originalCards[i]]));
  grid.replaceChildren(...workOrder.map(id=>(fallbackCards[id]||baseCard).cloneNode(true)));
  const allCards=[...grid.children];
  const buttons=[...node('297:3022').children];
  const topicButtons=[];
  node('297:5437')?.remove();
  topic='所有类别';
  allCards.forEach((card,i)=>{
    const project=projects.find(p=>p[0]===workOrder[i]);
    if(!project)return;
    const record=workbookProjects[project[0]];
    const source=record?.cover?.src||(project[6]?'assets/'+project[6]+'.webp':null);
    if(source){
      const holder=card.firstElementChild;
      holder.replaceChildren();
      const image=document.createElement('img');image.src=source;image.alt=project[1]+'项目封面';image.loading='lazy';holder.append(image);
    }else if(!fallbackCards[project[0]]){
      card.firstElementChild.innerHTML='<div class="admin-cover">'+project[1]+'</div>';
    }
    const info=card.lastElementChild;
    info.firstElementChild.textContent=project[1];
    info.lastElementChild.textContent=project[3];
    card.dataset.project=project[0];
    card.setAttribute('aria-label',project[1]);
    go(card,'project/'+project[0]);
  });
  const update=()=>{
    buttons.forEach(b=>b.setAttribute('aria-pressed',b.textContent.trim()===platform));
    topicButtons.forEach(b=>b.setAttribute('aria-pressed',b.textContent.trim()===topic));
    allCards.forEach(c=>{
      const p=projects.find(p=>p[0]===c.dataset.project);
      c.hidden=!!p&&!((platform==='全部项目'||(categories[platform]||[platform]).includes(p[2]))&&(!topics[topic]||topics[topic].test(p.slice(1,6).join(' '))));
    });
    const empty=grid.querySelector('.no-projects');
    empty.hidden=allCards.some(c=>!c.hidden);
    if(!motion.matches)grid.animate([{opacity:.65,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:240,easing:'ease-out'});
  };
  const empty=document.createElement('p');
  empty.className='no-projects';
  empty.textContent='当前筛选下暂无项目';
  grid.append(empty);
  buttons.forEach(b=>action(b,()=>{platform=b.textContent.trim();update();}));
  topicButtons.forEach(b=>action(b,()=>{topic=b.textContent.trim();update();}));
  update();
}
function prepareLayout(key){
  const frame=app.querySelector('.artboard');
  frame.dataset.page=key;
  const header=frame.querySelector('[data-name="Header"]');
  const nav=document.createElement('nav');
  nav.className='site-nav';
  nav.setAttribute('aria-label','主导航');
  const links=[['首页','home'],['项目','projects'],['关于我','about'],['简历','resume']];
  if(key==='contact')links.push(['联系我','contact']);
  links.forEach(([label,route])=>{
    const link=document.createElement('a');
    link.href=route==='resume'?'assets/song-bingyan-resume.pdf?v=6730e02933d1':'#'+route;
    if(route==='resume'){link.target='_blank';link.rel='noopener';}
    link.textContent=label;
    if(route===(key==='work'||key==='detail'?'projects':key))link.setAttribute('aria-current','page');
    nav.append(link);
  });
  header?.remove();
  if(key!=='detail')app.prepend(nav);
  if(key==='home'){
    const hero=document.createElement('section');
    hero.className='compact-hero';
    hero.innerHTML='<img src="assets/figma/home-imgCd43Dcf946985Cd8717Fffd12A5F020C1.webp" alt="宋冰艳"><h1>我是 <em>宋冰艳</em><br>5年 UI 设计经验</h1><p>设计项目超 50+ 并上线</p><div><a href="#contact">联系面试</a><a href="#resume">查看简历</a></div>';
    node('297:2783').before(hero);


  }
  if(key==='about'){
    const collage=node('330:47878');
    collage.className='personal-toolkit';
    collage.innerHTML=`
      <a class="tool-folder tool-sites" href="#home"><div class="tool-preview sites-preview"><img src="assets/figma/home-imgRectangle2.webp" alt=""><img src="assets/figma/home-imgContainer2.webp" alt=""></div><span class="folder-front"></span><strong>我的网站</strong></a>
      <a class="tool-folder tool-plugins" href="https://shiyong-figma-plugins.abcgajgwhb.chatgpt.site/"><div class="tool-preview plugin-preview"><small>拾用 · Figma 插件导航</small><span>PSD ↔ Figma</span></div><span class="folder-front"></span><strong>我的插件</strong></a>
      <a class="tool-folder tool-articles" href="#about/workflows"><div class="tool-preview article-preview"><small>六六 UI 设计师</small><span>Codex + Figma 工作流</span></div><span class="folder-front"></span><strong>学习文章</strong></a>
      <span class="tool-sticker sticker-ai" aria-hidden="true">✦ AI 工作流</span>
      <span class="tool-sticker sticker-ui" aria-hidden="true">六六<br>UI 设计师</span>
      <span class="tool-sticker sticker-system" aria-hidden="true">设计规范</span>
      <span class="tool-sticker sticker-cross" aria-hidden="true">跨端适配</span>
      <span class="tool-sticker sticker-figma" aria-hidden="true">Figma<br>可编辑</span>`;
  }
  if(key==='home')node('612:13644')?.remove();
}
const caseNotes={
  ai:['梳理对话首页、侧边栏和智能体入口，支持写作、视频和图片生成。','将侧边栏从点击图标展开改为向右滑动打开，并适配 iPad。'],
  ai3:['升级黑白蓝视觉系统，并统一手机和 iPad 的界面样式。','梳理输入、思考中和回复的交互状态。'],
  ezvend:['梳理精细化补货与快捷补货两种流程，以及新品申请和货道图导入。','复用现有组件，适配英语和印尼语，并跟进界面走查。'],
  merchant:['围绕扫码开门、库存和订单管理组织商家端入口。'],
  life:['梳理首页、商城和 AI 入口，设计优惠券拉新、小橙币签到等活动界面。'],
  pos:['梳理刷卡授权、开门购物和支付流程，并覆盖欠款补缴与设备异常状态。'],
  'overseas-admin':['按准入、资料、订单、经营数据和渠道管理组织后台模块。']
};
function caseView(project){
  const [id,title,platform,date,scope,summary,cover]=project;
  const study=caseStudies[id];
  const record=workbookProjects[id];
  const next=projects.find(p=>p[0]===workOrder[(workOrder.indexOf(id)+1)%workOrder.length]);
  const screens=caseEvidence.screens[id]||[];
  const hero=cover?'assets/'+cover+'.webp':screens[0]?.src;
  const sections=[['overview','项目背景'],['strategy','设计策略'],['decisions','关键决策'],['ai-method','AI 协作'],['delivery','设计交付'],['review','复盘与验证'],...(screens.length?[['interfaces','设计稿展示']]:[])];
  const gallery=screens.map((screen,i)=>`<figure class="evidence-screen ${screen.w/screen.h>1.1?'wide-screen':''}"><button type="button" class="case-enlarge" data-image="${screen.src}" aria-label="放大${screen.label}"><img loading="lazy" src="${screen.src}" alt="${screen.label}"></button><figcaption><strong>${screen.label}</strong></figcaption></figure>`).join('');
  const theme={ai:'#1783ff',ai3:'#1783ff',work:'#1783ff','ai-web':'#1783ff',life:'#ff6b00',merchant:'#ff6b00',cabinet:'#ff6b00',ezvend:'#0865fe',grabot:'#0865fe',studio:'#8653df',charging:'#ff8a00','charge-h5':'#ff8a00',health:'#ff6b00','work-platform':'#222222','work-enterprise':'#222222',pos:'#0865fe',wine:'#9b6639',box:'#7251c7',arcade:'#7251c7'}[id]||'#252835';
  return `<article class="project-case editorial-case" style="--project-accent:${theme}" data-project-id="${id}" data-kind="${platform==='后台管理'?'admin':platform==='硬件大屏'?'hardware':'product'}">
    <div class="case-topline"><a class="case-back" href="#projects">全部项目</a><span>${platform} · UI 设计作品</span></div>
    <header class="editorial-heading"><p class="case-scope">${scope}</p><h1>${title}</h1><p class="case-lead">${study.angle}</p><div class="case-facts"><div><span>服务人群</span><p>${study.audience}</p></div><div><span>设计范围</span><p>${study.scope}</p></div>${date?`<div><span>项目日期</span><p>${date}</p></div>`:''}${record?.status?'<div><span>上线状态</span><p>'+record.status+'</p></div>':''}</div></header>
    ${hero?`<figure class="editorial-hero"><button type="button" class="case-enlarge" data-image="${hero}" aria-label="放大项目主图"><img src="${hero}" alt="${title}项目展示"></button></figure>`:''}
    <section id="overview" class="editorial-section"><div class="section-title"><p>项目背景</p><h2>业务是什么，<br>设计负责什么。</h2></div><div class="section-body"><p class="large-copy">${summary}</p>${study.problem!==summary?'<p>'+study.problem+'</p>':''}</div></section>
    <section class="flow-band"><h2>核心任务路径</h2><ol class="case-flow">${study.flow.map(step=>`<li>${step}</li>`).join('')}</ol></section>
    ${record?.responsibility?'<section class="editorial-section personal-role"><div class="section-title"><p>个人贡献</p><h2>我负责的设计工作</h2></div><div class="section-body"><p class="responsibility-copy">'+record.responsibility+'</p>'+(record.team?'<p class="case-source">'+record.team+'</p>':'')+'</div></section>':''}
    <section id="strategy" class="editorial-section strategy-section"><div class="section-title"><p>设计策略</p><h2>${study.angle}</h2></div><div class="section-body"><p class="large-copy">围绕${study.audience}的核心任务，组织 ${platform} 端的操作体验。</p><div class="strategy-list"><div><h3>任务优先</h3><p>${study.flow.join(' → ')}。围绕这条路径安排入口、内容层级和反馈。</p></div><div><h3>保留产品辨识度</h3><p>沿用本项目现有界面的视觉语言，在实际业务页面中落实一致的颜色、文字、组件和操作状态。</p></div><div><h3>设计落到具体范围</h3><p>${study.scope}。</p></div></div></div></section>
    <section id="decisions" class="decision-section"><p class="section-kicker">关键设计决策</p><h2>每一个方案，都回应具体的任务。</h2><div class="editorial-decisions">${study.decisions.map((d,i)=>`<article><span class="decision-label">${['信息与任务','操作与反馈','一致性与延展'][i%3]}</span><h3>${d.title}</h3><div class="decision-detail"><span>方案与思考</span><p>${d.body}</p></div></article>`).join('')}</div></section>
    <section id="ai-method" class="editorial-section ai-section"><div class="section-title"><p>${study.aiStatus}</p><h2>让 AI 加速整理，<br>让设计判断落地。</h2></div><div class="section-body"><p>${study.ai}</p><div class="ai-responsibilities"><div><h3>工具辅助</h3><p>内容归纳、场景扩展、样本生成与规范整理。</p></div><div><h3>设计师负责</h3><p>业务边界、操作优先级、视觉表达和最终交付核验。</p></div></div></div></section>
    <section id="delivery" class="editorial-section delivery-section"><div class="section-title"><p>设计交付</p><h2>从视觉表达，<br>走向产品落地。</h2></div><div class="section-body"><p class="large-copy">${study.scope}</p><div class="delivery-facts"><div><span>项目进度</span><strong>${record?.status||'以项目资料为准'}</strong></div><div><span>产品形态</span><strong>${platform}</strong></div>${date?`<div><span>项目周期</span><strong>${date}</strong></div>`:''}</div><p>以上以现有项目资料与设计稿为依据。具体界面及细节统一收录在页面末尾，可点击放大查看。</p></div></section>
    <section id="review" class="editorial-section review-section"><div class="section-title"><p>复盘与验证</p><h2>用可检查的标准，<br>继续验证设计。</h2></div><div class="section-body"><h3>本项目的检查重点</h3><p>${study.verify}</p><h3>面向交付继续核对</h3><p>依据关键任务检查页面入口、状态反馈、返回路径和组件一致性，结合开发走查与使用反馈持续修正。</p><p class="case-source">案例资料 · ${study.evidence}。</p></div></section>
    <aside class="case-contact"><div><h2>欢迎交流项目中的设计判断</h2><p>从业务梳理、界面设计到跨端适配与交付。</p></div><a href="#contact">联系我</a></aside>
    <a class="case-next" href="#project/${next[0]}"><span>继续浏览</span><strong>${next[1]}</strong></a>
    ${screens.length?`<section id="interfaces" class="interface-section"><div class="interface-heading"><div><p class="section-kicker">设计稿展示</p><h2>项目界面与设计细节</h2></div></div>${study.screenNote?`<div class="screen-reading"><h3>${study.screenNote.title}</h3><p>${study.screenNote.body}</p></div>`:`<div class="screen-reading"><h3>页面范围与信息组织</h3><p>${study.scope}。以下设计分析结合现有项目说明与已读取的画板结构整理。</p></div>`}<div class="screen-gallery">${gallery}</div></section>`:''}
    <dialog class="image-dialog" aria-label="设计稿大图"><button class="dialog-close" aria-label="关闭大图">关闭</button><img alt="设计稿大图"></dialog>
  </article>`;
}
function bindCase(){
  app.querySelectorAll('[data-section]').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();
    document.getElementById(link.dataset.section)?.scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'start'});
  }));
  const dialog=app.querySelector('.image-dialog');
  app.querySelectorAll('.case-enlarge').forEach(button=>button.addEventListener('click',()=>{
    const image=dialog.querySelector('img');
    image.src=button.dataset.image;
    image.alt=button.querySelector('img').alt;
    dialog.showModal();
  }));
  dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
}
function render(){
  const [page,id]=(location.hash.slice(1)||'home').split('/');
  const project=page==='project'&&projects.find(p=>p[0]===id);
  const key=page==='projects'||(page==='project'&&!project)?'work':project?'detail':page;
  if(page==='article'){renderArticle(id);return;}
  const board=artboards[key]||artboards.home;
  app.innerHTML='<div class="artboard" style="height:'+board.height+'px">'+(project?caseView(project):board.html)+'</div>';
  prepareLayout(key);
  bindNavigation(page);
  if(key==='home'){
    ['292:2441','297:2604','297:2631','297:2650','298:6570','298:6589'].forEach((n,i)=>{
      const id=['ai3','ezvend','life','grabot','merchant','studio'][i];
      const card=node(n);
      const project=projects.find(p=>p[0]===id);
      const textGroup=card.lastElementChild.firstElementChild;
      const title=textGroup.firstElementChild.querySelector('p');
      if(title)title.textContent=project[1];
      const summary=document.createElement('p');
      summary.className='project-card-summary';
      summary.textContent=cardDescriptions[id]||project[5];
      textGroup.lastElementChild.replaceWith(summary);
      const tag=card.lastElementChild.lastElementChild.querySelector('p');
      if(tag)tag.textContent={ai3:'AI APP',ezvend:'海外零售',life:'数字生活',grabot:'品牌官网',merchant:'商家运营',studio:'AI 影像'}[id];
      const record=workbookProjects[id];
      if(record?.cover&&card.querySelector('img'))card.querySelector('img').src=record.cover.src;
      go(card,'project/'+id);
    });
  }
  if(key==='home'){
    const grid=node('297:2685');
    ['work','pos'].forEach(id=>{
      const card=grid.firstElementChild.cloneNode(true);
      card.removeAttribute('data-node-id');
      card.querySelectorAll('[data-node-id]').forEach(el=>el.removeAttribute('data-node-id'));
      const project=projects.find(p=>p[0]===id);
      const titleGroup=card.lastElementChild.firstElementChild;
      titleGroup.firstElementChild.querySelector('p').textContent=project[1];
      const summary=card.querySelector('.project-card-summary');if(summary)summary.textContent=cardDescriptions[id]||project[5];
      const image=card.querySelector('img');image.src=workbookProjects[id].cover.src;image.alt=project[1]+'项目封面';image.loading='lazy';
      const tag=card.lastElementChild.lastElementChild.querySelector('p');if(tag)tag.textContent=id==='work'?'AI 办公':'终端硬件';
      // Cloning excludes event listeners; bind only this project's destination.
      go(card,'project/'+id);card.setAttribute('aria-label',project[1]);grid.append(card);
    });
  }
  if(key==='work')bindWork();
  bindArticles();
  installMotion();
  if(project)bindCase();
  if(key==='resume'&&printResume){
    printResume=false;
    setTimeout(()=>window.print(),450);
  }
  if(key==='about'&&id==='workflows')node('330:46795')?.scrollIntoView({block:'start'});
  else window.scrollTo({top:0,behavior:'instant'});
  if(initialized){
    const frame=app.querySelector('.artboard');
    frame.tabIndex=-1;
    frame.focus({preventScroll:true});
  }
}
function route(){
  if(initialized&&document.startViewTransition&&!motion.matches)document.startViewTransition(render);
  else render();
  initialized=true;
}


const workflowArticles = [
 {id:'ui-redesign',node:'288:1607',title:'ChatGPT 做 UI 界面改版，并生成源文件工作流',intro:'让 AI 辅助前期梳理，把精力留给业务理解、体验判断与设计细节。',parts:[['先整理现有界面','把页面目标、服务人群、原有信息结构和需要保留的品牌元素写清楚。提供现有界面作为依据，明确哪些内容可以调整，哪些业务规则必须保留。'],['让 AI 帮忙拆解问题','围绕信息层级、操作路径和视觉一致性整理改版方向。逐条检查建议是否适合真实业务，再选择值得推进的方案。'],['在 Figma 中完成设计','基于已有组件和变量整理界面，检查字体、间距、圆角、色彩及多状态表现。可编辑的源文件需要真实图层结构，不能只放一张效果图。'],['交付前人工核验','对照原需求检查遗漏、长文案、空状态、异常状态和适配边界。AI 给出的是辅助方案，最终设计质量由设计师负责。']]},
 {id:'codex-figma',node:'288:1615',title:'UI 设计师的 Codex + Figma 工作流',intro:'从明确任务到检查结果，把 AI 接入自己的设计过程。',parts:[['准备设计上下文','提供明确的页面范围、参考设计和组件规范，说明要解决的任务。涉及原稿时先约定读取与修改边界。'],['把需求拆成可检查的步骤','先完成结构与信息层级，再调整组件状态、视觉细节和适配，避免一次提出过多相互依赖的修改。'],['用现有规范约束输出','沿用项目的颜色变量、字体层级和组件，让新页面与已有产品保持一致。'],['检查与沉淀','核对图层是否可编辑、组件是否正确、布局是否完整。把有效的方法整理成可复用流程，而不是直接接受第一次结果。']]},
 {id:'gemini-interface',node:'288:1622',title:'Gemini 生成界面，再导入 Figma 的流程',intro:'在方向不明确时，用 AI 生成方案辅助探索，再回到 Figma 完成整理。',parts:[['描述具体场景','说明产品类型、用户目标、页面内容与视觉方向。已有品牌样式应一起提供，避免得到脱离项目的概念图。'],['比较方案方向','从信息结构、主次关系和操作逻辑选择方案。生成图只用于辅助判断，不能替代业务流程。'],['导入后检查可编辑结构','核对文字、图片、图标与组件是否保留独立图层；如果导入的是整张图片，需要继续整理为真正可维护的设计。'],['回到产品规范','统一字体、色彩、组件状态和间距，再检查多尺寸适配及开发可实现性。']]},
 {id:'lottery-design',node:'288:1629',title:'ChatGPT + Figma 制作抽奖页面和中奖弹窗',intro:'从活动规则出发，把页面、反馈与动效组织成完整体验。',parts:[['明确活动规则','先梳理抽奖次数、奖品内容、参与条件及领奖流程，再安排页面内容，避免只有热闹的视觉。'],['设计完整反馈','分别考虑抽奖前、进行中、中奖、未中奖和次数不足等状态。中奖弹窗说明奖品与下一步动作。'],['补充适度动效','入场、抽奖过程和结果反馈各有目的。控制持续时间，保留关闭和返回能力，不让动画影响操作。'],['检查活动交付','核对奖品文案、按钮去向、弹窗遮罩和小屏表现，再整理素材与状态说明。']]},
 {id:'editable-source',node:'288:1638',title:'Codex 到 Figma 生成源文件的工作流',intro:'重点是可编辑、可维护和符合项目规范，而不只是生成一张界面。',parts:[['提供结构化需求','明确页面结构、文本内容、尺寸及复用组件，让输出有具体依据。'],['建立真实图层','页面里的文字、图标、按钮和内容区域需要有清晰结构，重复元素优先使用组件。'],['核对设计规范','检查自动布局、颜色变量、字体层级和图层命名，确保后续可以继续修改。'],['人工完成最后一轮','逐项走查对齐、间距、溢出及交互状态，把可用的输出整理成完整交付文件。']]},
 {id:'miniapp-redesign',node:'288:1645',title:'用 ChatGPT 辅助小程序 UI 改版',intro:'把生成思路与真实产品约束结合，让改版能继续落地。',parts:[['梳理原有页面','整理已有功能、操作路径及需要保留的内容，明确此次改版的范围。'],['辅助生成设计方向','让 AI 围绕信息层级、模块布局和视觉风格提供候选思路，再根据业务进行筛选。'],['落成可编辑界面','在 Figma 中结合现有组件完成细化，统一导航、卡片、按钮及反馈样式。'],['检查完整性','核对小程序的页面跳转、系统栏、安全区、长文案及空状态，把视觉方案补全为可交付设计。']]}
];
function bindArticles(){workflowArticles.forEach(article=>{const card=node(article.node);if(card){go(card,'article/'+article.id);card.setAttribute('aria-label','阅读文章：'+article.title);}});}
function renderArticle(id){
 const article=workflowArticles.find(a=>a.id===id);
 if(!article){location.hash='home';return;}
 app.innerHTML='<article class="workflow-article"><a class="article-back" href="#home">返回首页</a><header><p class="section-kicker">六六 UI 设计师 · AI 设计工作流</p><h1>'+article.title+'</h1><p class="article-intro">'+article.intro+'</p></header><p class="article-context">依据首页分享主题整理的站内流程说明。</p>'+article.parts.map(([title,body])=>'<section><h2>'+title+'</h2><p>'+body+'</p></section>').join('')+'<footer><a href="#article/'+workflowArticles[(workflowArticles.indexOf(article)+1)%workflowArticles.length].id+'">阅读下一篇工作流</a><a href="#home">返回首页</a></footer></article>';
 window.scrollTo({top:0,behavior:'instant'});installMotion();
}
function installMotion(){
 revealObserver?.disconnect();
 if(motion.matches||!('IntersectionObserver' in window))return;
 revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('has-entered');revealObserver.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px -24px 0px'});
 app.querySelectorAll('[data-project],.editorial-section,.decision-section,.flow-band,.evidence-screen,.case-contact,.case-next,.workflow-article section,[data-node-id="288:1606"]>div').forEach((el,i)=>{el.classList.add('motion-enter');el.style.setProperty('--enter-delay',Math.min(i%3*50,100)+'ms');revealObserver.observe(el);});
}

let revealObserver;
addEventListener('hashchange',route);
addEventListener('keydown',e=>{if(e.key==='Escape'&&!app.querySelector('dialog[open]')&&location.hash.startsWith('#project/'))location.hash='projects';});
route();
function fitPaper(){
  app.style.setProperty('--paper-scale',Math.min(1,app.clientWidth/1200));
}
addEventListener('resize',fitPaper);
fitPaper();

// The reference uses a 22px difference-blend cursor on desktop.
const finePointer=matchMedia('(pointer: fine) and (min-width: 1024px)');
const designCursor=document.createElement('div');
designCursor.className='design-cursor';designCursor.setAttribute('aria-hidden','true');document.body.append(designCursor);
function syncDesignCursor(){document.documentElement.classList.toggle('custom-pointer',finePointer.matches);designCursor.style.opacity='0';}
syncDesignCursor();finePointer.addEventListener('change',syncDesignCursor);
window.addEventListener('pointermove',e=>{if(!finePointer.matches||e.pointerType==='touch')return;designCursor.style.left=e.clientX+'px';designCursor.style.top=e.clientY+'px';designCursor.style.opacity='1';},{passive:true});
document.addEventListener('pointerleave',()=>designCursor.style.opacity='0');
window.addEventListener('blur',()=>designCursor.style.opacity='0');
window.addEventListener('pointerdown',()=>designCursor.classList.add('is-down'),{passive:true});
window.addEventListener('pointerup',()=>designCursor.classList.remove('is-down'),{passive:true});
