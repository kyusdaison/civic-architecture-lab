import React from 'react';
import { ArrowRight, ArrowUpRight, Building2, ClipboardCheck, FileText, Landmark, Mail, ShieldCheck } from 'lucide-react';
import { useLang } from './LanguageContext';
import { CONTACT_EMAIL, FCB_URL } from '../content';

const ContactPage: React.FC = () => {
  const { c, lang } = useLang();

  const engagementStandards =
    lang === 'zh'
      ? [
          '公共授权与机构发起',
          '明确的政策或制度目标',
          '可审阅的治理与合规边界',
          '长期运行与管护责任',
        ]
      : [
          'Public mandate and institutional sponsorship',
          'Clear policy or institutional objective',
          'Reviewable governance and compliance perimeter',
          'Long-term operating and stewardship responsibility',
        ];

  const preparationItems =
    lang === 'zh'
      ? [
          { title: '项目授权背景', text: '说明发起机构、公共目的、辖区边界与当前决策阶段。', icon: Landmark },
          { title: '制度或政策目标', text: '说明希望解决的公共系统问题，以及预期的制度结果。', icon: FileText },
          { title: '相关机构关系', text: '列明政府、监管方、公共机构、实施伙伴与责任边界。', icon: Building2 },
          { title: '治理与合规约束', text: '标明已有法律、监管、数据、身份或监督要求。', icon: ShieldCheck },
        ]
      : [
          { title: 'Mandate context', text: 'Share the sponsoring institution, public purpose, jurisdictional perimeter and current decision stage.', icon: Landmark },
          { title: 'Policy or institutional objective', text: 'State the public-system problem and the institutional outcome being sought.', icon: FileText },
          { title: 'Institutional relationships', text: 'Map the government, regulator, public institution, implementation partner and responsibility boundaries.', icon: Building2 },
          { title: 'Governance and compliance constraints', text: 'Identify legal, regulatory, data, identity or oversight requirements already in place.', icon: ShieldCheck },
        ];

  const engagementPath =
    lang === 'zh'
      ? [
          { step: '01', title: '初步接洽', text: '确认机构背景、公共目的和是否属于 CAL 的制度设计范围。' },
          { step: '02', title: '授权与边界审阅', text: '梳理法律边界、发起机构、责任主体、监督路径和可执行范围。' },
          { step: '03', title: '制度架构工作', text: '形成身份、服务、证据、合规和运营模型的可审阅框架。' },
          { step: '04', title: '长期管护路径', text: '明确从试点到运行、从治理到扩展的机构责任与迭代机制。' },
        ]
      : [
          { step: '01', title: 'Initial enquiry', text: 'Confirm institutional context, public purpose and whether the matter fits CAL’s design remit.' },
          { step: '02', title: 'Mandate and perimeter review', text: 'Review legal boundary, sponsor, accountable authority, oversight pathway and executable scope.' },
          { step: '03', title: 'Institutional architecture work', text: 'Develop a reviewable framework for identity, services, evidence, compliance and operations.' },
          { step: '04', title: 'Long-term stewardship path', text: 'Define responsibility and iteration from pilot to operation, governance and scale.' },
        ];

  const trustSignals =
    lang === 'zh'
      ? ['政府与机构优先', '授权边界清晰', '证据可审阅', '监督路径明确', '长期管护导向', '由 FCB 支持']
      : [
          'Government and institutional first',
          'Clear mandate perimeter',
          'Reviewable evidence',
          'Defined oversight path',
          'Long-term stewardship',
          'Powered by FCB',
        ];

  const officialProtocol =
    lang === 'zh'
      ? ['公共授权', '责任主体', '证据路径', '监督机制']
      : ['Public mandate', 'Accountable authority', 'Evidence pathway', 'Oversight mechanism'];

  return (
    <>
      <section className="px-6 pt-16 pb-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-4xl">
            <span className="section-eyebrow">{c.contact.eyebrow}</span>
            <h1 className="page-hero-title mt-4 mb-6">{c.contact.title}</h1>
            <p className="page-hero-lede max-w-2xl">{c.contact.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="primary-action">
                <Mail size={14} /> {CONTACT_EMAIL}
              </a>
              <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="secondary-action">
                {c.ui.backToFcb} <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="contact-protocol mt-9 hidden sm:block">
              <p className="contact-protocol-label">
                {lang === 'zh' ? '正式接洽前置条件' : 'Official Intake Protocol'}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {officialProtocol.map((item, index) => (
                  <div key={item} className="contact-protocol-item">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="visual-frame min-h-[26rem] lg:min-h-[33rem]">
            <img
              src="/visuals/cal/official-engagement-gateway-imagegen.webp"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-5 bottom-5 z-10 hidden gap-2 sm:grid sm:grid-cols-2">
              {trustSignals.slice(0, 4).map((signal) => (
                <span key={signal} className="signal-chip contact-signal bg-fcb-dark/70">{signal}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="section-eyebrow">{lang === 'zh' ? '接洽标准' : 'Engagement Standard'}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh' ? '适合正式启动合作的条件' : 'Best fit for formal institutional engagement'}
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? 'CAL 更适合处理需要公共授权、制度边界、身份与服务规则、证据层和长期监督共同成立的项目。我们优先服务具有明确机构责任和公共价值的合作。'
                : 'CAL is best suited to projects where public mandate, institutional perimeter, identity and service rules, evidence layers and long-term oversight must be designed together. We prioritise engagements with clear institutional responsibility and public value.'}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagementStandards.map((item) => (
              <div key={item} className="signal-chip">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{lang === 'zh' ? '资料准备' : 'Before Contacting CAL'}</span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh' ? '让第一次接洽直接进入制度问题' : 'Help the first conversation begin at the institutional level'}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {preparationItems.map(({ title, text, icon: Icon }) => (
              <div key={title} className="institution-card p-7">
                <Icon className="mb-5 h-6 w-6 text-fcb-gold" strokeWidth={1.7} />
                <h3 className="mb-3 font-serif text-xl text-white">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="section-eyebrow">{lang === 'zh' ? '接洽路径' : 'Engagement Pathway'}</span>
            <h2 className="mt-4 mb-10 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh' ? '从正式咨询到长期制度管护' : 'From formal enquiry to long-term institutional stewardship'}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {engagementPath.map((item) => (
                <div key={item.step} className="pathway-step">
                  <div className="mb-8 font-mono text-xs font-bold tracking-[0.28em] text-fcb-gold">{item.step}</div>
                  <h3 className="mb-3 font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="institution-panel self-start p-8">
            <ClipboardCheck className="mb-6 h-7 w-7 text-fcb-gold" strokeWidth={1.6} />
            <h3 className="mb-5 font-serif text-2xl text-white">
              {lang === 'zh' ? '咨询类别' : c.contact.enquiryTitle}
            </h3>
            <div className="space-y-4">
              {c.contact.enquiries.map((enquiry, index) => (
                <div key={enquiry} className="standard-row">
                  <span className="font-mono text-xs font-bold text-fcb-gold">{String(index + 1).padStart(2, '0')}</span>
                  <span>{enquiry}</span>
                </div>
              ))}
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="primary-action mt-8 w-full">
              <Mail size={14} /> {lang === 'zh' ? '发送正式咨询' : 'Send Institutional Enquiry'} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="institution-panel p-8 text-center md:p-12">
            <ShieldCheck className="mx-auto mb-7 h-8 w-8 text-fcb-gold" strokeWidth={1.6} />
            <span className="section-eyebrow justify-center">{lang === 'zh' ? '正式入口' : 'Official Gateway'}</span>
            <h2 className="mx-auto mt-4 max-w-4xl font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
              {lang === 'zh' ? '为需要可信公共系统的政府与机构建立清晰起点' : 'A clear starting point for governments and institutions designing trusted public systems'}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '如果项目涉及公共授权、可信身份、数字公共基础设施、特殊辖区、政策监管或长期制度运营，请通过正式邮箱联系 CAL。'
                : 'If the matter concerns public mandate, trusted identity, digital public infrastructure, special jurisdictions, policy regulation or long-term institutional operations, contact CAL through the official enquiry channel.'}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="primary-action">
                <Mail size={14} /> {CONTACT_EMAIL}
              </a>
              <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="secondary-action">
                {c.ui.backToFcb} <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
