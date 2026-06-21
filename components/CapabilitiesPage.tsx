import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Building2, Network, Layers3, Globe, ScrollText } from 'lucide-react';
import { useLang } from './LanguageContext';

const CAP_ICONS = [Landmark, Building2, Network, Layers3, Globe, ScrollText];

const CapabilitiesPage: React.FC = () => {
  const { c, lang } = useLang();

  const capabilitySignals =
    lang === 'zh'
      ? ['授权先行', '机构责任', '证据层', '监督路径']
      : ['Mandate first', 'Institutional responsibility', 'Evidence layer', 'Oversight path'];

  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-eyebrow">{c.capabilities.eyebrow}</span>
            <h1 className="page-hero-title mt-4 mb-5">{c.capabilities.title}</h1>
            <p className="page-hero-lede">{c.capabilities.intro}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilitySignals.map((signal) => (
                <div key={signal} className="signal-chip min-h-[3.25rem]">{signal}</div>
              ))}
            </div>
          </div>
          <div className="visual-frame min-h-[18rem]">
            <img src="/visuals/cal/capability-operating-blueprint.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.capabilities.items.map((item, i) => {
            const Icon = CAP_ICONS[i] ?? Landmark;
            return (
              <Link key={item.slug} to={`/capabilities/${item.slug}`} className="institution-card group block p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-fcb-gold/25 bg-fcb-gold/10 text-fcb-gold transition-colors group-hover:bg-fcb-gold group-hover:text-fcb-dark"><Icon size={20} /></div>
                  <span className="font-mono text-sm text-fcb-gold/60">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-3 font-serif text-2xl text-white">{item.title}</h3>
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
