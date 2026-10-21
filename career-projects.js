(() => {
 const data=window.portfolio;
 const career=document.querySelector('#career-list');
 if(career){
  const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const jobs=data.experience?.length?data.experience:[{company:'公司名称待补充',role:'职位待补充',period:'任职时间待补充',type:'工作类型待补充',description:'填写真实的工作职责、负责项目与个人贡献。此卡片仅为样式占位。'}];
  career.innerHTML=jobs.map(job=>`<details class="career-item journey-card"><summary><span class="career-monogram">${job.logo?`<img src="${escape(job.logo)}" alt="${escape(job.company)}标识">`:data.experience?.length?escape(job.company).slice(0,1):'✳'}</span><span class="career-role"><strong>${escape(job.company)}</strong><small><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6V4h6v2M4 8h16v12H4zM4 12h16M10 12v3h4v-3"/></svg>${escape(job.role)}</small></span><span class="career-meta"><span class="career-period">${escape(job.period)}</span>${job.type?`<span class="career-type">${escape(job.type)}</span>`:''}</span></summary><div class="career-detail">${escape(job.description).replace(/\n/g,'<br>')}</div></details>`).join('');

 }
 const dock=document.querySelector('#project-dock');
 if(dock){const marks={mobile:'拾',dashboard:'序',web:'物',finance:'数',system:'F',travel:'山'};for(const project of data.projects.filter(p=>p.featured)){const link=document.createElement('a');link.className='dock-project';link.href='all-works.html?project='+encodeURIComponent(project.id);link.setAttribute('aria-label','查看项目：'+project.title);const icon=document.createElement('span');icon.className='dock-icon '+project.theme;icon.textContent=project.mark||marks[project.visual]||project.title.slice(0,1);if(project.icon){const img=document.createElement('img');img.src=project.icon;img.alt='';icon.replaceChildren(img)}const label=document.createElement('span');label.className='dock-label';label.textContent=project.title;link.append(icon);link.title=project.title;dock.append(link)}
 const track=document.createElement('div');track.className='dock-marquee-track';const group=document.createElement('div');group.className='dock-marquee-group';while(dock.firstChild)group.append(dock.firstChild);track.append(group);const repeat=group.cloneNode(true);repeat.setAttribute('aria-hidden','true');repeat.querySelectorAll('a').forEach(a=>a.tabIndex=-1);track.append(repeat);dock.append(track);dock.classList.add('dock-marquee');
}
})();
