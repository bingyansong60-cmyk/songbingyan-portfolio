/* Editorial case layouts: the user's presentation guides paired with real product UI. */
(() => {
  'use strict';
  const plans=window.PortfolioStoryPlans||{},assets=window.PortfolioStoryAssets||{};
  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const markers=['01','02','03','04','05','06'];
  function contentCards(items,style=''){return `<div class="story-cards ${style}">${items.map((item,i)=>{const split=item.indexOf('：');return `<article><span class="story-card-number">${markers[i]||String(i+1).padStart(2,'0')}</span>${split>=0?`<h4>${escape(item.slice(0,split))}</h4><p>${escape(item.slice(split+1))}</p>`:`<p>${escape(item)}</p>`}</article>`;}).join('')}</div>`;}
  function flow(items,loop=false){return `<ol class="story-flow ${loop?'is-loop':''}" aria-label="任务流程">${items.map((label,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><strong>${escape(label)}</strong></li>`).join('')}</ol>`;}
  function hierarchy(title,groups){return `<div class="story-architecture"><div class="story-architecture-root">${escape(title)}</div><div class="story-architecture-branches">${groups.map(([label,detail])=>`<article><h4>${escape(label)}</h4><p>${escape(detail)}</p></article>`).join('')}</div></div>`;}
  function bullets(items){return `<ul class="story-notes">${items.map((label,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${escape(label)}</p></li>`).join('')}</ul>`;}
  function render(p,helpers){
    const guide=plans[p.id];if(!guide)return null;
    const images=assets[p.id]||{};
    const shot=(key,label,wide=false)=>images[key]?`<div class="story-shot ${p.id==='hsh-life'&&key==='home'?'story-home-crop':''}" data-story-slot="${key}">${helpers.image({src:images[key],label},wide)}</div>`:'';
    const phoneGroup=(keys)=>`<div class="story-phone-group">${keys.filter(([key])=>images[key]).map(([key,label])=>shot(key,label)).join('')}</div>`;
    const role=`<details class="story-role"><summary>我的负责范围</summary><p>${escape(p.scope||'UI 设计')}</p></details>`;
    const heroKeys=p.id==='hsh-life'?[['home','恒生活首页'],['mall','生活商城'],['ai','恒生活内嵌 AI 服务']]:[['dashboard','经营看板'],['devices','设备管理'],['restockQuick','快捷补货']];
    const heroVisual=p.id==='hzy-work'?`<div class="story-hero-visual story-desktop-hero">${shot('home','智易 Work · 桌面工作台',true)}</div>`:`<div class="story-hero-visual">${phoneGroup(heroKeys)}</div>`;
    const facts=[['项目周期',p.date],['平台',p.platform],['我的角色',p.role||'UI 设计'],['团队协作',p.team]].filter(([,v])=>v);
    const overview=`<div class="story-intro"><div class="case-meta"><span class="case-status">${escape(p.status||'项目设计')}</span><span>${escape(p.sourceProjectType||p.category)}</span></div><h2 class="case-title" id="case-title">${escape(p.title)}</h2><p class="story-headline">${escape(guide.heroHeadline)}</p><p class="story-summary">${escape(guide.heroSummary)}</p><div class="story-focus-tags">${guide.narrativeFocus.map(t=>`<span>${escape(t)}</span>`).join('')}</div>${heroVisual}<dl class="story-project-facts">${facts.map(([key,value])=>`<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl>${role}</div>`;
    const visualFor=section=>{
      switch(section.id){
        case 'work-context':return hierarchy('AI 办公工作台',[['基础导航','对话 · 智能体 · 素材 · 录音'],['上下文','历史记录 · 文件与素材'],['当前任务','输入需求 · 执行过程 · 结果操作']]);
        case 'work-challenges':return contentCards(section.content,'four-columns');
        case 'work-ppt':return `${flow(section.flow)}<div class="story-desktop-sequence">${shot('pptOutline','内容结构 · 生成与编辑大纲',true)}${shot('pptStyle','视觉选择 · PPT 风格',true)}</div>${shot('ppt','成果交付 · PPT 预览与后续操作',true)}${bullets(section.content)}`;
        case 'work-ai-tasks':return `<div class="story-task-modes"><article><small>DATA ANALYSIS</small><h4>数据分析</h4><p>文件上传 → 生成反馈 → 结果预览</p></article><article><small>IMAGE GENERATION</small><h4>AI 生图</h4><p>描述需求 → 选择比例 → 查看结果</p></article><article><small>WRITING</small><h4>文案创作</h4><p>选择任务 → 组织输入 → 生成内容</p></article></div>${images.dataAnalysis?shot('dataAnalysis','数据分析任务',true):''}${images.imageGeneration?shot('imageGeneration','AI 生图任务',true):''}`;
        case 'work-assets':return `${flow(section.flow,true)}${shot('materials','我的素材 · 文件组织与内容管理',true)}`;
        case 'work-system':return `${contentCards(section.content)}<div class="story-desktop-platforms"><span>macOS</span><span>统一的内容框架与组件规则</span><span>Windows</span></div>`;
        case 'work-delivery':return `<div class="story-delivery"><span class="story-release">${escape(p.status)}</span><div>${bullets(section.content)}</div></div>`;
        case 'life-context':return hierarchy('恒生活 · 数字生活平台',[['线下服务','智能货柜 · 共享充电'],['线上消费','生活商城 · 特价好物'],['AI 服务','日常问答 · 智能助手'],['用户权益','任务 · 会员与奖励']]);
        case 'life-strategy':return contentCards(section.content,'four-columns');
        case 'life-home':return `<div class="story-spotlight">${shot('home','恒生活首页 · 导航与业务入口')}<div class="story-spotlight-copy"><span class="story-small-label">HOMEPAGE</span><h4>从入口到内容，<br>让层级清楚可见。</h4>${bullets(['以底部导航承接稳定的产品结构。','将服务入口与内容推荐分层组织。','通过卡片、标题和留白区分营销信息。'])}</div></div>`;
        case 'life-services':return `<div class="story-service-grid"><article><small>附近货柜</small><h4>找到设备，进入服务</h4><p>围绕设备与位置组织信息，连接线下服务入口。</p></article><article><small>附近电站</small><h4>理解信息，识别状态</h4><p>让充电服务与设备信息保持清楚的阅读层级。</p></article><article><small>特价好物</small><h4>发现商品，继续浏览</h4><p>保留商品内容特点，使用一致的卡片与操作规则。</p></article></div>`;
        case 'life-mall':return `<div class="story-spotlight is-reversed"><div class="story-spotlight-copy"><span class="story-small-label">COMMERCE</span><h4>围绕商品，<br>建立浏览节奏。</h4>${bullets(['优先呈现商品图片、价格与购买信息。','活动标签提供辅助信息，避免抢占主要内容。','通过共用卡片规则保持浏览体验的一致性。'])}</div>${shot('mall','生活商城 · 商品与运营内容')}</div>`;
        case 'life-ai':return `<div class="story-ai-connection"><div class="story-connection-label"><span>恒生活原生业务</span><b aria-hidden="true">↔</b><span>定制 AI 服务</span></div>${shot('ai','恒生活内嵌 AI · 对话与内容服务')}${bullets(section.content)}</div>`;
        case 'life-engagement':return `<div class="story-spotlight">${shot('tasks','任务中心 · 目标与奖励信息')}<div class="story-spotlight-copy"><span class="story-small-label">ENGAGEMENT</span><h4>任务是什么，<br>下一步做什么。</h4>${bullets(['区分任务目标、进度与权益说明。','让操作入口与完成反馈形成连续关系。','保持运营信息与原生业务的视觉一致性。'])}</div></div>`;
        case 'life-system':return `${contentCards(['视觉层级：通过颜色、字体与间距组织多种业务信息。','共用组件：维护卡片与交互规则，减少跨模块的不一致。','持续落地：与产品、研发协作，随业务迭代完善界面。'])}${images.system?shot('system','恒生活 · 视觉与组件规范',true):''}`;
        case 'life-reflection':return `<div class="story-delivery"><span class="story-release">${escape(p.status)}</span>${bullets(section.content)}</div>`;
        case 'ezvend-context':return hierarchy('EZvend · 移动运营工作台',[['经营分析','看板与数据概览'],['设备与商品','设备状态 · 商品信息'],['交易与售后','订单 · 异常处理'],['补货与配置','库存 · 补货 · 运营设置']]);
        case 'ezvend-strategy':return contentCards(section.content,'four-columns');
        case 'ezvend-dashboard':return `<div class="story-spotlight">${shot('dashboard','Business Data · 经营数据看板')}<div class="story-spotlight-copy"><span class="story-small-label">DASHBOARD</span><h4>先看经营情况，<br>再进入具体任务。</h4>${bullets(['Business Data 提供经营概览。','Quick Entry 组织高频业务入口。','Quick Actions 将信息与下一步操作连接。'])}</div></div>`;
        case 'ezvend-devices':return `<div class="story-spotlight is-reversed"><div class="story-spotlight-copy"><span class="story-small-label">DEVICE MANAGEMENT</span><h4>设备与状态，<br>沿同一层级阅读。</h4>${bullets(section.content)}</div>${shot('devices','设备列表 · 分类与状态筛选')}</div>`;
        case 'ezvend-restock':return `${flow(section.flow)}<div class="story-mode-comparison"><article><span class="story-small-label">QUICK RESTOCK</span><h4>快捷补货</h4><p>面向批量处理，简化重复操作。</p>${shot('restockQuick','快捷补货 · 商品与数量操作')}</article><article><span class="story-small-label">DETAILED RESTOCK</span><h4>精细化补货</h4><p>逐层核对商品与数量，明确操作对象。</p>${shot('restockDetailed','精细化补货 · 库存核对与调整')}</article></div>${bullets(section.content)}`;
        case 'ezvend-orders':return `<div class="story-order-pair">${phoneGroup([['orders','订单列表 · 业务状态'],['orderException','异常订单 · 详情与处理']])}</div>${bullets(section.content)}`;
        case 'ezvend-products':return `<div class="story-spotlight">${shot('products','商品云库 · 商品信息与管理')}<div class="story-spotlight-copy"><span class="story-small-label">PRODUCT MANAGEMENT</span><h4>管理商品，<br>也连接后续运营。</h4>${bullets(['商品信息通过统一结构组织。','将商品与设备、订单及补货任务连接。','用清楚的反馈表达管理状态。'])}</div></div>`;
        case 'ezvend-system':return `${contentCards(section.content)}<div class="story-language-example"><small>INTERNATIONAL EXPERIENCE</small><div><span>Business Data</span><span>Quick Entry</span><span>Quick Actions</span></div><p>用统一的信息结构、组件与状态反馈，承接不同的运营任务。</p></div>`;
        case 'ezvend-reflection':return `<div class="story-delivery"><span class="story-release">${escape(p.status)}</span>${bullets(section.content)}</div>`;
        default:return bullets(section.content||[]);
      }
    };
    const sections=guide.sections.map((s,i)=>[s.id,s.navTitle,`<div class="story-section-head"><span class="story-section-number">${String(i+1).padStart(2,'0')} / ${escape(s.navTitle)}</span><h3>${escape(s.title)}</h3><p>${escape(s.summary)}</p></div><div class="story-section-body">${visualFor(s)}</div>`]);
    return [['overview','项目概览',overview],...sections];
  }
  window.PortfolioStoryCases={render,has:id=>Boolean(plans[id])};
})();
