// 柔和的渐变丝带：不拦截点击，静止后自动消散并停止绘制。
(() => {
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 if(motion.matches||!fine.matches)return;
 const canvas=document.createElement('canvas');canvas.className='cursor-ribbon';canvas.setAttribute('aria-hidden','true');document.body.append(canvas);
 const context=canvas.getContext('2d');if(!context){canvas.remove();return}
 let points=[],frame=0;const lifetime=780;
 function clear(){points=[];if(frame)cancelAnimationFrame(frame);frame=0;context.clearRect(0,0,innerWidth,innerHeight)}
 function size(){clear();const ratio=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(innerWidth*ratio);canvas.height=Math.round(innerHeight*ratio);context.setTransform(ratio,0,0,ratio,0,0)}
 function draw(time){
  frame=0;context.clearRect(0,0,innerWidth,innerHeight);points=points.filter(p=>time-p.time<lifetime);
  if(points.length>1){
   const first=points[0],last=points[points.length-1];const gradient=context.createLinearGradient(first.x,first.y,last.x+.01,last.y+.01);
   gradient.addColorStop(0,'#b598ee');gradient.addColorStop(.33,'#eb9ed2');gradient.addColorStop(.67,'#a8b9f8');gradient.addColorStop(1,'#89d6cf');
   context.strokeStyle=gradient;context.lineCap='round';context.lineJoin='round';
   for(let layer=0;layer<2;layer++){
    for(let i=1;i<points.length;i++){
     const previous=points[i-1],current=points[i],next=points[i+1]||current;
     const remaining=Math.max(0,1-(time-current.time)/lifetime);const taper=Math.min(1,i/5);
     context.globalAlpha=remaining*taper*(layer===0?.12:.77);context.lineWidth=(layer===0?9:2.7)*remaining*taper+.2;
     context.beginPath();context.moveTo((previous.x+current.x)/2,(previous.y+current.y)/2);context.quadraticCurveTo(current.x,current.y,(current.x+next.x)/2,(current.y+next.y)/2);context.stroke();
    }
   }
   context.globalAlpha=1;
  }
  if(points.length)frame=requestAnimationFrame(draw);
 }
 addEventListener('pointermove',event=>{
  if(event.pointerType!=='mouse'||motion.matches||!fine.matches)return;
  const now=performance.now(),last=points[points.length-1];if(last&&now-last.time<7)return;
  if(last&&Math.hypot(event.clientX-last.x,event.clientY-last.y)>180)points=[];
  points.push({x:event.clientX,y:event.clientY,time:now});if(points.length>90)points.shift();if(!frame)frame=requestAnimationFrame(draw);
 },{passive:true});
 addEventListener('resize',size);addEventListener('blur',clear);document.addEventListener('pointerleave',clear);document.addEventListener('visibilitychange',()=>{if(document.hidden)clear()});motion.addEventListener('change',()=>{if(motion.matches)clear()});fine.addEventListener('change',()=>{if(!fine.matches)clear()});size();
})();
