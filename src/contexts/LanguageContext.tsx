
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  currentLang: string;
  switchLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'fr',
  switchLanguage: () => {}
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'fr');

  // Set up initial language from localStorage or browser preference
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    const browserLang = navigator.language.split('-')[0];
    
    // Priority: 1. Saved preference, 2. Browser language (if supported), 3. Default to French
    let detectedLang = 'fr';
    if (savedLang && ['fr', 'en'].includes(savedLang)) {
      detectedLang = savedLang;
    } else if (['fr', 'en'].includes(browserLang)) {
      detectedLang = browserLang;
    }
    
    if (detectedLang !== currentLang) {
      switchLanguage(detectedLang);
    }
  }, []);

  // Update language state whenever i18n language changes
  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('i18nextLng', lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
