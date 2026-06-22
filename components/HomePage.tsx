import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Database,
  Fingerprint,
  Globe,
  Landmark,
  Layers3,
  Network,
  Scale,
  ScrollText,
  ShieldCheck,
} from 'lucide-react';
import { useLang } from './LanguageContext';
import { FCB_URL, CONTACT_EMAIL } from '../content';
import InstitutionalSystemMap from './InstitutionalSystemMap';

const CAP_ICONS = [Landmark, Building2, Network, Layers3, Globe, ScrollText];

const HomePage: React.FC = () => {
  const { lang, c } = useLang();

  const systemPillars =
    lang === 'zh'
      ? ['授权', '身份', '服务', '证据', '监督']
      : ['Mandate', 'Identity', 'Services', 'Evidence', 'Oversight'];

  const architectureLayers =
    lang === 'zh'
      ? [
          { title: '公共授权', text: '先明确公共目的、法律边界与监督关系。', icon: Landmark },
          { title: '制度与治理', text: '把机构职责、问责关系与运行规则设计清楚。', icon: Scale },
          { title: '身份与准入', text: '建立资格、凭证、可信身份和服务访问规则。', icon: Fingerprint },
          { title: '证据与记录', text: '让参与、服务与合规形成可审阅的制度记录。', icon: Database },
        ]
      : [
          { title: 'Public Mandate', text: 'Define legal perimeter, policy purpose and sovereign oversight first.', icon: Landmark },
          { title: 'Institutions & Governance', text: 'Clarify duties, accountability and operating rules before technology.', icon: Scale },
          { title: 'Identity & Access', text: 'Design trusted identity, eligibility, credentials and service access.', icon: Fingerprint },
          { title: 'Evidence & Records', text: 'Make participation, service delivery and compliance reviewable by design.', icon: Database },
        ];

  const narrativePoints =
    lang === 'zh'
      ? [
          { label: '不是产品堆叠', value: '先建立授权、规则与监督' },
          { label: '不是短期试验', value: '以长期公共能力为目标' },
          { label: '不是私人移民叙事', value: '面向公共系统与可信参与' },
        ]
      : [
          { label: 'Not product stacking', value: 'Mandate, rules and oversight come first' },
          { label: 'Not a short experiment', value: 'Designed as long-term public capacity' },
          { label: 'Not private-migration framing', value: 'Built for public systems and trusted participation' },
        ];

  const operatingStandard =
    lang === 'zh'
      ? [
          { code: '01', title: '公共授权', text: '谁授权、为了什么公共目的、边界在哪里。' },
          { code: '02', title: '身份准入', text: '谁可以参与、如何识别、凭证如何被信任。' },
          { code: '03', title: '服务规则', text: '可以访问哪些服务、规则如何执行、责任如何分配。' },
          { code: '04', title: '证据记录', text: '关键行为如何留下记录、如何被复核与审计。' },
          { code: '05', title: '监督管护', text: '谁持续负责、如何纠偏、如何长期维护公共价值。' },
        ]
      : [
          { code: '01', title: 'Public Mandate', text: 'Who authorises the system, for what public purpose, and within which perimeter.' },
          { code: '02', title: 'Identity & Access', text: 'Who can participate, how identity is recognised, and why credentials can be trusted.' },
          { code: '03', title: 'Service Rules', text: 'Which services can be accessed, how rules are enforced, and where responsibilities sit.' },
          { code: '04', title: 'Evidence Records', text: 'How critical actions leave records that can be reviewed, audited and governed.' },
          { code: '05', title: 'Oversight & Stewardship', text: 'Who remains responsible, how corrections happen, and how public value is maintained.' },
        ];

  const assurancePrinciples =
    lang === 'zh'
      ? [
          { title: '授权先于技术', text: '先确认公共目的、法律边界与责任主体，再讨论技术实现。' },
          { title: '证据能够复核', text: '身份、服务、参与与合规记录应形成可审阅的证据层。' },
          { title: '监督内建于设计', text: '监管、审计与治理不应事后补充，而应成为系统结构本身。' },
          { title: '公共责任保留', text: '关键数据、记录和规则始终处在辖区授权与公共监督之下。' },
        ]
      : [
          { title: 'Mandate Before Technology', text: 'Every system begins with a clear public purpose, legal perimeter and accountable authority.' },
          { title: 'Evidence Can Be Reviewed', text: 'Identity, service, participation and compliance records form a reviewable evidence layer.' },
          { title: 'Oversight Is Built In', text: 'Regulatory access, auditability and governance are part of the architecture, not a later add-on.' },
          { title: 'Sovereign Responsibility Remains', text: 'Critical data, records and rules stay under jurisdictional mandate and public oversight.' },
        ];

  const operatingSignals =
    lang === 'zh'
      ? ['公共授权边界', '受治理的身份体系', '可审阅记录', '服务访问规则', '监管与监督路径', '长期机构管护']
      : [
          'Public mandate perimeter',
          'Governed identity',
          'Reviewable records',
          'Service-access rules',
          'Regulatory oversight paths',
          'Long-term institutional stewardship',
        ];

  const engagementPath =
    lang === 'zh'
      ? [
          {
            step: '01',
            title: '确认授权与目标',
            text: '确认公共目的、法律边界、发起机构和可执行范围，避免项目从工具或营销叙事开始。',
          },
          {
            step: '02',
            title: '设计制度架构',
            text: '把身份、服务、证据、监督和责任关系组织成一套可解释、可审阅、可运行的框架。',
          },
          {
            step: '03',
            title: '转化为治理型基础设施',
            text: '把制度设计落实为可信身份、服务访问、证据记录和运行规则。',
          },
          {
            step: '04',
            title: '长期管护与复核',
            text: '在运行、监督和扩展阶段保持制度一致性、公共价值和辖区责任。',
          },
        ]
      : [
          {
            step: '01',
            title: 'Confirm mandate and purpose',
            text: 'Clarify public purpose, legal perimeter, sponsor and executable scope before the project becomes a tool or campaign.',
          },
          {
            step: '02',
            title: 'Design the institutional architecture',
            text: 'Organise identity, services, evidence, oversight and accountability into a framework that can be explained, reviewed and operated.',
          },
          {
            step: '03',
            title: 'Translate into governed infrastructure',
            text: 'Support teams as the design becomes trusted identity, service access, evidence records and operating rules.',
          },
          {
            step: '04',
            title: 'Steward, review and iterate',
            text: 'Maintain institutional coherence, public value and sovereign responsibility through operation, oversight and scale.',
          },
        ];

  const publicValueCommitments =
    lang === 'zh'
      ? ['公共权责清晰可见', '服务访问更加顺畅', '关键记录可被复核', '系统增长保持可治理']
      : [
          'Authority remains clear',
          'Services become easier to access',
          'Records stay reviewable',
          'Growth remains governable',
        ];

  return (
    <>
      <section className="relative isolate min-h-[calc(84vh-5rem)] overflow-hidden px-6 py-20 md:py-24">
        <img
          src="/visuals/cal/v2/institutional-civic-hall-hero.webp"
          alt=""
          decoding="async"
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.82)_42%,rgba(2,6,23,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-fcb-dark to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.68fr)]">
          <div className="max-w-3xl">
            <span className="eyebrow-chip">{c.hero.kicker}</span>
            <h1 className="page-hero-title mt-6 max-w-2xl">
              {c.hero.title}{' '}
              <span className="gold-gradient-text whitespace-nowrap italic">{c.hero.titleAccent}</span>
            </h1>
            <p className="page-hero-lede mt-6 max-w-lg">
              {c.hero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="primary-action group">
                {c.hero.ctaPrimary}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/capabilities" className="secondary-action">
                {c.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="institution-panel hidden p-5 lg:block">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold">
                {lang === 'zh' ? '制度运行序列' : 'Institutional Sequence'}
              </span>
              <ShieldCheck size={18} className="text-fcb-gold" />
            </div>
            <div className="space-y-3">
              {systemPillars.map((p, i) => (
                <div key={p} className="flex items-center gap-4">
                  <span className="w-8 font-mono text-xs text-fcb-gold/80">{String(i + 1).padStart(2, '0')}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-fcb-gold/60 to-white/5" />
                  <span className="min-w-24 text-right text-sm text-gray-200">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-6 pb-16 pt-0 md:-mt-24 lg:-mt-32">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {narrativePoints.map((point) => (
            <div key={point.label} className="institution-card p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold">{point.label}</p>
              <p className="font-serif text-xl leading-snug text-white">{point.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="operating-standard">
            <img
              src="/visuals/cal/v5/public-system-operating-standard.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="operating-standard-shade" />
            <div className="relative grid gap-10 p-6 md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
              <div className="max-w-2xl">
                <span className="section-eyebrow">
                  {lang === 'zh' ? '制度运行标准' : 'Operating Standard'}
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-[2.35rem]">
                  {lang === 'zh'
                    ? '一套可信公共系统，必须先回答五个制度问题'
                    : 'A trusted public system must answer five institutional questions first'}
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-gray-300">
                  {lang === 'zh'
                    ? '赛域实验室把这些问题放在技术建设之前。只有授权、身份、服务、证据与监督同时清楚，数字公共基础设施才具备被采用、被复核和长期运行的基础。'
                    : 'CAL places these questions before technical delivery. Digital public infrastructure becomes adoptable, reviewable and durable only when mandate, identity, services, evidence and oversight are clear together.'}
                </p>
              </div>

              <div className="standard-ledger">
                {operatingStandard.map((item) => (
                  <div key={item.code} className="standard-ledger-row">
                    <span>{item.code}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="standard-axis" aria-hidden="true">
              {systemPillars.map((pillar) => (
                <span key={pillar}>{pillar}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-eyebrow">{c.whatWeDo.eyebrow}</span>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">{c.whatWeDo.title}</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">{c.whatWeDo.body}</p>
            <p className="mt-7 border-l-2 border-fcb-gold/60 pl-5 text-base font-light italic leading-relaxed text-fcb-goldLight">
              {c.whatWeDo.not}
            </p>
            <Link to="/what-we-do" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold hover:text-white">
              {c.ui.learnMore} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="visual-frame">
            <img src="/visuals/cal/v2/governed-infrastructure-atlas.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
            <div>
              <span className="section-eyebrow">
                {lang === 'zh' ? '制度架构' : 'System Architecture'}
              </span>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
                {lang === 'zh' ? '从公共授权走向可信运行' : 'From Public Mandate to Trusted Operating Layers'}
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-gray-300">
                {lang === 'zh'
                  ? '清晰的制度架构能让政府、机构、合作方与公众理解：系统如何被授权、如何运行、留下哪些证据，以及由谁长期负责。'
                  : 'A clear institutional architecture lets governments, partners and the public understand how a system is authorised, how it operates, what evidence it leaves and who remains responsible over time.'}
              </p>
            </div>
            <InstitutionalSystemMap lang={lang} />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div key={layer.title} className="institution-card p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-fcb-gold/25 bg-fcb-gold/10 text-fcb-gold">
                    <Icon size={21} />
                  </div>
                  <h3 className="mb-3 font-serif text-xl text-white">{layer.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{layer.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="section-eyebrow">{lang === 'zh' ? '可信基础设施' : 'Trust Assurance'}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh' ? '让公共系统可授权、可使用、可审阅' : 'So Public Systems Can Be Authorised, Used and Reviewed'}
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '可信公共系统不只需要清晰界面，更需要可解释的公共授权、可追溯的证据、可执行的服务规则和可持续的监督能力。赛域实验室把这些要求前置到系统架构之中。'
                : 'A trusted public system needs more than a polished interface. It requires explainable mandate, traceable evidence, enforceable service rules and durable oversight. CAL treats these requirements as the architecture itself.'}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {assurancePrinciples.map((principle) => (
                <div key={principle.title} className="assurance-tile">
                  <h3 className="mb-2 font-serif text-lg text-white">{principle.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="visual-frame">
            <img src="/visuals/cal/v3/assurance-evidence-chamber.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">{lang === 'zh' ? '运行信号' : 'Operating Signals'}</span>
            <p className="mt-4 font-serif text-2xl leading-snug text-white md:text-3xl">
              {lang === 'zh'
                ? '一个公共系统若要长期存在，授权、身份、服务、证据与监督必须彼此对齐。'
                : 'For a system to endure, mandate, identity, services, evidence and oversight must remain aligned.'}
            </p>
          </div>
          <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {operatingSignals.map((signal) => (
              <div key={signal} className="signal-chip">{signal}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{c.capabilities.eyebrow}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">{c.capabilities.title}</h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-gray-300">{c.capabilities.intro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.capabilities.items.map((item, i) => {
              const Icon = CAP_ICONS[i] ?? Landmark;
              return (
                <Link key={item.slug} to={`/capabilities/${item.slug}`} className="institution-card group block p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-fcb-gold/25 bg-fcb-gold/10 text-fcb-gold transition-colors group-hover:bg-fcb-gold group-hover:text-fcb-dark">
                      <Icon size={21} />
                    </div>
                    <span className="font-mono text-sm text-fcb-gold/60">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-white">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-gold">
                    {c.ui.learnMore} <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="section-eyebrow">{c.approach.eyebrow}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">{c.approach.title}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {c.approach.steps.map((s, i) => (
              <div key={s.step} className="relative border-l border-fcb-gold/35 pl-7 lg:border-l-0 lg:border-t lg:pt-7">
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-fcb-gold lg:-top-[5px] lg:left-0" />
                <div className="mb-5 font-mono text-3xl font-bold text-fcb-gold/80">{s.step}</div>
                <h3 className="mb-3 font-serif text-xl text-white">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{s.text}</p>
                {i < c.approach.steps.length - 1 && <div className="mt-8 hidden h-px bg-gradient-to-r from-fcb-gold/45 to-transparent lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="section-eyebrow">
              {lang === 'zh' ? '合作路径' : 'Engagement Pathway'}
            </span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh'
                ? '从最初授权走向长期管护'
                : 'From First Mandate to Long-Term Stewardship'}
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '赛域实验室不以一次性交付为中心，而是帮助公共机构把复杂愿景转化为可授权、可建设、可监督、可长期维护的制度基础设施。每一阶段都服务于同一目标：让系统在清晰公共责任下稳定运行。'
                : 'CAL is not organised around one-off deliverables. It helps public institutions translate complex ambitions into infrastructure that can be authorised, built, supervised and maintained. Each phase serves the same objective: systems that operate under public responsibility.'}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {engagementPath.map((item) => (
                <div key={item.step} className="pathway-step">
                  <div className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-fcb-gold/80">{item.step}</div>
                  <h3 className="mb-2 font-serif text-lg text-white">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="visual-frame">
            <img
              src="/visuals/cal/v3/engagement-stewardship-corridor.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="visual-frame outcome-visual order-2 lg:order-1">
              <img
                src="/visuals/cal/v3/governance-public-value-ledger-room.webp"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-eyebrow">{c.govValue.eyebrow}</span>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">{c.govValue.title}</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">{c.govValue.body}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {c.govValue.points.map((p, i) => (
              <div key={p.title} className="outcome-item">
                <div className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-fcb-gold/75">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2 font-serif text-lg text-white">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="grid gap-3 md:grid-cols-4">
              {publicValueCommitments.map((item) => (
                <div key={item} className="signal-chip">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section relative overflow-hidden px-6 py-28">
        <div className="closing-visual-layer absolute inset-0">
          <img src="/visuals/cal/v2/public-trust-continuum-hall.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="closing-section-shade absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="section-eyebrow justify-center">{c.closing.eyebrow}</span>
          <h2 className="mt-5 font-serif text-3xl tracking-tight text-white md:text-[2.7rem]">{c.closing.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-300">{c.closing.body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="primary-action">
              {c.closing.ctaPrimary} <ArrowRight size={14} />
            </Link>
            <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="secondary-action">
              {c.closing.ctaSecondary} <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="closing-trust-axis mt-12" aria-label={lang === 'zh' ? '可信公共系统轴线' : 'Trusted public system axis'}>
            {systemPillars.map((pillar, index) => (
              <div key={pillar} className="closing-trust-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
