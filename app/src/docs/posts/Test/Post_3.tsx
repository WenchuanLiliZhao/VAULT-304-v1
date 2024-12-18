import { Page } from "../../_types/PageShapes";
import { AllAuthors } from "../../AllAuthors";

const Post_3: Page = {
  info: {
    slug: "post_3",
    title: "Post 3",
    summary: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque pretium pulvinar quam, nec porta quam placerat et. Quisque eu diam quam. Vestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 9, 5],
    cover: "https://i.pinimg.com/736x/d2/14/af/d214af8de2406fd25a802e9cfcdfe912.jpg",
    author: AllAuthors.Wenchuan,
    tags: ["UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_3;
