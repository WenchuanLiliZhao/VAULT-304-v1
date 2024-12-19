import styles from "./BasicLayout.module.scss";
import React from "react";
import { Page } from "../../../docs/_types/PageShapes";
import { Nav } from "./layoutComponents/navigations/Nav";
import { ContentMapper } from "../../functions/ContentMapper";
import { ChannelHeader } from "./layoutComponents/headers/ChannelHeader";
import { Footer } from "./layoutComponents/navigations/Footer";
import { PostHeader } from "./layoutComponents/headers/PostLayout";
import clsx from "clsx";
import { Article } from "./Article";

export const Layout: React.FC<{ page: Page }> = ({ page }) => {
  function layout() {
    switch (page.info.pageType) {
      case "post":
        return (
          <>
            <Nav />
            <PostHeader page={page} />
            <Article page={page} />
            <Footer />
          </>
        );

      case "channel":
        return (
          <>
            <Nav />
            <ChannelHeader page={page} />
            <main className={clsx(styles["main"])}>
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
