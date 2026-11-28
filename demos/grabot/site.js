(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const header = $('#topbar');
  const productNav = $('.product-nav');
  const caret = $('.menu-caret');
  const mega = $('#models-menu');
  const menuButton = $('#hamburger');
  const menu = $('#mobile-menu');
  let closeTimer;
  function closeFlyout() {
    mega.hidden = true;
    caret.setAttribute('aria-expanded', 'false');
    header.classList.toggle('is-open', !menu.hidden);
  }
  function openFlyout() {
    clearTimeout(closeTimer);
    if (mobile.matches) return;
    mega.hidden = false;
    caret.setAttribute('aria-expanded', 'true');
    header.classList.add('is-open');
  }
  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    header.classList.toggle('is-open', !mega.hidden);
  }
  const closeLater = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      if (!mega.contains(document.activeElement) && document.activeElement !== caret) closeFlyout();
    }, 130);
  };
  [productNav, mega].forEach(el => {
    el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') openFlyout(); });
    el.addEventListener('pointerleave', closeLater);
  });
  caret.addEventListener('click', () => { if (mega.hidden) openFlyout(); else closeFlyout(); });
  productNav.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); openFlyout(); $('a', mega).focus(); }
  });
  menuButton.addEventListener('click', () => {
    if (!menu.hidden) return closeMenu();
    closeFlyout();
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close menu');
    header.classList.add('is-open');
  });
  document.addEventListener('pointerdown', e => {
    if (!header.contains(e.target)) { closeMenu(); closeFlyout(); }
  });
  document.addEventListener('focusin', e => {
    if (!productNav.contains(e.target) && !mega.contains(e.target)) closeFlyout();
    if (!header.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!mega.hidden) { closeFlyout(); caret.focus(); }
    if (!menu.hidden) { closeMenu(); menuButton.focus(); }
  });
  mobile.addEventListener('change', () => { closeFlyout(); closeMenu(); });
  const updateBar = () => header.classList.toggle('solid', scrollY > 32);
  updateBar();
  addEventListener('scroll', updateBar, {passive: true});

  // Reveal content blocks separately so long pages unfold as the visitor reads.
  if ('IntersectionObserver' in window && !reduced.matches) {
    const blocks = $$([
      'main h2', 'main .lead', '.hero-content', '.coverage', '.numbers > div',
      '.feature-row > *', '.platform [data-carousel]', '.compare-labels', '.compare-row',
      '.compare-machine', '.product-card', '.quote-form', '.about-hero > *',
      '.scene-story [data-carousel]', '.tech-row > img', '.partner-map', '.tech-banner',
      '.cert-marquee', '.growth article', '.machine-view', '.product-info > *',
      '.detail-end', '.calc-box', '.calc-method', '.feature-box', '.tech-grid > img',
      '.marquee-window', '.contact-copy > *', '.policy > *', 'footer .footer-grid > div'
    ].join(','));
    const targets = new Set(blocks);
    const observer = new IntersectionObserver(entries => {
      for (const {target, isIntersecting} of entries) {
        if (!isIntersecting) continue;
        target.classList.remove('reveal-pending');
        observer.unobserve(target);
      }
    }, {rootMargin:'0px 0px -12px 0px'});
    for (const block of blocks) {
      if (block.getBoundingClientRect().top < innerHeight - 12) continue;
      let parent = block.parentElement;
      while (parent && !targets.has(parent)) parent = parent.parentElement;
      if (parent) continue;
      block.classList.add('scroll-reveal', 'reveal-pending');
      observer.observe(block);
    }
    document.addEventListener('focusin', e => {
      const target = e.target.closest('.reveal-pending');
      if (target) { target.classList.remove('reveal-pending'); observer.unobserve(target); }
    });
    reduced.addEventListener('change', () => {
      if (!reduced.matches) return;
      observer.disconnect();
      blocks.forEach(el => el.classList.remove('reveal-pending'));
    });
  }

  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const formatter = new Intl.NumberFormat('en-US');
    const frames = new Map();
    function stop(el) {
      cancelAnimationFrame(frames.get(el));
      frames.delete(el);
      $('.count-display', el).textContent = formatter.format(Number(el.dataset.count)) + '+';
    }
    function count(el) {
      if (reduced.matches || frames.has(el)) return;
      const display = $('.count-display', el);
      const end = Number(el.dataset.count);
      const start = performance.now();
      display.textContent = '0+';
      function update(time) {
        const progress = Math.min(1, Math.max(0, (time - start) / 1350));
        display.textContent = formatter.format(Math.round(end * (1 - (1 - progress) ** 3))) + '+';
        if (progress < 1) frames.set(el, requestAnimationFrame(update));
        else frames.delete(el);
      }
      frames.set(el, requestAnimationFrame(update));
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= .35) count(entry.target);
        if (!entry.isIntersecting) stop(entry.target);
      }
    }, {threshold:[0,.35]});
    counters.forEach(el => {
      observer.observe(el);
      el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') count(el); });
    });
    reduced.addEventListener('change', () => { if (reduced.matches) counters.forEach(stop); });
  }

  const partnerMap = $('.partner-map');
  if (partnerMap) {
    const viewport = $('.map-viewport', partnerMap);
    const map = $('img', viewport);
    const percent = $('.map-zoom', partnerMap);
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
    let scale = 1, left = 0, top = 0, dragging = null, previousTouch = null;
    function draw() {
      left = clamp(left, viewport.clientWidth * (1 - scale), 0);
      top = clamp(top, viewport.clientHeight * (1 - scale), 0);
      map.style.transform = 'translate(' + left + 'px,' + top + 'px) scale(' + scale + ')';
      percent.value = Math.round(scale * 100) + '%';
      viewport.classList.toggle('can-pan', scale > 1);
      $('[data-map="in"]', partnerMap).disabled = scale >= 4;
      $('[data-map="out"]', partnerMap).disabled = scale <= 1;
      $('[data-map="reset"]', partnerMap).disabled = scale <= 1;
    }
    function zoom(next, x = viewport.clientWidth / 2, y = viewport.clientHeight / 2) {
      next = clamp(next, 1, 4);
      left = x - (x - left) * next / scale;
      top = y - (y - top) * next / scale;
      scale = next;
      draw();
    }
    partnerMap.addEventListener('click', e => {
      const action = e.target.closest('[data-map]')?.dataset.map;
      if (action === 'reset') zoom(1);
      else if (action) zoom(action === 'in' ? scale * 1.5 : scale / 1.5);
    });
    viewport.addEventListener('wheel', e => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      zoom(scale * Math.exp(-e.deltaY * .012), e.clientX - rect.left, e.clientY - rect.top);
    }, {passive:false});
    viewport.addEventListener('dblclick', e => {
      const rect = viewport.getBoundingClientRect();
      zoom(scale < 2 ? 2 : 1, e.clientX - rect.left, e.clientY - rect.top);
    });
    viewport.addEventListener('keydown', e => {
      if (!['+','=','-','Home','ArrowRight','ArrowLeft','ArrowUp','ArrowDown'].includes(e.key)) return;
      if (e.key.startsWith('Arrow') && scale <= 1) return;
      e.preventDefault();
      if (e.key === 'Home') zoom(1);
      else if (!e.key.startsWith('Arrow')) zoom(e.key === '-' ? scale / 1.5 : scale * 1.5);
      else {
        left += (Number(e.key === 'ArrowLeft') - Number(e.key === 'ArrowRight')) * 50;
        top += (Number(e.key === 'ArrowUp') - Number(e.key === 'ArrowDown')) * 50;
        draw();
      }
    });
    viewport.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch' || e.button !== 0 || scale === 1) return;
      dragging = {id:e.pointerId, x:e.clientX - left, y:e.clientY - top};
      viewport.setPointerCapture(e.pointerId);
      viewport.classList.add('is-dragging');
    });
    viewport.addEventListener('pointermove', e => {
      if (dragging?.id !== e.pointerId) return;
      left = e.clientX - dragging.x;
      top = e.clientY - dragging.y;
      draw();
    });
    viewport.addEventListener('lostpointercapture', () => {
      dragging = null;
      viewport.classList.remove('is-dragging');
    });
    function touchPosition(touches) {
      if (!touches.length) return null;
      const rect = viewport.getBoundingClientRect(), a = touches[0], b = touches[1] || a;
      return {x:(a.clientX+b.clientX)/2-rect.left, y:(a.clientY+b.clientY)/2-rect.top,
        distance:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY), count:touches.length};
    }
    viewport.addEventListener('touchstart', e => {
      previousTouch = touchPosition(e.touches);
      if (e.touches.length === 2 && e.cancelable) e.preventDefault();
    },{passive:false});
    viewport.addEventListener('touchmove', e => {
      const p = touchPosition(e.touches), prev = previousTouch;
      previousTouch = p;
      if (!prev || !p || p.count !== prev.count || (scale === 1 && p.count === 1)) return;
      if (e.cancelable) e.preventDefault();
      if (p.count === 2 && prev.distance > 0) zoom(scale * p.distance / prev.distance, prev.x, prev.y);
      left += p.x-prev.x; top += p.y-prev.y; draw();
    },{passive:false});
    for (const event of ['touchend','touchcancel']) {
      viewport.addEventListener(event, e => { previousTouch = touchPosition(e.touches); }, {passive:true});
    }
    new ResizeObserver(draw).observe(viewport);
  }

  // Both slides share one grid cell so the viewport stays full throughout a transition.
  function slidingPanels(panels) {
    let visible = 0;
    let requested = 0;
    let direction = 1;
    let moving = false;
    panels.forEach((panel, index) => {
      panel.hidden = false;
      panel.inert = index !== 0;
      panel.setAttribute('aria-hidden', String(index !== 0));
    });

    async function render() {
      if (moving) return;
      moving = true;
      try {
        while (visible !== requested) {
          const next = requested;
          const sign = direction;
          const outgoing = panels[visible];
          const incoming = panels[next];
          const img = incoming.querySelector('img');
          if (img?.decode) await img.decode().catch(() => {});
          if (next !== requested) continue;

          incoming.removeAttribute('aria-hidden');
          if (!reduced.matches && incoming.animate) {
            const timing = {duration: 620, easing: 'cubic-bezier(.45, 0, .22, 1)', fill: 'both'};
            const slide = (panel, from, to) => panel.animate(
              [{transform: 'translateX(' + from + '%)'}, {transform: 'translateX(' + to + '%)'}], timing
            );
            const pair = [slide(outgoing, 0, -100 * sign), slide(incoming, 100 * sign, 0)];
            await Promise.all(pair.map(animation => animation.finished));
            pair.forEach(animation => animation.cancel());
          }
          outgoing.setAttribute('aria-hidden', 'true');
          outgoing.inert = true;
          incoming.inert = false;
          visible = next;
        }
      } finally {
        moving = false;
      }
    }
    return (index, sign) => {
      requested = index;
      direction = sign;
      render();
    };
  }

  const galleries = new Map();
  $$('[data-carousel]').forEach(root => {
    const panels = $$('[data-panel]', root);
    const dots = $$('[data-slide]', root);
    const move = $('.slide-window', root) ? slidingPanels(panels) : null;
    let current = 0;
    function select(index, animate = true) {
      const direction = index < current ? -1 : 1;
      current = (index + panels.length) % panels.length;
      if (move) move(current, direction);
      else panels.forEach((panel, i) => {
        panel.hidden = i !== current;
        panel.classList.toggle('enter', animate && i === current);
      });
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    }
    root.addEventListener('click', e => {
      const dot = e.target.closest('[data-slide]');
      const step = e.target.closest('[data-step]');
      if (dot) select(Number(dot.dataset.slide));
      if (step) select(current + Number(step.dataset.step));
    });
    root.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      e.preventDefault();
      select(current + (e.key === 'ArrowRight' ? 1 : -1));
      if (e.target.hasAttribute('data-slide')) dots[current].focus();
    });
    let touch = null;
    root.addEventListener('touchstart', e => {
      if (e.touches.length === 1) touch = [e.touches[0].clientX, e.touches[0].clientY];
    }, {passive: true});
    root.addEventListener('touchend', e => {
      if (!touch || !e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - touch[0];
      const dy = e.changedTouches[0].clientY - touch[1];
      touch = null;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.5) select(current + (dx < 0 ? 1 : -1));
    }, {passive: true});
    root.addEventListener('touchcancel', () => { touch = null; });
    if (root.classList.contains('machine-view')) {
      let start = null;
      root.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('button')) return;
        start = {x:e.clientX, y:e.clientY};
        root.setPointerCapture(e.pointerId);
      });
      root.addEventListener('pointerup', e => {
        if (!start) return;
        const dx = e.clientX - start.x;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - start.y)) select(current + (dx < 0 ? 1 : -1));
        start = null;
      });
      root.addEventListener('lostpointercapture', () => { start = null; });
    }

    select(0, false);
    galleries.set(root, select);
    if (root.hasAttribute('data-autoplay')) {
      let onScreen = false, timer;
      function schedule() {
        clearTimeout(timer);
        if (reduced.matches || !onScreen || document.hidden || root.contains(document.activeElement)) return;
        timer = setTimeout(() => { select(current + 1); schedule(); }, 4800);
      }
      root.addEventListener('click', schedule);
      root.addEventListener('focusin', schedule);
      root.addEventListener('focusout', () => queueMicrotask(schedule));
      root.addEventListener('touchend', schedule, {passive:true});
      reduced.addEventListener('change', schedule);
      document.addEventListener('visibilitychange', schedule);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
          onScreen = entry.isIntersecting;
          schedule();
        }, {threshold:0.15}).observe(root);
      } else { onScreen = true; schedule(); }
    }
  });

  const stage = $('.model-stage');
  if (stage) {
    const calculator = $('.calc-box');
    const overview = !!$('[data-calc-model]');
    const keys = Object.keys(GRABOT_MODELS);
    const currency = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0});
    let selected = stage.dataset.currentModel;
    let calculatorModel = selected;
    const view = $('.machine-view', stage);
    function updateEstimate() {
      if (!calculator) return;
      const value = id => Number(document.getElementById(id).value);
      $$('.slider input').forEach(input => {
        input.style.setProperty('--filled', ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min)) * 100) + '%');
        document.getElementById(input.id + '-value').textContent = input.dataset.prefix + input.value + input.dataset.suffix;
      });
      const units = value('units');
      const valid = Number.isInteger(units) && units >= 1 && units <= 10000;
      const sales = value('traffic') * value('conversion') / 100 * value('price') * value('basket') * 30 * units;
      const profit = sales * value('margin') / 100;
      $('#gross').textContent = valid ? currency.format(sales) : '—';
      const months = profit > 0 && valid ? Math.ceil(GRABOT_MODELS[calculatorModel].price * units / profit) : 0;
      $('#payback').textContent = months ? months + (months === 1 ? ' month' : ' months') : '—';
    }
    function setModel(key, updateUrl, estimateKey = key) {
      if (!keys.includes(key)) return;
      const changed = selected !== key;
      selected = key;
      calculatorModel = estimateKey;
      stage.dataset.currentModel = key;
      const model = GRABOT_MODELS[key];
      $('.mobile-product-title', stage).textContent = model.name;
      $$('.model-option', stage).forEach(el => el.setAttribute('aria-current', String(el.dataset.model === key)));
      $$('.spec-size dd', stage).forEach((dd, i) => { dd.textContent = model.size[i]; });
      $$('.specs li', stage).forEach((li, i) => {
        li.textContent = model.spec[i].replace(/\s*：\s*/g, ': ').replace(/L,\s*/g, ' L, ').replace('Display,Slim', 'Display, slim');
      });
      $$('.machine-slide img', view).forEach((img, i) => {
        const angle = ['front', 'right', 'left'][i];
        img.src = 'assets/' + key + '-' + angle + '.webp';
        img.alt = model.name + ' · ' + angle + ' view';
      });
      galleries.get(view)(0, changed && !reduced.matches);
      $$('[data-calc-model]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.calcModel === calculatorModel)));
      updateEstimate();
      if (overview && updateUrl) {
        const url = new URL(location.href);
        url.searchParams.set('model', key);
        history.replaceState(null, '', url);
      }
    }
    if (calculator) {
      calculator.addEventListener('input', updateEstimate);
      $('#units').addEventListener('change', e => {
        const count = Math.round(Number(e.target.value)) || 1;
        e.target.value = Math.max(1,Math.min(10000,count));
        updateEstimate();
      });
      updateEstimate();
    }
    if (overview) {
      $$('.model-option').forEach(link => link.addEventListener('click', e => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        setModel(link.dataset.model, true);
      }));
      $$('[data-calc-model]').forEach(button => button.addEventListener('click', () => setModel(button.dataset.calcModel, true)));
      const requested = new URLSearchParams(location.search).get('model');
      if (keys.includes(requested)) setModel(requested, false);
      else setModel(selected, false, 'g420');
    }
  }
  $$('[data-preview-form]').forEach(form => {
    const status = $('.form-status', form);
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      status.textContent = 'Preview complete. Your inquiry was validated locally. No message was sent.';
      status.classList.add('confirmed');
    });
    form.addEventListener('input', () => {
      if (!status.classList.contains('confirmed')) return;
      status.textContent = 'Preview form · Your details stay in this browser tab.';
      status.classList.remove('confirmed');
    });
  });
  const windowEl = $('.marquee-window');
  if (windowEl) {
    const toggle = $('.motion-toggle');
    const track = $('.marquee-track');
    const repeat = $('.marquee-duplicate');
    let paused = reduced.matches, inView = false, hovering = false, focused = false;
    let frame = 0, lastTime = 0, position = 0;
    function tick(time) {
      const width = repeat.offsetLeft - track.offsetLeft;
      if (!width) return;
      if (lastTime) position += Math.min(time-lastTime, 60) * .034;
      lastTime = time;
      if (position >= width) position %= width;
      windowEl.scrollLeft = position;
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      toggle.textContent = paused ? 'Play gallery' : 'Pause gallery';
      toggle.setAttribute('aria-pressed', String(paused));
      position = windowEl.scrollLeft;
      if (inView && !document.hidden && !paused && !hovering && !focused) frame = requestAnimationFrame(tick);
    }
    new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); }).observe(windowEl);
    toggle.addEventListener('click', () => { paused = !paused; sync(); });
    windowEl.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovering = true; sync(); } });
    windowEl.addEventListener('pointerleave', () => { hovering = false; sync(); });
    windowEl.addEventListener('touchstart', () => { paused = true; sync(); }, {passive:true});
    windowEl.addEventListener('focus', () => { focused = true; sync(); });
    windowEl.addEventListener('blur', () => { focused = false; sync(); });
    windowEl.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        windowEl.scrollBy({left: (e.key === 'ArrowRight' ? 1 : -1) * ($('.deploy-photo').offsetWidth + 16),behavior: reduced.matches ? 'auto' : 'smooth'});
      }
    });
    reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
    document.addEventListener('visibilitychange', sync);
    sync();
  }
})();
