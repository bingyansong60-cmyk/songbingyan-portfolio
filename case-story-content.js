// Display narratives follow the user-provided project presentation guides.
window.PortfolioStoryPlans = {
  "hzy-work": {
    "projectId": "hzy-work",
    "heroHeadline": "从一次对话，走向完整的办公任务",
    "heroSummary": "围绕 AI 对话、内容生成与文件管理，把任务入口、执行过程和结果操作连成一个桌面工作空间。",
    "narrativeFocus": [
      "AI 办公场景理解",
      "复杂任务与状态设计",
      "桌面组件与规范"
    ],
    "sections": [
      {
        "id": "work-context",
        "navTitle": "产品与场景",
        "title": "一个工作台，承接不同的办公任务",
        "summary": "把对话、专业智能体和生成工具放进同一个工作空间，区分导航、历史与当前任务，避免功能增加后失去重点。",
        "content": [
          "定位：AI 智能办公桌面端，适配 macOS 与 Windows。",
          "任务：对话、PPT、数据分析、AI 生图、文案、录音及素材管理。"
        ]
      },
      {
        "id": "work-challenges",
        "navTitle": "设计思考",
        "title": "让复杂能力，更容易开始和继续",
        "summary": "从入口组织、任务反馈、结果使用和系统一致性四个角度解释设计判断。",
        "content": [
          "入口组织：区分基础导航与任务快捷入口。",
          "过程理解：让用户知道正在生成什么、目前处于哪一步。",
          "结果使用：把预览、下载、分享和再次查找接到任务之后。",
          "界面一致：用共用组件处理不同功能的输入和状态。"
        ]
      },
      {
        "id": "work-ppt",
        "navTitle": "PPT 工作流",
        "title": "把生成任务拆成可理解的步骤",
        "summary": "用一条连续任务链展示 PPT 从需求描述到可用文件的过程，突出用户介入结构与风格的节点。",
        "content": [
          "大纲阶段让用户确认内容结构。",
          "风格与生成阶段区分用户选择和系统等待。",
          "完成后保留预览和成果操作。"
        ],
        "flow": [
          "输入需求",
          "生成大纲",
          "编辑大纲",
          "选择风格",
          "执行生成",
          "预览与下载"
        ]
      },
      {
        "id": "work-ai-tasks",
        "navTitle": "核心 AI 场景",
        "title": "同一套框架，承载不同的输入和结果",
        "summary": "并列介绍数据分析、生图与文案等任务，重点呈现各自的输入、处理中状态和最终产物。",
        "content": [
          "数据分析：文件上传、生成反馈、结果预览。",
          "AI 生图：输入描述、比例选择、生成图片结果。",
          "文案：任务入口与内容输出。"
        ]
      },
      {
        "id": "work-assets",
        "navTitle": "内容资产",
        "title": "生成之后，内容仍然可以被管理和复用",
        "summary": "把一次生成的结果接入素材、搜索与文件管理，让工作内容可查找、可继续使用。",
        "content": [
          "生成结果连接到素材管理，支持文件整理、搜索与继续使用。"
        ],
        "flow": [
          "生成结果",
          "预览与操作",
          "保存或分享",
          "整理素材",
          "再次调用"
        ]
      },
      {
        "id": "work-system",
        "navTitle": "规范与适配",
        "title": "以统一规则覆盖多功能和多状态",
        "summary": "用输入框、按钮、文件卡片、对话气泡、弹窗与任务反馈说明组件复用，再展示桌面窗口与侧边栏的适配。",
        "content": [
          "规范：色彩、字体、间距、图标及组件规则。",
          "状态：输入、上传、生成中、完成、异常和空状态。",
          "适配：macOS、Windows 与多区域内容布局。"
        ]
      },
      {
        "id": "work-delivery",
        "navTitle": "成果与回顾",
        "title": "以交付范围呈现设计成果",
        "summary": "用已覆盖的核心流程、状态及桌面适配作为成果证据，清楚说明自己的UI与交互职责。",
        "content": [
          "完成桌面端产品框架、核心任务界面、交互状态与视觉规则设计。",
          "覆盖 macOS、Windows 窗口及多区域内容布局。"
        ]
      }
    ],
    "sourceUrl": "https://chatgpt.com/share/6ae1e914-9d30-83ee-a07a-455409285242"
  },
  "hsh-life": {
    "projectId": "hsh-life",
    "heroHeadline": "让多元生活服务，形成清晰一致的体验",
    "heroSummary": "围绕首页、商城、智能零售、生活服务、AI 助手与会员权益，展示综合生活平台的持续迭代与业务融合。",
    "narrativeFocus": [
      "综合 C 端产品体验",
      "多业务信息架构",
      "AI 与既有业务融合",
      "设计规范与落地"
    ],
    "sections": [
      {
        "id": "life-context",
        "navTitle": "项目与业务",
        "title": "围绕日常任务，连接多种生活服务",
        "summary": "先说明平台定位、个人负责范围与业务关系，再进入设计过程。",
        "content": [
          "业务：智能零售、生活商城、共享充电、会员权益和 AI 服务。",
          "职责：首页改版、商城、业务专区、AI 定制嵌入和权益体系。"
        ]
      },
      {
        "id": "life-strategy",
        "navTitle": "挑战与策略",
        "title": "把不同场景，组织成用户能理解的结构",
        "summary": "将多入口的信息层级、跨场景的一致性与AI融合三个挑战，分别对应到信息聚合、路径梳理和统一规则。",
        "content": [
          "信息组织：区分核心服务、推荐与营销模块的层级。",
          "任务路径：让高频入口和关键反馈容易被识别。",
          "场景一致：保留不同业务特点，同时统一组件与操作规则。",
          "AI 融合：让新增服务具备辨识度，并融入现有产品。"
        ]
      },
      {
        "id": "life-home",
        "navTitle": "首页升级",
        "title": "先建立秩序，再承载更多服务",
        "summary": "用首页界面说明导航、服务入口、内容推荐和营销信息之间的关系。",
        "content": [
          "聚焦导航、金刚区和核心业务模块三个局部。",
          "说明每处信息层级与视觉组织的理由。"
        ]
      },
      {
        "id": "life-services",
        "navTitle": "核心业务",
        "title": "统一服务逻辑，保留场景差异",
        "summary": "将附近货柜、附近电站与特价好物作为三组场景，展示列表、卡片和交互反馈如何形成一致规则。",
        "content": [
          "货柜：设备发现与服务入口。",
          "电站：充电服务信息与状态。",
          "好物：商品信息与浏览入口。"
        ]
      },
      {
        "id": "life-mall",
        "navTitle": "商城体验",
        "title": "让商品信息成为浏览的主角",
        "summary": "围绕图片、价格、活动标签和购买入口组织信息，减少装饰对关键消费内容的干扰。",
        "content": [
          "商城首页、分类、商品卡片与运营模块。"
        ]
      },
      {
        "id": "life-ai",
        "navTitle": "AI 服务融合",
        "title": "让 AI 对话自然融入生活场景",
        "summary": "围绕 AI H5 的独立交互特点，展示入口、快捷提问、输入反馈和回答展示如何与原生产品保持统一。",
        "content": [
          "AI 入口与首页。",
          "对话过程、不同内容回答及关键交互状态。"
        ]
      },
      {
        "id": "life-engagement",
        "navTitle": "用户权益",
        "title": "把任务、进度和奖励说清楚",
        "summary": "用任务目标、当前进度、权益规则和完成反馈说明运营设计，让激励信息更直观。",
        "content": [
          "围绕任务、进度、权益和反馈，组织运营信息。"
        ]
      },
      {
        "id": "life-system",
        "navTitle": "规范与交付",
        "title": "用共用规则支撑持续迭代",
        "summary": "将颜色、字体、卡片、间距与状态规则接到组件复用、标注和协作交付，展示多业务的一致性。",
        "content": [
          "统一颜色、字体、卡片、间距和交互状态规则。",
          "在持续迭代中维护组件规范，并协同产品与研发推进设计落地。"
        ]
      },
      {
        "id": "life-reflection",
        "navTitle": "总结回顾",
        "title": "以负责的模块和落地范围总结项目",
        "summary": "回顾首页、商城、服务专区与AI融合的设计工作，说明多业务信息组织及跨团队落地的经验。",
        "content": [
          "覆盖首页、商城、业务专区、AI 定制嵌入与会员权益等核心模块。",
          "通过多业务信息组织与规范维护，积累跨场景设计和落地协作经验。"
        ]
      }
    ],
    "sourceUrl": "https://chatgpt.com/share/6ae0979a-65bc-83ee-9fe1-849101682390"
  },
  "ezvend": {
    "projectId": "ezvend",
    "heroHeadline": "把复杂零售运营，变成清晰的移动工作流",
    "heroSummary": "围绕经营看板、设备、商品、订单与补货，展示面向海外运营人员的业务组织、异常状态和国际化规范。",
    "narrativeFocus": [
      "复杂 B 端业务",
      "移动端操作流程",
      "国际化体验",
      "组件与语义化状态"
    ],
    "sections": [
      {
        "id": "ezvend-context",
        "navTitle": "业务与职责",
        "title": "让线下设备与线上运营保持连接",
        "summary": "用平台定位和个人职责说明业务范围，区分经营分析、设备、库存、订单、补货与人员权限。",
        "content": [
          "用户场景：海外售货机运营商、商户及运维人员。",
          "职责：UI视觉、交互优化、核心模块、状态反馈、组件与变量规范。"
        ]
      },
      {
        "id": "ezvend-strategy",
        "navTitle": "挑战与策略",
        "title": "先建立层级，再处理复杂状态",
        "summary": "把数据密度、设备状态、补货精度和英文文本长度转成可解释的界面规则。",
        "content": [
          "经营信息与高频操作分层。",
          "状态分类明确，关键操作有确认与反馈。",
          "补货按操作精度区分场景。",
          "通过组件、间距与语义色维护跨模块一致性。"
        ]
      },
      {
        "id": "ezvend-dashboard",
        "navTitle": "经营看板",
        "title": "一眼判断经营情况，快速找到下一步",
        "summary": "将经营数据、待办提醒与快捷操作组织成三层信息，让数据展示与后续任务相连。",
        "content": [
          "Business Data：经营概览。",
          "Quick Entry / Quick Actions：高频任务入口。"
        ]
      },
      {
        "id": "ezvend-devices",
        "navTitle": "设备运营",
        "title": "从设备列表，进入明确的经营状态",
        "summary": "展示设备列表、状态分类、设备详情和远程操作的关系。",
        "content": [
          "设备发现与状态定位。",
          "详情中的经营信息和操作入口。"
        ]
      },
      {
        "id": "ezvend-restock",
        "navTitle": "补货流程",
        "title": "按现场任务，区分快速与精细操作",
        "summary": "以补货前盘点、数量调整、模式切换、确认和记录为主线，说明快捷补货与精细化补货如何适配不同精度需求。",
        "content": [
          "快捷路径侧重批量处理。",
          "精细路径侧重逐层核对与数量准确性。",
          "通过库存变化、确认与记录解释操作后的反馈。"
        ],
        "flow": [
          "确认库存",
          "选择补货方式",
          "核对商品与数量",
          "确认补货",
          "查看操作记录"
        ]
      },
      {
        "id": "ezvend-orders",
        "navTitle": "订单与异常",
        "title": "把异常处理，连接到明确的结果",
        "summary": "用订单详情与售后状态展示复杂业务闭环，让异常、处理中和结果反馈可理解。",
        "content": [
          "区分异常、处理中和已完成等信息层级。",
          "将订单详情、售后操作与结果反馈接成可理解的处理过程。"
        ]
      },
      {
        "id": "ezvend-products",
        "navTitle": "商品管理",
        "title": "让商品、审核与陈列形成连续关系",
        "summary": "选择商品库、新品申请、审核或陈列模板中最有代表性的界面，解释信息层级和后续操作。",
        "content": [
          "与核心补货/订单流程建立关系，避免所有后台页面平铺。"
        ]
      },
      {
        "id": "ezvend-system",
        "navTitle": "国际化规范",
        "title": "让英文内容和业务状态遵循同一套规则",
        "summary": "用文字长度、组件尺寸、状态色和布局容纳规则说明国际化设计，再展示真实变量和组件状态。",
        "content": [
          "英文信息结构与字段长度。",
          "基础色、语义色、间距、圆角、字号与控件尺寸。",
          "用统一组件与状态规则支撑持续迭代。"
        ]
      },
      {
        "id": "ezvend-reflection",
        "navTitle": "成果与回顾",
        "title": "以业务覆盖和设计交付，说明落地能力",
        "summary": "回顾看板、设备、商品、订单与补货模块，以及可复用规范对后续迭代的支持。",
        "content": [
          "设计覆盖经营看板、设备、订单、商品、补货及运营配置。",
          "搭建并维护 Figma 组件库、色彩变量和视觉规范，配合团队推进版本迭代。"
        ]
      }
    ],
    "sourceUrl": "https://chatgpt.com/share/6ae1c619-2e20-83ec-8e53-fff50700b3fe"
  }
};
window.PortfolioStoryAssets = {
  "hzy-work": {
    "home": "assets/projects/web/work-home.webp",
    "ppt": "assets/projects/web/work-ppt.webp",
    "materials": "assets/projects/web/work-assets.webp",
    "pptOutline": "assets/projects/case-r314/work-outline.png",
    "pptStyle": "assets/projects/case-r314/work-style.png",
    "pptResult": "assets/projects/web/work-ppt.webp",
    "dataAnalysis": "assets/projects/case-r314/work-data-result.png"
  },
  "hsh-life": {
    "home": "assets/projects/case-r314/hsh-home.png",
    "mall": "assets/projects/case-r314/hsh-mall.png",
    "ai": "assets/projects/case-r314/hsh-ai.png",
    "tasks": "assets/projects/case-r314/hsh-tasks.png"
  },
  "ezvend": {
    "dashboard": "assets/projects/web/ezvend-home.webp",
    "devices": "assets/projects/web/ezvend-device.webp",
    "orders": "assets/projects/web/ezvend-orders.webp",
    "home": "assets/projects/web/ezvend-home.webp",
    "restockQuick": "assets/projects/case-r314/ezvend-restock-quick.png",
    "restockDetailed": "assets/projects/case-r314/ezvend-restock-detailed.png",
    "orderException": "assets/projects/case-r314/ezvend-abnormal-order.png",
    "products": "assets/projects/case-r314/ezvend-products.png"
  }
};
