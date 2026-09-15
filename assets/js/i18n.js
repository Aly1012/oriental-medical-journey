/* ============================================================
   i18n.js — UI chrome strings (bilingual EN / ZH)
   Dynamic content (services, institutions, etc.) lives in data.js
   ============================================================ */

const BRAND = {
  en: { short: "Oriental Medical Journey", full: "Oriental International Medical Tourism", tagline: "World-class care, magic China." },
  zh: { short: "东方医旅", full: "东方国际医疗旅游", tagline: "世界级医疗，游遍锦绣中华。" }
};

const I18N = {
  en: {
    "nav.services": "Services",
    "nav.institutions": "Institutions",
    "nav.packages": "Packages",
    "nav.process": "Process",
    "nav.stories": "Stories",
    "nav.about": "About",
    "nav.book": "Book",

    "hero.badge": "Medical Tourism, Reimagined",
    "hero.title": "World-class care,<br/>magic China.",
    "hero.subtitle": "From world-class health check China to authentic TCM treatment China — this is medical tourism to China, reimagined with private escort and five-star hospitality.",
    "hero.ctaPrimary": "Plan My Journey",
    "hero.ctaSecondary": "Explore Services",

    "why.eyebrow": "Why China",
    "why.title": "Care without the wait, at a fraction of the cost",
    "why.costTitle": "Typical Cost Comparison",
    "why.costNote": "Indicative ranges for self-pay international patients. Final quotes are tailored per case.",

    "services.eyebrow": "What We Arrange",
    "services.title": "A concierge for your health and your travels",
    "services.subtitle": "Every service can be booked alone or woven into a full journey — with an international escort by your side from arrival to departure.",

    "institutions.eyebrow": "Verified Network",
    "institutions.title": "Partner hospitals & clinics, vetted for you",
    "institutions.subtitle": "We onboard accredited institutions — from JCI-certified hospitals to heritage TCM pavilions — and present their qualifications and services transparently to patients worldwide.",
    "institutions.viewBtn": "View & Book",

    "packages.eyebrow": "Curated Journeys",
    "packages.title": "Signature packages",
    "packages.subtitle": "Three starting points. Every journey is then tailored to your medical needs and travel wishes.",
    "packages.from": "from",
    "packages.per": "per person",
    "packages.cta": "Request this journey",

    "process.eyebrow": "How It Works",
    "process.title": "From first message to safe return home",

    "stories.eyebrow": "Patient Stories",
    "stories.title": "They came for care. They left with more.",

    "about.eyebrow": "Our Role",
    "about.title": "A trusted bridge between you and China's best care",
    "about.p1": "Oriental Medical Journey is an intermediary service center connecting global patients with China's leading medical institutions. We handle the language, the logistics and the trust — so you can focus on your health and your journey.",
    "about.p2": "For institutions, we are a vetted distribution channel to international demand, with transparent qualification display and direct inquiry routing. For patients, we are a single, accountable point of contact from the first question to the flight home.",

    "faq.eyebrow": "Good To Know",
    "faq.title": "Frequently asked questions",

    "book.eyebrow": "Start Here",
    "book.title": "Tell us what you need",
    "book.subtitle": "Request a tailored medical journey. Your submission is routed to our service center and the most suitable partner for a free, no-obligation consultation.",
    "book.point1": "Respond within 24 hours",
    "book.point2": "No obligation, free initial consultation",
    "book.point3": "Multilingual coordinators (EN / 中文 / Español / العربية)",
    "book.tabCustomer": "Make your reservation now",

    "form.name": "Full name *",
    "form.email": "Email *",
    "form.phone": "Phone / WhatsApp",
    "form.country": "Country",
    "form.service": "Service of interest",
    "form.date": "Preferred travel month",
    "form.message": "Briefly describe your needs",
    "form.submit": "Send My Inquiry",
    "form.demoNote": "Demo: submissions are stored locally in your browser to simulate routing to the service center.",
    "form.success": "Inquiry received",
    "form.successDesc": "Thank you. Your request has been routed to our service center and the relevant partner. A coordinator will reach out within 24 hours.",
    "form.successClose": "Close",

    "service.select.placeholder": "Select a service…",

    "footer.tag": "World-class care, magic China.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.demo": "Demo",
    "footer.viewSubmissions": "View submitted records",
    "footer.copyright": "© 2026 Oriental Medical Journey. All rights reserved.",
    "footer.disclaimer": "This website is a demonstration. It does not constitute medical advice. All care is delivered by licensed partner institutions.",

    "modal.empty": "No submissions stored yet in this browser.",
    "modal.customer": "Patient inquiry",
    "modal.close": "Close"
  },

  zh: {
    "nav.services": "服务项目",
    "nav.institutions": "合作机构",
    "nav.packages": "精选套餐",
    "nav.process": "服务流程",
    "nav.stories": "客户故事",
    "nav.about": "关于我们",
    "nav.book": "预约咨询",

    "hero.badge": "医疗旅游，全新体验",
    "hero.title": "世界级医疗，<br/>游遍锦绣中华。",
    "hero.subtitle": "从世界级的中国健康体检，到地道的中医诊疗——这就是赴华医疗旅游，由专属陪诊师与五星礼遇重新定义。",
    "hero.ctaPrimary": "规划我的旅程",
    "hero.ctaSecondary": "探索服务",

    "why.eyebrow": "为什么选中国",
    "why.title": "无需漫长等待，花费却大幅降低",
    "why.costTitle": "典型费用对比",
    "why.costNote": "以下为国际自费患者的参考区间，最终报价按个案定制。",

    "services.eyebrow": "我们代办",
    "services.title": "为您的健康与旅行提供一站式管家",
    "services.subtitle": "每项服务既可单独预约，也可串联成完整旅程——国际陪诊师从抵达到离开全程随行。",

    "institutions.eyebrow": "认证网络",
    "institutions.title": "严选合作医院与诊所，为您把关",
    "institutions.subtitle": "我们引入具备资质的机构——从 JCI 认证医院到传承中医馆——并向全球患者透明展示其资质与服务。",
    "institutions.viewBtn": "查看并预约",

    "packages.eyebrow": "精选旅程",
    "packages.title": "招牌套餐",
    "packages.subtitle": "三个起点，每一段旅程都会按您的医疗需求与旅行愿望量身定制。",
    "packages.from": "起",
    "packages.per": "每人",
    "packages.cta": "预约此旅程",

    "process.eyebrow": "服务流程",
    "process.title": "从首次咨询到平安归国",

    "stories.eyebrow": "客户故事",
    "stories.title": "为疗愈而来，满载而归。",

    "about.eyebrow": "我们的角色",
    "about.title": "您与中国顶尖医疗之间可信的桥梁",
    "about.p1": "东方医旅 是一个中介服务中心，连接全球患者与中国领先医疗机构。我们搞定语言、行程与信任——您只需关注健康与旅程。",
    "about.p2": "对机构而言，我们是面向国际需求、经过筛选的分发渠道，资质透明展示、咨询直接推送；对患者而言，我们从第一个问题到返程航班，都是唯一、可追责的联系人。",

    "faq.eyebrow": "须知事项",
    "faq.title": "常见问题",

    "book.eyebrow": "从这里开始",
    "book.title": "告诉我们您的需求",
    "book.subtitle": "申请定制医疗旅程。您的提交将推送至服务中心，并由最匹配的合作方为您提供免费、零义务的首次咨询。",
    "book.point1": "24 小时内响应",
    "book.point2": "零义务，首次咨询免费",
    "book.point3": "多语种协调员（英文 / 中文 / Español / العربية）",
    "book.tabCustomer": "立即预约",

    "form.name": "姓名 *",
    "form.email": "邮箱 *",
    "form.phone": "电话 / WhatsApp",
    "form.country": "国家",
    "form.service": "感兴趣的服务",
    "form.date": "期望出行月份",
    "form.message": "简要描述您的需求",
    "form.submit": "提交咨询",
    "form.demoNote": "演示说明：提交内容暂存于您浏览器本地，用于模拟推送至服务中心。",
    "form.success": "已收到您的咨询",
    "form.successDesc": "感谢您。您的需求已推送至服务中心及对应合作机构，协调员将在 24 小时内与您联系。",
    "form.successClose": "关闭",

    "service.select.placeholder": "请选择服务…",

    "footer.tag": "世界级医疗，游遍锦绣中华。",
    "footer.explore": "导航",
    "footer.contact": "联系方式",
    "footer.demo": "演示",
    "footer.viewSubmissions": "查看提交记录",
    "footer.copyright": "© 2026 东方医旅 版权所有",
    "footer.disclaimer": "本网站为演示用途，不构成医疗建议。所有医疗服务均由具备资质的合作机构提供。",

    "modal.empty": "本浏览器中尚未存储任何提交记录。",
    "modal.customer": "患者咨询",
    "modal.close": "关闭"
  }
};
