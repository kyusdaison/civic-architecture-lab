import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Landmark, Building2, Network, Layers3, Globe, ScrollText } from 'lucide-react';
import { useLang } from './LanguageContext';
import { FCB_URL, CONTACT_EMAIL } from '../content';

const CAP_ICONS = [Landmark, Building2, Network, Layers3, Globe, ScrollText];

const HomePage: React.FC = () => {
  const { c } = useLang();
  return (
    <>
      <section className="relative px-6 pt-24 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-block border border-fcb-gold/20 bg-black/30 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.32em] text-fcb-goldBright">{c.hero.kicker}</span>
          <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.05] text-white md:text-6xl">{c.hero.title} <span className="gold-gradient-text italic">{c.hero.titleAccent}</span></h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300">{c.hero.body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group inline-flex items-center justify-center gap-2 bg-fcb-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-dark transition-colors hover:bg-white">{c.hero.ctaPrimary} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a>
            <Link to="/capabilities" className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-fcb-gold/50 hover:bg-white/5">{c.hero.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.whatWeDo.eyebrow}</span>
          <h2 className="mb-5 font-serif text-3xl tracking-tight text-white md:text-4xl">{c.whatWeDo.title}</h2>
          <p className="mb-6 text-lg font-light leading-relaxed text-gray-300">{c.whatWeDo.body}</p>
          <Link to="/what-we-do" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold hover:text-white">{c.ui.learnMore} <ArrowRight size={14} /></Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.capabilities.eyebrow}</span>
            <h2 className="font-serif text-3xl tracking-tight text-white md:text-4xl">{c.capabilities.title}</h2>
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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl tracking-tight text-white md:text-4xl">{c.closing.title}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300">{c.closing.body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-fcb-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-dark transition-colors hover:bg-white">{c.closing.ctaPrimary} <ArrowRight size={14} /></Link>
            <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-fcb-gold/50 hover:bg-white/5">{c.closing.ctaSecondary} <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
