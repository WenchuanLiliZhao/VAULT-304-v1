import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_5: Page = {
  info: {
    slug: "post_5",
    title: "Post 5",
    summary: "Aestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/1200x/b8/e2/90/b8e290096bdfff170f4eace5bde39874.jpg",
    author: Authors.Wenchuan,
    tags: ["Life", "UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_5;
