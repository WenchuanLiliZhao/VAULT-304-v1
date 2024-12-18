import { Page } from "../../_types/PageShapes";
import { AllAuthors } from "../../AllAuthors";

const Post_2: Page = {
  info: {
    slug: "post_2",
    title: "Post 2",
    summary: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque pretium pulvinar quam, nec porta quam placerat et. Quisque eu diam quam. Vestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 9, 1],
    cover: "https://i.pinimg.com/1200x/b4/ee/b9/b4eeb997a8736b63b0ad0792168193da.jpg",
    author: AllAuthors.Wenchuan,
    tags: ["UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_2;
