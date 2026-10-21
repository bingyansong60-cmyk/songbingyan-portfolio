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
  {
    "id": "daily",
    "industry": "人工智能",
    "featured": true,
    "example": false,
    "title": "恒智易 AI App",
    "category": "APP 设计",
    "types": [
      "APP 设计",
      "设计系统"
    ],
    "subtitle": "独立负责 2.0—3.0 UI/UX，持续打磨对话与智能体体验。",
    "theme": "lavender",
    "visual": "mobile",
    "mark": "恒",
    "cover": "assets/hengzhiyi/cover.svg",
    "label": "AI PRODUCT DESIGN",
    "tags": [
      "UI/UX 升级",
      "iPad 适配",
      "智能体设计"
    ],
    "caseStudy": {
      "period": "1.0 → 2.0 → 3.0",
      "role": "独立负责 2.0—3.0 全部 UI/UX 与功能迭代设计",
      "status": "版本升级",
      "summary": "独立负责恒智易 AI 从 2.0 到 3.0 的全部界面设计与功能迭代设计，并覆盖前期 1.0—2.0 体验升级、iPad 适配、智能体场景、运营活动和视觉规范搭建。以核心对话为基础，逐步完善多场景 AI 产品体验。",
      "highlightImage": "assets/hengzhiyi/cover.svg",
      "highlights": [
        "核心体验：对话、输入与生成反馈",
        "场景扩展：创作智能体、AI 硬件与运营活动",
        "设计基础：多端适配、组件规范与视觉升级"
      ],
      "background": "恒智易 AI 以智能对话为核心，逐步延伸至内容创作、生活服务与 AI 硬件等场景。案例以版本演进与功能模块组织，展示本人独立负责的界面与交互设计范围。",
      "problem": "随着智能体类型、对话能力及活动入口增加，需要在同一产品中协调不同场景的信息层级与操作方式。",
      "goal": "围绕核心对话建立清晰的功能组织，完成多端适配，并在持续迭代中保持视觉与交互的一致性。",
      "strategies": [
        {
          "problem": "通用对话与多个专业能力并存，入口容易互相争夺注意力。",
          "decision": "让核心输入始终明确，将专业能力放在可识别的入口中。",
          "solution": "首页推荐问题与输入区协同；智能体承接文案、视频、生图等不同任务。"
        },
        {
          "problem": "能力增加后，页面需要同时容纳功能入口与内容阅读。",
          "decision": "以黑白层级组织内容，把强调色用于少量关键操作。",
          "solution": "3.0 保持对话结构，调整视觉层级；深度思考和智能搜索作为输入区的可选能力。"
        }
      ],
      "modules": [
        {
          "title": "核心对话与 3.0 视觉升级",
          "question": "增加能力后，如何让用户依然知道从哪里开始？",
          "conclusion": "保留熟悉的对话结构，用新的层级组织推荐问题与输入入口。",
          "description": "2.0 与 3.0 的代表首页展示了紫色视觉向黑白视觉的演进。视觉变化之外，关注信息密度和主操作的位置。",
          "gallery": [],
          "before": "assets/hengzhiyi/v2.png",
          "after": "assets/hengzhiyi/v3.png",
          "beforeLabel": "2.0 · 紫色视觉",
          "afterLabel": "3.0 · 黑白视觉"
        },
        {
          "title": "智能体与 AI 创作",
          "question": "同一产品如何承载不同的输入和输出形式？",
          "conclusion": "以任务区分创作场景，在共用框架内呈现各自的操作与结果。",
          "description": "负责龙虾、爆款文案、AI 视频、AI 生图与健康手表相关设计。以下以生图、视频入口展示场景组织。",
          "gallery": [
            {
              "src": "assets/hengzhiyi/image.png",
              "label": "AI 生图"
            },
            {
              "src": "assets/hengzhiyi/video.png",
              "label": "AI 视频"
            }
          ]
        },
        {
          "title": "多端适配与持续迭代",
          "question": "新增功能如何融入既有体验？",
          "conclusion": "围绕对话主流程扩展功能，同时维护不同设备和状态的一致性。",
          "description": "覆盖 iPad 适配、深度思考、智能搜索、长期记忆、对话删除、分享与扫码签到；中秋盲盒、营销弹窗和定制 H5 作为运营场景展开。",
          "gallery": []
        }
      ],
      "system": "搭建设计规范与组件库，将字体、色彩、布局及常用控件纳入统一规则，并随版本升级持续维护。",
      "adaptation": "覆盖手机 APP、iPad 适配以及印尼语、英文相关界面；按功能整理对话输入、生成中、终止与结果等状态。",
      "delivery": "交付连续版本的界面、交互状态与共用组件，并随功能增加维护设计规则。",
      "result": "完成从版本升级、智能体场景到运营活动的连续设计工作，形成 2.0—3.0 界面及功能迭代设计资产。",
      "tradeoff": "首页承载更多能力时，需要平衡功能可见性与对话空间，避免每一个新功能都占据同等视觉权重。",
      "next": "持续关注首次提问、能力选择和生成结果使用环节，结合真实使用反馈验证入口是否清楚。",
      "focus": "让不断增长的 AI 能力，保持清晰可用。",
      "workflow": [
        "进入对话",
        "选择能力",
        "描述需求",
        "查看生成过程",
        "使用结果"
      ]
    },
    "phase": "版本升级 · 持续迭代",
    "scope": "独立负责 2.0—3.0 全部 UI/UX 与功能迭代设计",
    "coverScreens": [
      "assets/hengzhiyi/v2.png",
      "assets/hengzhiyi/v3.png"
    ],
    "coverLayout": "phone",
    "sourceRow": 2
  },
  {
    "id": "hzy-work",
    "title": "恒智易 AI Work",
    "category": "桌面端设计",
    "types": [
      "桌面端设计"
    ],
    "industry": "人工智能",
    "subtitle": "把对话、素材与生成结果组织成连续的桌面工作流。",
    "scope": "独立负责 1.0 UI/UX 设计",
    "phase": "0 → 1 产品设计",
    "cover": "assets/projects/web/work-home.webp",
    "coverScreens": [
      "assets/projects/web/work-home.webp",
      "assets/projects/web/work-ppt.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "工作流",
      "信息架构",
      "状态设计"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 3,
    "coverLayout": "desktop",
    "caseStudy": {
      "focus": "从一次对话，走向可以完成工作的 AI 工作台。",
      "role": "独立负责 1.0 UI/UX 设计",
      "summary": "恒智易 AI Work 是面向桌面场景的 AI 工作产品。我负责 1.0 UI/UX 设计，围绕会话、个人素材与生成任务组织工作空间，覆盖 PPT、数据分析、文案和生图等场景。",
      "background": "桌面工作通常需要反复查看上下文、引用素材并处理结果。界面需要兼顾持续对话和产物操作。",
      "problem": "会话、文件与生成任务同时出现，用户需要辨认当前位置、当前任务以及下一步。",
      "goal": "把输入、任务过程和结果操作连接起来，让长流程中的状态保持可见。",
      "highlights": [
        "会话与功能入口分层",
        "生成过程与产物预览并置",
        "素材作为可复用的工作输入"
      ],
      "workflow": [
        "选择任务",
        "输入 / 引用素材",
        "确认大纲",
        "生成",
        "预览与继续编辑"
      ],
      "strategies": [
        {
          "problem": "聊天记录和实际产物需要同时查看。",
          "decision": "保留上下文，将任务结果独立呈现。",
          "solution": "侧边栏组织会话；主内容区与产物区域承担不同信息。"
        },
        {
          "problem": "生成任务并非一次点击立即完成。",
          "decision": "把不可见的等待拆为可理解的步骤。",
          "solution": "PPT 流程包含大纲、风格、生成中及完成预览等阶段。"
        }
      ],
      "modules": [
        {
          "title": "工作空间与会话导航",
          "question": "如何在多次任务之间找回上下文？",
          "conclusion": "用稳定的侧边导航承载历史与功能入口。",
          "description": "会话的重命名、批量删除、空状态与侧边栏收起构成完整的管理体验。",
          "gallery": [
            {
              "src": "assets/projects/web/work-home.webp",
              "label": "桌面主工作台"
            }
          ]
        },
        {
          "title": "从大纲到 PPT 产物",
          "question": "生成完成后，用户如何继续使用结果？",
          "conclusion": "把生成步骤与最终预览放在同一条任务链中。",
          "description": "大纲与风格选择是用户介入结果的节点；完成页面保留会话上下文与产物预览。",
          "gallery": [
            {
              "src": "assets/projects/web/work-ppt.webp",
              "label": "PPT 生成完成与预览"
            }
          ]
        },
        {
          "title": "个人素材与文件管理",
          "question": "素材如何成为下一次任务的输入？",
          "conclusion": "用列表与文件夹组织可复用资料。",
          "description": "兼顾素材默认态、搜索、文件夹创建、批量操作与文件预览，避免只有上传入口而缺少后续管理。",
          "gallery": [
            {
              "src": "assets/projects/web/work-assets.webp",
              "label": "个人素材管理"
            }
          ]
        }
      ],
      "system": "采用共用按钮、图标、输入与对话规则，覆盖 Windows 和 Mac 侧边栏相关设计。",
      "adaptation": "整理上传图片与文件、输入内容扩展、空状态、删除确认和任务状态等界面。",
      "delivery": "完成桌面端 1.0 主流程及交互状态设计。",
      "result": "形成会话、素材和生成任务相互连接的桌面端设计方案。",
      "tradeoff": "更多工作信息能够帮助任务推进，也会增加界面密度；通过分区和可收起导航为当前任务留出空间。",
      "next": "关注任务中断后的恢复、长对话中的信息定位，以及产物生成后的继续编辑体验。"
    }
  },
  {
    "id": "hzy-web",
    "title": "恒智易 AI 网页版",
    "category": "网站设计",
    "types": [
      "网站设计"
    ],
    "industry": "人工智能",
    "subtitle": "围绕可读性与专业场景，持续打磨网页端 AI 体验。",
    "scope": "网站字号整体优化、部分智能体与功能迭代设计",
    "phase": "体验优化 · 功能迭代",
    "cover": "assets/projects/web/web-home.webp",
    "coverScreens": [
      "assets/projects/web/web-home.webp",
      "assets/projects/web/web-writing.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "可读性",
      "写作智能体",
      "持续迭代"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 4,
    "coverLayout": "desktop",
    "caseStudy": {
      "focus": "让长内容更好读，让专业能力更容易开始。",
      "role": "网站字号整体优化、部分智能体与功能迭代设计",
      "summary": "在既有网页产品上，负责整体字号优化，以及爆款文章撰写、龙虾智能体等功能迭代。案例重点展示我负责的可读性与场景入口，不将整个网站重建设计归为个人范围。",
      "background": "网页端需要支持较长的回答、文案编辑与多轮操作；字号、阅读宽度和模板入口会直接影响浏览节奏。",
      "problem": "通用对话与专业写作共用空间，需要让用户理解当前模式，并清楚下一步输入什么。",
      "goal": "在延续既有布局的基础上，改善信息层级并补足专业场景的输入引导。",
      "highlights": [
        "全站字号与阅读层级优化",
        "文案模板与写作场景设计",
        "深度思考、智能搜索等输入能力"
      ],
      "workflow": [
        "选择场景",
        "选择模板",
        "输入要求",
        "生成内容",
        "继续调整"
      ],
      "strategies": [
        {
          "problem": "长文本与操作项需要清楚区分。",
          "decision": "让正文阅读与辅助操作形成层级。",
          "solution": "调整网页字号体系，区分导航、提示、正文及操作信息。"
        },
        {
          "problem": "用户知道想写什么，却未必知道如何描述要求。",
          "decision": "用任务模板帮助组织输入。",
          "solution": "通过场景和模板选择，将写作目标落到更明确的输入任务。"
        }
      ],
      "modules": [
        {
          "title": "阅读层级与核心输入",
          "question": "大屏空间怎样服务阅读和操作？",
          "conclusion": "保持输入区域清晰，区分主内容与辅助能力。",
          "description": "深度思考和智能搜索在输入附近可见，帮助用户理解可选能力与当前对话的关系。",
          "gallery": [
            {
              "src": "assets/projects/web/web-home.webp",
              "label": "网页端核心对话"
            }
          ]
        },
        {
          "title": "文案撰写与模板选择",
          "question": "专业写作怎样降低起步负担？",
          "conclusion": "通过模板选择组织需求，再进入内容生成。",
          "description": "模板、模型和输入状态共同构成写作场景；避免只展示生成结果而忽略任务开始的过程。",
          "gallery": [
            {
              "src": "assets/projects/web/web-writing.webp",
              "label": "写作场景与模板"
            }
          ]
        }
      ],
      "system": "统一字号与文字层级，并结合提示、对话框和操作菜单等通用样式。",
      "adaptation": "覆盖长文本、输入内容变化与模板选择状态。",
      "delivery": "交付字号优化与所负责智能体、功能的迭代界面。",
      "result": "在既有网页产品中补充更清晰的阅读层级与写作流程。",
      "tradeoff": "保持既有用户习惯，同时增加专业能力；使用局部层级和输入引导组织变化。",
      "next": "结合长文阅读与模板使用反馈，继续检查文字密度、滚动长度和主要操作的可达性。"
    }
  },
  {
    "id": "hzying",
    "title": "恒智影 AI App",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "人工智能",
    "subtitle": "串联灵感发现、AI 创作与作品发布的完整体验。",
    "scope": "独立负责从 0 到 1 的完整 UI/UX 设计",
    "phase": "0 → 1 产品设计",
    "cover": "assets/projects/web/ying-home.webp",
    "coverScreens": [
      "assets/projects/web/ying-home.webp",
      "assets/projects/web/ying-create.webp",
      "assets/projects/web/ying-publish.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "创作闭环",
      "多模态",
      "设计系统"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 5,
    "coverLayout": "phone",
    "caseStudy": {
      "focus": "让看见灵感，到做出作品，成为连续的体验。",
      "role": "独立负责从 0 到 1 的完整 UI/UX 设计",
      "summary": "恒智影 AI 面向图片、视频及社交平台内容创作。我负责从 0 到 1 的完整 UI/UX，连接作品发现、任务发起、生成预览和发布，并搭建相应的视觉与组件规则。",
      "background": "图片、视频、图文笔记等内容的输入和结果不同，但用户希望从灵感快速进入创作。",
      "problem": "入口种类多、结果比例不同，创作完成后还要处理标题、描述与发布设置。",
      "goal": "以创作任务组织入口，让生成前后的操作连贯，并保留不同内容类型的表达空间。",
      "highlights": [
        "发现 → 创作 → 发布的完整链路",
        "图片、视频与平台内容的场景区分",
        "按钮、输入、状态与 AI 对话组件"
      ],
      "workflow": [
        "发现灵感",
        "选择创作类型",
        "描述想法",
        "预览结果",
        "发布作品"
      ],
      "strategies": [
        {
          "problem": "用户从参考作品进入创作，缺少明确任务时容易停留在浏览。",
          "decision": "连接灵感内容与任务入口。",
          "solution": "发现页展示作品；创作入口按全能 Agent、图片、视频及平台素材组织。"
        },
        {
          "problem": "生成后仍有内容编辑和传播设置。",
          "decision": "将发布视为创作流程的一部分。",
          "solution": "在发布页面明确标题、描述及“允许他人做同款”选项。"
        }
      ],
      "modules": [
        {
          "title": "发现内容与创作入口",
          "question": "如何让浏览自然转向创作？",
          "conclusion": "作品作为灵感入口，任务类型作为行动入口。",
          "description": "用内容流呈现作品，同时保留清楚的创作路径。不同入口服务不同程度的创作意图。",
          "gallery": [
            {
              "src": "assets/projects/web/ying-home.webp",
              "label": "创作发现与内容展示"
            }
          ]
        },
        {
          "title": "多模态生成体验",
          "question": "不同输出如何共用一个易理解的交互框架？",
          "conclusion": "保持对话输入一致，让结果按内容类型呈现。",
          "description": "设计包含图片、视频、图文笔记与不同画幅的展示状态，兼顾连续对话与结果查看。",
          "gallery": [
            {
              "src": "assets/projects/web/ying-create.webp",
              "label": "全能 Agent 任务入口"
            }
          ]
        },
        {
          "title": "从结果到作品发布",
          "question": "生成完成后还需要用户做哪些决定？",
          "conclusion": "把内容填写与复用权限集中在发布步骤。",
          "description": "标题、描述和“做同款”开关放在同一流程，让用户在发布前理解作品展示及使用方式。",
          "gallery": [
            {
              "src": "assets/projects/web/ying-publish.webp",
              "label": "发布作品与复用设置"
            }
          ]
        }
      ],
      "system": "设计稿包含基础规范及 Button、Input、Status、Card、AI Chat、Navigation 等组件分类。",
      "adaptation": "覆盖不同图片比例、视频预览、多图展示、登录认证和订阅积分相关状态。",
      "delivery": "完成从发现到创作发布的 UI/UX 及配套设计系统。",
      "result": "形成覆盖创作前、中、后的完整界面体系。",
      "tradeoff": "任务入口的丰富度与初次使用的理解成本需要平衡；优先按用户想完成的事情命名与分组。",
      "next": "关注从浏览到首次生成、从生成到发布的衔接点，并根据真实使用情况调整入口与提示。"
    }
  },
  {
    "id": "hzy-global",
    "title": "恒智易 · 海外版",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "人工智能",
    "subtitle": "Adapt the AI conversation experience for English-speaking users.",
    "scope": "英文与印尼语界面适配设计",
    "phase": "国际化 · 多语言适配",
    "cover": "assets/projects/web/overseas-home.webp",
    "coverScreens": [
      "assets/projects/web/overseas-chat.webp",
      "assets/projects/web/overseas-home.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "English UI",
      "Localization",
      "AI Assistant"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 6,
    "coverLayout": "phone",
    "caseStudy": {
      "language": "en",
      "focus": "A familiar AI experience, across languages.",
      "role": "English and Indonesian interface adaptation",
      "summary": "The overseas edition adapts the Hengzhiyi AI experience for English and Indonesian users. This case presents the English UI, focusing on conversation entry, navigation labels and the relationship between acquisition and the in-app experience.",
      "background": "A multilingual interface needs to keep its navigation and task structure understandable as labels and message lengths change.",
      "problem": "Translated text occupies different amounts of space. Product entry, sign-in prompts and the chat composer need to retain a clear hierarchy.",
      "goal": "Keep the core conversation flow recognizable while adapting its interface language and layout.",
      "highlights": [
        "English and Indonesian UI sets",
        "A consistent conversation structure",
        "Entry, navigation and messaging"
      ],
      "workflow": [
        "Discover",
        "Enter the app",
        "Start a conversation",
        "Use the response"
      ],
      "strategies": [
        {
          "problem": "Text length changes across languages.",
          "decision": "Preserve hierarchy through flexible spacing and clear labels.",
          "solution": "Review navigation, sign-in prompts and the message composer as a connected system."
        }
      ],
      "modules": [
        {
          "title": "An approachable entry point",
          "question": "How can a new user understand what the product offers?",
          "conclusion": "Use a concise product promise and one clear action.",
          "description": "The English acquisition screen introduces the AI assistant and directs users to the app.",
          "gallery": [
            {
              "src": "assets/projects/web/overseas-home.webp",
              "label": "English product entry"
            }
          ]
        },
        {
          "title": "Conversation and navigation",
          "question": "How can the interface remain clear when the language changes?",
          "conclusion": "Keep the message composer and primary navigation easy to identify.",
          "description": "The English screens separate chat, AI hardware and personal areas. A side panel provides a new-chat action and personal materials while keeping conversation history available.",
          "gallery": [
            {
              "src": "assets/projects/web/overseas-chat.webp",
              "label": "English conversation screen"
            },
            {
              "src": "assets/projects/web/overseas-nav.webp",
              "label": "Conversation history and navigation"
            }
          ]
        }
      ],
      "system": "Maintain a shared visual language across the English and Indonesian UI sets.",
      "adaptation": "Review text expansion, navigation labels and input prompts across languages.",
      "delivery": "English and Indonesian design sets, with English screens presented in this case.",
      "result": "A localized interface set that retains the core AI conversation structure.",
      "tradeoff": "Keep the product recognizable while allowing room for language-specific wording and layout.",
      "next": "Validate wording and usability with local users before drawing conclusions about market performance."
    }
  },
  {
    "id": "ezvend",
    "title": "EZvend App",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "硬件",
    "subtitle": "把设备、商品、订单与资金整理为清晰的经营工具。",
    "scope": "独立负责 1.0—2.0 视觉升级及持续功能迭代",
    "phase": "版本升级 · 海外经营工具",
    "cover": "assets/projects/web/ezvend-home.webp",
    "coverScreens": [
      "assets/projects/web/ezvend-home.webp",
      "assets/projects/web/ezvend-device.webp",
      "assets/projects/web/ezvend-orders.webp"
    ],
    "theme": "blue",
    "mark": "E",
    "tags": [
      "经营效率",
      "设备管理",
      "复杂状态"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 7,
    "coverLayout": "phone",
    "caseStudy": {
      "focus": "让经营者从看到问题，到找到操作。",
      "role": "独立负责 1.0—2.0 视觉升级及持续功能迭代",
      "summary": "EZvend 面向海外售货设备经营场景。我负责 1.0—2.0 全新视觉升级及多轮功能迭代，覆盖经营数据、设备状态、商品、订单和钱包等业务。",
      "background": "经营者需要在移动端查看经营情况，并处理分散设备与订单中的具体问题。",
      "problem": "数据、设备属性与订单状态繁多，页面需要帮助用户判断优先处理什么，而非仅罗列信息。",
      "goal": "让概览支持判断，让列表支持定位，让状态和操作对应起来。",
      "highlights": [
        "经营概览与快捷入口",
        "设备状态筛选与停售标识",
        "订单、商品云库和钱包等持续迭代"
      ],
      "workflow": [
        "查看经营概览",
        "定位设备 / 订单",
        "筛选状态",
        "处理问题",
        "检查结果"
      ],
      "strategies": [
        {
          "problem": "经营者既要掌握整体情况，也要进入具体操作。",
          "decision": "将概览指标与业务入口区分层级。",
          "solution": "首页汇总经营数据，设备与订单页承接具体查询和管理。"
        },
        {
          "problem": "设备有销售、联网、信号和库存等多个状态。",
          "decision": "让状态成为定位问题的工具。",
          "solution": "在列表中配合筛选维度、标签与停售设备标识。"
        }
      ],
      "modules": [
        {
          "title": "经营概览",
          "question": "哪些信息适合在打开 App 时先看到？",
          "conclusion": "以经营数据建立概况，再提供业务快捷入口。",
          "description": "交易、退款等信息与设备、订单等操作保持层级差异，避免概览变成所有功能的平铺。",
          "gallery": [
            {
              "src": "assets/projects/web/ezvend-home.webp",
              "label": "海外经营概览"
            }
          ]
        },
        {
          "title": "设备状态与筛选",
          "question": "多维设备状态怎样帮助定位问题？",
          "conclusion": "把状态差异和筛选条件放在同一查询语境。",
          "description": "展示销售、在线、信号与库存等维度，并为停售设备提供辨识；信息组织服务后续设备管理。",
          "gallery": [
            {
              "src": "assets/projects/web/ezvend-device.webp",
              "label": "设备列表与状态筛选"
            }
          ]
        },
        {
          "title": "订单与持续业务迭代",
          "question": "功能不断增加时如何保持经营流程连续？",
          "conclusion": "在既有业务结构中扩展筛选、商品与资金能力。",
          "description": "迭代涉及设备编号与名称筛选、陈列模板、商品云库、钱包概览、温控配置和新品申请等模块。",
          "gallery": [
            {
              "src": "assets/projects/web/ezvend-orders.webp",
              "label": "订单列表与状态组织"
            }
          ]
        }
      ],
      "system": "维护组件、图标、变量组件库和 Design Guidelines，使新增功能遵循相同的视觉与交互规则。",
      "adaptation": "覆盖英文界面、设备异常、空列表、搜索无结果、测试执行与终止等状态。",
      "delivery": "交付视觉升级及连续业务功能迭代的移动端界面。",
      "result": "形成围绕经营概览、设备和交易管理展开的海外工具型 App 设计体系。",
      "tradeoff": "经营信息需要完整，但移动屏幕有限；通过概览、筛选、详情逐步展开，而不是在单页堆叠全部属性。",
      "next": "关注筛选条件的使用、异常设备的定位路径，以及高频经营任务所需步骤。"
    }
  },
  {
    "id": "hsh-merchant",
    "title": "恒生活 · 商家端 App",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "企业服务",
    "subtitle": "梳理经营首页、订单与售后中的复杂信息和操作。",
    "scope": "首页改版、订单相关改版与多轮功能迭代设计",
    "phase": "业务改版 · 持续迭代",
    "cover": "assets/projects/web/merchant-home.webp",
    "coverScreens": [
      "assets/projects/web/merchant-home.webp",
      "assets/projects/web/merchant-order.webp",
      "assets/projects/web/merchant-service.webp"
    ],
    "theme": "sand",
    "mark": "恒",
    "tags": [
      "订单体系",
      "状态设计",
      "经营工具"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 8,
    "coverLayout": "phone",
    "caseStudy": {
      "focus": "让复杂订单有层次，让处理动作有依据。",
      "role": "首页改版、订单相关改版与多轮功能迭代设计",
      "summary": "恒生活商家端承载设备经营与交易管理。我负责首页、订单相关改版及多轮功能迭代，重点处理订单查询、售后处理、结算与经营入口之间的信息关系。",
      "background": "商家会在待付款、已完成、异常和售后等不同状态间处理业务，同一订单可能关联不同操作和明细。",
      "problem": "订单信息多、状态多、操作条件不同，界面需要让当前状态、处理依据和可执行动作同时清楚。",
      "goal": "从状态出发组织信息和操作，帮助用户定位订单、理解异常并完成处理。",
      "highlights": [
        "首页经营入口与信息组织",
        "订单列表、筛选和状态体系",
        "售后、修正订单与结算相关流程"
      ],
      "workflow": [
        "定位订单",
        "查看状态与明细",
        "选择处理动作",
        "确认提交",
        "查看处理结果"
      ],
      "strategies": [
        {
          "problem": "不同状态的订单，用户关注点不同。",
          "decision": "让状态决定信息优先级和主要操作。",
          "solution": "区分待付款、售后处理中、已完成及异常等页面与标签。"
        },
        {
          "problem": "退款、补扣等操作需要明确处理对象。",
          "decision": "在提交前保持商品与明细可核对。",
          "solution": "以商品明细、处理确认和结果通知连接整个操作过程。"
        }
      ],
      "modules": [
        {
          "title": "经营首页",
          "question": "业务入口较多时，首页如何保持可扫描？",
          "conclusion": "按经营任务分组，并区分概览与操作。",
          "description": "首页改版承载设备、商品和活动等入口，为深入业务提供清晰起点。",
          "gallery": [
            {
              "src": "assets/projects/web/merchant-home.webp",
              "label": "经营首页改版"
            }
          ]
        },
        {
          "title": "订单查询与定位",
          "question": "如何从大量订单中找到需要处理的一笔？",
          "conclusion": "以搜索、筛选和状态标签构成查询路径。",
          "description": "列表与详情承担不同信息量，空结果、无订单与异常状态也纳入界面设计。",
          "gallery": [
            {
              "src": "assets/projects/web/merchant-order.webp",
              "label": "订单列表与查询"
            }
          ]
        },
        {
          "title": "售后处理与状态闭环",
          "question": "用户如何确认自己处理的是正确商品和金额？",
          "conclusion": "在执行动作前突出明细，在执行后提供状态反馈。",
          "description": "围绕售后待处理、处理中、完成，以及修正订单、退款申请等场景组织信息。",
          "gallery": [
            {
              "src": "assets/projects/web/merchant-service.webp",
              "label": "售后明细与处理动作"
            }
          ]
        }
      ],
      "system": "在首页、列表、弹窗和订单详情之间复用视觉和状态表达。",
      "adaptation": "覆盖多商品、超长明细、待付款、异常、退款与收款开户等不同业务状态。",
      "delivery": "完成首页和订单改版，以及商品、收款账户和结算相关功能的持续设计交付。",
      "result": "梳理经营入口与订单处理的信息层级，覆盖主要业务状态及操作反馈。",
      "tradeoff": "业务详情需要保留，主要处理动作又必须醒目；使用分组、展开与明确的底部操作减少相互干扰。",
      "next": "结合客服与经营者反馈，检查异常原因、处理动作和结果状态是否容易理解。"
    }
  },
  {
    "id": "grabot",
    "title": "Grabot 官网",
    "category": "网站设计",
    "types": [
      "网站设计"
    ],
    "industry": "硬件",
    "subtitle": "把硬件产品的能力，转化为清楚的品牌与产品表达。",
    "scope": "独立负责官网从 0 到 1 的设计",
    "phase": "0 → 1 品牌官网",
    "cover": "assets/projects/web/grabot-home.webp",
    "coverScreens": [
      "assets/projects/web/grabot-home.webp",
      "assets/projects/web/grabot-product.webp"
    ],
    "theme": "blue",
    "mark": "G",
    "tags": [
      "品牌表达",
      "产品展示",
      "响应式设计"
    ],
    "featured": true,
    "example": false,
    "sourceRow": 9,
    "coverLayout": "desktop",
    "caseStudy": {
      "focus": "从认识品牌，到理解产品，再到建立联系。",
      "role": "独立负责官网从 0 到 1 的设计",
      "summary": "Grabot 官网面向硬件产品展示。我负责从 0 到 1 的网站设计，将品牌介绍、产品展示和联系入口组织为连续的浏览路径，并考虑不同屏幕下的内容呈现。",
      "background": "硬件官网需要同时表达品牌、解释产品能力，并帮助访客判断产品是否适合自己的使用场景。",
      "problem": "仅有产品大图难以说明差异，信息过密又会削弱浏览节奏。",
      "goal": "用清晰的页面层级连接品牌认识、产品了解和联系咨询。",
      "highlights": [
        "品牌首页与产品表达",
        "产品系列、细节与参数组织",
        "移动端与小屏幕适配"
      ],
      "workflow": [
        "认识品牌",
        "了解产品",
        "查看细节",
        "联系咨询"
      ],
      "strategies": [
        {
          "problem": "访客需要从品牌叙事进入具体产品。",
          "decision": "先建立整体印象，再逐步展开能力和细节。",
          "solution": "首页以分区叙事连接产品展示、应用信息与行动入口。"
        },
        {
          "problem": "设备信息在不同屏幕上占用空间差异大。",
          "decision": "保持内容顺序稳定，调整图文布局。",
          "solution": "分别设计桌面、小屏幕电脑与移动端页面。"
        }
      ],
      "modules": [
        {
          "title": "品牌首屏与页面节奏",
          "question": "如何让硬件官网既有视觉记忆，也能传递信息？",
          "conclusion": "用产品视觉建立第一印象，再用分区内容解释能力。",
          "description": "首屏、产品展示和后续信息形成递进结构，让页面有清晰的浏览顺序。",
          "gallery": [
            {
              "src": "assets/projects/web/grabot-home.webp",
              "label": "品牌首页完整页面"
            }
          ]
        },
        {
          "title": "产品展示与信息层级",
          "question": "用户如何了解不同产品与具体细节？",
          "conclusion": "将产品形态、差异和细节分层呈现。",
          "description": "以产品页承接首页兴趣，避免将所有参数挤入首屏。",
          "gallery": [
            {
              "src": "assets/projects/web/grabot-product.webp",
              "label": "产品页与信息展开"
            }
          ]
        },
        {
          "title": "移动端适配",
          "question": "缩小屏幕后，什么应该保持不变？",
          "conclusion": "保留内容优先级，重新安排图文与操作。",
          "description": "移动端延续品牌表达和主要浏览路径，同时调整排版与触控空间。",
          "gallery": [
            {
              "src": "assets/projects/web/grabot-mobile.webp",
              "label": "移动端页面"
            }
          ]
        }
      ],
      "system": "维护官网字体、色彩、按钮、导航与页面间距等共用规范。",
      "adaptation": "设计包含桌面、小屏幕电脑、移动端与产品切换交互。",
      "delivery": "交付首页、产品、关于和联系等页面及适配设计。",
      "result": "形成从品牌展示到产品理解和联系入口的官网页面体系。",
      "tradeoff": "视觉表现与产品信息需要相互支持；通过分区节奏保持品牌氛围，同时为具体内容留下阅读空间。",
      "next": "观察访客从首页进入产品页、再到联系入口的路径，验证内容顺序与行动入口的位置。"
    }
  },
  {
    "id": "drama",
    "title": "短剧 · 恒生活 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "内容娱乐",
    "subtitle": "从找剧到继续观看，保持内容消费的连续性。",
    "scope": "0 → 1 完整 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/drama-home.webp",
    "coverScreens": [
      "assets/projects/web/drama-home.webp"
    ],
    "theme": "lilac",
    "mark": "短",
    "tags": [
      "内容发现与观看"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 10,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "从找剧到继续观看，保持内容消费的连续性。",
      "role": "0 → 1 完整 UI 设计",
      "summary": "从找剧到继续观看，保持内容消费的连续性。",
      "background": "内容发现与观看",
      "problem": "如何让用户快速找剧，并在离开后继续观看？",
      "goal": "将剧场、搜索、剧集详情与播放记录分开承担发现、判断和续看的任务。",
      "workflow": [
        "发现内容",
        "查看详情",
        "观看",
        "回到记录"
      ],
      "modules": [
        {
          "title": "内容发现与观看",
          "question": "如何让用户快速找剧，并在离开后继续观看？",
          "conclusion": "将剧场、搜索、剧集详情与播放记录分开承担发现、判断和续看的任务。",
          "description": "内容封面需要足够醒目，搜索和记录则帮助用户明确找回目标。",
          "gallery": [
            {
              "src": "assets/projects/web/drama-home.webp",
              "label": "内容发现与观看 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "内容封面需要足够醒目，搜索和记录则帮助用户明确找回目标。"
    }
  },
  {
    "id": "novel",
    "title": "小说 · 恒生活 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "内容娱乐",
    "subtitle": "以书城、目录与书架连接发现和持续阅读。",
    "scope": "0 → 1 完整 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/novel-home.webp",
    "coverScreens": [
      "assets/projects/web/novel-home.webp"
    ],
    "theme": "sand",
    "mark": "小",
    "tags": [
      "书城与阅读入口"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 11,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "以书城、目录与书架连接发现和持续阅读。",
      "role": "0 → 1 完整 UI 设计",
      "summary": "以书城、目录与书架连接发现和持续阅读。",
      "background": "书城与阅读入口",
      "problem": "如何兼顾找书与已经开始的阅读？",
      "goal": "通过书城分类和搜索组织发现，用作品详情、目录与书架承接持续阅读。",
      "workflow": [
        "浏览书城",
        "查看作品",
        "选择章节",
        "加入书架"
      ],
      "modules": [
        {
          "title": "书城与阅读入口",
          "question": "如何兼顾找书与已经开始的阅读？",
          "conclusion": "通过书城分类和搜索组织发现，用作品详情、目录与书架承接持续阅读。",
          "description": "推荐内容与个人书架服务不同目标；保持入口区分，避免相互干扰。",
          "gallery": [
            {
              "src": "assets/projects/web/novel-home.webp",
              "label": "书城与阅读入口 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "推荐内容与个人书架服务不同目标；保持入口区分，避免相互干扰。"
    }
  },
  {
    "id": "hsh-loan",
    "title": "恒生活借款 · 生活板块",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "生活方式",
    "subtitle": "整理综合服务入口，让生活业务更容易浏览。",
    "scope": "负责恒生活板块与页面改版",
    "phase": "界面设计",
    "cover": "assets/projects/web/loan-home.webp",
    "coverScreens": [
      "assets/projects/web/loan-home.webp"
    ],
    "theme": "blue",
    "mark": "恒",
    "tags": [
      "综合服务信息组织"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 12,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "整理综合服务入口，让生活业务更容易浏览。",
      "role": "负责恒生活板块与页面改版",
      "summary": "整理综合服务入口，让生活业务更容易浏览。",
      "background": "综合服务信息组织",
      "problem": "多种生活服务怎样在同一页面中被理解？",
      "goal": "区分服务入口、活动信息和内容推荐，利用分区控制信息密度。",
      "workflow": [
        "浏览服务",
        "选择入口",
        "查看业务"
      ],
      "modules": [
        {
          "title": "综合服务信息组织",
          "question": "多种生活服务怎样在同一页面中被理解？",
          "conclusion": "区分服务入口、活动信息和内容推荐，利用分区控制信息密度。",
          "description": "本案例展示恒生活板块，不将借款业务全流程归入本人设计范围。",
          "gallery": [
            {
              "src": "assets/projects/web/loan-home.webp",
              "label": "综合服务信息组织 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "本案例展示恒生活板块，不将借款业务全流程归入本人设计范围。"
    }
  },
  {
    "id": "hsh-life",
    "title": "恒生活 · 智能货柜 App",
    "category": "APP 设计",
    "types": [
      "APP 设计"
    ],
    "industry": "生活方式",
    "subtitle": "围绕首页与惠生活，优化服务发现的层级。",
    "scope": "首页与惠生活板块改版",
    "phase": "界面设计",
    "cover": "assets/projects/web/life-home.webp",
    "coverScreens": [
      "assets/projects/web/life-home.webp"
    ],
    "theme": "mint",
    "mark": "恒",
    "tags": [
      "首页与惠生活"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 13,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "围绕首页与惠生活，优化服务发现的层级。",
      "role": "首页与惠生活板块改版",
      "summary": "围绕首页与惠生活，优化服务发现的层级。",
      "background": "首页与惠生活",
      "problem": "多个服务与活动入口同时出现时，如何保持可扫描？",
      "goal": "用入口分组、内容区块与主次字号组织服务和活动。",
      "workflow": [
        "进入首页",
        "发现服务",
        "进入板块"
      ],
      "modules": [
        {
          "title": "首页与惠生活",
          "question": "多个服务与活动入口同时出现时，如何保持可扫描？",
          "conclusion": "用入口分组、内容区块与主次字号组织服务和活动。",
          "description": "运营内容可以变化，基础导航和业务入口需要保持稳定。",
          "gallery": [
            {
              "src": "assets/projects/web/life-home.webp",
              "label": "首页与惠生活 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "运营内容可以变化，基础导航和业务入口需要保持稳定。"
    }
  },
  {
    "id": "medical",
    "title": "恒生活 · 医疗服务",
    "category": "小程序设计",
    "types": [
      "小程序设计",
      "H5 与运营设计"
    ],
    "industry": "医疗",
    "subtitle": "把服务入口、商品信息和个人服务组织得更清楚。",
    "scope": "1.0—2.0 设计与视觉规范统一",
    "phase": "界面设计",
    "cover": "assets/projects/web/medical-home.webp",
    "coverScreens": [
      "assets/projects/web/medical-home.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "医疗服务与信息信任"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 14,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "把服务入口、商品信息和个人服务组织得更清楚。",
      "role": "1.0—2.0 设计与视觉规范统一",
      "summary": "把服务入口、商品信息和个人服务组织得更清楚。",
      "background": "医疗服务与信息信任",
      "problem": "医疗服务如何兼顾内容丰富和信息清楚？",
      "goal": "区分服务类型、商品标签与个人服务入口，以统一视觉减少模块间割裂。",
      "workflow": [
        "选择服务",
        "查看信息",
        "进入服务流程"
      ],
      "modules": [
        {
          "title": "医疗服务与信息信任",
          "question": "医疗服务如何兼顾内容丰富和信息清楚？",
          "conclusion": "区分服务类型、商品标签与个人服务入口，以统一视觉减少模块间割裂。",
          "description": "重点是服务信息与操作的清晰表达，不使用装饰替代必要说明。",
          "gallery": [
            {
              "src": "assets/projects/web/medical-home.webp",
              "label": "医疗服务与信息信任 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "重点是服务信息与操作的清晰表达，不使用装饰替代必要说明。"
    }
  },
  {
    "id": "cabinet",
    "title": "恒生活 · 智能货柜小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "硬件",
    "subtitle": "连接线下扫码、商品选择与支付。",
    "scope": "货柜小程序界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/cabinet-home.webp",
    "coverScreens": [
      "assets/projects/web/cabinet-home.webp"
    ],
    "theme": "sand",
    "mark": "恒",
    "tags": [
      "扫码购物与支付"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 15,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "连接线下扫码、商品选择与支付。",
      "role": "货柜小程序界面设计",
      "summary": "连接线下扫码、商品选择与支付。",
      "background": "扫码购物与支付",
      "problem": "线下扫码之后，用户怎样知道下一步？",
      "goal": "将商品列表、支付方式与结果反馈组织为明确的购买路径。",
      "workflow": [
        "扫码进入",
        "浏览商品",
        "确认购买",
        "支付反馈"
      ],
      "modules": [
        {
          "title": "扫码购物与支付",
          "question": "线下扫码之后，用户怎样知道下一步？",
          "conclusion": "将商品列表、支付方式与结果反馈组织为明确的购买路径。",
          "description": "促销信息和购物动作需要区分层级，避免活动遮挡核心操作。",
          "gallery": [
            {
              "src": "assets/projects/web/cabinet-home.webp",
              "label": "扫码购物与支付 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "促销信息和购物动作需要区分层级，避免活动遮挡核心操作。"
    }
  },
  {
    "id": "charge",
    "title": "劲来电 · 小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "硬件",
    "subtitle": "让充电端口、费用与使用状态易于辨认。",
    "scope": "充电服务小程序界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/charge-home.webp",
    "coverScreens": [
      "assets/projects/web/charge-home.webp"
    ],
    "theme": "blue",
    "mark": "劲",
    "tags": [
      "端口选择与收费说明"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 16,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "让充电端口、费用与使用状态易于辨认。",
      "role": "充电服务小程序界面设计",
      "summary": "让充电端口、费用与使用状态易于辨认。",
      "background": "端口选择与收费说明",
      "problem": "用户如何在开始充电前了解设备和费用？",
      "goal": "把插座信息、可选端口与收费说明放在同一决策路径。",
      "workflow": [
        "选择设备",
        "确认端口和费用",
        "开始充电"
      ],
      "modules": [
        {
          "title": "端口选择与收费说明",
          "question": "用户如何在开始充电前了解设备和费用？",
          "conclusion": "把插座信息、可选端口与收费说明放在同一决策路径。",
          "description": "不同计费方式需要清楚解释，费用说明与启动操作应保持关联。",
          "gallery": [
            {
              "src": "assets/projects/web/charge-home.webp",
              "label": "端口选择与收费说明 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "不同计费方式需要清楚解释，费用说明与启动操作应保持关联。"
    }
  },
  {
    "id": "arcade",
    "title": "小橙游艺 · 小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "潮玩",
    "subtitle": "在轻松的视觉中保留明确的设备和使用入口。",
    "scope": "游艺服务小程序界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/arcade-home.webp",
    "coverScreens": [
      "assets/projects/web/arcade-home.webp"
    ],
    "theme": "mint",
    "mark": "小",
    "tags": [
      "设备入口与游艺服务"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 17,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "在轻松的视觉中保留明确的设备和使用入口。",
      "role": "游艺服务小程序界面设计",
      "summary": "在轻松的视觉中保留明确的设备和使用入口。",
      "background": "设备入口与游艺服务",
      "problem": "不同游艺设备如何共用清晰的操作入口？",
      "goal": "按设备和服务类型组织页面，并区分账户资产与游玩操作。",
      "workflow": [
        "选择设备",
        "选择玩法",
        "使用服务"
      ],
      "modules": [
        {
          "title": "设备入口与游艺服务",
          "question": "不同游艺设备如何共用清晰的操作入口？",
          "conclusion": "按设备和服务类型组织页面，并区分账户资产与游玩操作。",
          "description": "趣味视觉用于营造氛围，支付、金币和设备状态仍需明确。",
          "gallery": [
            {
              "src": "assets/projects/web/arcade-home.webp",
              "label": "设备入口与游艺服务 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "趣味视觉用于营造氛围，支付、金币和设备状态仍需明确。"
    }
  },
  {
    "id": "box",
    "title": "奇点 BOX · 商城小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "潮玩",
    "subtitle": "以主题内容和商品展示组织潮玩购物体验。",
    "scope": "潮玩商城界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/box-home.webp",
    "coverScreens": [
      "assets/projects/web/box-home.webp"
    ],
    "theme": "lilac",
    "mark": "奇",
    "tags": [
      "主题商品与购物路径"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 18,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "以主题内容和商品展示组织潮玩购物体验。",
      "role": "潮玩商城界面设计",
      "summary": "以主题内容和商品展示组织潮玩购物体验。",
      "background": "主题商品与购物路径",
      "problem": "品牌内容如何引导用户理解商品？",
      "goal": "用主题分区组织商品，购物车与个人中心承接购买后的管理。",
      "workflow": [
        "浏览主题",
        "查看商品",
        "购物车",
        "个人订单"
      ],
      "modules": [
        {
          "title": "主题商品与购物路径",
          "question": "品牌内容如何引导用户理解商品？",
          "conclusion": "用主题分区组织商品，购物车与个人中心承接购买后的管理。",
          "description": "品牌氛围与商品可读性并重，重点保持价格、商品和购买入口可辨认。",
          "gallery": [
            {
              "src": "assets/projects/web/box-home.webp",
              "label": "主题商品与购物路径 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "品牌氛围与商品可读性并重，重点保持价格、商品和购买入口可辨认。"
    }
  },
  {
    "id": "marble",
    "title": "弹珠 · 小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "潮玩",
    "subtitle": "区分套餐、储值、存珠和积分等不同资产。",
    "scope": "弹珠服务界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/marble-home.webp",
    "coverScreens": [
      "assets/projects/web/marble-home.webp"
    ],
    "theme": "sand",
    "mark": "弹",
    "tags": [
      "会员资产与游玩入口"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 19,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "区分套餐、储值、存珠和积分等不同资产。",
      "role": "弹珠服务界面设计",
      "summary": "区分套餐、储值、存珠和积分等不同资产。",
      "background": "会员资产与游玩入口",
      "problem": "多种账户资产怎样避免混淆？",
      "goal": "为弹珠数、积分和余额建立各自入口，并将购买套餐与存珠区分。",
      "workflow": [
        "查看资产",
        "选择套餐或存珠",
        "确认操作"
      ],
      "modules": [
        {
          "title": "会员资产与游玩入口",
          "question": "多种账户资产怎样避免混淆？",
          "conclusion": "为弹珠数、积分和余额建立各自入口，并将购买套餐与存珠区分。",
          "description": "资源名称与操作语义需要一致，避免用户把不同资产视为同一余额。",
          "gallery": [
            {
              "src": "assets/projects/web/marble-home.webp",
              "label": "会员资产与游玩入口 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "资源名称与操作语义需要一致，避免用户把不同资产视为同一余额。"
    }
  },
  {
    "id": "blind",
    "title": "奇点 BOX · 扫码小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "潮玩",
    "subtitle": "让手机订单和线下出货状态保持对应。",
    "scope": "扫码购买界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/blind-home.webp",
    "coverScreens": [
      "assets/projects/web/blind-home.webp"
    ],
    "theme": "blue",
    "mark": "奇",
    "tags": [
      "购买与出货反馈"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 20,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "让手机订单和线下出货状态保持对应。",
      "role": "扫码购买界面设计",
      "summary": "让手机订单和线下出货状态保持对应。",
      "background": "购买与出货反馈",
      "problem": "支付完成后，用户如何确认机器正在处理？",
      "goal": "把确认订单、支付结果与出货中状态连接成完整反馈链。",
      "workflow": [
        "确认订单",
        "支付",
        "出货中",
        "查看结果"
      ],
      "modules": [
        {
          "title": "购买与出货反馈",
          "question": "支付完成后，用户如何确认机器正在处理？",
          "conclusion": "把确认订单、支付结果与出货中状态连接成完整反馈链。",
          "description": "支付成功和出货成功是不同状态，界面需要分别解释。",
          "gallery": [
            {
              "src": "assets/projects/web/blind-home.webp",
              "label": "购买与出货反馈 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "支付成功和出货成功是不同状态，界面需要分别解释。"
    }
  },
  {
    "id": "local",
    "title": "恒生活 · 本地生活",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "生活方式",
    "subtitle": "把卡券购买、查看与使用信息串联起来。",
    "scope": "本地生活卡券界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/local-home.webp",
    "coverScreens": [
      "assets/projects/web/local-home.webp"
    ],
    "theme": "mint",
    "mark": "恒",
    "tags": [
      "券包发现与使用"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 21,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "把卡券购买、查看与使用信息串联起来。",
      "role": "本地生活卡券界面设计",
      "summary": "把卡券购买、查看与使用信息串联起来。",
      "background": "券包发现与使用",
      "problem": "如何让用户理解买到了什么、接下来怎样使用？",
      "goal": "用列表建立概览，详情解释券包内容，个人券包保留使用入口。",
      "workflow": [
        "浏览券包",
        "查看详情",
        "购买",
        "我的券包"
      ],
      "modules": [
        {
          "title": "券包发现与使用",
          "question": "如何让用户理解买到了什么、接下来怎样使用？",
          "conclusion": "用列表建立概览，详情解释券包内容，个人券包保留使用入口。",
          "description": "可购买状态与已持有状态分开表达，避免混淆购买和使用动作。",
          "gallery": [
            {
              "src": "assets/projects/web/local-home.webp",
              "label": "券包发现与使用 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "可购买状态与已持有状态分开表达，避免混淆购买和使用动作。"
    }
  },
  {
    "id": "deals",
    "title": "恒生活 · 特价好物",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "电商",
    "subtitle": "以商品信息和分类组织轻量购物入口。",
    "scope": "特价好物商城界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/deals-home.webp",
    "coverScreens": [
      "assets/projects/web/deals-home.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "商品浏览与页面层级"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 22,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "以商品信息和分类组织轻量购物入口。",
      "role": "特价好物商城界面设计",
      "summary": "以商品信息和分类组织轻量购物入口。",
      "background": "商品浏览与页面层级",
      "problem": "有无活动 Banner 时，页面如何保持稳定？",
      "goal": "为活动配置和吸顶浏览设计不同页面状态，保持分类与商品区的连续性。",
      "workflow": [
        "浏览分类",
        "查看商品",
        "进入购买"
      ],
      "modules": [
        {
          "title": "商品浏览与页面层级",
          "question": "有无活动 Banner 时，页面如何保持稳定？",
          "conclusion": "为活动配置和吸顶浏览设计不同页面状态，保持分类与商品区的连续性。",
          "description": "活动可以变化，商品浏览结构和核心入口保持可识别。",
          "gallery": [
            {
              "src": "assets/projects/web/deals-home.webp",
              "label": "商品浏览与页面层级 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "活动可以变化，商品浏览结构和核心入口保持可识别。"
    }
  },
  {
    "id": "pos",
    "title": "海外 POS 机 · 终端",
    "category": "硬件终端设计",
    "types": [
      "硬件终端设计"
    ],
    "industry": "硬件",
    "subtitle": "让刷卡、开门与支付结果在现场一眼可懂。",
    "scope": "POS 终端界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/pos-home.webp",
    "coverScreens": [
      "assets/projects/web/pos-home.webp"
    ],
    "theme": "sand",
    "mark": "海",
    "tags": [
      "支付与设备状态"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 23,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "让刷卡、开门与支付结果在现场一眼可懂。",
      "role": "POS 终端界面设计",
      "summary": "让刷卡、开门与支付结果在现场一眼可懂。",
      "background": "支付与设备状态",
      "problem": "用户站在设备前，如何快速理解当前状态？",
      "goal": "使用大字号、单一主动作和明确反馈说明支付与开门阶段。",
      "workflow": [
        "支付 / 开门",
        "取货",
        "关门识别",
        "查看结果"
      ],
      "modules": [
        {
          "title": "支付与设备状态",
          "question": "用户站在设备前，如何快速理解当前状态？",
          "conclusion": "使用大字号、单一主动作和明确反馈说明支付与开门阶段。",
          "description": "线下操作时间短，错误、未支付和解锁失败必须区别表达。",
          "gallery": [
            {
              "src": "assets/projects/web/pos-home.webp",
              "label": "支付与设备状态 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "线下操作时间短，错误、未支付和解锁失败必须区别表达。"
    }
  },
  {
    "id": "wine",
    "title": "恒生活 · 智能酒柜",
    "category": "硬件终端设计",
    "types": [
      "硬件终端设计"
    ],
    "industry": "硬件",
    "subtitle": "连接商品选购、支付与取货信息。",
    "scope": "酒柜终端界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/wine-home.webp",
    "coverScreens": [
      "assets/projects/web/wine-home.webp"
    ],
    "theme": "blue",
    "mark": "恒",
    "tags": [
      "终端选购与取货"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 24,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "连接商品选购、支付与取货信息。",
      "role": "酒柜终端界面设计",
      "summary": "连接商品选购、支付与取货信息。",
      "background": "终端选购与取货",
      "problem": "大屏商品选择如何兼顾视觉和操作距离？",
      "goal": "通过商品网格、价格标签与集中操作区组织选购过程。",
      "workflow": [
        "浏览商品",
        "选择商品",
        "支付",
        "取货"
      ],
      "modules": [
        {
          "title": "终端选购与取货",
          "question": "大屏商品选择如何兼顾视觉和操作距离？",
          "conclusion": "通过商品网格、价格标签与集中操作区组织选购过程。",
          "description": "触控操作需要清楚的目标，活动信息与购物动作应有主次。",
          "gallery": [
            {
              "src": "assets/projects/web/wine-home.webp",
              "label": "终端选购与取货 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "触控操作需要清楚的目标，活动信息与购物动作应有主次。"
    }
  },
  {
    "id": "toy",
    "title": "潮玩盲盒机 · 终端",
    "category": "硬件终端设计",
    "types": [
      "硬件终端设计"
    ],
    "industry": "潮玩",
    "subtitle": "从商品发现到出货结果，提供连续的现场反馈。",
    "scope": "潮玩售货终端界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/toy-home.webp",
    "coverScreens": [
      "assets/projects/web/toy-home.webp"
    ],
    "theme": "mint",
    "mark": "潮",
    "tags": [
      "大屏购买与异常反馈"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 25,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "从商品发现到出货结果，提供连续的现场反馈。",
      "role": "潮玩售货终端界面设计",
      "summary": "从商品发现到出货结果，提供连续的现场反馈。",
      "background": "大屏购买与异常反馈",
      "problem": "部分商品出货失败时，如何避免结果歧义？",
      "goal": "将商品列表、购物车、支付和出货结果分阶段表达，区分全部成功与部分失败。",
      "workflow": [
        "选购",
        "购物车",
        "支付",
        "出货结果"
      ],
      "modules": [
        {
          "title": "大屏购买与异常反馈",
          "question": "部分商品出货失败时，如何避免结果歧义？",
          "conclusion": "将商品列表、购物车、支付和出货结果分阶段表达，区分全部成功与部分失败。",
          "description": "商品展示可以丰富，支付及出货结果需保持简洁明确。",
          "gallery": [
            {
              "src": "assets/projects/web/toy-home.webp",
              "label": "大屏购买与异常反馈 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "商品展示可以丰富，支付及出货结果需保持简洁明确。"
    }
  },
  {
    "id": "spring",
    "title": "恒生活 · 弹簧机终端",
    "category": "硬件终端设计",
    "types": [
      "硬件终端设计"
    ],
    "industry": "硬件",
    "subtitle": "让选购和机器出货过程保持清楚衔接。",
    "scope": "横竖屏终端界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/spring-home.webp",
    "coverScreens": [
      "assets/projects/web/spring-home.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "终端布局与出货状态"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 26,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "让选购和机器出货过程保持清楚衔接。",
      "role": "横竖屏终端界面设计",
      "summary": "让选购和机器出货过程保持清楚衔接。",
      "background": "终端布局与出货状态",
      "problem": "同一购买流程如何适应横屏和竖屏？",
      "goal": "保留选购与出货的步骤逻辑，针对屏幕比例调整商品和操作区域。",
      "workflow": [
        "选购",
        "支付",
        "正在出货",
        "结果反馈"
      ],
      "modules": [
        {
          "title": "终端布局与出货状态",
          "question": "同一购买流程如何适应横屏和竖屏？",
          "conclusion": "保留选购与出货的步骤逻辑，针对屏幕比例调整商品和操作区域。",
          "description": "明确区分正在出货、完成和失败，保持状态文案一致。",
          "gallery": [
            {
              "src": "assets/projects/web/spring-home.webp",
              "label": "终端布局与出货状态 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "明确区分正在出货、完成和失败，保持状态文案一致。"
    }
  },
  {
    "id": "charge-merchant",
    "title": "劲来电 · 商家端 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "企业服务",
    "subtitle": "从经营概况深入站点收益与管理。",
    "scope": "充电业务商家界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/charge-merchant-home.webp",
    "coverScreens": [
      "assets/projects/web/charge-merchant-home.webp"
    ],
    "theme": "sand",
    "mark": "劲",
    "tags": [
      "经营数据与站点管理"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 27,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "从经营概况深入站点收益与管理。",
      "role": "充电业务商家界面设计",
      "summary": "从经营概况深入站点收益与管理。",
      "background": "经营数据与站点管理",
      "problem": "经营概况如何连接具体站点的管理？",
      "goal": "在首页聚合数据和入口，站点列表与收益详情承担进一步查询。",
      "workflow": [
        "经营概览",
        "站点列表",
        "收益详情",
        "时间筛选"
      ],
      "modules": [
        {
          "title": "经营数据与站点管理",
          "question": "经营概况如何连接具体站点的管理？",
          "conclusion": "在首页聚合数据和入口，站点列表与收益详情承担进一步查询。",
          "description": "汇总数据与具体业务信息分层，日期筛选帮助保持统计语境。",
          "gallery": [
            {
              "src": "assets/projects/web/charge-merchant-home.webp",
              "label": "经营数据与站点管理 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "汇总数据与具体业务信息分层，日期筛选帮助保持统计语境。"
    }
  },
  {
    "id": "arcade-merchant",
    "title": "小橙游艺 · 商家端 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "企业服务",
    "subtitle": "整理经营数据、设备服务与账单入口。",
    "scope": "游艺业务商家界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/arcade-merchant-home.webp",
    "coverScreens": [
      "assets/projects/web/arcade-merchant-home.webp"
    ],
    "theme": "blue",
    "mark": "小",
    "tags": [
      "商家经营与资金信息"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 28,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "整理经营数据、设备服务与账单入口。",
      "role": "游艺业务商家界面设计",
      "summary": "整理经营数据、设备服务与账单入口。",
      "background": "商家经营与资金信息",
      "problem": "商家怎样在移动页面中看清经营与资金？",
      "goal": "将经营概览、服务入口和钱包信息分区，避免指标与操作平铺。",
      "workflow": [
        "查看经营",
        "选择业务",
        "查询账单"
      ],
      "modules": [
        {
          "title": "商家经营与资金信息",
          "question": "商家怎样在移动页面中看清经营与资金？",
          "conclusion": "将经营概览、服务入口和钱包信息分区，避免指标与操作平铺。",
          "description": "账单详情与时间筛选需要衔接，保证用户知道当前查看的范围。",
          "gallery": [
            {
              "src": "assets/projects/web/arcade-merchant-home.webp",
              "label": "商家经营与资金信息 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "账单详情与时间筛选需要衔接，保证用户知道当前查看的范围。"
    }
  },
  {
    "id": "installment",
    "title": "恒生活 · 分期商城 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "电商",
    "subtitle": "让商品、价格与支付方式处于清晰的决策路径。",
    "scope": "分期商城界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/installment-home.webp",
    "coverScreens": [
      "assets/projects/web/installment-home.webp"
    ],
    "theme": "mint",
    "mark": "恒",
    "tags": [
      "商品与支付信息"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 29,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "让商品、价格与支付方式处于清晰的决策路径。",
      "role": "分期商城界面设计",
      "summary": "让商品、价格与支付方式处于清晰的决策路径。",
      "background": "商品与支付信息",
      "problem": "购买前需要先看清哪些价格和支付信息？",
      "goal": "区分商品信息、规格和支付方式，并为下架、地址缺失等情况提供状态。",
      "workflow": [
        "浏览商品",
        "查看规格",
        "确认订单",
        "选择支付"
      ],
      "modules": [
        {
          "title": "商品与支付信息",
          "question": "购买前需要先看清哪些价格和支付信息？",
          "conclusion": "区分商品信息、规格和支付方式，并为下架、地址缺失等情况提供状态。",
          "description": "金额与支付信息优先准确清楚，营销强调不应掩盖关键交易说明。",
          "gallery": [
            {
              "src": "assets/projects/web/installment-home.webp",
              "label": "商品与支付信息 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "金额与支付信息优先准确清楚，营销强调不应掩盖关键交易说明。"
    }
  },
  {
    "id": "carshop",
    "title": "恒生活 · 车商城 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "汽车服务",
    "subtitle": "帮助用户从车型展示进入价格与参数判断。",
    "scope": "汽车商城界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/carshop-home.webp",
    "coverScreens": [
      "assets/projects/web/carshop-home.webp"
    ],
    "theme": "lilac",
    "mark": "恒",
    "tags": [
      "车型信息与购买判断"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 30,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "帮助用户从车型展示进入价格与参数判断。",
      "role": "汽车商城界面设计",
      "summary": "帮助用户从车型展示进入价格与参数判断。",
      "background": "车型信息与购买判断",
      "problem": "大件商品详情如何组织决策信息？",
      "goal": "将车型视觉、价格和参数配置分层呈现，为进一步了解提供入口。",
      "workflow": [
        "浏览车型",
        "查看价格",
        "比较参数",
        "进一步了解"
      ],
      "modules": [
        {
          "title": "车型信息与购买判断",
          "question": "大件商品详情如何组织决策信息？",
          "conclusion": "将车型视觉、价格和参数配置分层呈现，为进一步了解提供入口。",
          "description": "产品图片建立直观认识，价格与配置负责支持具体比较。",
          "gallery": [
            {
              "src": "assets/projects/web/carshop-home.webp",
              "label": "车型信息与购买判断 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "产品图片建立直观认识，价格与配置负责支持具体比较。"
    }
  },
  {
    "id": "creditmaker",
    "title": "车创客 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "汽车服务",
    "subtitle": "面向汽融展业的移动业务平台。",
    "scope": "车创客 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/creditmaker-home.webp",
    "coverScreens": [
      "assets/projects/web/creditmaker-home.webp"
    ],
    "theme": "sand",
    "mark": "车",
    "tags": [
      "业务流程与展业信息"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 31,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "面向汽融展业的移动业务平台。",
      "role": "车创客 UI 设计",
      "summary": "面向汽融展业的移动业务平台。",
      "background": "业务流程与展业信息",
      "problem": "复杂业务如何在移动端中保持可读和可操作？",
      "goal": "通过业务分区和信息层级组织展业内容，完整设计过程见下方项目展示。",
      "workflow": [
        "业务入口",
        "查询信息",
        "执行业务"
      ],
      "modules": [
        {
          "title": "业务流程与展业信息",
          "question": "复杂业务如何在移动端中保持可读和可操作？",
          "conclusion": "通过业务分区和信息层级组织展业内容，完整设计过程见下方项目展示。",
          "description": "沿用已有作品集视觉叙事，重点呈现业务结构和界面设计。",
          "gallery": [
            {
              "src": "assets/projects/web/creditmaker-home.webp",
              "label": "业务流程与展业信息 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "沿用已有作品集视觉叙事，重点呈现业务结构和界面设计。",
      "presentation": [
        "assets/projects/web/creditmaker-case-0.webp",
        "assets/projects/web/creditmaker-case-1.webp",
        "assets/projects/web/creditmaker-case-2.webp",
        "assets/projects/web/creditmaker-case-3.webp",
        "assets/projects/web/creditmaker-case-4.webp",
        "assets/projects/web/creditmaker-case-5.webp",
        "assets/projects/web/creditmaker-case-6.webp",
        "assets/projects/web/creditmaker-case-7.webp",
        "assets/projects/web/creditmaker-case-8.webp"
      ]
    }
  },
  {
    "id": "songzhen",
    "title": "松珍心理 H5",
    "category": "H5 与运营设计",
    "types": [
      "H5 与运营设计"
    ],
    "industry": "医疗",
    "subtitle": "以温和的视觉和清晰的服务信息建立体验。",
    "scope": "松珍心理 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/songzhen-home.webp",
    "coverScreens": [
      "assets/projects/web/songzhen-home.webp"
    ],
    "theme": "blue",
    "mark": "松",
    "tags": [
      "心理服务与信息层级"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 32,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "以温和的视觉和清晰的服务信息建立体验。",
      "role": "松珍心理 UI 设计",
      "summary": "以温和的视觉和清晰的服务信息建立体验。",
      "background": "心理服务与信息层级",
      "problem": "情绪氛围与服务信息如何共同发挥作用？",
      "goal": "视觉表达保持温和，服务内容与操作入口保持清晰，完整方案见项目展示。",
      "workflow": [
        "了解服务",
        "查看内容",
        "进入服务"
      ],
      "modules": [
        {
          "title": "心理服务与信息层级",
          "question": "情绪氛围与服务信息如何共同发挥作用？",
          "conclusion": "视觉表达保持温和，服务内容与操作入口保持清晰，完整方案见项目展示。",
          "description": "关怀感需要与信息准确、层级清楚共同成立。",
          "gallery": [
            {
              "src": "assets/projects/web/songzhen-home.webp",
              "label": "心理服务与信息层级 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "关怀感需要与信息准确、层级清楚共同成立。",
      "presentation": [
        "assets/projects/web/songzhen-case-0.webp",
        "assets/projects/web/songzhen-case-1.webp",
        "assets/projects/web/songzhen-case-2.webp",
        "assets/projects/web/songzhen-case-3.webp",
        "assets/projects/web/songzhen-case-4.webp",
        "assets/projects/web/songzhen-case-5.webp",
        "assets/projects/web/songzhen-case-6.webp",
        "assets/projects/web/songzhen-case-7.webp",
        "assets/projects/web/songzhen-case-8.webp"
      ]
    }
  },
  {
    "id": "saas",
    "title": "SaaS 后台管理系统",
    "category": "后台与数据可视化",
    "types": [
      "后台与数据可视化"
    ],
    "industry": "企业服务",
    "subtitle": "面向商家经营的电商业务管理界面。",
    "scope": "后台管理系统 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/saas-home.webp",
    "coverScreens": [
      "assets/projects/web/saas-home.webp"
    ],
    "theme": "mint",
    "mark": "S",
    "tags": [
      "业务导航与管理效率"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 33,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "面向商家经营的电商业务管理界面。",
      "role": "后台管理系统 UI 设计",
      "summary": "面向商家经营的电商业务管理界面。",
      "background": "业务导航与管理效率",
      "problem": "多个管理任务如何共用一致的操作规则？",
      "goal": "通过导航、列表与业务详情构成后台工作结构，完整设计过程见下方展示。",
      "workflow": [
        "选择业务",
        "查询列表",
        "查看详情",
        "执行管理"
      ],
      "modules": [
        {
          "title": "业务导航与管理效率",
          "question": "多个管理任务如何共用一致的操作规则？",
          "conclusion": "通过导航、列表与业务详情构成后台工作结构，完整设计过程见下方展示。",
          "description": "复杂任务需要逐层展开，常用操作在各模块中保持位置与语义一致。",
          "gallery": [
            {
              "src": "assets/projects/web/saas-home.webp",
              "label": "业务导航与管理效率 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "复杂任务需要逐层展开，常用操作在各模块中保持位置与语义一致。",
      "presentation": [
        "assets/projects/web/saas-case-0.webp",
        "assets/projects/web/saas-case-1.webp",
        "assets/projects/web/saas-case-2.webp",
        "assets/projects/web/saas-case-3.webp"
      ]
    }
  },
  {
    "id": "scrm",
    "title": "AI SCRM 后台管理系统",
    "category": "后台与数据可视化",
    "types": [
      "后台与数据可视化"
    ],
    "industry": "企业服务",
    "subtitle": "组织渠道获客、成员协作与客户运营任务。",
    "scope": "SCRM 后台界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/scrm-home.webp",
    "coverScreens": [
      "assets/projects/web/scrm-home.webp"
    ],
    "theme": "lilac",
    "mark": "A",
    "tags": [
      "渠道管理与任务配置"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 34,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "组织渠道获客、成员协作与客户运营任务。",
      "role": "SCRM 后台界面设计",
      "summary": "组织渠道获客、成员协作与客户运营任务。",
      "background": "渠道管理与任务配置",
      "problem": "配置型任务如何让信息与操作保持对应？",
      "goal": "列表负责查询和比较，分步配置负责复杂任务输入，减少单页负担。",
      "workflow": [
        "渠道列表",
        "配置任务",
        "查看运营信息"
      ],
      "modules": [
        {
          "title": "渠道管理与任务配置",
          "question": "配置型任务如何让信息与操作保持对应？",
          "conclusion": "列表负责查询和比较，分步配置负责复杂任务输入，减少单页负担。",
          "description": "保留必要业务信息，同时区分查询、创建和管理操作。",
          "gallery": [
            {
              "src": "assets/projects/web/scrm-home.webp",
              "label": "渠道管理与任务配置 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "保留必要业务信息，同时区分查询、创建和管理操作。"
    }
  },
  {
    "id": "taidou",
    "title": "太逗科技官网",
    "category": "网站设计",
    "types": [
      "网站设计"
    ],
    "industry": "企业服务",
    "subtitle": "围绕企业介绍、业务内容与新闻组织品牌展示。",
    "scope": "企业官网 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/taidou-home.webp",
    "coverScreens": [
      "assets/projects/web/taidou-home.webp"
    ],
    "theme": "sand",
    "mark": "太",
    "tags": [
      "企业内容与品牌表达"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 35,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "围绕企业介绍、业务内容与新闻组织品牌展示。",
      "role": "企业官网 UI 设计",
      "summary": "围绕企业介绍、业务内容与新闻组织品牌展示。",
      "background": "企业内容与品牌表达",
      "problem": "不同访客如何在企业站中找到自己的信息？",
      "goal": "以首页建立整体印象，通过集团概况、新闻和业务栏目组织内容深度。",
      "workflow": [
        "了解企业",
        "浏览栏目",
        "深入内容"
      ],
      "modules": [
        {
          "title": "企业内容与品牌表达",
          "question": "不同访客如何在企业站中找到自己的信息？",
          "conclusion": "以首页建立整体印象，通过集团概况、新闻和业务栏目组织内容深度。",
          "description": "品牌视觉与内容导航相互配合，避免让首屏承担全部说明。",
          "gallery": [
            {
              "src": "assets/projects/web/taidou-home.webp",
              "label": "企业内容与品牌表达 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "品牌视觉与内容导航相互配合，避免让首屏承担全部说明。"
    }
  },
  {
    "id": "saas-mini",
    "title": "SaaS 电商小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "电商",
    "subtitle": "连接商品浏览、购物和个人订单的移动商城。",
    "scope": "电商小程序 UI 设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/saas-mini-home.webp",
    "coverScreens": [
      "assets/projects/web/saas-mini-home.webp"
    ],
    "theme": "blue",
    "mark": "S",
    "tags": [
      "移动商城与购物流程"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 36,
    "coverLayout": "desktop",
    "caseStudy": {
      "compact": true,
      "focus": "连接商品浏览、购物和个人订单的移动商城。",
      "role": "电商小程序 UI 设计",
      "summary": "连接商品浏览、购物和个人订单的移动商城。",
      "background": "移动商城与购物流程",
      "problem": "轻量商城如何保持完整的购物体验？",
      "goal": "围绕商品和订单组织主要页面，完整设计过程见下方项目展示。",
      "workflow": [
        "浏览商品",
        "购物车",
        "确认订单",
        "个人订单"
      ],
      "modules": [
        {
          "title": "移动商城与购物流程",
          "question": "轻量商城如何保持完整的购物体验？",
          "conclusion": "围绕商品和订单组织主要页面，完整设计过程见下方项目展示。",
          "description": "营销内容与交易操作分清主次，保持关键路径连续。",
          "gallery": [
            {
              "src": "assets/projects/web/saas-mini-home.webp",
              "label": "移动商城与购物流程 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "营销内容与交易操作分清主次，保持关键路径连续。",
      "presentation": [
        "assets/projects/web/saas-mini-case-0.webp",
        "assets/projects/web/saas-mini-case-1.webp",
        "assets/projects/web/saas-mini-case-2.webp",
        "assets/projects/web/saas-mini-case-3.webp",
        "assets/projects/web/saas-mini-case-4.webp"
      ]
    }
  },
  {
    "id": "kang",
    "title": "康小主 · 小程序",
    "category": "小程序设计",
    "types": [
      "小程序设计"
    ],
    "industry": "电商",
    "subtitle": "将商城、直播与购买流程连接起来。",
    "scope": "商城与直播相关界面设计",
    "phase": "界面设计",
    "cover": "assets/projects/web/kang-home.webp",
    "coverScreens": [
      "assets/projects/web/kang-home.webp"
    ],
    "theme": "mint",
    "mark": "康",
    "tags": [
      "内容购物与交易衔接"
    ],
    "featured": false,
    "example": false,
    "sourceRow": 37,
    "coverLayout": "phone",
    "caseStudy": {
      "compact": true,
      "focus": "将商城、直播与购买流程连接起来。",
      "role": "商城与直播相关界面设计",
      "summary": "将商城、直播与购买流程连接起来。",
      "background": "内容购物与交易衔接",
      "problem": "用户怎样从直播内容进入商品购买？",
      "goal": "以商城和直播作为不同入口，订单确认和商品展示承接交易。",
      "workflow": [
        "商城 / 直播",
        "查看商品",
        "确认订单"
      ],
      "modules": [
        {
          "title": "内容购物与交易衔接",
          "question": "用户怎样从直播内容进入商品购买？",
          "conclusion": "以商城和直播作为不同入口，订单确认和商品展示承接交易。",
          "description": "内容浏览需要流畅，交易金额、商品和确认操作仍需明确。",
          "gallery": [
            {
              "src": "assets/projects/web/kang-home.webp",
              "label": "内容购物与交易衔接 · 代表界面"
            }
          ]
        }
      ],
      "result": "已形成相应业务模块的界面设计方案。",
      "tradeoff": "内容浏览需要流畅，交易金额、商品和确认操作仍需明确。"
    }
  }
]
};
