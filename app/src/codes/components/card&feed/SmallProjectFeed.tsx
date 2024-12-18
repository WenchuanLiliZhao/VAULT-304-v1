import styles from "./SmallProjectFeed.module.scss"
import React from "react"
import { Page } from "../../../docs/_types/PageShapes"
import { PageLink } from "../../functions/Links"
import { HoverBox } from "../buttons/HoverBox"

interface Props {
  projects: Page[]
}

export const SmallProjectFeed: React.FC<Props> = ({projects}) => {
  return (
    <div className={styles["small-project-feed"]}>
      {projects.map((item, i: number) => (
        <PageLink key={i} page={item} className={styles["small-project-card"]}>
          <div className={styles["project-icon"]}>
            <img src={item.projectInfo?.icon} alt={`project icon of ${item.info.title}`} />
          </div>

          <div className={styles["project-info"]}>
            <div className={styles["title-bar"]}>
              <div className={styles["label"]}>{item.projectInfo?.roles[0]}</div>

              <div className={styles["title"]}>{item.info.title_display || item.info.title}</div>
            </div>

            <div className={styles["author-bar"]}>
              {/* <span className={styles["author"]}>{item.postInfo?.author.info.title}</span>
              {" "} */}
              <span className={styles["team"]}>{item.projectInfo?.team}</span>
            </div>
          </div>
          <HoverBox />
        </PageLink>
      ))}
    </div>
  )
}