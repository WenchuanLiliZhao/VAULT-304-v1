import { Page, PostInfo } from "../../docs/_types/PageShapes";

/**
 * Sorts an object of Page objects by their update date (newest to oldest).
 *
 * @param posts - An object where each key maps to a Page object.
 * @returns An array of Page objects sorted by update date from newest to oldest.
 */
export function SortPostByDate(posts: Record<string, Page>): Page[] {
  return Object.values(posts)
    // Filter out any pages that do not have postInfo
    .filter((post): post is Page & { postInfo: PostInfo } => !!post.postInfo)
    // Sort the posts by update date from newest to oldest
    .sort((a, b) => {
      const [aYear, aMonth, aDay] = a.postInfo.update;
      const [bYear, bMonth, bDay] = b.postInfo.update;

      // Compare years
      if (aYear !== bYear) return bYear - aYear;

      // If years are the same, compare months
      if (aMonth !== bMonth) return bMonth - aMonth;

      // If months are also the same, compare days
      return bDay - aDay;
    });
}