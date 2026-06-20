import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONTENT, type Lang, type CalContent } from '../content';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: CalContent;
}

const LanguageContext = createContext<LangCtx | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
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
