import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLang } from './LanguageContext';

const WhatWeDoPage: React.FC = () => {
  const { c } = useLang();
  return (
    <>
      <section className="px-6 pt-16 pb-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.whatWeDo.eyebrow}</span>
          <h1 className="mb-6 font-serif text-4xl tracking-tight text-white md:text-5xl">{c.whatWeDo.title}</h1>
          <p className="mb-6 text-lg font-light leading-relaxed text-gray-300">{c.whatWeDo.body}</p>
          <p className="border-l-2 border-fcb-gold/50 pl-5 text-base font-light italic leading-relaxed text-fcb-gold/90">{c.whatWeDo.not}</p>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.approach.eyebrow}</span>
            <h2 className="font-serif text-3xl tracking-tight text-white md:text-4xl">{c.approach.title}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.approach.steps.map((s) => (
              <div key={s.step} className="institution-card p-7">
                <div className="mb-4 font-mono text-2xl font-bold text-fcb-gold/80">{s.step}</div>
                <h3 className="mb-2 font-serif text-lg text-white">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.govValue.eyebrow}</span>
            <h2 className="mb-5 font-serif text-3xl tracking-tight text-white md:text-4xl">{c.govValue.title}</h2>
            <p className="text-base font-light leading-relaxed text-gray-300">{c.govValue.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.govValue.points.map((p) => (
              <div key={p.title} className="flex items-start gap-3 border border-white/10 bg-white/[0.02] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fcb-gold" />
                <div>
                  <h4 className="mb-1 font-serif text-base text-white">{p.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.audience.eyebrow}</span>
          <h2 className="mb-10 font-serif text-3xl tracking-tight text-white md:text-4xl">{c.audience.title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {c.audience.groups.map((g) => (
              <span key={g} className="border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-light text-gray-300">{g}</span>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-fcb-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-dark transition-colors hover:bg-white">{c.ui.contactCta} <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoPage;
