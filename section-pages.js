(() => {
 document.querySelectorAll('[data-name]').forEach(el=>el.textContent=window.portfolio.name);
 const note=document.querySelector('.pdf-resource-note');
 if(note&&(window.portfolio.resumeUrl||window.portfolio.compactPortfolioUrl))note.textContent='选择需要的资料下载，未上传的文件会单独标注。';
})();
