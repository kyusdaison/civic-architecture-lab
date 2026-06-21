import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Database, Landmark, Scale, ScrollText, ShieldCheck } from 'lucide-react';
import { useLang } from './LanguageContext';

const InsightsPage: React.FC = () => {
  const { c, lang } = useLang();

  const researchLanes =
    lang === 'zh'
      ? [
          {
            title: '制度设计研究',
            text: '研究公共授权、机构职责、参与规则与长期问责如何共同形成可运行的制度架构。',
            icon: Landmark,
          },
          {
            title: '数字公共基础设施标准',
            text: '梳理身份、服务访问、证据记录、互操作性和数据责任的设计标准。',
            icon: Database,
          },
          {
            title: '政策与监管方法',
            text: '将合规、监管访问、监督路径和公共价值转化为可执行的系统要求。',
            icon: Scale,
          },
        ]
      : [
          {
            title: 'Institutional Design Research',
            text: 'Research on how mandate, duties, participation rules and accountability become operating institutional architecture.',
            icon: Landmark,
          },
          {
            title: 'Digital Public Infrastructure Standards',
            text: 'Design standards for identity, service access, evidence records, interoperability and data responsibility.',
            icon: Database,
          },
          {
            title: 'Policy & Regulatory Method',
            text: 'Translating compliance, regulatory access, oversight pathways and public value into executable system requirements.',
            icon: Scale,
          },
        ];

  const standardsQuestions =
    lang === 'zh'
      ? [
          '这个系统的公共授权是否清晰？',
          '身份、服务与证据是否可被审阅？',
          '监管、监督与公共责任是否内建？',
          '参与模型是否真正服务公共价值？',
        ]
      : [
          'Is the public mandate clear?',
          'Can identity, services and evidence be reviewed?',
          'Are oversight, regulation and sovereign responsibility built in?',
          'Does the participation model serve public value rather than speculation?',
        ];

  return (
    <>
      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="section-eyebrow">{c.insights.eyebrow}</span>
            <h1 className="page-hero-title mt-4 mb-6">{c.insights.title}</h1>
            <p className="page-hero-lede mb-8">{c.insights.body}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.insights.topics.map((t) => (
                <span key={t} className="topic-token">{t}</span>
              ))}
            </div>
          </div>
          <div className="visual-frame min-h-[23rem]">
            <img
              src="/visuals/cal/research-standards-observatory.webp"
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
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <span className="section-eyebrow">
                {lang === 'zh' ? '研究议程' : 'Research Agenda'}
              </span>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-[2.55rem]">
                {lang === 'zh' ? '把复杂制度问题转化为可执行标准' : 'Turning Complex Institutional Questions into Executable Standards'}
              </h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '赛域实验室的研究不是制造概念，而是帮助公共机构判断一个系统能否被授权、被建设、被监督，并在长期运行中持续保有公共价值。'
                : 'CAL research is not built around abstract commentary. It helps public institutions decide whether a system can be authorised, built, supervised and maintained as public value over time.'}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {researchLanes.map((lane, i) => {
              const Icon = lane.icon;
              return (
                <div key={lane.title} className="research-lane">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-fcb-gold/25 bg-fcb-gold/10 text-fcb-gold">
                      <Icon size={21} />
                    </div>
                    <span className="font-mono text-sm text-fcb-gold/60">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-white">{lane.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{lane.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="institution-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-fcb-gold">
              <BookOpen size={18} />
              <h2 className="font-serif text-xl text-white">
                {lang === 'zh' ? '标准判断框架' : 'Standards Workbench'}
              </h2>
            </div>
            <p className="mb-7 text-base font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '每一项研究主题最终都回到同一个判断：公共系统能否被清晰授权、稳定运行、有效监督，并在跨机构协作中保持可信。'
                : 'Every research theme returns to one test: whether a public system can be clearly authorised, operated with stability, supervised effectively and trusted across institutions.'}
            </p>
            <div className="space-y-3">
              {standardsQuestions.map((question, i) => (
                <div key={question} className="standard-row">
                  <span className="font-mono text-xs text-fcb-gold/75">{String(i + 1).padStart(2, '0')}</span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="assurance-tile">
              <ShieldCheck className="mb-4 text-fcb-gold" size={20} />
              <h3 className="mb-2 font-serif text-lg text-white">
                {lang === 'zh' ? '可信边界' : 'Trust Perimeters'}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                {lang === 'zh'
                  ? '定义哪些身份、服务、记录和权限可以进入公共系统，并明确责任主体。'
                  : 'Define which identities, services, records and authorities may enter a public system, and who is responsible.'}
              </p>
            </div>
            <div className="assurance-tile">
              <ScrollText className="mb-4 text-fcb-gold" size={20} />
              <h3 className="mb-2 font-serif text-lg text-white">
                {lang === 'zh' ? '可审阅证据' : 'Reviewable Evidence'}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                {lang === 'zh'
                  ? '让参与、访问、合规和服务交付留下可复核的制度记录。'
                  : 'Make participation, access, compliance and service delivery leave reviewable institutional records.'}
              </p>
            </div>
            <div className="assurance-tile sm:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="mb-2 font-serif text-lg text-white">
                    {lang === 'zh' ? '面向机构合作的研究入口' : 'Research Entry Point for Institutional Work'}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">
                    {lang === 'zh'
                      ? '研究议题可以进一步转化为政策框架、监管路径、制度设计或数字公共基础设施项目。'
                      : 'Research topics can become policy frameworks, regulatory pathways, institutional design or digital public infrastructure programs.'}
                  </p>
                </div>
                <Link to="/contact" className="primary-action shrink-0">
                  {c.ui.contactCta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsPage;
