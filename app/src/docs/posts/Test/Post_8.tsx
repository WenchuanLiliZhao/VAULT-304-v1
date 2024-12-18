import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_8: Page = {
  info: {
    slug: "post_8",
    title: "Post 8",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/1200x/c9/de/df/c9dedfabe1a89d61cadce4e59b7f2cc3.jpg",
    author: Authors.Wenchuan,
    tags: ["UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_8;