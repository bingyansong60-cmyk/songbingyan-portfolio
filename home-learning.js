(() => {
 const grid=document.querySelector('#home-notes');if(!grid)return;
 const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const notes=window.portfolio.notes.slice(0,4);
 grid.innerHTML=notes.map(note=>{let href='learning.html?note='+encodeURIComponent(note.id),external=false;if(note.url){try{const url=new URL(note.url);if(['https:','http:'].includes(url.protocol)){href=url.href;external=true}}catch{}}
 return `<article class="home-note"><a href="${escape(href)}" ${external?'target="_blank" rel="noopener noreferrer"':''} aria-label="阅读${escape(note.title)}"><div class="note-cover ${escape(note.style)}">${note.cover?`<img src="${escape(note.cover)}" alt="${escape(note.title)}封面">`:`<strong>${escape(note.headline).replace(/\n/g,'<br>')}</strong><div class="note-art" aria-hidden="true"><i></i><i></i><i></i><b>Aa</b></div>`}${note.example?'<span class="note-example">封面模板</span>':''}</div><h3>${escape(note.title)} <span>↗</span></h3></a></article>`}).join('');
})();
