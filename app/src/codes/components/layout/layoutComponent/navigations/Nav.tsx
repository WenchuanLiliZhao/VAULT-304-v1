import { Link, NavLink } from "react-router";
import { Page } from "../../../../../docs/_types/PageShapes";
import { Channels } from "../../../../../docs/Channels";
import { SiteInfo } from "../../../../../SiteInfo";
import styles from "./Nav.module.scss";
import { IconBtn } from "../../../buttons/IconBtn";

export const Nav = () => {
  const channels = [
    Channels.About,
    Channels.Overview,
    Channels.Projects,
  ];

  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["left"]}>
          <Link to="/" className={styles["title-bar"]}>
            <div className={styles["logo"]}></div>
            <div className={styles["site-title"]}>{SiteInfo.title}</div>
          </Link>
          <div className={styles["channels"]}>
            {channels.map((channel: Page, i: number) => (
              <NavLink
                key={i}
                to={`/${channel.info.slug}`}
                className={styles["channel"]}
              >
                {channel.info.title}
                <div className={styles["hover-deco"]}></div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={styles["right"]}>
          <IconBtn icon={"search"} size={"medium"} />
        </div>
      </nav>

      <div className={styles["nav-height"]}></div>
    </>
  );
};
