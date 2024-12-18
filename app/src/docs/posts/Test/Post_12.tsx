import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_12: Page = {
  info: {
    slug: "post_12",
    title: "Post 12",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/736x/4f/f5/4f/4ff54f5ae586e36eaf44718571ed0161.jpg",
    author: AllAuthors.Wenchuan,
    tags: [Tags.ReactJS]
  },

  content: ["hahaha"],
};

export default Post_12;
