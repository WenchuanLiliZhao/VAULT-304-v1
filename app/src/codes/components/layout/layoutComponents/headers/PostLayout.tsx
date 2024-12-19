import styles from "./PostLayout.module.scss";
import { Page } from "../../../../../docs/_types/PageShapes";
import { DateFormatterText } from "../../../../functions/Date";

export const PostHeader: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <header className={styles["post-header"]}>
      <>
        {page.postInfo?.tags[0] && (
          <div className={styles["label"]}>{page.postInfo?.tags[0]}</div>
        )}
        <div className={styles["title"]}>{page.info.title}</div>
        {page.postInfo && (
          <div className={styles["author-bar"]}>
            <div className={styles["avatar"]}>
              <img
                src={page.postInfo?.author.personInfo?.avatarUrl}
                alt="author-avatar"
              />
            </div>
            <div className={styles["author-name"]}>
              {page.postInfo?.author.info.title}
            </div>
            <div className={styles["update"]}>
              {<DateFormatterText date={page.postInfo.update} />}
            </div>
          </div>
        )}
      </>
    </header>
  );
};
