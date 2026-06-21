import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ScrollText, ShieldCheck } from 'lucide-react';
import { useLang } from './LanguageContext';

const CapabilityDetailPage: React.FC = () => {
  const { c, lang } = useLang();
  const { slug } = useParams();
  const item = c.capabilities.items.find((x) => x.slug === slug);
  const itemIndex = c.capabilities.items.findIndex((x) => x.slug === slug);

  const assuranceQuestions =
    lang === 'zh'
      ? [
          '这项能力服务于哪一个公共授权或政策目标？',
          '哪个机构承担运行、监督与长期管护责任？',
          '身份、服务、证据和合规记录如何接受审阅？',
          '如何避免项目变成一次性产品或短期包装？',
        ]
      : [
          'Which public mandate or policy objective does this capability serve?',
          'Which institution owns operation, oversight and long-term stewardship?',
          'How can identity, services, evidence and compliance records be reviewed?',
          'How does the work avoid becoming a one-off product or short-term campaign?',
        ];

  const operatingBasis =
    lang === 'zh'
      ? ['授权基础', '制度边界', '运行规则', '证据与监督']
      : ['Mandate basis', 'Institutional perimeter', 'Operating rules', 'Evidence and oversight'];

  if (!item) return <Navigate to="/capabilities" replace />;

  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-7xl">
        <Link to="/capabilities" className="mb-8 inline-flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-fcb-gold">
          <ArrowLeft size={14} /> {c.ui.backToCapabilities}
        </Link>

        <div className="mb-14 grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <span className="section-eyebrow">{c.capabilities.eyebrow}</span>
            <h1 className="page-hero-title mt-4 mb-6">{item.title}</h1>
            <p className="page-hero-lede max-w-3xl">{item.lead}</p>
            <div className="mt-8 capability-dossier">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold">
                  {lang === 'zh' ? '能力档案' : 'Capability Dossier'}
                </p>
                <p className="mt-2 font-serif text-2xl text-white">{String(itemIndex + 1).padStart(2, '0')} / {String(c.capabilities.items.length).padStart(2, '0')}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {operatingBasis.map((basis) => (
                  <span key={basis} className="dossier-token">{basis}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="visual-frame min-h-[21rem]">
            <img
              src="/visuals/cal/capability-operating-blueprint.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="institution-card p-7">
            <div className="mb-5 flex items-center gap-3 text-fcb-gold">
              <ScrollText size={18} />
              <h2 className="font-serif text-lg text-white">{c.ui.includesTitle}</h2>
            </div>
            <ul className="space-y-3">
              {item.includes.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm font-light text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fcb-gold" /><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="institution-card p-7">
            <div className="mb-5 flex items-center gap-3 text-fcb-gold">
              <CheckCircle2 size={18} />
              <h2 className="font-serif text-lg text-white">{c.ui.outcomesTitle}</h2>
            </div>
            <ul className="space-y-3">
              {item.outcomes.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm font-light text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fcb-gold" /><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="institution-panel p-7">
            <div className="mb-5 flex items-center gap-3 text-fcb-gold">
              <ShieldCheck size={18} />
              <h2 className="font-serif text-lg text-white">
                {lang === 'zh' ? '审查问题' : 'Assurance Questions'}
              </h2>
            </div>
            <div className="space-y-3">
              {assuranceQuestions.map((question, i) => (
                <div key={question} className="standard-row">
                  <span className="font-mono text-xs text-fcb-gold/75">{String(i + 1).padStart(2, '0')}</span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '每项能力都可以独立启动，也可以组合成更完整的制度设计与数字公共基础设施项目。'
                : 'Each capability can begin as a focused engagement or combine into a broader institutional design and digital public infrastructure program.'}
            </p>
            <Link to="/contact" className="primary-action shrink-0">
              {c.ui.contactCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityDetailPage;
