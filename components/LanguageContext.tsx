import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONTENT, type Lang, type CalContent } from '../content';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: CalContent;
}

const LanguageContext = createContext<LangCtx | undefined>(undefined);

const LANG_STORAGE_KEY = 'cal-preferred-language';

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';

  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    // Local storage can be unavailable in private or locked-down browser contexts.
  }

  const browserLang = navigator.language || navigator.languages?.[0] || '';
  return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Keep the interface usable even if persistence is blocked.
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, c: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LangCtx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
