import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Building2, Network, Layers3, Globe, ScrollText } from 'lucide-react';
import { useLang } from './LanguageContext';

const CAP_ICONS = [Landmark, Building2, Network, Layers3, Globe, ScrollText];

const CapabilitiesPage: React.FC = () => {
  const { c } = useLang();
  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.capabilities.eyebrow}</span>
          <h1 className="mb-5 font-serif text-4xl tracking-tight text-white md:text-5xl">{c.capabilities.title}</h1>
          <p className="text-lg font-light leading-relaxed text-gray-300">{c.capabilities.intro}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.capabilities.items.map((item, i) => {
            const Icon = CAP_ICONS[i] ?? Landmark;
            return (
              <Link key={item.slug} to={`/capabilities/${item.slug}`} className="institution-card group block p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-fcb-gold/20 bg-fcb-gold/10 text-fcb-gold transition-colors group-hover:bg-fcb-gold group-hover:text-fcb-dark"><Icon size={20} /></div>
                <h3 className="mb-2 font-serif text-xl text-white">{item.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-gold">{c.ui.learnMore} <ArrowRight size={12} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPage;
