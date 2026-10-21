(() => {
 let wechatDialog;
 function openWechat(){
  if(!wechatDialog){
   wechatDialog=document.createElement('dialog');wechatDialog.className='wechat-contact-dialog';wechatDialog.setAttribute('aria-labelledby','wechat-contact-title');
   wechatDialog.innerHTML='<button class="wechat-close" aria-label="关闭微信二维码">×</button><h2 id="wechat-contact-title">添加我的微信</h2><p>欢迎沟通招聘与面试，<strong>请注明来意。</strong></p><img src="assets/wechat-contact.jpg" alt="我的微信好友二维码，请使用微信扫码添加" width="888" height="1131"><span class="wechat-scan-hint">使用微信扫一扫，添加好友</span>';
   document.body.append(wechatDialog);
   wechatDialog.querySelector('.wechat-close').onclick=()=>wechatDialog.close();
   wechatDialog.addEventListener('click',e=>{if(e.target===wechatDialog)wechatDialog.close()});
  }
  wechatDialog.showModal();
 }
 document.addEventListener('portfolio:wechat',openWechat);
 document.querySelectorAll('[data-platform-profile]').forEach(link=>{
  if(link.dataset.platformProfile==='微信公众号'){
   link.removeAttribute('target');link.removeAttribute('href');link.setAttribute('role','button');link.tabIndex=0;link.setAttribute('aria-label','添加我的微信');link.setAttribute('aria-haspopup','dialog');link.title='添加微信，请注明来意';
   link.addEventListener('click',e=>{e.preventDefault();openWechat()});link.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openWechat()}});return;
  }
  const social=window.portfolio.social.find(s=>s.name===link.dataset.platformProfile);
  if(social?.url){try{const url=new URL(social.url);if(['https:','http:'].includes(url.protocol)){link.href=url.href;link.target='_blank';link.rel='noopener noreferrer'}}catch{}}
 });

 let emailDialog;
 document.querySelectorAll('.header-contact').forEach(link=>{
  link.removeAttribute('href');link.setAttribute('role','button');link.tabIndex=0;link.setAttribute('aria-label','查看邮箱');link.title='查看邮箱';link.setAttribute('aria-haspopup','dialog');
  const openEmail=()=>{
   if(!emailDialog){
    emailDialog=document.createElement('dialog');emailDialog.className='email-contact-dialog';emailDialog.setAttribute('aria-labelledby','email-contact-title');
    emailDialog.innerHTML='<button class="wechat-close" aria-label="关闭邮箱">×</button><h2 id="email-contact-title">邮件联系</h2><a class="email-address" href="mailto:3107177196@qq.com">3107177196@qq.com</a><div class="email-actions"><button class="primary" data-copy-email>复制邮箱</button><a class="email-send" href="mailto:3107177196@qq.com">发送邮件 ↗</a></div><p class="email-copy-status" role="status"></p>';
    document.body.append(emailDialog);emailDialog.querySelector('.wechat-close').onclick=()=>emailDialog.close();emailDialog.addEventListener('click',e=>{if(e.target===emailDialog)emailDialog.close()});
    emailDialog.querySelector('[data-copy-email]').onclick=async()=>{const status=emailDialog.querySelector('.email-copy-status');try{await navigator.clipboard.writeText('3107177196@qq.com');status.textContent='邮箱已复制'}catch{status.textContent='请选中上方邮箱地址进行复制'}};
   }
   emailDialog.querySelector('.email-copy-status').textContent='';emailDialog.showModal();
  };
  link.addEventListener('click',e=>{e.preventDefault();openEmail()});link.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openEmail()}});
 });
})();
