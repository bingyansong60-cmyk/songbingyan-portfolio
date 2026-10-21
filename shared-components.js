// 全站共用模块：在这里修改一次，所有页面自动同步。
(()=>{
const templates={
  "header": "<header class=\"site-header\"><a class=\"brand\" href=\"index.html\" aria-label=\"宋冰艳首页\"><span class=\"brand-mark\">✳</span><span data-name>宋冰艳</span></a><nav aria-label=\"主导航\"><a href=\"index.html\">首页</a><a href=\"all-works.html\">项目</a><a href=\"downloads.html\">简历</a><a href=\"about.html\">关于我</a><a href=\"about.html#contact\">联系我</a></nav><div class=\"header-platforms figma-header-icons\" aria-label=\"社交平台\"><a href=\"code.html\" class=\"figma-social github-link\" aria-label=\"GitHub 与代码项目\" title=\"代码项目\"><img src=\"assets/header-icons/github.svg\" alt=\"\" width=\"36\" height=\"36\"></a><a href=\"https://space.bilibili.com/1215267068?spm_id_from=333.1007.0.0\" class=\"figma-social\" aria-label=\"哔哩哔哩\" title=\"哔哩哔哩\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"assets/header-icons/bilibili.svg\" alt=\"\" width=\"51\" height=\"36\"></a><a href=\"https://www.xiaohongshu.com/user/profile/6170d20f000000000201dafa?m_source=pinpai\" class=\"figma-social\" aria-label=\"小红书\" title=\"小红书\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"assets/header-icons/xiaohongshu.svg\" alt=\"\" width=\"51\" height=\"36\"></a></div></header>",
  "contact": "<section id=\"contact\" class=\"contact section\"><div class=\"contact-main\"><h2>期待加入团队，一起做好设计</h2><div class=\"contact-actions\"><button id=\"copy-wechat-button\" type=\"button\" class=\"primary\">复制微信</button><a id=\"call-phone-button\" class=\"primary\" href=\"tel:15701242481\">打电话</a></div><p class=\"contact-status sr-only\" role=\"status\" aria-live=\"polite\"></p></div></section>",
  "ai": "<section id=\"ai\" class=\"section ai-section learning-section\"><div class=\"learning-topline\"><h2>学习专栏</h2></div><div class=\"learning-panel\"><div class=\"ai-heading\"><h3>我如何运用 AI</h3><p>人工智能不可避免。右侧是我尝试以合乎伦理且积极主动的方式运用人工智能的方法。</p></div><div class=\"ai-list\"><article><span class=\"learning-brand learning-brand-pair\" aria-hidden=\"true\"><img src=\"assets/learning-icons/codex-small.png\" alt=\"\" width=\"44\" height=\"44\"><img src=\"assets/learning-icons/chatgpt.png\" alt=\"\" width=\"44\" height=\"44\"></span><div><h3>ChatGPT 做ui界面改版 并生成源文件工作流</h3><p>AI 不是替代设计师，而是帮我们更快完成前期工作。</p></div></article><article><span class=\"learning-brand learning-brand-single\" aria-hidden=\"true\"><img src=\"assets/learning-icons/chatgpt.png\" alt=\"\" width=\"64\" height=\"64\"></span><div><h3>UI 设计师一定要学的 Codex + Figma 工作流</h3><p>Codex 连接 Figma 后不是简单“截图生成代码”，而是可以读取 Figma 里的页面结构、组件、变量、布局信息，再根据你的提示词，帮你做这些事：</p></div></article><article><span class=\"learning-brand learning-brand-single\" aria-hidden=\"true\"><img src=\"assets/learning-icons/gemini.png\" alt=\"\" width=\"64\" height=\"64\"></span><div><h3>Gemini 生成 界面 一键导入 Figma 全流程</h3><p>碰到模糊的需求以及陌生的样式不知道怎么办就用AI生成思路/灵感吧，大大提升效率！</p></div></article><article><span class=\"learning-brand learning-brand-pair\" aria-hidden=\"true\"><img src=\"assets/learning-icons/chatgpt-small.png\" alt=\"\" width=\"44\" height=\"44\"><img src=\"assets/learning-icons/figma.png\" alt=\"\" width=\"44\" height=\"44\"></span><div><h3>ChatGPT＋Figma 制作抽奖页面和中奖弹窗</h3><p>这次用 ChatGPT＋Figma，制作抽奖页面和中奖弹窗，再把页面里的元素动起来。</p></div></article><article><span class=\"learning-brand learning-brand-single\" aria-hidden=\"true\"><img src=\"assets/learning-icons/codex.png\" alt=\"\" width=\"64\" height=\"64\"></span><div><h3>Codex 到 Figma 生成源文件的完整工作流</h3><p>最近在做 AI App 和web 用 chatGPT Codex非常多</p></div></article><article><span class=\"learning-brand learning-brand-single\" aria-hidden=\"true\"><img src=\"assets/learning-icons/chatgpt.png\" alt=\"\" width=\"64\" height=\"64\"></span><div><h3>ChatGPT 做ui界面改版 并生成源文件工作流</h3><p>📝 最近用 ChatGPT 做了一套小程序 ui 改版，流程还挺实用，分享给大家参考</p></div></article></div></div></section>",
  "tools": "<section class=\"tools-section section\" aria-labelledby=\"tools-title\"><h2 id=\"tools-title\">开发的小工具</h2><div class=\"tools-list\"><a class=\"tool-row\" href=\"code.html#portfolio\"><span class=\"tool-symbol\" aria-hidden=\"true\">↗</span><span class=\"tool-copy\"><strong>作品集网站</strong><small>网站 · AI 辅助实践</small></span><span>查看介绍 ↗</span></a><a class=\"tool-row\" href=\"code.html#fonts\"><span class=\"tool-symbol\" aria-hidden=\"true\">Aa</span><span class=\"tool-copy\"><strong>字体网站</strong><small>设计资源工具</small></span><span>查看介绍 ↗</span></a><a class=\"tool-row\" href=\"code.html#plugins\"><span class=\"tool-symbol\" aria-hidden=\"true\">⌘</span><span class=\"tool-copy\"><strong>Figma 插件开发</strong><small>设计工具</small></span><span>查看介绍 ↗</span></a></div></section>",
  "project-overview": "<section class=\"project-overview section\" aria-labelledby=\"project-overview-title\"><div class=\"section-heading\"><h2 id=\"project-overview-title\">项目专栏</h2><a href=\"all-works.html\" class=\"text-link\">项目全览 ↗</a></div><a class=\"project-overview-card\" href=\"all-works.html\"><span class=\"overview-copy\"><small>SELECTED PROJECTS</small><strong>从 AI 产品，<br>到真实业务场景。</strong><span>APP、桌面端、网站与更多设计实践</span><span class=\"overview-cta\">浏览全部 <b data-total-count>36</b> 个作品 <span aria-hidden=\"true\">↗</span></span></span><span class=\"overview-previews\" aria-hidden=\"true\"><img src=\"assets/hengzhiyi/v3.png\" alt=\"\" width=\"140\" height=\"270\"><img src=\"assets/projects/web/work-home.webp\" alt=\"\" width=\"320\" height=\"230\"></span></a></section>"
};
const data=window.portfolio;
document.querySelectorAll('[data-launched-project-count]').forEach(el=>el.textContent=data.launchedProjectCount);
const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const footerMessage='感谢你的访问，保持好奇，认真设计。';
function footerMarkup(detail=false){
 return '<div class="'+(detail?'case-footer-message':'reference-footer-note')+'">'+footerMessage+'</div><p class="'+(detail?'case-footer-copyright':'reference-footer-copyright')+'">© 2026 · UI 设计师作品集</p>';
}
document.querySelectorAll('[data-shared-module]').forEach(slot=>{const key=slot.dataset.sharedModule;slot.outerHTML=templates[key];});
const current=location.pathname.split('/').pop()||'index.html';
const active=current==='home-alternate.html'?'index.html':current;
document.querySelectorAll('.site-header nav a').forEach(a=>{a.removeAttribute('aria-current');if(a.getAttribute('href')===active)a.setAttribute('aria-current','page');});
document.querySelectorAll('.site-header .figma-social').forEach(link=>{const label=link.getAttribute('aria-label');const social=data.social.find(item=>item.name===label);if(social?.url)link.href=social.url;if(link.classList.contains('github-link')&&data.githubUrl)link.href=data.githubUrl;});
const footer=document.querySelector('body>footer');if(footer){footer.className='reference-footer';footer.innerHTML=footerMarkup();}
document.querySelectorAll('.career-heading h2').forEach(h=>h.textContent='工作历程');
document.querySelectorAll('#contact-hint,.end-downloads').forEach(n=>n.remove());
document.addEventListener('click',event=>{if(event.target.closest('[data-shared-wechat]')){event.preventDefault();document.dispatchEvent(new Event('portfolio:wechat'));}});
document.querySelectorAll('[data-total-count]').forEach(el=>el.textContent=data.projects.length);
const phoneLink=document.querySelector('#call-phone-button');
if(phoneLink){phoneLink.href='tel:'+data.phone;phoneLink.setAttribute('aria-label','打电话 '+data.phone);phoneLink.title=data.phone;}
const copyWechat=document.querySelector('#copy-wechat-button');
if(copyWechat)copyWechat.addEventListener('click',async()=>{
 const status=document.querySelector('.contact-status');
 try{
  if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(data.wechatId);
  else throw new Error('Clipboard unavailable');
  status.textContent='微信号已复制：'+data.wechatId;
  copyWechat.textContent='已复制微信';
  clearTimeout(copyWechat.resetTimer);
  copyWechat.resetTimer=setTimeout(()=>{copyWechat.textContent='复制微信';},2400);
 }catch{
  const field=document.createElement('textarea');field.value=data.wechatId;field.style.cssText='position:fixed;left:-9999px';document.body.append(field);field.select();
  const copied=document.execCommand('copy');field.remove();
  status.textContent=copied?'微信号已复制：'+data.wechatId:'微信号：'+data.wechatId+'，请长按或选中复制';
  if(!copied)status.classList.remove('sr-only');
  copyWechat.textContent=copied?'已复制微信':'复制微信';
 }
});
window.PortfolioUI={footerMarkup,footerMessage};
})();
