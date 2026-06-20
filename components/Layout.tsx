import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from './LanguageContext';
import { FCB_URL, MSD_URL, CONTACT_EMAIL } from '../content';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang, setLang, c } = useLang();
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-fcb-dark font-sans text-gray-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(4,7,12,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-wide text-white">{c.brand.name}</span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-fcb-gold">{c.brand.poweredBy}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {c.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${isActive ? 'text-fcb-gold' : 'text-gray-300 hover:text-fcb-gold'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-200 transition-colors hover:border-fcb-gold/50 hover:text-fcb-gold"
            >
              {c.ui.langOther}
            </button>
            <a
              href={`${FCB_URL}/`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 border border-fcb-gold/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-fcb-gold transition-colors hover:bg-fcb-gold hover:text-fcb-dark sm:inline-flex"
            >
              {c.ui.backToFcb} <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-[72px]">{children}</main>

      <footer className="border-t border-white/10 bg-black px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-serif text-base text-white">{c.brand.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-fcb-gold">{c.footer.poweredBy}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] uppercase tracking-[0.18em] text-gray-400">
            <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="transition-colors hover:text-fcb-gold">{c.footer.ecosystem}</a>
            <a href={`${MSD_URL}/`} target="_blank" rel="noreferrer" className="transition-colors hover:text-fcb-gold">Meridian Special District</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-fcb-gold">{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          {c.footer.rights} © {year}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
