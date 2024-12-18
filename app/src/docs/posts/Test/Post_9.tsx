import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_9: Page = {
  info: {
    slug: "post_9",
    title: "Post 9",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/736x/dd/f4/82/ddf4820de34a75b1b23eeae9382bfa98.jpg",
    author: AllAuthors.Wenchuan,
    tags: [Tags.UIUXDesigns]
  },

  content: ["hahaha"],
};

export default Post_9;
