// 柔和的渐变丝带：不拦截点击，静止后自动消散并停止绘制。
(() => {
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 if(motion.matches||!fine.matches)return;
 const canvas=document.createElement('canvas');canvas.className='cursor-ribbon';canvas.setAttribute('aria-hidden','true');document.body.append(canvas);
 const context=canvas.getContext('2d');if(!context){canvas.remove();return}
 let points=[],frame=0,blockedRects=[],layoutDirty=true;const lifetime=650;
 const contentSelector='header,footer,nav,article,figure,details,form,table,dl,ul,ol,blockquote,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,select,label,img,svg,video,iframe,span,small,strong,em,[role="button"],[data-no-cursor-trail],.design-playground,.about-art,.hero-greeting,.project-montage,.project-info';
 function refreshContentBounds(){
  if(!layoutDirty)return;
  blockedRects=[];
  document.querySelectorAll(contentSelector).forEach(el=>{
   if(el.parentElement?.closest(contentSelector))return;
   for(const rect of el.getClientRects()){
    if(rect.width&&rect.height&&rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth)blockedRects.push({left:rect.left-7,top:rect.top-7,right:rect.right+7,bottom:rect.bottom+7});
   }
  });
  layoutDirty=false;
 }
 function isContent(x,y){return blockedRects.some(r=>x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom)}
 function invalidate(){layoutDirty=true;clear()}
 function clear(){points=[];if(frame)cancelAnimationFrame(frame);frame=0;context.clearRect(0,0,innerWidth,innerHeight)}
 function size(){invalidate();const ratio=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(innerWidth*ratio);canvas.height=Math.round(innerHeight*ratio);context.setTransform(ratio,0,0,ratio,0,0)}
 function draw(time){
  frame=0;context.clearRect(0,0,innerWidth,innerHeight);points=points.filter(p=>time-p.time<lifetime);
  if(points.length>1){
   const first=points[0],last=points[points.length-1];const gradient=context.createLinearGradient(first.x,first.y,last.x+.01,last.y+.01);
   gradient.addColorStop(0,'#d6c7ef');gradient.addColorStop(.33,'#efd1e5');gradient.addColorStop(.67,'#ced8f3');gradient.addColorStop(1,'#c0e5df');
   context.strokeStyle=gradient;context.lineCap='round';context.lineJoin='round';
   for(let layer=0;layer<2;layer++){
    for(let i=1;i<points.length;i++){
     const previous=points[i-1],current=points[i],next=points[i+1]||current;
     const remaining=Math.max(0,1-(time-current.time)/lifetime);const taper=Math.min(1,i/5);
     context.globalAlpha=remaining*taper*(layer===0?.05:.36);context.lineWidth=(layer===0?6:1.8)*remaining*taper+.2;
     context.beginPath();context.moveTo((previous.x+current.x)/2,(previous.y+current.y)/2);context.quadraticCurveTo(current.x,current.y,(current.x+next.x)/2,(current.y+next.y)/2);context.stroke();
    }
   }
   context.globalAlpha=1;
   refreshContentBounds();
   context.globalCompositeOperation='destination-out';
   blockedRects.forEach(r=>context.fillRect(r.left,r.top,r.right-r.left,r.bottom-r.top));
   context.globalCompositeOperation='source-over';
  }
  if(points.length)frame=requestAnimationFrame(draw);
 }
 addEventListener('pointermove',event=>{
  if(event.pointerType!=='mouse'||motion.matches||!fine.matches)return;
  refreshContentBounds();
  if(document.querySelector('dialog[open]')||isContent(event.clientX,event.clientY)){clear();return}
  const now=performance.now(),last=points[points.length-1];if(last&&now-last.time<7)return;
  if(last&&Math.hypot(event.clientX-last.x,event.clientY-last.y)>180)points=[];
  points.push({x:event.clientX,y:event.clientY,time:now});if(points.length>90)points.shift();if(!frame)frame=requestAnimationFrame(draw);
 },{passive:true});
 new MutationObserver(invalidate).observe(document.body,{childList:true,subtree:true});
 new ResizeObserver(invalidate).observe(document.body);
 addEventListener('scroll',invalidate,{passive:true,capture:true});document.addEventListener('load',invalidate,true);document.fonts?.ready.then(invalidate);
 addEventListener('resize',size);addEventListener('blur',clear);document.addEventListener('pointerleave',clear);document.addEventListener('visibilitychange',()=>{if(document.hidden)clear()});motion.addEventListener('change',()=>{if(motion.matches)clear()});fine.addEventListener('change',()=>{if(!fine.matches)clear()});size();
})();
