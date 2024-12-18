import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_10: Page = {
  info: {
    slug: "post_10",
    title: "Post 10",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/736x/fa/ba/de/fabadec9a95279be5392e15805edf129.jpg",
    author: Authors.Wenchuan,
    tags: ["UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_10;
