import React from 'react';
import { useLang } from './LanguageContext';

const InsightsPage: React.FC = () => {
  const { c } = useLang();
  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-4xl">
        <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.insights.eyebrow}</span>
        <h1 className="mb-6 font-serif text-4xl tracking-tight text-white md:text-5xl">{c.insights.title}</h1>
        <p className="mb-10 text-lg font-light leading-relaxed text-gray-300">{c.insights.body}</p>
        <div className="flex flex-wrap gap-3">
          {c.insights.topics.map((t) => (
            <span key={t} className="border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-light text-gray-300">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsPage;
