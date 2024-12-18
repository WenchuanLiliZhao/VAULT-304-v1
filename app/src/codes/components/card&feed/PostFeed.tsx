import React, { useState } from "react";
import styles from "./PostFeed.module.scss";
import { Page } from "../../../docs/_types/PageShapes";
import { HoverBox } from "../buttons/HoverBox";
import { DateFormatter } from "../../functions/Date";
import { MDBlock } from "../markdown/MDBlock";
import { PageLink } from "../../functions/Links";

interface Props {
  posts: Page[];
  initialLoadCount?: number; // Optional prop for initial load count
  loadCount?: number; // Optional prop for load count
}

export const PostFeed: React.FC<Props> = ({
  posts,
  initialLoadCount = 20, // Default to 6 if undefined
  loadCount = 20, // Default to 6 if undefined
}) => {
  // State to keep track of how many posts are currently visible
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);

  // Function to handle loading more posts
  const handleLoadMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + loadCount, posts.length)
    );
  };

  // Slice the posts array to show only the visible posts
  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <div className={styles["post-feed"]}>
      <div className={styles["visible-posts"]}>
        {visiblePosts.map((item: Page, i: number) => (
          <PageLink key={i} page={item}>
            {item.postInfo && (
              <div className={styles["card-container"]}>
                <div className={styles["card"]}>
                  <div className={styles["card-header"]}>
                    <div className={styles["update"]}>
                      <div className={styles["mon-and-day"]}>
                        {DateFormatter(item.postInfo.update).mon}{" "}
                        {DateFormatter(item.postInfo.update).day}
                      </div>
                      <div className={styles["year"]}>
                        {DateFormatter(item.postInfo.update).year}
                      </div>
                    </div>
                    <div className={styles["label"]}>
                      {item.postInfo?.tags[0]}
                    </div>
                  </div>
                  <div className={styles["card-body"]}>
                    {item.postInfo.cover !== "" && (
                      <div className={styles["cover"]}>
                        <img src={item.postInfo?.cover} alt="Post Cover" />
                      </div>
                    )}
                    <div className={styles["title"]}>{item.info.title}</div>
                    <div className={styles["summary"]}>
                      <MDBlock>{item.info.summary}</MDBlock>
                    </div>
                    <div className={styles["author-bar"]}>
                      <div className={styles["author-avatar"]}>
                        <img
                          src={item.postInfo.author.personInfo?.avatarUrl}
                          alt={`${item.postInfo.author.info.title} Avatar`}
                        />
                      </div>
                      <div className={styles["author-name"]}>
                        {item.postInfo.author.info.title}
                      </div>
                    </div>
                  </div>

                  <HoverBox />
                </div>
              </div>
            )}
          </PageLink>
        ))}
      </div>

      {/* Render the Load More button if there are more posts to show */}
      {visibleCount < posts.length && (
        <button className={styles["load-more-btn"]} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
