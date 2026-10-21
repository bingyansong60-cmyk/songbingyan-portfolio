(() => {
 const data=window.portfolio;
 const career=document.querySelector('#career-list');
 if(career){
  const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const jobs=data.experience?.length?data.experience:[{company:'公司名称待补充',role:'职位待补充',period:'任职时间待补充',type:'工作类型待补充',description:'填写真实的工作职责、负责项目与个人贡献。此卡片仅为样式占位。'}];
  career.innerHTML=jobs.map(job=>`<details class="career-item journey-card"><summary><span class="career-monogram">${job.logo?`<img src="${escape(job.logo)}" alt="${escape(job.company)}标识">`:data.experience?.length?escape(job.company).slice(0,1):'✳'}</span><span class="career-role"><strong>${escape(job.company)}</strong><small><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6V4h6v2M4 8h16v12H4zM4 12h16M10 12v3h4v-3"/></svg>${escape(job.role)}</small></span><span class="career-meta"><span class="career-period">${escape(job.period)}</span>${job.type?`<span class="career-type">${escape(job.type)}</span>`:''}</span></summary><div class="career-detail">${escape(job.description).replace(/\n/g,'<br>')}</div></details>`).join('');

 }
})();
