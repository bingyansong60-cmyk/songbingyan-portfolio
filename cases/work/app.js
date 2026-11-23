(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const screens = [
    ['home', '工作台首页', 'assets/home.png'],
    ['ppt-outline', 'PPT · 确认大纲', 'assets/ppt-outline.png'],
    ['ppt-edit', 'PPT · 编辑大纲', 'assets/ppt-edit.png'],
    ['ppt-style', 'PPT · 选择风格', 'assets/ppt-style.png'],
    ['ppt-generating', 'PPT · 生成与预览', 'assets/ppt-generating.png'],
    ['ppt-complete', 'PPT · 完成与交付', 'assets/ppt-complete.png'],
    ['data-preview', '数据分析 · 结果预览', 'assets/data-preview.png'],
    ['data-complete', '数据分析 · 生成完成', 'assets/data-complete.png'],
    ['image-create', '一句话生图', 'assets/image-create.png'],
    ['assets', '素材管理', 'assets/assets.png'],
    ['agents', '智能体', 'assets/agents.png'],
    ['no-file', '关键状态 · 没有可用文件', 'assets/no-file.png'],
    ['insufficient', '关键状态 · 积分不足', 'assets/insufficient.png'],
    ['identity', '个人与企业 · 选择使用身份', 'assets/identity.png'],
    ['enterprise-points', '企业积分明细', 'assets/enterprise-points.png'],
    ['components', '原稿输入组件', 'assets/components.png'],
    ['windows', 'Windows 桌面工作区', 'assets/windows.png'],
    ['sidebar', '任务状态与侧边栏', 'assets/sidebar.png']
  ].map(([id, label, src]) => ({ id, label, src }));
  const screenById = (id) => screens.find(screen => screen.id === id) || screens[0];
  const flows = [
    { id: 'ppt-outline', tab: 'outline', label: '确认大纲', kicker: '内容先于样式', title: '先看清结构，再进入制作。', description: '把主题、章节和内页组织为可检查的大纲，让用户在生成之前确认内容方向，减少结果完成后才发现结构不合适的情况。', caption: '先确认大纲，确定内容方向与章节结构。' },
    { id: 'ppt-edit', tab: 'edit', label: '编辑内容', kicker: '在关键节点保留控制权', title: '让内容调整有明确的操作空间。', description: '将大纲编辑放在独立弹窗中，左侧承接章节结构，右侧编辑页面内容。让结构调整与文本修改在同一处完成。', caption: '通过编辑大纲弹窗，调整章节、标题与具体内容。' },
    { id: 'ppt-style', tab: 'style', label: '选择风格', kicker: '把抽象偏好变成具体选择', title: '用可预览的风格，确认表达方向。', description: '以风格预览和简短描述帮助用户判断视觉表达。确认风格后再进入生成，让内容结构与呈现方式分阶段明确。', caption: '浏览风格预览，确认视觉方向，再进入生成。' },
    { id: 'ppt-generating', tab: 'generating', label: '生成与预览', kicker: '把等待变成可理解的过程', title: '持续交代进度，同时看见结果。', description: '用已完成步骤、当前页码与生成进度说明任务状态。右侧逐页呈现内容，左侧保留对话，让等待阶段也能理解产出正在如何形成。', caption: '对话区显示任务阶段与进度，右侧同步呈现生成页面。' },
    { id: 'ppt-complete', tab: 'complete', label: '完成与交付', kicker: '让生成任务走到可交付', title: '把完成状态与文件操作放在一起。', description: '完成后保留生成记录，展示文件卡片与下载入口，并继续呈现页面预览。用户能检查结果，也能快速找到需要交付的文件。', caption: '生成完成后检查页面结果，通过文件卡片找到交付入口。' }
  ];
  const scenarios = [
    { id: 'data-preview', tab: 'data', kicker: 'DATA ANALYSIS', title: '把分析产出，\n变成可检查的内容。', description: '围绕文件与数据组织预览，使内容结构与后续操作更清楚。让用户在拿走结果前，先确认它是否符合当前任务。' },
    { id: 'image-create', tab: 'image', kicker: 'IMAGE CREATION', title: '从描述意图，\n进入视觉创作。', description: '让生图需求与创作选项集中在同一个任务场景中，结合结果展示和相关操作，承接从表达想法到查看图像的过程。' },
    { id: 'assets', tab: 'assets', kicker: 'ASSET MANAGEMENT', title: '让内容沉淀，\n也让再次使用更方便。', description: '以素材列表组织已有内容，配合选择和文件夹相关操作，让生成之外的内容管理也有清楚的入口。' },
    { id: 'agents', tab: 'agents', kicker: 'SPECIALIZED AGENTS', title: '用任务能力，\n帮助用户找到入口。', description: '将智能体作为可浏览的能力集合。通过清晰的内容分组和统一视觉结构，承接不同的办公任务。' }
  ];
  const states = [
    { id: 'no-file', tab: 'file', caption: '在流程边界处，保持信息明确、操作可见。' },
    { id: 'insufficient', displaySrc: 'assets/insufficient-detail.png', tab: 'points', caption: '把积分限制与下一步操作放在同一条信息路径上。' }
  ];
  let currentFlow = 0;
  let currentScenario = 0;
  let currentState = 0;
  let currentViewer = 0;
  let currentDemo = 0;
  const modalOpeners = new WeakMap();

  function changeImage(image, screen) {
    image.src = screen.src;
    image.alt = screen.label + '设计稿';
  }
  function announce(text) {
    $('#announcement').textContent = text;
  }
  function selectTab(buttons, index) {
    buttons.forEach((button, position) => {
      button.setAttribute('aria-selected', String(position === index));
      button.tabIndex = position === index ? 0 : -1;
    });
  }
  function bindTabKeyboard(container, buttons, change, vertical = false) {
    container.addEventListener('keydown', event => {
      const index = buttons.indexOf(document.activeElement);
      if (index < 0) return;
      const prev = vertical ? 'ArrowUp' : 'ArrowLeft';
      const next = vertical ? 'ArrowDown' : 'ArrowRight';
      let target = index;
      if (event.key === next) target = (index + 1) % buttons.length;
      else if (event.key === prev) target = (index - 1 + buttons.length) % buttons.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = buttons.length - 1;
      else return;
      event.preventDefault();
      change(target);
      buttons[target].focus();
    });
  }
  const flowButtons = $$('[data-flow]');
  function setFlow(index) {
    currentFlow = index;
    const flow = flows[index];
    const screen = screenById(flow.id);
    selectTab(flowButtons, index);
    $('#flow-panel').setAttribute('aria-labelledby', `flow-tab-${flow.tab}`);
    changeImage($('#flow-image'), screen);
    $('#flow-kicker').textContent = flow.kicker;
    $('#flow-title').textContent = flow.title;
    $('#flow-description').textContent = flow.description;
    $('[data-flow-view]').setAttribute('aria-label', `放大${flow.label}设计稿`);
  }
  flowButtons.forEach(button => button.addEventListener('click', () => setFlow(Number(button.dataset.flow))));
  bindTabKeyboard($('.flow-tabs'), flowButtons, setFlow);
  const scenarioButtons = $$('[data-scenario]');
  function setScenario(index) {
    currentScenario = index;
    const scenario = scenarios[index];
    selectTab(scenarioButtons, index);
    $('#scenario-panel').setAttribute('aria-labelledby', `scenario-tab-${scenario.tab}`);
    changeImage($('#scenario-image'), screenById(scenario.id));
    $('#scenario-kicker').textContent = scenario.kicker;
    $('#scenario-title').replaceChildren(...scenario.title.split('\n').flatMap((line, position) => position ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
    $('#scenario-description').textContent = scenario.description;
  }
  scenarioButtons.forEach(button => button.addEventListener('click', () => setScenario(Number(button.dataset.scenario))));
  bindTabKeyboard($('.scenario-tabs'), scenarioButtons, setScenario);
  const stateButtons = $$('[data-state]');
  function setState(index) {
    currentState = index;
    const state = states[index];
    selectTab(stateButtons, index);
    stateButtons.forEach((button, position) => button.classList.toggle('active', position === index));
    $('#state-panel').setAttribute('aria-labelledby', `state-tab-${state.tab}`);
    changeImage($('#state-image'), screenById(state.id));
    if (state.displaySrc) $('#state-image').src = state.displaySrc;
    $('#state-panel').classList.toggle('showing-detail', Boolean(state.displaySrc));
    $('#state-caption').textContent = state.caption;
  }
  stateButtons.forEach(button => button.addEventListener('click', () => setState(Number(button.dataset.state))));
  bindTabKeyboard($('.state-choices'), stateButtons, setState, true);

  function openDialog(dialog) {
    modalOpeners.set(dialog, document.activeElement);
    dialog.showModal();
    document.body.classList.add('dialog-open');
    $('.close-button', dialog)?.focus({ preventScroll: true });
  }
  function closeDialog(dialog) {
    if (dialog.open) dialog.close();
  }
  const imageDialog = $('#image-dialog');
  function updateViewer() {
    const screen = screens[currentViewer];
    $('#viewer-title').textContent = screen.label;
    changeImage($('#viewer-image'), screen);
    $('#viewer-counter').textContent = `${currentViewer + 1} / ${screens.length}`;
    $('#viewer-original').href = screen.src;
    $('#viewer-original').setAttribute('aria-label', `在新窗口查看${screen.label}原图`);
  }
  function openViewer(id) {
    currentViewer = Math.max(0, screens.findIndex(screen => screen.id === id));
    updateViewer();
    openDialog(imageDialog);
  }
  function stepViewer(direction) {
    currentViewer = (currentViewer + direction + screens.length) % screens.length;
    updateViewer();
  }
  $$('[data-view]').forEach(button => button.addEventListener('click', () => openViewer(button.dataset.view)));
  $('[data-flow-view]').addEventListener('click', () => openViewer(flows[currentFlow].id));
  $('[data-scenario-view]').addEventListener('click', () => openViewer(scenarios[currentScenario].id));
  $('[data-state-view]').addEventListener('click', () => openViewer(states[currentState].id));
  $('#viewer-prev').addEventListener('click', () => stepViewer(-1));
  $('#viewer-next').addEventListener('click', () => stepViewer(1));
  imageDialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      stepViewer(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });

  const demoDialog = $('#demo-dialog');
  flows.forEach((flow, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = flow.label;
    button.setAttribute('aria-label', `切换到${flow.label}`);
    button.addEventListener('click', () => setDemo(index));
    $('#demo-step-indicators').append(button);
  });
  function setDemo(index) {
    const focusedBefore = document.activeElement;
    currentDemo = Math.min(Math.max(index, 0), flows.length - 1);
    const flow = flows[currentDemo];
    const complete = currentDemo === flows.length - 1;
    $('#demo-title').textContent = `一键 PPT · ${flow.label}`;
    changeImage($('#demo-image'), screenById(flow.id));
    $('#demo-caption').textContent = flow.caption;
    $('#demo-prev').disabled = currentDemo === 0;
    $('#demo-next').hidden = complete;
    $('#demo-restart').hidden = !complete;
    $('#demo-figma').hidden = !complete;
    $$('#demo-step-indicators button').forEach((button, position) => {
      if (position === currentDemo) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    if (demoDialog.open && demoDialog.contains(focusedBefore) && !focusedBefore.getClientRects().length) {
      $$('#demo-step-indicators button')[currentDemo]?.focus({ preventScroll: true });
    }
  }
  $$('[data-open-demo]').forEach(button => button.addEventListener('click', () => {
    setDemo(0);
    openDialog(demoDialog);
  }));
  $('#demo-prev').addEventListener('click', () => setDemo(currentDemo - 1));
  $('#demo-next').addEventListener('click', () => {
    setDemo(currentDemo + 1);
    if (currentDemo === flows.length - 1) $('#demo-figma').focus({ preventScroll: true });
  });
  $('#demo-restart').addEventListener('click', () => {
    setDemo(0);
    $('#demo-next').focus({ preventScroll: true });
  });
  demoDialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      setDemo(currentDemo + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => closeDialog(document.getElementById(button.dataset.closeDialog))));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
      const opener = modalOpeners.get(dialog);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDialog(dialog);
    });
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const focusable = $$('a[href],button:not([disabled]),[tabindex="0"]', dialog).filter(element => element.getClientRects().length);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    });
  });

  $('#gallery-toggle').addEventListener('click', event => {
    const button = event.currentTarget;
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    $$('.gallery-extra').forEach(figure => { figure.hidden = !expanded; });
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? '收起更多设计稿' : '展开更多设计稿';
    announce(expanded ? '已展开更多设计稿。' : '已收起更多设计稿。');
  });

  let scrollQueued = false;
  function updateReadingProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    if($('#reading-progress'))$('#reading-progress').style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, scrollY / max)) : 0})`;
    scrollQueued = false;
  }
  addEventListener('scroll', () => {
    if (!scrollQueued) { requestAnimationFrame(updateReadingProgress); scrollQueued = true; }
  }, { passive: true });
  addEventListener('resize', updateReadingProgress, { passive: true });
  updateReadingProgress();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -30px 0px', threshold: 0.06 });
    $$('.reveal').forEach(section => observer.observe(section));
  }
})();
