import styles from "./ChannelHeader.module.scss";
import { Page } from "../../../../../docs/_types/PageShapes";

export const ChannelHeader: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <header className={styles["channel-header"]}>
      <div className={styles["title-bar"]}>
        <div className={styles["title-bar-container"]}>
          <h1 className={styles["title"]}>{page.info.title}</h1>
          {page.info.summary !== "" && (
            <div className={styles["summary"]}>{page.info.summary}</div>
          )}
        </div>
      </div>
    </header>
  );
};
