import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_3: Page = {
  info: {
    id: "post_3",
    title: "Post 3",
    summary: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque pretium pulvinar quam, nec porta quam placerat et. Quisque eu diam quam. Vestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 9, 5],
    cover: "https://i.pinimg.com/1200x/15/e9/14/15e91480bc65bc085cbc94a9b3973d73.jpg",
    authors: Authors.Wenchuan,
    tags: ["UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_3;
