(() => {
 const data=window.portfolio;
 document.querySelectorAll('[data-name]').forEach(el=>el.textContent=data.name);
 document.querySelectorAll('[data-nav-total]').forEach(el=>el.textContent=String(data.projects.length).padStart(2,'0'));
 if(document.querySelector('#social-grid'))document.querySelector('#social-grid').innerHTML=data.social.map(s=>`<a class="social-card" href="learning.html?platform=${encodeURIComponent(s.name)}"><span class="social-icon ${s.tone}">${s.mark}</span><span class="social-copy"><strong>${s.name}</strong><small>浏览学习内容</small></span><span class="social-arrow">↗</span></a>`).join('');
 if(document.querySelector('.social-note'))document.querySelector('.social-note').innerHTML='<a href="learning.html">查看全部学习内容 ↗</a>';
 function notify(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('visible');clearTimeout(window.aboutToast);window.aboutToast=setTimeout(()=>t.classList.remove('visible'),3500)}
 document.querySelector('#resume-button').onclick=()=>{if(data.resumeUrl)window.open(data.resumeUrl,'_blank','noopener');else notify('简历尚未添加。')};
 if(data.email&&document.querySelector('#contact-hint'))document.querySelector('#contact-hint').textContent=data.email;
})();
