export type Lang = 'en' | 'zh';

export interface Capability {
  slug: string;
  title: string;
  text: string;
  lead: string;
  includes: string[];
  outcomes: string[];
}

export interface CalContent {
  brand: { name: string; tagline: string; poweredBy: string };
  nav: { label: string; to: string }[];
  ui: {
    backToFcb: string;
    langOther: string;
    learnMore: string;
    backToCapabilities: string;
    includesTitle: string;
    outcomesTitle: string;
    viewAllCapabilities: string;
    contactCta: string;
  };
  hero: { kicker: string; title: string; titleAccent: string; body: string; ctaPrimary: string; ctaSecondary: string };
  whatWeDo: { eyebrow: string; title: string; body: string; not: string };
  capabilities: { eyebrow: string; title: string; intro: string; items: Capability[] };
  approach: { eyebrow: string; title: string; steps: { step: string; title: string; text: string }[] };
  govValue: { eyebrow: string; title: string; body: string; points: { title: string; text: string }[] };
  audience: { eyebrow: string; title: string; groups: string[] };
  insights: { eyebrow: string; title: string; body: string; topics: string[] };
  contact: { eyebrow: string; title: string; body: string; enquiryTitle: string; enquiries: string[] };
  closing: { eyebrow: string; title: string; body: string; ctaPrimary: string; ctaSecondary: string };
  footer: { poweredBy: string; ecosystem: string; rights: string };
}

export const FCB_URL = 'https://www.futurecitizen.io';
export const MSD_URL = 'https://www.msd.ms';
export const CONTACT_EMAIL = 'info@futurecitizen.io';

export const CONTENT: Record<Lang, CalContent> = {
  en: {
    brand: { name: 'Civic Architecture Lab', tagline: 'Institutional Design & Digital Public Infrastructure', poweredBy: 'Powered by Future Citizen Bureau' },
    nav: [
      { label: 'Home', to: '/' },
      { label: 'What We Do', to: '/what-we-do' },
      { label: 'Capabilities', to: '/capabilities' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
    ui: {
      backToFcb: 'Future Citizen Bureau',
      langOther: '中文',
      learnMore: 'Learn more',
      backToCapabilities: 'Back to Capabilities',
      includesTitle: 'What this includes',
      outcomesTitle: 'Outcomes',
      viewAllCapabilities: 'View all capabilities',
      contactCta: 'Government & Institutional Enquiries',
    },
    hero: {
      kicker: 'Powered by Future Citizen Bureau',
      title: 'Designing the Architecture of',
      titleAccent: 'Future Public Systems',
      body: 'Civic Architecture Lab is the institutional design capability powered by Future Citizen Bureau. It works with governments, public institutions and special jurisdictions to design digital public infrastructure, trusted identity systems and future-ready civic institutions.',
      ctaPrimary: 'Government & Institutional Enquiries',
      ctaSecondary: 'Explore Capabilities',
    },
    whatWeDo: {
      eyebrow: 'What We Are',
      title: 'An Institutional Design Lab — Not an Ordinary Consultancy',
      body: 'CAL designs the institutions, frameworks and digital public infrastructure behind trusted public systems. We work upstream of technology — defining mandate, identity, services, evidence and oversight — so that what gets built is lawful, accountable and durable.',
      not: 'Not a software vendor. Not an ordinary advisory firm. An institutional design and digital public infrastructure platform.',
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'What CAL Designs',
      intro: 'Six capabilities, one institutional approach — from mandate and policy to trusted digital public infrastructure.',
      items: [
        {
          slug: 'government-advisory',
          title: 'Government Advisory',
          text: 'Strategic and institutional advisory for governments and special jurisdictions modernising public systems.',
          lead: 'Strategic and institutional advisory for governments and special jurisdictions modernising public systems — from first mandate to operating model.',
          includes: ['Mandate and policy-objective definition', 'Institutional readiness and gap assessment', 'Stakeholder and sponsor alignment', 'Roadmap from concept to governed program'],
          outcomes: ['A clear, lawful mandate', 'Aligned institutions and sponsors', 'A realistic implementation path'],
        },
        {
          slug: 'institutional-design',
          title: 'Institutional Design',
          text: 'Designing mandate structures, public-service institutions and accountable governance for the digital era.',
          lead: 'Designing the institutions, mandate structures and accountable governance that digital public systems run on.',
          includes: ['Mandate and authority structures', 'Public-service institution design', 'Roles, rights and accountability models', 'Oversight and review mechanisms'],
          outcomes: ['Institutions fit for the digital era', 'Clear accountability', 'Durable governance'],
        },
        {
          slug: 'digital-public-infrastructure',
          title: 'Digital Public Infrastructure',
          text: 'Identity, service-access and evidence layers designed as shared public infrastructure.',
          lead: 'Identity, service-access and evidence layers designed as shared public infrastructure — not one-off products.',
          includes: ['Trusted digital identity frameworks', 'Governed service-access gateways', 'Reviewable records and evidence layers', 'Interoperability and data-residency design'],
          outcomes: ['Recognised identity', 'Accessible services', 'Verifiable trust'],
        },
        {
          slug: 'special-jurisdiction-frameworks',
          title: 'Special Jurisdiction Frameworks',
          text: 'Legal and operating frameworks for trusted districts and public digital jurisdictions.',
          lead: 'Legal and operating frameworks for trusted districts and public digital jurisdictions, under clear mandate and oversight.',
          includes: ['Jurisdictional perimeter and legal basis', 'Operating and supervisory model', 'Participation and membership rules', 'Phased pilot-to-scale pathway'],
          outcomes: ['A defensible legal perimeter', 'Controlled, phased rollout', 'Sovereign oversight retained'],
        },
        {
          slug: 'digital-residency-models',
          title: 'Digital Residency Models',
          text: 'Frameworks for lawful digital residency and participation under clear oversight.',
          lead: 'Frameworks for lawful digital residency and participation under clear oversight — designed for public, not private-migration, purposes.',
          includes: ['Eligibility and onboarding design', 'Credential issuance and lifecycle', 'Rights, access and obligations', 'Compliance and supervisory pathways'],
          outcomes: ['Lawful digital participation', 'Portable, verifiable credentials', 'Oversight by design'],
        },
        {
          slug: 'policy-regulatory-frameworks',
          title: 'Policy & Regulatory Frameworks',
          text: 'Policy design, regulatory alignment and supervisory pathways embedded from the start.',
          lead: 'Policy design, regulatory alignment and supervisory pathways embedded from the first line of design.',
          includes: ['Policy and legal architecture', 'AML / KYC and supervisory controls', 'Regulatory alignment and review', 'Data protection and accountability'],
          outcomes: ['Compliance by design', 'Regulator-ready systems', 'Accountable participation'],
        },
      ],
    },
    approach: {
      eyebrow: 'Approach',
      title: 'From Mandate to Operating System',
      steps: [
        { step: '01', title: 'Mandate & Assessment', text: 'Define jurisdictional priorities, legal perimeter and institutional sponsor before any system is designed.' },
        { step: '02', title: 'Institutional Design', text: 'Design the institutions, identity model, service rules and evidence boundaries the system will run on.' },
        { step: '03', title: 'Digital Public Infrastructure', text: 'Translate the design into trusted identity, service-access and evidence infrastructure under public oversight.' },
        { step: '04', title: 'Operation & Stewardship', text: 'Support adoption, governance and long-term stewardship as a standing institutional partner.' },
      ],
    },
    govValue: {
      eyebrow: 'Public Value',
      title: 'Capacity for Public Systems, Not Speculation',
      body: 'CAL helps jurisdictions build durable public-system capacity. Value comes from better institutions and services — sustainable participation models, lower administrative friction and stronger oversight — not from speculative returns.',
      points: [
        { title: 'Administrative Modernisation', text: 'Reduce friction and modernise public administration through structured digital systems.' },
        { title: 'Sustainable Participation Models', text: 'Design lawful participation and service models that can support public revenue beyond conventional taxation.' },
        { title: 'Compliance by Design', text: 'AML, KYC and supervisory access designed into the architecture from the outset.' },
        { title: 'Sovereign Oversight', text: 'Authority over data, records and governance stays with the jurisdiction.' },
      ],
    },
    audience: {
      eyebrow: 'Who We Work With',
      title: 'Built for Public Institutions',
      groups: ['Governments', 'Special Jurisdictions', 'Public Institutions', 'Development Agencies', 'City & District Developers', 'Digital Identity Partners'],
    },
    insights: {
      eyebrow: 'Insights',
      title: 'Research on Future Public Systems',
      body: 'Analysis, working notes and standards thinking on institutional design, digital public infrastructure, special jurisdictions and trusted public systems.',
      topics: ['Institutional design', 'Digital public infrastructure', 'Special jurisdictions', 'Trusted identity', 'Policy & regulation', 'Digital residency'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Government & Institutional Enquiries',
      body: 'Civic Architecture Lab works with governments, public institutions and special jurisdictions. Reach us for institutional design and digital public infrastructure engagements.',
      enquiryTitle: 'Enquiry Types',
      enquiries: ['Government & Institutional', 'Special Jurisdiction Projects', 'Digital Public Infrastructure', 'Policy & Regulatory Design', 'Media & General'],
    },
    closing: {
      eyebrow: 'Work With CAL',
      title: 'Designing Trusted Public Systems, Together',
      body: 'Civic Architecture Lab works with governments, public institutions and special jurisdictions to design the architecture of future public systems.',
      ctaPrimary: 'Government & Institutional Enquiries',
      ctaSecondary: 'Back to FCB Ecosystem',
    },
    footer: { poweredBy: 'Civic Architecture Lab — Powered by Future Citizen Bureau', ecosystem: 'FCB Ecosystem', rights: 'Civic Architecture Lab' },
  },
  zh: {
    brand: { name: '思维客公共制度架构实验室', tagline: '制度设计与数字公共基础设施', poweredBy: '由未来公民署支持' },
    nav: [
      { label: '首页', to: '/' },
      { label: '我们做什么', to: '/what-we-do' },
      { label: '能力', to: '/capabilities' },
      { label: '洞察', to: '/insights' },
      { label: '联系', to: '/contact' },
    ],
    ui: {
      backToFcb: '未来公民署',
      langOther: 'EN',
      learnMore: '了解更多',
      backToCapabilities: '返回能力总览',
      includesTitle: '包含什么',
      outcomesTitle: '成果',
      viewAllCapabilities: '查看全部能力',
      contactCta: '政府与机构咨询',
    },
    hero: {
      kicker: '由未来公民署支持',
      title: '设计未来公共系统的',
      titleAccent: '制度架构',
      body: '思维客公共制度架构实验室是由未来公民署支持的制度设计能力。它与政府、公共机构和特殊辖区合作，设计数字公共基础设施、可信身份系统，以及面向未来的公民制度。',
      ctaPrimary: '政府与机构咨询',
      ctaSecondary: '查看能力',
    },
    whatWeDo: {
      eyebrow: '我们是什么',
      title: '一个制度设计实验室——而非普通咨询公司',
      body: '思维客设计可信公共系统背后的制度、框架与数字公共基础设施。我们工作在技术的上游——界定授权、身份、服务、证据与监督——使最终建成的系统合法、可问责且持久。',
      not: '不是软件供应商，不是普通咨询公司。它是一个制度设计与数字公共基础设施平台。',
    },
    capabilities: {
      eyebrow: '能力',
      title: '思维客设计什么',
      intro: '六项能力，一套制度方法——从授权与政策，到可信的数字公共基础设施。',
      items: [
        {
          slug: 'government-advisory',
          title: '政府咨询',
          text: '为正在实现公共系统现代化的政府与特殊辖区提供战略与制度咨询。',
          lead: '为正在实现公共系统现代化的政府与特殊辖区提供战略与制度咨询——从最初授权到运行模式。',
          includes: ['界定授权与政策目标', '机构就绪度与差距评估', '利益相关方与发起机构对齐', '从概念到受治理项目的路线图'],
          outcomes: ['清晰、合法的授权', '对齐的机构与发起方', '现实可行的实施路径'],
        },
        {
          slug: 'institutional-design',
          title: '制度设计',
          text: '为数字时代设计授权结构、公共服务机构与可问责治理。',
          lead: '设计数字公共系统赖以运行的制度、授权结构与可问责治理。',
          includes: ['授权与权限结构', '公共服务机构设计', '角色、权利与问责模型', '监督与复核机制'],
          outcomes: ['契合数字时代的机构', '清晰的问责', '持久的治理'],
        },
        {
          slug: 'digital-public-infrastructure',
          title: '数字公共基础设施',
          text: '将身份、服务访问与证据层设计为共享的公共基础设施。',
          lead: '将身份、服务访问与证据层设计为共享的公共基础设施——而非一次性产品。',
          includes: ['可信数字身份框架', '受治理的服务访问门户', '可审阅的记录与证据层', '互操作性与数据本地化设计'],
          outcomes: ['可被识别的身份', '可被获取的服务', '可被验证的信任'],
        },
        {
          slug: 'special-jurisdiction-frameworks',
          title: '特殊辖区框架',
          text: '为可信辖区与公共数字辖区设计法律与运营框架。',
          lead: '在明确授权与监督下，为可信辖区与公共数字辖区设计法律与运营框架。',
          includes: ['辖区边界与法律依据', '运营与监督模型', '参与与成员规则', '从试点到规模的分阶段路径'],
          outcomes: ['可立得住的法律边界', '受控、分阶段的推进', '主权监督得以保留'],
        },
        {
          slug: 'digital-residency-models',
          title: '数字居留模型',
          text: '在明确监督下，设计合法的数字居留与参与框架。',
          lead: '在明确监督下设计合法的数字居留与参与框架——服务于公共目的，而非私人移民。',
          includes: ['资格与引导设计', '凭证签发与生命周期', '权利、访问与义务', '合规与监督路径'],
          outcomes: ['合法的数字参与', '可移植、可验证的凭证', '监督内建于设计'],
        },
        {
          slug: 'policy-regulatory-frameworks',
          title: '政策与监管框架',
          text: '从一开始就内置政策设计、监管对齐与监督路径。',
          lead: '从设计的第一行起，就内置政策设计、监管对齐与监督路径。',
          includes: ['政策与法律架构', '反洗钱 / KYC 与监督控制', '监管对齐与复核', '数据保护与问责'],
          outcomes: ['合规先行', '可供监管核验的系统', '可问责的参与'],
        },
      ],
    },
    approach: {
      eyebrow: '方法',
      title: '从授权到运行系统',
      steps: [
        { step: '01', title: '授权与评估', text: '在设计任何系统之前，先界定辖区优先事项、法律边界与发起机构。' },
        { step: '02', title: '制度设计', text: '设计系统赖以运行的制度、身份模型、服务规则与证据边界。' },
        { step: '03', title: '数字公共基础设施', text: '在公共监督下，把设计转化为可信的身份、服务访问与证据基础设施。' },
        { step: '04', title: '运行与托管', text: '作为常设制度伙伴，支持采用、治理与长期托管。' },
      ],
    },
    govValue: {
      eyebrow: '公共价值',
      title: '为公共系统建设能力，而非投机',
      body: '思维客帮助辖区建设持久的公共系统能力。价值来自更好的制度与服务——可持续的参与模型、更低的行政摩擦与更强的监督——而非投机性回报。',
      points: [
        { title: '行政现代化', text: '通过结构化的数字系统降低摩擦、实现公共行政现代化。' },
        { title: '可持续参与模型', text: '设计合法的参与与服务模型，使其能在传统税收之外支持公共收入。' },
        { title: '合规先行', text: '反洗钱、KYC 与监管访问从一开始即设计进架构。' },
        { title: '主权监督', text: '对数据、记录与治理的权限始终留在辖区手中。' },
      ],
    },
    audience: {
      eyebrow: '我们与谁合作',
      title: '为公共机构而建',
      groups: ['政府', '特殊辖区', '公共机构', '发展机构', '城市与辖区开发者', '数字身份合作伙伴'],
    },
    insights: {
      eyebrow: '洞察',
      title: '关于未来公共系统的研究',
      body: '围绕制度设计、数字公共基础设施、特殊辖区与可信公共系统，持续发布分析、工作笔记与标准方法论。',
      topics: ['制度设计', '数字公共基础设施', '特殊辖区', '可信身份', '政策与监管', '数字居留'],
    },
    contact: {
      eyebrow: '联系',
      title: '政府与机构咨询',
      body: '思维客公共制度架构实验室与政府、公共机构和特殊辖区合作。制度设计与数字公共基础设施相关合作，欢迎联系。',
      enquiryTitle: '咨询类别',
      enquiries: ['政府与机构', '特殊辖区项目', '数字公共基础设施', '政策与监管设计', '媒体与综合'],
    },
    closing: {
      eyebrow: '与思维客合作',
      title: '共同设计可信的公共系统',
      body: '思维客公共制度架构实验室与政府、公共机构和特殊辖区合作，设计未来公共系统的制度架构。',
      ctaPrimary: '政府与机构咨询',
      ctaSecondary: '返回 FCB 生态',
    },
    footer: { poweredBy: '思维客公共制度架构实验室 —— 由未来公民署支持', ecosystem: 'FCB 生态', rights: '思维客公共制度架构实验室' },
  },
};
