(() => {
 const data=window.portfolio;
 document.querySelectorAll('[data-nav-total]').forEach(el=>el.textContent=String(data.projects.length).padStart(2,'0'));
 const configs={resume:{url:data.resumeUrl,label:'简历'},portfolio:{url:data.compactPortfolioUrl,label:'精简版作品集'}};
 document.querySelectorAll('[data-download]').forEach(link=>{
  const config=configs[link.dataset.download];
  if(config.url){link.href=config.url;link.querySelector('small').textContent='下载文件';}
  else {link.setAttribute('role','button');link.tabIndex=0;link.setAttribute('aria-label','下载'+config.label+'，文件待上传');const notify=()=>{const toast=document.querySelector('#toast');toast.textContent=config.label+'文件尚未上传，添加真实文件后即可下载。';toast.classList.add('visible');clearTimeout(window.downloadToast);window.downloadToast=setTimeout(()=>toast.classList.remove('visible'),3500)};link.addEventListener('click',notify);link.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();notify()}})}
 });
})();
