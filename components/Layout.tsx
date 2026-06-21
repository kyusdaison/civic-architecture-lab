import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLang } from './LanguageContext';
import { FCB_URL, MSD_URL, CONTACT_EMAIL } from '../content';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang, setLang, c } = useLang();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const footerSignals =
    lang === 'zh'
      ? ['授权', '身份', '服务', '证据', '监督']
      : ['Mandate', 'Identity', 'Services', 'Evidence', 'Oversight'];

  return (
    <div className="flex min-h-screen flex-col bg-fcb-dark font-sans text-gray-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-fcb-gold/25 bg-[#020b1d]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link
            to="/"
            className="brand-lockup shrink-0 leading-tight"
            aria-label={c.brand.name}
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/brand/cal-imagegen/cal-logo-header-reversed-v2-optimized.webp"
              alt={c.brand.name}
              width={620}
              height={215}
              decoding="async"
              fetchpriority="high"
              className="brand-lockup-logo h-12 w-auto object-contain sm:h-14"
            />
            {lang === 'zh' && (
              <span className="brand-lockup-cn" aria-hidden="true">
                <span>赛域实验室</span>
                <span>制度设计与数字公共基础设施</span>
              </span>
            )}
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {c.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
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
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/15 text-gray-100 transition-colors hover:border-fcb-gold/50 hover:text-fcb-gold lg:hidden"
              aria-label={
                menuOpen
                  ? lang === 'zh' ? '关闭导航' : 'Close navigation'
                  : lang === 'zh' ? '打开导航' : 'Open navigation'
              }
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full h-[calc(100vh-73px)] overflow-y-auto border-b border-fcb-gold/20 bg-[#020b1d] px-5 py-5 shadow-2xl shadow-black/40 lg:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-2">
              {c.nav.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `grid min-h-14 grid-cols-[2.2rem_1fr_auto] items-center border px-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? 'border-fcb-gold/45 bg-fcb-gold/10 text-fcb-gold'
                        : 'border-white/10 bg-white/[0.025] text-gray-200 hover:border-fcb-gold/35 hover:text-fcb-gold'
                    }`
                  }
                >
                  <span className="font-mono text-[10px] text-fcb-gold/80">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} />
                </NavLink>
              ))}
              <a
              href={`${FCB_URL}/`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 border border-fcb-gold/45 px-4 text-[10px] font-bold uppercase tracking-[0.16em] text-fcb-gold"
              >
                {c.ui.backToFcb} <ArrowUpRight size={13} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-[88px]">{children}</main>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#020b1d]">
        <img
          src="/visuals/cal/institutional-system-compass.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,29,0.98)_0%,rgba(2,11,29,0.88)_50%,rgba(2,11,29,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fcb-gold/60 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-xl">
            <div className="flex items-center">
              <img
                src="/brand/cal-imagegen/cal-logo-header-reversed-v2-optimized.webp"
                alt={c.brand.name}
                width={620}
                height={215}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-fcb-gold">{c.footer.poweredBy}</p>
            <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-gray-300">
              {lang === 'zh'
                ? '围绕公共授权、可信身份、服务访问、证据记录与监督路径，设计面向长期运行的制度基础设施。'
                : 'Designing digital public infrastructure around public mandate, trusted identity, service access, evidence records and oversight pathways.'}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {footerSignals.map((signal) => (
                <span key={signal} className="border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-300">
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold">
                {lang === 'zh' ? '站点导航' : 'Site'}
              </h2>
              <div className="grid gap-3">
                {c.nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex min-h-10 items-center justify-between border-b border-white/[0.08] text-sm transition-colors ${
                        isActive ? 'text-fcb-gold' : 'text-gray-300 hover:text-fcb-gold'
                      }`
                    }
                  >
                    {item.label}
                    <ArrowRightSmall />
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-fcb-gold">
                {lang === 'zh' ? '生态与联系' : 'Ecosystem'}
              </h2>
              <div className="grid gap-3 text-sm">
                <a href={`${FCB_URL}/`} target="_blank" rel="noreferrer" className="flex min-h-10 items-center justify-between border-b border-white/[0.08] text-gray-300 transition-colors hover:text-fcb-gold">
                  {c.footer.ecosystem}
                  <ArrowUpRight size={13} />
                </a>
                <a href={`${MSD_URL}/`} target="_blank" rel="noreferrer" className="flex min-h-10 items-center justify-between border-b border-white/[0.08] text-gray-300 transition-colors hover:text-fcb-gold">
                  Meridian Special District
                  <ArrowUpRight size={13} />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-10 items-center justify-between border-b border-white/[0.08] text-gray-300 transition-colors hover:text-fcb-gold">
                  {CONTACT_EMAIL}
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-6 text-center text-[10px] uppercase tracking-[0.2em] text-gray-500 md:text-left">
          {c.footer.rights} © {year}
        </div>
      </footer>
    </div>
  );
};

const ArrowRightSmall: React.FC = () => <ArrowUpRight size={13} className="text-fcb-gold/80" />;

export default Layout;
