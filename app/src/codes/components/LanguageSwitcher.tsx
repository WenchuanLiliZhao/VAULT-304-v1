import React, { useEffect } from 'react';
import { Dropdown } from './Dropdown';
import { Language } from '../../docs/_types/PageTypes';

interface Props {
  currentLanguage: Language;
  onChange: (language: Language) => void;
}

export const LanguageSwicther: React.FC<Props> = ({ currentLanguage, onChange }) => {
  

  // useEffect to update the <html lang="..."> attribute
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <Dropdown btn={
      <>
        {languages.find(lang => lang.code === currentLanguage)?.label}
      </>
    } menu={
      <>
      {languages.map(lang => (
            <div
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
              }}
              className={lang.code === currentLanguage ? 'active' : ''}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                backgroundColor: lang.code === currentLanguage ? '#f0f0f0' : '#fff',
              }}
              // role="menuitem"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChange(lang.code);
                }
              }}
            >
              {lang.label}
            </div>
          ))}
      </>
    } />
  );
};