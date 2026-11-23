(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Embed the verified asset manifest so the page also works from file://.
  const originals = [
    ['home', '业务首页', '3679:10871', 375, 840],
    ['devices', '在线设备', '1257:8382', 375, 815],
    ['device-detail', '设备详情', '4537:14759', 375, 1669],
    ['replenish-entry', '补货首页', '5565:23676', 1125, 2436],
    ['replenish-precise', '精细化补货', '4476:16562', 375, 1041],
    ['replenish-quick', '快捷补货', '5561:11765', 375, 1227],
    ['replenish-record', '补货记录', '4458:9035', 375, 812],
    ['planogram', '陈列管理', '5789:12437', 375, 812],
    ['planogram-device', '从设备导入', '5789:12476', 375, 812],
    ['planogram-template', '从模板导入', '5799:31666', 375, 812],
    ['planogram-confirm', '覆盖确认', '5794:16352', 375, 812],
    ['data', '经营数据概览', '649:4838', 383, 956],
    ['products', '商品列表', '1585:7534', 375, 944],
    ['orders', '销售订单', '1861:14062', 375, 812],
    ['product-apply-general', '新品申请 · 通用包装', '5861:21455', 1125, 6003],
    ['product-apply-bottled', '新品申请 · 瓶装', '5899:27225', 1125, 6003],
    ['product-apply-boxed', '新品申请 · 盒装', '5960:16894', 1125, 6003],
    ['product-photo-guidance', '包装类型与拍摄指引', '5889:27158', 335, 1016]
  ].map(([id, title, nodeId, width, height]) => ({
    id,
    title,
    width,
    height,
    src: (window.__EZVEND_ASSETS__ && window.__EZVEND_ASSETS__[`assets/${id}.webp`]) || `assets/${id}.webp`,
    source: null
  }));
  const originalById = new Map(originals.map((asset) => [asset.id, asset]));

  function setImage(image, asset) {
    image.src = asset.src;
    image.alt = `${asset.title}，EZvend 原始设计界面`;
    image.width = asset.width;
    image.height = asset.height;
  }

  // Keep reading position and chapter navigation in sync with the document.
  const progress = $('#progress-bar');
  const header = $('#site-header');
  const backToTop = $('#back-to-top');
  const navLinks = $$('.main-nav a');
  const navSections = navLinks.map((link) => ({
    link,
    section: $(link.getAttribute('href'))
  })).filter((entry) => entry.section);
  let scrollFrame = 0;

  function updateScrollState() {
    scrollFrame = 0;
    const scrollTop = Math.max(0, window.scrollY);
    const available = Math.max(1, root.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = `${Math.min(100, scrollTop / available * 100)}%`;
    if (header) header.classList.toggle('scrolled', scrollTop > 24);
    if (backToTop) {
      const show = scrollTop > window.innerHeight * 0.7;
      backToTop.classList.toggle('show', show);
      backToTop.setAttribute('aria-hidden', String(!show));
      backToTop.tabIndex = show ? 0 : -1;
    }
    let active = null;
    navSections.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= 160) active = entry.link;
    });
    navLinks.forEach((link) => {
      const selected = link === active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function queueScrollUpdate() {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollState);
  }

  window.addEventListener('scroll', queueScrollUpdate, { passive: true });
  window.addEventListener('resize', queueScrollUpdate, { passive: true });
  window.addEventListener('pageshow', queueScrollUpdate);
  window.addEventListener('load', queueScrollUpdate);
  if (backToTop) backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  });
  updateScrollState();

  // Content is visible by default. Only prepared, observed elements can animate.
  const revealElements = $$('.reveal');
  let revealObserver = null;
  let observerHasResponded = false;

  function reveal(element) {
    element.classList.remove('reveal-pending');
    element.classList.add('is-visible', 'visible');
    if (revealObserver) revealObserver.unobserve(element);
  }

  function revealAll() {
    revealElements.forEach(reveal);
    if (revealObserver) revealObserver.disconnect();
  }

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    try {
      revealObserver = new IntersectionObserver((entries) => {
        observerHasResponded = true;
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 24 && rect.bottom > 0) {
          reveal(element);
        } else {
          element.classList.add('reveal-pending');
          revealObserver.observe(element);
        }
      });
      window.setTimeout(() => {
        if (!observerHasResponded) revealAll();
      }, 3500);
    } catch (_) {
      revealAll();
    }
  } else {
    revealAll();
  }
  const respectMotionPreference = () => { if (reducedMotion.matches) revealAll(); };
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', respectMotionPreference);
  else if (reducedMotion.addListener) reducedMotion.addListener(respectMotionPreference);
  window.addEventListener('beforeprint', revealAll);
  document.addEventListener('focusin', (event) => {
    const parent = event.target.closest('.reveal-pending');
    if (parent) reveal(parent);
  });

  // Shared keyboard interaction for the two accessible tab sets.
  function setupTabs(tabs, onSelect, vertical = false) {
    if (!tabs.length) return;
    function select(tab, moveFocus = false) {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        item.classList.toggle('active', selected);
      });
      onSelect(tab);
      if (moveFocus) tab.focus({ preventScroll: true });
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (event) => {
        let next = index;
        const forward = vertical ? 'ArrowDown' : 'ArrowRight';
        const backward = vertical ? 'ArrowUp' : 'ArrowLeft';
        if (event.key === forward) next = (index + 1) % tabs.length;
        else if (event.key === backward) next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        select(tabs[next], true);
      });
    });
    select(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
  }

  const planSteps = {
    device: {
      image: 'planogram-device',
      badge: 'FROM DEVICE',
      description: 'From Device 与 From Template 分别承载两类来源；搜索与卡片选择帮助用户定位已有配置。'
    },
    template: {
      image: 'planogram-template',
      badge: 'FROM TEMPLATE',
      description: '“仅支持单门、5 层模板”的提示，将布局条件放在选择之前。列表通过模板名称、设备信息与选中状态，帮助确认要导入的配置。'
    },
    confirm: {
      image: 'planogram-confirm',
      badge: 'CONFIRM BEFORE IMPORT',
      description: '覆盖将替换该设备上的全部商品数据，且无法撤销。独立确认弹窗说明操作影响，并提供取消与导入两种选择。'
    }
  };
  const planImage = $('#plan-screen');
  const planButton = $('#plan-screen-button');
  const planPanel = $('#plan-panel');
  const planDescription = $('#plan-description');
  const planBadge = $('#plan-badge');
  if (planDescription) planDescription.setAttribute('aria-live', 'polite');

  setupTabs($$('[data-plan]'), (tab) => {
    const step = planSteps[tab.dataset.plan];
    if (!step || !planImage) return;
    const asset = originalById.get(step.image);
    setImage(planImage, asset);
    if (planButton) {
      planButton.dataset.image = asset.id;
      planButton.setAttribute('aria-label', `放大查看${asset.title}`);
    }
    if (planPanel) planPanel.setAttribute('aria-labelledby', tab.id);
    if (planDescription) planDescription.textContent = step.description;
    if (planBadge) planBadge.textContent = step.badge;
  }, true);

  // Preserve the full source form, then position its viewport at Product Photo.
  const captureImage = $('#capture-screen');
  const captureViewport = $('#capture-scroll');
  const packAssets = {
    general: 'product-apply-general',
    bottled: 'product-apply-bottled',
    boxed: 'product-apply-boxed'
  };
  let captureScrollFrame = 0;

  function positionCaptureAtPhotos() {
    if (!captureImage || !captureViewport || !captureImage.naturalWidth) return;
    if (captureScrollFrame) window.cancelAnimationFrame(captureScrollFrame);
    captureScrollFrame = window.requestAnimationFrame(() => {
      const scale = captureImage.getBoundingClientRect().width / 375;
      const target = 800 * scale;
      captureViewport.scrollTop = Math.min(target, Math.max(0, captureViewport.scrollHeight - captureViewport.clientHeight));
      captureScrollFrame = 0;
    });
  }

  if (captureImage) captureImage.addEventListener('load', positionCaptureAtPhotos);
  setupTabs($$('[data-pack]'), (tab) => {
    const asset = originalById.get(packAssets[tab.dataset.pack]);
    if (!asset || !captureImage || !captureViewport) return;
    captureViewport.setAttribute('role', 'tabpanel');
    captureViewport.setAttribute('aria-labelledby', tab.id);
    captureViewport.setAttribute('aria-label', `${asset.title}完整界面，可上下滚动`);
    setImage(captureImage, asset);
    if (captureImage.complete) positionCaptureAtPhotos();
  });

  const filterButtons = $$('[data-filter]');
  const galleryItems = $$('.gallery-item');
  const galleryCount = $('#gallery-count');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    galleryItems.forEach((item) => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.hidden = !match;
      item.style.display = match ? '' : 'none';
      if (match) visible += 1;
    });
    if (galleryCount) galleryCount.textContent = `${visible} 个精选界面`;
    queueScrollUpdate();
  }));

  // A native dialog contains the complete, uncropped source designs.
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightbox-image');
  const lightboxTitle = $('#lightbox-title');
  const lightboxBody = $('.lightbox-body');
  const lightboxSource = $('#lightbox-source');
  const lightboxPosition = $('#lightbox-position');
  const closeButton = $('#lightbox-close');
  let activeOriginal = 0;
  let lightboxIsOpen = false;
  let returnFocus = null;
  let savedScrollStyles = null;

  function lockPageScroll() {
    const body = document.body;
    const clientWidthBefore = root.clientWidth;
    savedScrollStyles = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
      gutter: root.style.scrollbarGutter,
      headerPaddingRight: header ? header.style.paddingRight : ''
    };
    root.style.scrollbarGutter = 'stable';
    body.style.overflow = 'hidden';
    const expansion = Math.max(0, root.clientWidth - clientWidthBefore);
    if (expansion > 0) {
      body.style.paddingRight = `${(parseFloat(window.getComputedStyle(body).paddingRight) || 0) + expansion}px`;
      if (header) header.style.paddingRight = `${(parseFloat(window.getComputedStyle(header).paddingRight) || 0) + expansion}px`;
    }
  }

  function unlockPageScroll() {
    if (!savedScrollStyles) return;
    document.body.style.overflow = savedScrollStyles.overflow;
    document.body.style.paddingRight = savedScrollStyles.paddingRight;
    root.style.scrollbarGutter = savedScrollStyles.gutter;
    if (header) header.style.paddingRight = savedScrollStyles.headerPaddingRight;
    savedScrollStyles = null;
  }

  function renderOriginal(index) {
    activeOriginal = (index + originals.length) % originals.length;
    const asset = originals[activeOriginal];
    setImage(lightboxImage, asset);
    lightboxTitle.textContent = asset.title;

    lightboxPosition.textContent = `${activeOriginal + 1} / ${originals.length}`;
    lightboxBody.scrollTop = 0;
    lightboxBody.scrollLeft = 0;
  }

  function finishClosingLightbox() {
    if (!lightboxIsOpen) return;
    lightboxIsOpen = false;
    unlockPageScroll();
    if (returnFocus && returnFocus.isConnected && !returnFocus.hidden) {
      returnFocus.focus({ preventScroll: true });
    }
    returnFocus = null;
    queueScrollUpdate();
  }

  function closeLightbox() {
    if (!lightbox || !lightboxIsOpen) return;
    if (typeof lightbox.close === 'function') {
      lightbox.close();
      finishClosingLightbox();
    } else {
      lightbox.removeAttribute('open');
      finishClosingLightbox();
    }
  }

  function openLightbox(id, trigger) {
    if (!lightbox || !lightboxImage || !originalById.has(id)) return;
    if (!lightboxIsOpen) {
      returnFocus = trigger || document.activeElement;
      lockPageScroll();
      lightboxIsOpen = true;
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else {
        lightbox.setAttribute('open', '');
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
      }
    }
    renderOriginal(originals.findIndex((asset) => asset.id === id));
    if (closeButton) closeButton.focus({ preventScroll: true });
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-image]');
    if (!trigger || !originalById.has(trigger.dataset.image)) return;
    event.preventDefault();
    openLightbox(trigger.dataset.image, trigger);
  });

  if (lightbox) {
    lightboxBody.tabIndex = 0;
    lightboxBody.setAttribute('role', 'region');
    lightboxBody.setAttribute('aria-label', '完整设计图，可上下滚动');
    lightboxPosition.setAttribute('aria-live', 'polite');
    lightboxPosition.setAttribute('aria-atomic', 'true');
    lightboxImage.addEventListener('load', () => {
      if (lightboxIsOpen) lightboxBody.scrollTop = 0;
    });
    if (closeButton) closeButton.addEventListener('click', closeLightbox);
    $('#lightbox-prev').addEventListener('click', () => renderOriginal(activeOriginal - 1));
    $('#lightbox-next').addEventListener('click', () => renderOriginal(activeOriginal + 1));
    lightbox.addEventListener('close', finishClosingLightbox);
    lightbox.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeLightbox();
    });
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        renderOriginal(activeOriginal + (event.key === 'ArrowRight' ? 1 : -1));
      } else if (event.key === 'Tab') {
        const focusable = $$('button:not([disabled]), a[href], [tabindex="0"]', lightbox)
          .filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }
})();
