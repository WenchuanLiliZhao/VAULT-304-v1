import styles from "./PageLayout.module.scss"

import React from "react";
import { LanguageSwicther } from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";
import { Language, Page } from "../../docs/_types/PageTypes";

export const PageLayout: React.FC<{ page: Page }> = ({ page }) => {
  const [language, setLanguage] = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const title = page.info.title[language] || page.info.title.en
  const summary = page.info.summary[language] || page.info.summary.en
  const pageContent = page.content[language] || page.content.en

  return (
    <div>
      <LanguageSwicther currentLanguage={language} onChange={handleLanguageChange} />

      <h1>{title}</h1>
      <p>{summary}</p>
      <div className={styles["post-content"]}>
        {pageContent?.map((item, index: number) => (
          <React.Fragment key={index}>
            {typeof item === "string" ? <p>{item}</p> : item}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
