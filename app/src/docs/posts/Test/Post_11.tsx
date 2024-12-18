import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_11: Page = {
  info: {
    slug: "post_11",
    title: "Post 11",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/736x/01/64/cf/0164cfe0a48cfe08a9966f55cfb5c211.jpg",
    author: AllAuthors.Wenchuan,
    tags: [Tags.WebDevelopment]
  },

  content: ["hahaha"],
};

export default Post_11;
