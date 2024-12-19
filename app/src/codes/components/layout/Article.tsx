import styles from "./Article.module.scss"
import React from "react";
import { Page } from "../../../docs/_types/PageShapes";
import { ContentMapper } from "../../functions/ContentMapper";

interface Props {
  page: Page
}

export const Article: React.FC<Props> = ({page}) => {
  return (
    <main className={styles["article"]}>
      <ContentMapper page={page} />
    </main>
  )
}