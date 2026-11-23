(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -18px 0px' });
    reveals.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight * .9) element.classList.add('is-pending');
      revealObserver.observe(element);
    });
  }

  const progress = document.querySelector('.reading-progress');
  const navigation = [...document.querySelectorAll('.site-header nav a')];
  const sections = navigation.map(link => document.querySelector(link.getAttribute('href')));
  let scrollScheduled = false;
  const updateScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    let active = -1;
    sections.forEach((section, index) => { if (section.getBoundingClientRect().top < 190) active = index; });
    navigation.forEach((link, index) => {
      link.classList.toggle('active', index === active);
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollScheduled = false;
  };
  const onScroll = () => { if (!scrollScheduled) { window.requestAnimationFrame(updateScroll); scrollScheduled = true; } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateScroll();

  const tabs = [...document.querySelectorAll('.state-tab')];
  const panels = [...document.querySelectorAll('.state-panel')];
  const activateTab = (tab, focus = false) => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let target = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[target], true);
    });
  });

  const dialog = document.querySelector('.image-dialog');
  const dialogImage = document.querySelector('#dialog-image');
  const dialogCaption = document.querySelector('#dialog-caption');
  let lastFocused = null;
  document.querySelectorAll('.zoomable').forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastFocused = trigger;
      const imagePath = trigger.dataset.image;
      dialogImage.src = window.__PORTFOLIO_ASSETS__?.[imagePath] || imagePath;
      dialogImage.alt = trigger.dataset.caption || '恒智易 AI 原始界面';
      dialogCaption.textContent = dialogImage.alt;
      dialog.querySelector('.dialog-body').scrollTop = 0;
      document.body.classList.add('dialog-open');
      dialog.showModal();
      dialog.querySelector('.dialog-close').focus();
    });
  });
  const closeDialog = () => dialog.close();
  dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    dialogImage.removeAttribute('src');
    lastFocused?.focus({ preventScroll: true });
  });
})();
