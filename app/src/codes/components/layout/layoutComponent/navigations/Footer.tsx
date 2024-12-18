import { TagComponent } from "../../../../../docs/_types/TagPage";
import { Tags } from "../../../../../docs/_types/Tags";
import { AllChannels } from "../../../../../docs/AllChannels";
import { SiteInfo } from "../../../../../SiteInfo";
import { GetTodayDate } from "../../../../functions/Date";
import { PageLink } from "../../../../functions/Links";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <div className={styles["footer-body"]}>
          <div className={styles["left"]}>
            <div className={styles["site-title"]}>{SiteInfo.title}</div>
            <div className={styles["site-summary"]}>{SiteInfo.summary}</div>
          </div>
          <div className={styles["right"]}>
            <div className={styles["group"]}>
              <div className={styles["group-title"]}>Social</div>
              <PageLink
                className={styles["channel"]}
                page="https://www.instagram.com/lili_wenchuan/"
              >
                Instagram
              </PageLink>
              <PageLink
                className={styles["channel"]}
                page="https://www.behance.net/wenchuanzhao1"
              >
                Béhance
              </PageLink>
              <PageLink
                className={styles["channel"]}
                page="https://dribbble.com/Bach5000"
              >
                Dribbble
              </PageLink>
            </div>

            <div className={styles["group"]}>
              <div className={styles["group-title"]}>Topics</div>
              <TagComponent
                className={styles["channel"]}
                tag={Tags.UIUXDesigns}
              />
              <TagComponent
                className={styles["channel"]}
                tag={Tags.Illustration}
              />
              <TagComponent
                className={styles["channel"]}
                tag={Tags.Mathematics}
              />
            </div>

            <div className={styles["group"]}>
              <div className={styles["group-title"]}>More</div>
              <PageLink className={styles["channel"]} page={AllChannels.About}>
                About
              </PageLink>
              <PageLink
                className={styles["channel"]}
                page={AllChannels.Contact}
              >
                Contact
              </PageLink>
            </div>
          </div>
        </div>
        <div className={styles["footer-footer"]}>
          <div className={styles["copy-right"]}>
            {SiteInfo.title} &copy; {GetTodayDate().year}
          </div>

          <div className={styles["version"]}>
            Current version: {SiteInfo.version}
          </div>
        </div>
      </div>
    </footer>
  );
};
