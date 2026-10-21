// 全站共用模块：在这里修改一次，所有页面自动同步。
(()=>{
const templates={
  "header": "<header class=\"site-header\"><a class=\"brand\" href=\"index.html\" aria-label=\"宋冰艳首页\"><span class=\"brand-mark\">✳</span><span data-name>宋冰艳</span></a><nav aria-label=\"主导航\"><a href=\"index.html\">首页</a><a href=\"all-works.html\">项目</a><a href=\"downloads.html\">简历</a><a href=\"about.html\">关于我</a><a href=\"about.html#contact\">联系我</a></nav><div class=\"header-platforms figma-header-icons\" aria-label=\"社交平台\"><a href=\"code.html\" class=\"figma-social github-link\" aria-label=\"GitHub 与代码项目\" title=\"代码项目\"><img src=\"assets/header-icons/github.svg\" alt=\"\" width=\"36\" height=\"36\"></a><a href=\"https://space.bilibili.com/1215267068?spm_id_from=333.1007.0.0\" class=\"figma-social\" aria-label=\"哔哩哔哩\" title=\"哔哩哔哩\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"assets/header-icons/bilibili.svg\" alt=\"\" width=\"51\" height=\"36\"></a><a href=\"https://www.xiaohongshu.com/user/profile/6170d20f000000000201dafa?m_source=pinpai\" class=\"figma-social\" aria-label=\"小红书\" title=\"小红书\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"assets/header-icons/xiaohongshu.svg\" alt=\"\" width=\"51\" height=\"36\"></a><span class=\"figma-theme-divider\"><button class=\"theme-toggle\" type=\"button\" aria-label=\"切换深色模式\" aria-pressed=\"false\" title=\"切换主题\"><img src=\"assets/header-icons/sun.svg\" alt=\"\" width=\"16\" height=\"16\"></button></span></div></header>",
  "contact": "<section id=\"contact\" class=\"contact section\"><div class=\"contact-main\"><h2>期待加入团队，一起做好设计</h2><div><p>欢迎 HR 与设计负责人联系，沟通岗位与面试。</p><button id=\"contact-button\" class=\"primary\">联系面试 <span>↗</span></button></div></div></section>",
  "ai": "<section id=\"ai\" class=\"section ai-section\"><div class=\"ai-heading\"><h2>我如何运用 AI</h2><p>让工具参与探索，<br>让设计判断留在自己手中。</p><a href=\"learning.html\" class=\"text-link\">查看学习记录 ↗</a></div><div class=\"ai-list\"><article><span class=\"ai-icon\">↗</span><div><span class=\"ai-state\">正在实践</span><h3>把作品集，从设计带到可交互页面</h3><p>借助 AI 辅助实现页面，通过截图反馈持续调整排版、配色与交互，让想法变成可浏览的原型。</p><a href=\"index.html\">当前作品集就是一次实践 ↗</a></div></article><article><span class=\"ai-icon\">✳</span><div><span class=\"ai-state\">应用方向 · 待补充真实案例</span><h3>拓展思路，比较不同设计方向</h3><p>围绕需求梳理、方案讨论与文案探索，展示问题、AI 的辅助过程，以及最终的设计取舍。</p></div></article><article><span class=\"ai-icon\">◈</span><div><span class=\"ai-state\">应用方向 · 待补充真实案例</span><h3>探索视觉素材与界面表达</h3><p>用真实练习展示从灵感到素材的过程，说明如何筛选、调整并保持视觉一致性。</p></div></article><article><span class=\"ai-icon\">≋</span><div><span class=\"ai-state\">应用方向 · 待补充真实案例</span><h3>整理信息，沉淀设计学习</h3><p>记录如何辅助整理资料、提炼重点，以及如何核对来源并形成自己的理解。</p></div></article></div></section>"
};
const data=window.portfolio;
const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const footerMessage='感谢你的访问，保持好奇，认真设计。';
function footerMarkup(detail=false){
 const cls=detail?'case-footer':'reference-footer';
 const row=detail?'case-footer-links':'reference-footer-links';
 const social=data.social.filter(s=>s.url&&['小红书','哔哩哔哩'].includes(s.name)).map(s=>'<a href="'+escape(s.url)+'" target="_blank" rel="noopener noreferrer">'+escape(s.name)+'</a>').join('');
 return '<div class="'+row+'"><a class="footer-email" href="mailto:'+escape(data.email)+'">✉　'+escape(data.email)+'</a><a href="downloads.html">简历 PDF</a>'+social+'<a href="#" data-shared-wechat>微信</a></div><div class="'+(detail?'case-footer-message':'reference-footer-note')+'">'+footerMessage+'</div><div class="'+(detail?'case-footer-name':'reference-footer-name')+'">'+escape(data.name)+'</div><p class="'+(detail?'case-footer-copyright':'reference-footer-copyright')+'">© 2026 · UI 设计师作品集</p>';
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
window.PortfolioUI={footerMarkup,footerMessage};
})();
