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
    {id:'daily',industry:'生活方式',featured:true,title:'拾光 · 生活方式 App',category:'APP',subtitle:'用轻盈的界面，收藏生活里的小美好',theme:'mint',visual:'mobile',label:'MOBILE EXPERIENCE',tags:['UI 设计','交互体验']},
    {id:'workspace',industry:'企业服务',featured:true,title:'序 · 协同工作台',category:'后台系统',subtitle:'让信息各就其位，让协作清晰有序',theme:'lilac',visual:'dashboard',label:'WORKSPACE DESIGN',tags:['后台系统','数据可视化']},
    {id:'objects',industry:'生活方式',featured:true,title:'物集 · 家居灵感网站',category:'官网',subtitle:'在留白之间，发现日常之美',theme:'sand',visual:'web',label:'WEB EXPERIENCE',tags:['网页设计','品牌视觉']},
    {id:'finance',industry:'金融',featured:true,title:'有数 · 资产管理',category:'APP',subtitle:'从信息层级出发，探索清晰的数字体验',theme:'blue',visual:'finance',label:'FINANCE INTERFACE',tags:['移动端','信息设计']},
    {id:'system',industry:'通用',featured:true,title:'Forma · 界面设计系统',category:'设计系统',subtitle:'从基础规范到组件，建立一致的设计语言',theme:'rose',visual:'system',label:'DESIGN SYSTEM',tags:['组件库','设计规范']},
    {id:'travel',industry:'文旅',featured:true,title:'山野 · 旅行探索',category:'官网',subtitle:'让每一次出发，都有值得期待的目的地',theme:'olive',visual:'travel',label:'TRAVEL EXPERIENCE',tags:['响应式设计','视觉探索']}
  ]
};
