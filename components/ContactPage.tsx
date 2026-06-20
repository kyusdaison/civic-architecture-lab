import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useLang } from './LanguageContext';
import { CONTACT_EMAIL, FCB_URL } from '../content';

const ContactPage: React.FC = () => {
  const { c } = useLang();
  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-4xl">
        <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.4em] text-fcb-gold">{c.contact.eyebrow}</span>
        <h1 className="mb-6 font-serif text-4xl tracking-tight text-white md:text-5xl">{c.contact.title}</h1>
        <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300">{c.contact.body}</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="institution-card p-7">
            <h2 className="mb-4 font-serif text-lg text-white">{c.contact.enquiryTitle}</h2>
            <ul className="space-y-2">
              {c.contact.enquiries.map((e) => (
                <li key={e} className="text-sm font-light text-gray-300">· {e}</li>
              ))}
            </ul>
          </div>
          <div className="institution-card flex flex-col justify-center p-7">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 bg-fcb-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fcb-dark transition-colors hover:bg-white">
              <Mail size={14} /> {CONTACT_EMAIL}
            </a>
            <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-fcb-gold/50 hover:bg-white/5">
              {c.ui.backToFcb} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
