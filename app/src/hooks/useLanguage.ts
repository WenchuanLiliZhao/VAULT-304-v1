// hooks/useLanguage.ts
import { useState, useEffect } from "react";
import { Language } from "../types/PageTypes";

export const useLanguage = (): [Language, (newLanguage: Language) => void] => {
  // 初始化语言状态，从 localStorage 中读取，如果没有则默认为浏览器语言或 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage) {
      return storedLanguage;
    }
    const browserLanguage = navigator.language.slice(0, 2) as Language;
    return ['en', 'ja', 'zh'].includes(browserLanguage) ? browserLanguage : 'en';
  });

  // 当语言状态变化时，更新 localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return [language, setLanguage];
};
