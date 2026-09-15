/* ============================================================
   data.js — bilingual content (EN / ZH)
   All figures are illustrative demo data and clearly editable.
   ============================================================ */

/* ---- Inline SVG icons (stroke = currentColor) ---- */
const ICONS = {
  checkup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 3v4M7 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="M8 14h3l1-2 2 4 1-2h2"/></svg>',
  surgery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l8 8M9 9l-2 2a3 3 0 0 0 4 4l2-2M14 10l2-2a3 3 0 0 1 4 4l-2 2M12 8l4 4"/></svg>',
  tcm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2 2 2 5 0 7-2-2-2-5 0-7zM12 10v8M8 13c0 3 2 5 4 5s4-2 4-5"/></svg>',
  escort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="3"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7M9 13l3 3 3-3"/></svg>',
  wellness: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>',
  visa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 1 2-2h9l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="14.5" cy="13" r="2.5"/></svg>'
};

const HERO_STATS = [
  { value: "60–80%", label: { en: "Lower cost than US / EU", zh: "比欧美低 60–80%" } },
  { value: "0", label: { en: "Months of waiting", zh: "零排队等待" } },
  { value: "120+", label: { en: "Partner institutions", zh: "120+ 合作机构" } },
  { value: "24h", label: { en: "Coordinator response", zh: "协调员 24h 响应" } }
];

const WHY_POINTS = [
  {
    title: { en: "No waiting lists", zh: "没有漫长的排队" },
    desc: { en: "Procedures that take months abroad are scheduled in days here, without compromising on quality or safety.", zh: "在海外要等上数月的项目，在这里数天即可安排，且毫不妥协医疗质量与安全。" }
  },
  {
    title: { en: "A fraction of the price", zh: "费用大幅降低" },
    desc: { en: "World-class hospitals and specialists at a cost often 60–80% below the US or Western Europe.", zh: "世界级医院与专家，费用通常比美国或西欧低 60–80%。" }
  },
  {
    title: { en: "Care + culture in one trip", zh: "疗愈与文化一次成行" },
    desc: { en: "Recover and explore — from heritage TCM pavilions to iconic landscapes — with an escort handling every detail.", zh: "疗养与游览兼得——从传承中医馆到名胜山水，陪诊师打理每个细节。" }
  }
];

const COMPARISON = {
  headers: { en: ["Procedure", "China (from)", "US / EU (from)"], zh: ["项目", "中国（起）", "欧美（起）"] },
  rows: [
    { item: { en: "Comprehensive full-body checkup", zh: "高端全身体检" },
      china: { en: "$800", zh: "¥5,800" }, abroad: { en: "$4,000+", zh: "¥28,000+" } },
    { item: { en: "Knee replacement", zh: "膝关节置换" },
      china: { en: "$9,000", zh: "¥65,000" }, abroad: { en: "$40,000+", zh: "¥290,000+" } },
    { item: { en: "Cardiac stent", zh: "心脏支架" },
      china: { en: "$6,500", zh: "¥47,000" }, abroad: { en: "$30,000+", zh: "¥215,000+" } },
    { item: { en: "TCM restorative program", zh: "中医康养疗程" },
      china: { en: "$600", zh: "¥4,300" }, abroad: { en: "$3,000+", zh: "¥21,000+" } }
  ]
};

const SERVICES = [
  {
    id: "full-checkup", icon: "checkup",
    title: { en: "Full-Body Health Checkup", zh: "全身体检" },
    desc: { en: "Executive screening with same-day results, delivered in a premium hospital suite and paired with luxury hotel transfer.", zh: "高管级筛查，当日出报告，尊享医院VIP套间，并配豪华酒店接送。" },
    includes: [
      { en: "200+ item screening", zh: "200+ 项筛查" },
      { en: "Specialist consultation", zh: "专家会诊" },
      { en: "Airport & hotel transfer", zh: "机场及酒店接送" }
    ],
    duration: { en: "2–3 days", zh: "2–3 天" }
  },
  {
    id: "surgery", icon: "surgery",
    title: { en: "Surgery & Recovery Trip", zh: "手术焕新之旅" },
    desc: { en: "World-class surgical care across specialties, with recovery arranged in a serene resort setting.", zh: "跨专科的世界级手术照护，康复安排在静谧度假环境中进行。" },
    includes: [
      { en: "Pre-trip case review", zh: "行前病例评估" },
      { en: "JCI-accredited hospital", zh: "JCI 认证医院" },
      { en: "Post-op recovery retreat", zh: "术后康养" }
    ],
    duration: { en: "7–14 days", zh: "7–14 天" }
  },
  {
    id: "tcm", icon: "tcm",
    title: { en: "Traditional Chinese Medicine", zh: "中医馆体验" },
    desc: { en: "Diagnosis, acupuncture, herbal therapy and wellness cuisine at heritage TCM pavilions.", zh: "在传承中医馆体验辨证、针灸、本草调理与养生膳食。" },
    includes: [
      { en: "Expert TCM diagnosis", zh: "名老中医辨证" },
      { en: "Acupuncture & herbal plan", zh: "针灸与本草方案" },
      { en: "Wellness cuisine", zh: "养生膳食" }
    ],
    duration: { en: "3–5 days", zh: "3–5 天" }
  },
  {
    id: "escort", icon: "escort",
    title: { en: "International Medical Escort", zh: "国际陪诊师" },
    desc: { en: "A bilingual coordinator by your side for every appointment — translation, logistics and emotional support.", zh: "双语协调员全程随行，负责翻译、行程安排与心理疏导。" },
    includes: [
      { en: "Medical translation", zh: "医疗翻译" },
      { en: "Appointment logistics", zh: "预约与行程" },
      { en: "24/7 on-ground support", zh: "24/7 在地支持" }
    ],
    duration: { en: "Per journey", zh: "按旅程" }
  },
  {
    id: "wellness", icon: "wellness",
    title: { en: "Recovery & Wellness Retreat", zh: "康养疗愈" },
    desc: { en: "Post-treatment recuperation with spa, gentle movement and nutrition in scenic destinations.", zh: "术后或疗程后的舒缓疗养，结合 spa、轻运动与营养，选址于风景胜地。" },
    includes: [
      { en: "Scenic recovery resort", zh: "风景疗养度假村" },
      { en: "Nutrition & spa", zh: "营养与 spa" },
      { en: "Follow-up coordination", zh: "复诊协调" }
    ],
    duration: { en: "5–10 days", zh: "5–10 天" }
  },
  {
    id: "visa", icon: "visa",
    title: { en: "Visa & Itinerary Concierge", zh: "签证行程管家" },
    desc: { en: "Medical visa assistance, flights, accommodation and a curated cultural itinerary — all handled.", zh: "医疗签证协助、机票、住宿与定制文化行程，全部代办。" },
    includes: [
      { en: "Medical visa support", zh: "医疗签证支持" },
      { en: "Flights & 5-star stay", zh: "机票与五星住宿" },
      { en: "Cultural itinerary", zh: "文化行程" }
    ],
    duration: { en: "Per journey", zh: "按旅程" }
  }
];

/* Demo partner institutions — replace with real onboarded data */
const INSTITUTIONS = [
  {
    name: "PUMCH International Medical Center", nameZh: "协和国际医疗中心",
    specialty: { en: "Comprehensive & Complex Care", zh: "综合与疑难重症" },
    city: { en: "Beijing", zh: "北京" },
    accredit: "JCI · Tertiary A", rating: 4.9,
    tags: [{ en: "Full checkup", zh: "全身体检" }, { en: "Oncology", zh: "肿瘤" }],
    blurb: { en: "Top-tier academic hospital with an dedicated international desk.", zh: "顶尖教学医院，设专属国际医疗服务台。" }
  },
  {
    name: "Ruijing International Hospital", nameZh: "瑞景国际医院",
    specialty: { en: "Cardiology & Orthopedics", zh: "心血管与骨科" },
    city: { en: "Shanghai", zh: "上海" },
    accredit: "JCI Certified", rating: 4.8,
    tags: [{ en: "Surgery", zh: "手术" }, { en: "Rehab", zh: "康复" }],
    blurb: { en: "Modern private hospital popular with international patients.", zh: "现代化私立医院，深受国际患者青睐。" }
  },
  {
    name: "Guangzhou TCM Heritage Pavilion", nameZh: "广州中医传承馆",
    specialty: { en: "Traditional Chinese Medicine", zh: "中医" },
    city: { en: "Guangzhou", zh: "广州" },
    accredit: "TCM Grade A", rating: 4.9,
    tags: [{ en: "Acupuncture", zh: "针灸" }, { en: "Herbal", zh: "本草" }],
    blurb: { en: "Century-old lineage of TCM masters and restorative programs.", zh: "百年中医传承，提供养生调理疗程。" }
  },
  {
    name: "West China Integrative Hospital", nameZh: "华西中西医结合医院",
    specialty: { en: "Surgery & TCM Integration", zh: "外科与中医结合" },
    city: { en: "Chengdu", zh: "成都" },
    accredit: "Tertiary A", rating: 4.7,
    tags: [{ en: "Surgery", zh: "手术" }, { en: "Recovery", zh: "疗养" }],
    blurb: { en: "Renowned for combining advanced surgery with TCM recovery.", zh: "以先进外科结合中医康复著称。" }
  },
  {
    name: "Hangzhou Lakeside Medical Center", nameZh: "杭州湖畔医疗中心",
    specialty: { en: "Health Screening", zh: "健康筛查" },
    city: { en: "Hangzhou", zh: "杭州" },
    accredit: "JCI · Tertiary A", rating: 4.8,
    tags: [{ en: "Full checkup", zh: "全身体检" }, { en: "Wellness", zh: "康养" }],
    blurb: { en: "Scenic lakeside setting for executive health journeys.", zh: "湖畔胜境，适合高管健康之旅。" }
  },
  {
    name: "Sanya Coastal Recovery Resort", nameZh: "三亚海岸疗养度假村",
    specialty: { en: "Post-op Recovery", zh: "术后疗养" },
    city: { en: "Sanya", zh: "三亚" },
    accredit: "Wellness Certified", rating: 4.9,
    tags: [{ en: "Recovery", zh: "疗养" }, { en: "Spa", zh: "Spa" }],
    blurb: { en: "Tropical recovery retreat for post-treatment recuperation.", zh: "热带疗养度假村，专注术后康复。" }
  }
];

const PACKAGES = [
  {
    id: "checkup-journey", name: { en: "Premium Checkup Journey", zh: "臻享体检之旅" },
    tagline: { en: "Full-body screening + cultural escape", zh: "全身体检 + 文化之旅" },
    price: { en: "$1,200", zh: "¥8,800" }, duration: { en: "5 days / 4 nights", zh: "5 天 4 晚" },
    highlight: false,
    includes: [
      { en: "Executive full-body checkup", zh: "高管级全身体检" },
      { en: "5-star hotel & transfers", zh: "五星酒店与接送" },
      { en: "Personal medical escort", zh: "专属陪诊师" },
      { en: "2-day cultural itinerary", zh: "2 天文化行程" }
    ]
  },
  {
    id: "surgery-journey", name: { en: "Surgery & Travel", zh: "焕新手术之旅" },
    tagline: { en: "World-class surgery + recovery retreat", zh: "世界级手术 + 康养" },
    price: { en: "$6,800", zh: "¥49,000" }, duration: { en: "10 days / 9 nights", zh: "10 天 9 晚" },
    highlight: true,
    includes: [
      { en: "Specialist surgical care", zh: "专科手术照护" },
      { en: "JCI-accredited hospital", zh: "JCI 认证医院" },
      { en: "Resort recovery & spa", zh: "度假村疗养与 spa" },
      { en: "Visa, flights & escort", zh: "签证、机票与陪诊" }
    ]
  },
  {
    id: "tcm-journey", name: { en: "TCM Rejuvenation", zh: "精气神中医之旅" },
    tagline: { en: "Heritage medicine & wellness", zh: "传承医养与疗愈" },
    price: { en: "$980", zh: "¥7,100" }, duration: { en: "4 days / 3 nights", zh: "4 天 3 晚" },
    highlight: false,
    includes: [
      { en: "Expert TCM diagnosis", zh: "名老中医辨证" },
      { en: "Acupuncture & herbal plan", zh: "针灸与本草方案" },
      { en: "Wellness cuisine & spa", zh: "养生膳食与 spa" },
      { en: "City cultural tour", zh: "城市文化游" }
    ]
  }
];

const PROCESS = [
  { step: "01", title: { en: "Consultation", zh: "咨询了解" }, desc: { en: "Tell us your needs and medical history in a free, no-obligation call.", zh: "免费、零义务的沟通，了解您的需求与病史。" } },
  { step: "02", title: { en: "Match & Quote", zh: "匹配与报价" }, desc: { en: "We match you with accredited institutions and return a tailored plan.", zh: "为您匹配合适的认证机构，并给出定制方案与报价。" } },
  { step: "03", title: { en: "Itinerary Design", zh: "行程定制" }, desc: { en: "Visa, flights, hotel and treatments are arranged around your dates.", zh: "围绕您的日程安排签证、机票、酒店与治疗。" } },
  { step: "04", title: { en: "Arrival & Transfer", zh: "抵达接机" }, desc: { en: "Your escort meets you at the airport and settles you in.", zh: "陪诊师机场接机，安顿入住。" } },
  { step: "05", title: { en: "Care & Experience", zh: "就医体验" }, desc: { en: "Appointments run smoothly with translation and support throughout.", zh: "全程翻译与支持，就诊顺遂无忧。" } },
  { step: "06", title: { en: "Recovery & Return", zh: "康复返程" }, desc: { en: "Recuperate, then fly home with a clear follow-up plan.", zh: "安心疗养，带着清晰的复诊计划归国。" } }
];

const TESTIMONIALS = [
  {
    quote: { en: "I had my knee replaced in Shanghai and spent a week recovering by the lake in Hangzhou. World-class care, a third of the US price, and a trip I'll never forget.", zh: "我在上海做了膝关节置换，随后在杭州湖畔疗养一周。世界级医疗，仅美国三分之一的价格，是一段难忘的旅程。" },
    author: "Margaret L.", country: "United States", service: { en: "Surgery & Travel", zh: "手术焕新之旅" }
  },
  {
    quote: { en: "The medical escort translated everything and handled every detail. I never felt lost, even in a foreign country.", zh: "陪诊师翻译了一切，并打理每个细节。即使在异国，我也从未感到无助。" },
    author: "Carlos R.", country: "Mexico", service: { en: "Full-Body Checkup", zh: "全身体检" }
  },
  {
    quote: { en: "The TCM program helped my chronic fatigue more than a year of clinics back home. Plus, the food and the temples were magical.", zh: "中医疗程改善了我常年疲劳，比在老家看一年诊所都管用。加上美食与古寺，如入仙境。" },
    author: "Aiko T.", country: "Japan", service: { en: "TCM Rejuvenation", zh: "精气神中医之旅" }
  }
];

const FAQ = [
  {
    q: { en: "Do I need to speak Chinese?", zh: "我需要会中文吗？" },
    a: { en: "No. Your medical escort and coordinator handle all translation, on-site and online.", zh: "不需要。您的陪诊师与协调员负责所有翻译，现场与线上皆然。" }
  },
  {
    q: { en: "How much does it cost compared to back home?", zh: "和家乡相比要花多少钱？" },
    a: { en: "Most procedures are 60–80% cheaper than the US or Western Europe, without waiting lists.", zh: "多数项目比美国或西欧便宜 60–80%，且无需排队。" }
  },
  {
    q: { en: "Are the hospitals safe and accredited?", zh: "这些医院安全、有资质吗？" },
    a: { en: "We only list JCI-certified or government-rated tertiary institutions with a dedicated international desk.", zh: "我们只收录 JCI 认证或政府评级的三甲机构，且设有国际医疗部门。" }
  },
  {
    q: { en: "Can I just book a checkup without tourism?", zh: "我可以只做体检、不旅游吗？" },
    a: { en: "Absolutely. Every service can be booked on its own; travel is optional.", zh: "当然。每项服务都可单独预约，旅行为可选项。" }
  },
  {
    q: { en: "How do I start?", zh: "我该如何开始？" },
    a: { en: "Send an inquiry through the form above. A coordinator responds within 24 hours.", zh: "通过上方表单提交咨询，协调员将在 24 小时内回复。" }
  },
  {
    q: { en: "I run a hospital — how do I join?", zh: "我经营一家医院，如何入驻？" },
    a: { en: "Use the “I'm an Institution” tab to apply. We review credentials and route patient inquiries to your team.", zh: "使用“我是机构”标签申请入驻。我们审核资质，并把患者咨询推送给您的团队。" }
  }
];
