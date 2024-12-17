import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_4: Page = {
  info: {
    id: "post_4",
    title: "Post 4",
    summary: "Aestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 8, 5],
    cover: "https://i.pinimg.com/1200x/29/cd/d2/29cdd2e503d252e116cbe63e563234b5.jpg",
    authors: Authors.Wenchuan,
    tags: ["Life", "UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_4;
