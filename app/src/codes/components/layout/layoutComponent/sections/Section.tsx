import React from "react";
import styles from "./Section.module.scss";

interface Props {
  title: string;
  children: JSX.Element;
}

export const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section className={styles["section"]}>
      <div className={styles["section-header"]}>{title}</div>
      <div>{children}</div>
    </section>
  );
};
