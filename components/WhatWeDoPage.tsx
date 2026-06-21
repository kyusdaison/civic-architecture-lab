import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Landmark, Network, Scale, ShieldCheck } from 'lucide-react';
import { useLang } from './LanguageContext';

interface MethodPrinciple {
  title: string;
  text: string;
  icon: LucideIcon;
}

const WhatWeDoPage: React.FC = () => {
  const { c, lang } = useLang();

  const methodPrinciples: MethodPrinciple[] = lang === 'zh'
    ? [
        { title: '授权先于方案', text: '先确认公共目的、法律边界与发起机构，再进入技术或产品层面的设计。', icon: Landmark },
        { title: '制度先于界面', text: '先设计责任结构、服务规则与监督路径，界面只是制度运行的外显层。', icon: Scale },
        { title: '证据先于规模', text: '每一项身份、服务与记录都应具备可审阅、可验证、可追责的证据基础。', icon: Database },
        { title: '托管先于扩张', text: '长期治理、运营责任与公共信任机制必须在扩张之前被设计清楚。', icon: ShieldCheck },
      ]
    : [
        { title: 'Mandate before solution', text: 'Public purpose, legal perimeter and institutional sponsor are clarified before product or technology choices.', icon: Landmark },
        { title: 'Institution before interface', text: 'Accountability, service rules and oversight pathways are designed before the visible digital layer.', icon: Scale },
        { title: 'Evidence before scale', text: 'Identity, services and records are structured so they can be reviewed, verified and governed.', icon: Database },
        { title: 'Stewardship before expansion', text: 'Long-term governance, operating responsibility and public trust are designed before growth.', icon: ShieldCheck },
      ];

  const doctrineSequence = lang === 'zh'
    ? ['公共目的', '机构责任', '身份与服务', '证据与监督']
    : ['Public purpose', 'Institutional responsibility', 'Identity & services', 'Evidence & oversight'];

  const titleLines = lang === 'zh'
    ? ['一个制度设计实验室', '而非普通咨询公司']
    : ['An Institutional Design Lab', 'Not an Ordinary Consultancy'];

  const operatingQuestions = lang === 'zh'
    ? [
        '谁拥有公共授权？',
        '哪个机构承担长期责任？',
        '身份、服务与数据如何被验证？',
        '监督方如何审阅运行证据？',
      ]
    : [
        'Who holds the public mandate?',
        'Which institution carries long-term responsibility?',
        'How are identity, services and data verified?',
        'How can oversight review the operating evidence?',
      ];

  const audienceFrame = lang === 'zh'
    ? '适用于需要把公共授权、数字身份、服务访问、合规监督与长期运营放在同一制度框架下推进的机构。'
    : 'Built for institutions that need public mandate, digital identity, service access, compliance oversight and long-term operations to work inside one governed framework.';

  return (
    <>
      <section className="px-6 pt-16 pb-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="section-eyebrow">{c.whatWeDo.eyebrow}</span>
            <h1 className="page-hero-title mt-4 mb-6">
              {titleLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <p className="page-hero-lede mb-7">{c.whatWeDo.body}</p>
            <p className="border-l-2 border-fcb-gold/50 pl-5 text-base font-light italic leading-relaxed text-fcb-goldLight">{c.whatWeDo.not}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/capabilities" className="primary-action">{c.ui.viewAllCapabilities} <ArrowRight size={14} /></Link>
              <Link to="/contact" className="secondary-action">{c.ui.contactCta}</Link>
            </div>
          </div>
          <div className="visual-frame min-h-[26rem] lg:min-h-[34rem]">
            <img src="/visuals/cal/institutional-method-doctrine.webp" alt="" loading="lazy" decoding="async" />
            <div className="absolute inset-x-5 bottom-5 z-10 grid gap-2 sm:grid-cols-2">
              {doctrineSequence.map((item) => (
                <span key={item} className="signal-chip bg-fcb-dark/70">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <span className="section-eyebrow">{lang === 'zh' ? '方法论' : 'Doctrine'}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-5xl">
              {lang === 'zh' ? '把复杂公共系统变成可治理的制度架构' : 'Turning complex public systems into governable institutional architecture'}
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? 'CAL 的工作不是从功能清单开始，而是从公共授权、责任边界、证据链和运行托管开始。这样设计出来的系统，才有可能被政府、监管方、合作机构与公众长期信任。'
                : 'CAL does not begin with a feature list. It begins with public mandate, accountability boundaries, evidence chains and operating stewardship, so the resulting system can be trusted by governments, regulators, partners and the public over time.'}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {methodPrinciples.map(({ title, text, icon: Icon }) => (
              <div key={title} className="institution-card p-7">
                <Icon className="mb-5 h-6 w-6 text-fcb-gold" strokeWidth={1.7} />
                <h3 className="mb-3 font-serif text-xl text-white">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{c.approach.eyebrow}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-5xl">{c.approach.title}</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="grid gap-5 md:grid-cols-2">
              {c.approach.steps.map((s) => (
                <div key={s.step} className="pathway-step">
                  <div className="mb-8 font-mono text-xs font-bold tracking-[0.28em] text-fcb-gold">{s.step}</div>
                  <h3 className="mb-3 font-serif text-xl text-white">{s.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="institution-panel p-8">
              <Network className="mb-6 h-7 w-7 text-fcb-gold" strokeWidth={1.6} />
              <h3 className="mb-5 font-serif text-2xl text-white">
                {lang === 'zh' ? '每个项目都必须回答的制度问题' : 'Institutional questions every engagement must answer'}
              </h3>
              <div className="space-y-4">
                {operatingQuestions.map((question, index) => (
                  <div key={question} className="standard-row">
                    <span className="font-mono text-xs font-bold text-fcb-gold">{String(index + 1).padStart(2, '0')}</span>
                    <span>{question}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="visual-frame outcome-visual">
            <img src="/visuals/cal/governance-public-value-ledger.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div>
            <span className="section-eyebrow">{c.govValue.eyebrow}</span>
            <h2 className="mt-4 mb-5 font-serif text-3xl tracking-tight text-white md:text-5xl">{c.govValue.title}</h2>
            <p className="mb-8 text-base font-light leading-relaxed text-gray-300">{c.govValue.body}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.govValue.points.map((p) => (
                <div key={p.title} className="outcome-item">
                  <h4 className="relative z-10 mb-3 font-serif text-lg text-white">{p.title}</h4>
                  <p className="relative z-10 text-sm font-light leading-relaxed text-gray-400">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="institution-panel p-8 md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-eyebrow justify-center">{c.audience.eyebrow}</span>
              <h2 className="mt-4 mb-5 font-serif text-3xl tracking-tight text-white md:text-5xl">{c.audience.title}</h2>
              <p className="mx-auto mb-10 max-w-3xl text-base font-light leading-relaxed text-gray-300">{audienceFrame}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.audience.groups.map((g) => (
                <span key={g} className="signal-chip">{g}</span>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link to="/contact" className="primary-action">{c.ui.contactCta} <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoPage;
