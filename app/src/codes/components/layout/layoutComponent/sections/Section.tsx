import React from "react";
import styles from "./Section.module.scss";
import { Page } from "../../../../../docs/_types/PageShapes";
import { TextBtn } from "../../../buttons/TextBtn";

interface Props {
  title: string;
  children: JSX.Element;
  linkBtn?: {
    page: Page
    text: string
  }
}

export const Section: React.FC<Props> = ({ title, children, linkBtn }) => {

  return (
    <section className={styles["section"]}>
      <div className={styles["section-header"]}>{title}</div>
      <div>{children}</div>
      {linkBtn && (
        <TextBtn to={`/${linkBtn.page.info.slug}`} type="text" size="large">{linkBtn.text}</TextBtn>
      )}
    </section>
  );
};
