(() => {
  const fitViewport = () => document.documentElement.style.setProperty('--viewport-scrollbar', `${innerWidth - document.documentElement.clientWidth}px`);
  fitViewport();
  addEventListener('resize', fitViewport, {passive: true});
  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', updateHeader, {passive: true});
    addEventListener('pageshow', updateHeader);
    updateHeader();
  }
  const note = document.querySelector('.hero-sticky-note');
  if (note) {
    const messages = [
      ['把复杂留给思考，', '把简单留给用户。'],
      ['灵感可以天马行空，', '细节要稳稳落地。'],
      ['让 AI 多跑几步，', '让判断更进一步。'],
      ['好设计的隐藏技能：', '让人忘了它的存在。']
    ];
    const label = note.querySelector('small');
    const copy = note.querySelector('.note-copy');
    let current = 0;
    let animation;
    label.textContent = '✦ 灵感便签 01 / 04';
    note.addEventListener('click', () => {
      current = (current + 1) % messages.length;
      label.textContent = `✦ 灵感便签 ${String(current + 1).padStart(2, '0')} / 04`;
      copy.replaceChildren(document.createTextNode(messages[current][0]), document.createElement('br'), document.createTextNode(messages[current][1]));
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animation?.cancel();
        animation = copy.animate([
          {opacity: .25, transform: 'translateY(5px) rotate(-2deg)'},
          {opacity: 1, transform: 'translateY(0) rotate(0)'}
        ], {duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)'});
      }
    });
  }
  const flower = document.querySelector('.hero-flower-sticker');
  if (flower) {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const rotation = flower.querySelector('img').animate(
      [{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}],
      {duration: 12000, iterations: Infinity}
    );
    rotation.pause();
    let hovering = false, focused = false, tapping = false, tapTimer;
    const syncRotation = () => {
      if (!motion.matches && !document.hidden && (hovering || focused || tapping)) rotation.play();
      else rotation.pause();
    };
    flower.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') hovering = true;
      syncRotation();
    });
    flower.addEventListener('pointerleave', () => { hovering = false; syncRotation(); });
    flower.addEventListener('focus', () => { focused = flower.matches(':focus-visible'); syncRotation(); });
    flower.addEventListener('blur', () => { focused = false; syncRotation(); });
    flower.addEventListener('click', () => {
      if (matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      tapping = true;
      clearTimeout(tapTimer);
      syncRotation();
      tapTimer = setTimeout(() => { tapping = false; syncRotation(); }, 3000);
    });
    motion.addEventListener('change', syncRotation);
    document.addEventListener('visibilitychange', syncRotation);
  }
})();
