import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLang } from './LanguageContext';

const CapabilityDetailPage: React.FC = () => {
  const { c } = useLang();
  const { slug } = useParams();
  const item = c.capabilities.items.find((x) => x.slug === slug);

  if (!item) return <Navigate to="/capabilities" replace />;

  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-4xl">
        <Link to="/capabilities" className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-fcb-gold">
          <ArrowLeft size={14} /> {c.ui.backToCapabilities}
        </Link>
        <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.capabilities.eyebrow}</span>
        <h1 className="mb-6 font-serif text-4xl tracking-tight text-white md:text-5xl">{item.title}</h1>
        <p className="mb-12 text-lg font-light leading-relaxed text-gray-300">{item.lead}</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="institution-card p-7">
            <h2 className="mb-4 font-serif text-lg text-white">{c.ui.includesTitle}</h2>
            <ul className="space-y-3">
              {item.includes.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm font-light text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fcb-gold" /><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="institution-card p-7">
            <h2 className="mb-4 font-serif text-lg text-white">{c.ui.outcomesTitle}</h2>
            <ul className="space-y-3">
              {item.outcomes.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm font-light text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fcb-gold" /><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-fcb-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-dark transition-colors hover:bg-white">
            {c.ui.contactCta} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CapabilityDetailPage;
