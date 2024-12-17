import styles from "./BasicLayout.module.scss"
import React from "react";
import { Page } from "../../../docs/_types/PageShapes";
import { Nav } from "./layoutComponent/navigations/Nav";
import { ContentMapper } from "../../functions/ContentMapper";
import { ChannelHeader } from "./layoutComponent/headers/ChannelHeader";

export const Layout: React.FC<{ page: Page }> = ({ page }) => {
  function layout() {
    switch (page.info.pageType) {
      case "post":
        return (
          <>
            <Nav />
            <ChannelHeader page={page} />
            <main className={styles["main"]}>
              <ContentMapper page={page} />
            </main>
          </>
        );

      case "channel":
        return (
          <>
            <Nav />
            <ChannelHeader page={page} />
            <main className={styles["main"]}>
              <ContentMapper page={page} />
            </main>
          </>
        );

      default:
        console.log("pageType error");
        return null;
    }
  }

  return layout();
};
