import styles from "./BasicLayout.module.scss"
import React from "react";
import { Page } from "../../../docs/_types/PageShapes";
import { Nav } from "./layoutComponent/navigations/Nav";
import { ContentMapper } from "../../functions/ContentMapper";
import { ChannelHeader } from "./layoutComponent/headers/ChannelHeader";
import { Footer } from "./layoutComponent/navigations/Footer";
import { PostHeader } from "./layoutComponent/headers/PostLayout";

export const Layout: React.FC<{ page: Page }> = ({ page }) => {
  function layout() {
    switch (page.info.pageType) {
      case "post":
        return (
          <>
            <Nav />
            <PostHeader page={page} />
            <main className={styles["main"]}>
              <ContentMapper page={page} />
            </main>
            <Footer />
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
            <Footer />
          </>
        );

      default:
        console.log("pageType error");
        return null;
    }
  }

  return layout();
};
