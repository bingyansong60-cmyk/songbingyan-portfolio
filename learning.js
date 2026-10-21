const journal=window.portfolio;
const platforms=['全部内容',...journal.social.map(s=>s.name)];
let platform=new URLSearchParams(location.search).get('platform')||'全部内容';
if(!platforms.includes(platform))platform='全部内容';
let topic='全部',limit=9;
const topics=['全部',...new Set(journal.notes.map(n=>n.topic))];
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteDialog=document.querySelector('#note-dialog');
function cover(note){return `<div class="note-cover ${escapeText(note.style)}">${note.cover?`<img src="${escapeText(note.cover)}" alt="${escapeText(note.title)}封面">`:`<span class="note-kicker">${escapeText(note.kicker)}</span><strong>${escapeText(note.headline).replace(/\n/g,'<br>')}</strong><div class="note-art" aria-hidden="true"><i></i><i></i><i></i><b>Aa</b></div><span class="note-signature">宋冰艳 / DESIGN NOTES</span>`}${note.example?'<span class="note-example">封面模板</span>':''}${note.platform==='哔哩哔哩'?'<span class="note-play" aria-hidden="true">▶</span>':''}</div>`}
function renderJournal(){
 document.querySelector('#platform-tabs').innerHTML=platforms.map(name=>`<button data-platform="${name}" class="${platform===name?'active':''}" aria-pressed="${platform===name}">${name}<small>${journal.notes.filter(n=>name==='全部内容'||n.platform===name).length}</small></button>`).join('');
 document.querySelector('#topic-tabs').innerHTML=topics.map(name=>`<button data-topic="${name}" class="${topic===name?'active':''}" aria-pressed="${topic===name}">${name}</button>`).join('');
 const selected=journal.notes.filter(n=>(platform==='全部内容'||n.platform===platform)&&(topic==='全部'||n.topic===topic));
 document.querySelector('#notes-status').textContent=`${platform} / ${topic==='全部'?'全部主题':topic} · ${selected.length} 篇内容`;
 document.querySelector('#notes-grid').innerHTML=selected.slice(0,limit).map(note=>`<article class="note-card bento-note"><div class="bento-heading"><span>${note.topic}${note.example?' · 示例':''}</span><h2><button data-note="${note.id}">${escapeText(note.title)} <span>↗</span></button></h2><small>${note.platform}</small></div><button class="bento-cover-button" data-note="${note.id}" aria-label="查看${escapeText(note.title)}">${cover(note)}</button></article>`).join('')||'<div class="empty-state"><h3>这个主题的内容还在整理中</h3><p>试试其他主题，或者查看全部内容。</p><button data-reset>查看全部内容 ↗</button></div>';
 document.querySelector('#more-notes').hidden=selected.length<=limit;
 const social=journal.social.find(s=>s.name===platform);
 document.querySelector('#platform-profile').innerHTML=social?`<span>${social.name==='哔哩哔哩'?'视频与学习记录':'文章与学习笔记'} · ${escapeText(social.handle)}</span><button data-profile>${social.qr?'查看公众号二维码':social.url?'访问平台主页 ↗':'平台主页待添加'}</button>`:'<span>跨平台整理，让每一份学习都有归处。</span><span>文章 / 视频 / 笔记</span>';
}
function reset(){platform='全部内容';topic='全部';limit=9;history.replaceState(null,'',location.pathname);renderJournal()}
function openSafe(url){try{const parsed=new URL(url);if(!['http:','https:'].includes(parsed.protocol))throw Error();window.open(parsed.href,'_blank','noopener,noreferrer')}catch{toast('链接尚未配置为有效的网页地址。')}}
function toast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('visible');clearTimeout(window.noteToast);window.noteToast=setTimeout(()=>el.classList.remove('visible'),3000)}
document.addEventListener('click',e=>{
 const p=e.target.closest('[data-platform]'),t=e.target.closest('[data-topic]'),n=e.target.closest('[data-note]');
 if(p){platform=p.dataset.platform;topic='全部';limit=9;history.replaceState(null,'',location.pathname+(platform==='全部内容'?'':'?platform='+encodeURIComponent(platform)));renderJournal();document.querySelectorAll('[data-platform]').forEach(b=>{if(b.dataset.platform===platform)b.focus()})}
 if(t){topic=t.dataset.topic;limit=9;renderJournal();document.querySelectorAll('[data-topic]').forEach(b=>{if(b.dataset.topic===topic)b.focus()})}
 if(e.target.closest('[data-reset]'))reset();
 if(n){const note=journal.notes.find(item=>item.id===n.dataset.note);const content=document.querySelector('#note-content');content.innerHTML=cover(note)+`<p class="eyebrow">${note.platform} / ${note.topic}${note.example?' / 内容模板':''}</p><h2>${escapeText(note.title)}</h2>`;const body=document.createElement('div');body.className='note-body';body.textContent=note.body||(note.example?'这是可替换的学习内容模板，尚未填入真实文章。\n\n01 / 学习起点\n记录你关注的问题、阅读的材料或练习目标。\n\n02 / 核心理解\n整理学到的方法，并用自己的语言解释。\n\n03 / 练习与应用\n补充设计练习截图，以及你如何使用这些方法。\n\n04 / 思考与复盘\n写下收获、疑问与下一步计划。':'这篇内容正在整理中。');content.append(body);if(note.url){const button=document.createElement('button');button.className='primary';button.textContent=note.platform==='哔哩哔哩'?'观看原视频 ↗':'阅读原文 ↗';button.onclick=()=>openSafe(note.url);content.append(button)}noteDialog.showModal()}
 if(e.target.closest('[data-profile]')){const social=journal.social.find(s=>s.name===platform);if(social.qr){const content=document.querySelector('#note-content');content.replaceChildren();const title=document.createElement('h2');title.textContent=social.name;const image=document.createElement('img');image.src=social.qr;image.alt='微信公众号二维码';image.className='social-qr';content.append(title,image);noteDialog.showModal()}else if(social.url)openSafe(social.url);else toast('平台主页尚未添加，站内学习内容可以直接浏览。')}
});
document.querySelector('#more-notes').onclick=()=>{limit+=9;renderJournal()};
document.querySelector('#notes-reset').onclick=reset;
document.querySelector('.close-dialog').onclick=()=>noteDialog.close();noteDialog.onclick=e=>{if(e.target===noteDialog)noteDialog.close()};
renderJournal();

// 首页文章卡片直达对应笔记。
const linkedNote=new URLSearchParams(location.search).get("note");
if(linkedNote){const entry=journal.notes.find(n=>n.id===linkedNote);if(entry){platform="全部内容";topic="全部";limit=journal.notes.length;renderJournal();document.querySelectorAll("[data-note]").forEach((button)=>{if(button.dataset.note===linkedNote&&!noteDialog.open)button.click()})}}
