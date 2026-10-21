// 后续可将此处替换成内容管理系统的接口。封面路径支持本地图片。
window.portfolio = {
  name: '宋冰艳',
  email: '3107177196@qq.com', // 填入真实邮箱后，“获取联系方式”即可复制邮箱。
  compactPortfolioUrl: '', // 精简版作品集 PDF 路径
  resumeUrl: '', // 如 'assets/我的简历.pdf'
  // 填入真实公司、职位、时间、职责；为空时展示待补充结构。
  experience: [
  {
    "company": "北京智点汇融科技有限公司",
    "role": "UI设计经理",
    "period": "2024.08 — 至今",
    "description": ""
  },
  {
    "company": "北京伴刻翼科技有限公司",
    "role": "UI设计师",
    "period": "2023.08 — 2024.08",
    "description": "负责车创客、松珍心理、有数计算器等产品的 UI 设计。\n搭建设计规范与组件库，跟进开发落地与视觉还原。"
  },
  {
    "company": "北京太逗科技有限公司",
    "role": "UI设计师",
    "period": "2021.08 — 2023.07",
    "description": "负责后台系统、小程序及官网的 UI 设计。\n协同产品与开发优化体验，完成 H5 与活动视觉设计。"
  }
],
  social: [
    {name:'小红书', handle:'设计灵感与日常观察', url:'https://www.xiaohongshu.com/user/profile/6170d20f000000000201dafa?m_source=pinpai', mark:'红', tone:'red'},
    {name:'哔哩哔哩', handle:'设计分享与创作记录', url:'https://space.bilibili.com/1215267068?spm_id_from=333.1007.0.0', mark:'哔', tone:'pink'},
    {name:'微信公众号', handle:'设计思考与长文记录', url:'', qr:'', mark:'微', tone:'green'}
  ],
  // 学习内容模板：替换标题、封面、正文后，将 example 改为 false。
  notes: [
  {
    "id": "note-1",
    "title": "学习笔记 1",
    "topic": "学习记录",
    "platform": "哔哩哔哩",
    "style": "space",
    "kicker": "VIDEO NOTES",
    "headline": "学习笔记\n01",
    "cover": "",
    "url": "https://www.bilibili.com/video/BV1AxGn6FEnK/",
    "body": "已关联真实笔记链接。标题与封面待补充，可通过下方入口查看原内容。",
    "example": false
  },
  {
    "id": "note-2",
    "title": "学习笔记 2",
    "topic": "学习记录",
    "platform": "哔哩哔哩",
    "style": "palette",
    "kicker": "VIDEO NOTES",
    "headline": "学习笔记\n02",
    "cover": "",
    "url": "https://www.bilibili.com/video/BV1skR2BkEEs/",
    "body": "已关联真实笔记链接。标题与封面待补充，可通过下方入口查看原内容。",
    "example": false
  },
  {
    "id": "note-3",
    "title": "学习笔记 3",
    "topic": "学习记录",
    "platform": "哔哩哔哩",
    "style": "type",
    "kicker": "VIDEO NOTES",
    "headline": "学习笔记\n03",
    "cover": "",
    "url": "https://www.bilibili.com/video/BV1skR2BkEEs/",
    "body": "已关联真实笔记链接。标题与封面待补充，可通过下方入口查看原内容。",
    "example": false
  },
  {
    "id": "note-4",
    "title": "学习笔记 4",
    "topic": "学习记录",
    "platform": "小红书",
    "style": "orbit",
    "kicker": "DESIGN NOTES",
    "headline": "学习笔记\n04",
    "cover": "",
    "url": "https://www.xiaohongshu.com/user/profile/6170d20f000000000201dafa/6a0f1e5c000000000803ddff?xsec_token=ABUaPJ0Y2fFTV9bFtp2ZZdemdnoVGEy6GF60uKFFfjSR8=&xsec_source=pc_user",
    "body": "已关联真实笔记链接。标题与封面待补充，可通过下方入口查看原内容。",
    "example": false
  },
  {
    "id": "note-5",
    "title": "Auto Layout 的布局练习",
    "topic": "工具与方法",
    "platform": "哔哩哔哩",
    "style": "layout",
    "kicker": "FIGMA PRACTICE",
    "headline": "让布局\n有章可循",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-6",
    "title": "微交互如何回应用户操作",
    "topic": "交互体验",
    "platform": "哔哩哔哩",
    "style": "motion",
    "kicker": "MOTION NOTES",
    "headline": "细节之中\n自有回应",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-7",
    "title": "从基础样式到可复用组件",
    "topic": "设计系统",
    "platform": "哔哩哔哩",
    "style": "blocks",
    "kicker": "BUILDING BLOCKS",
    "headline": "组件，\n构建一致",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-8",
    "title": "一页界面的视觉推演练习",
    "topic": "视觉设计",
    "platform": "哔哩哔哩",
    "style": "editorial",
    "kicker": "DESIGN EXPLORATION",
    "headline": "一页界面\n多种可能",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-9",
    "title": "设计复盘：从完成到想明白",
    "topic": "设计思考",
    "platform": "微信公众号",
    "style": "journal",
    "kicker": "THINKING IN DESIGN",
    "headline": "完成之后，\n再多想一步。",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-10",
    "title": "设计规范如何在协作中落地",
    "topic": "设计系统",
    "platform": "微信公众号",
    "style": "grid",
    "kicker": "SYSTEMATIC DESIGN",
    "headline": "从规范\n到共识",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-11",
    "title": "如何提出一个更好的设计问题",
    "topic": "设计思考",
    "platform": "微信公众号",
    "style": "question",
    "kicker": "ASK BETTER QUESTIONS",
    "headline": "好的设计\n始于提问",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-12",
    "title": "把观察转化为设计判断",
    "topic": "工具与方法",
    "platform": "微信公众号",
    "style": "observe",
    "kicker": "OBSERVE & REFLECT",
    "headline": "看见，\n然后理解。",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  }
],
  // 案例扩展字段（按真实资料填写，不填时显示待补充）：
  // types: ['APP','小程序'] 同一项目可包含多端；example:false 仅用于真实项目。
  // caseStudy: {period,role,status,summary,highlightImage,highlights:[],background,
  // problem,goal,strategies:[{problem,decision,solution}],ai,
  // modules:[{title,conclusion,description,image,before,after}],
  // system,adaptation,delivery,deliveryImage,result,tradeoff,next}
  projects: [
    {"id": "daily", "industry": "人工智能", "featured": true, "example": false, "title": "恒智易 AI · 2.0—3.0 产品升级", "category": "APP", "types": ["APP 设计", "H5 与运营设计", "设计系统"], "subtitle": "从核心对话到多场景智能体，独立负责全版本 UI/UX 与功能迭代设计", "theme": "lavender", "visual": "mobile", "mark": "恒", "cover": "assets/hengzhiyi/cover.svg", "label": "AI PRODUCT DESIGN", "tags": ["UI/UX 升级", "iPad 适配", "智能体设计"], "caseStudy": {"period": "2.0—3.0 持续迭代", "role": "UI设计经理 · 独立负责 UI/UX 设计", "status": "产品升级与功能持续迭代", "summary": "独立负责恒智易 AI 从 2.0 到 3.0 的全部界面设计与功能迭代设计，并覆盖前期 1.0—2.0 体验升级、iPad 适配、智能体场景、运营活动和视觉规范搭建。以核心对话为基础，逐步完善多场景 AI 产品体验。", "highlightImage": "assets/hengzhiyi/cover.svg", "highlights": ["版本升级：1.0—2.0 UI/UX 优化，再到 3.0 黑白视觉升级", "场景拓展：龙虾、文案、视频、生图与健康手表相关设计", "持续迭代：深度思考、智能搜索、长期记忆与中秋盲盒活动"], "background": "恒智易 AI 以智能对话为核心，逐步延伸至内容创作、生活服务与 AI 硬件等场景。案例以版本演进与功能模块组织，展示本人独立负责的界面与交互设计范围。", "problem": "随着智能体类型、对话能力及活动入口增加，需要在同一产品中协调不同场景的信息层级与操作方式。", "goal": "围绕核心对话建立清晰的功能组织，完成多端适配，并在持续迭代中保持视觉与交互的一致性。", "strategies": [{"problem": "版本持续迭代，功能入口逐步增加", "decision": "围绕对话主流程组织功能层级", "solution": "整合推荐问题、输入区、智能体引用及深度思考、智能搜索入口"}, {"problem": "不同智能体的任务和输出形式不同", "decision": "保持共用交互骨架，区分任务内容", "solution": "分别设计文案、生图、视频等场景的输入、生成与结果展示界面"}], "modules": [{"title": "01 / 从 2.0 体验升级到 3.0 视觉焕新", "conclusion": "延续核心对话结构，建立新的黑白视觉表达。", "description": "前期完成 1.0—2.0 UI/UX 升级；在 2.0—3.0 阶段持续负责界面和功能迭代。以下为两个版本的代表首页，呈现紫色视觉向黑白视觉的演进。", "before": "assets/hengzhiyi/v2.png", "after": "assets/hengzhiyi/v3.png"}, {"title": "02 / 多端适配与国际化界面", "conclusion": "从手机界面延伸至 iPad 与多语言版本。", "description": "负责 iPad 适配，以及印尼语、英文 APP 的相关界面设计。在不同屏幕与语言环境下整理信息层级、布局和组件使用方式。"}, {"title": "03 / 智能体与 AI 创作场景", "conclusion": "覆盖龙虾、爆款文案、AI 视频、AI 生图与健康手表相关设计。", "description": "围绕不同任务设计对应的功能入口与操作流程；以下展示 AI 生图与 AI 视频的代表界面。", "gallery": [{"src": "assets/hengzhiyi/image.png", "label": "AI 生图"}, {"src": "assets/hengzhiyi/video.png", "label": "AI 视频"}]}, {"title": "04 / 持续功能迭代与运营活动", "conclusion": "围绕对话能力、用户管理与活动参与持续完善体验。", "description": "功能迭代涵盖深度思考与智能搜索、对话删除、用户长期记忆、青少年模式与密码设置、分享交互、线下活动扫码签到；运营设计包括中秋盲盒、营销活动弹窗与定制 H5。"}, {"title": "05 / 视觉规范与组件搭建", "conclusion": "将版本迭代中的视觉规则沉淀为共用设计基础。", "description": "负责视觉规范搭建及组件整理，覆盖基础样式、常用界面元素与交互状态，为 3.0 视觉升级与后续功能迭代提供一致的设计依据。"}], "system": "搭建设计规范与组件库，将字体、色彩、布局及常用控件纳入统一规则，并随版本升级持续维护。", "adaptation": "覆盖手机 APP、iPad 适配以及印尼语、英文相关界面；按功能整理对话输入、生成中、终止与结果等状态。", "delivery": "围绕版本更新与功能需求持续输出界面和交互设计。本人负责范围为 UI/UX 设计，不将功能研发归为个人设计成果。", "result": "完成从版本升级、智能体场景到运营活动的连续设计工作，形成 2.0—3.0 界面及功能迭代设计资产。", "tradeoff": "在保留用户熟悉的核心对话结构基础上，协调新增能力的可见性与页面简洁度。", "next": "后续可结合真实上线反馈与业务数据，补充各项改进的验证结果。"}},
    {id:'workspace',industry:'企业服务',featured:true,title:'序 · 协同工作台',category:'后台系统',subtitle:'让信息各就其位，让协作清晰有序',theme:'lilac',visual:'dashboard',label:'WORKSPACE DESIGN',tags:['后台系统','数据可视化']},
    {id:'objects',industry:'生活方式',featured:true,title:'物集 · 家居灵感网站',category:'官网',subtitle:'在留白之间，发现日常之美',theme:'sand',visual:'web',label:'WEB EXPERIENCE',tags:['网页设计','品牌视觉']},
    {id:'finance',industry:'金融',featured:true,title:'有数 · 资产管理',category:'APP',subtitle:'从信息层级出发，探索清晰的数字体验',theme:'blue',visual:'finance',label:'FINANCE INTERFACE',tags:['移动端','信息设计']},
    {id:'system',industry:'通用',featured:true,title:'Forma · 界面设计系统',category:'设计系统',subtitle:'从基础规范到组件，建立一致的设计语言',theme:'rose',visual:'system',label:'DESIGN SYSTEM',tags:['组件库','设计规范']},
    {id:'travel',industry:'文旅',featured:true,title:'山野 · 旅行探索',category:'官网',subtitle:'让每一次出发，都有值得期待的目的地',theme:'olive',visual:'travel',label:'TRAVEL EXPERIENCE',tags:['响应式设计','视觉探索']}
  ]
};
