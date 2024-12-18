import { Page } from "../../_types/PageShapes";
import { AllAuthors } from "../../AllAuthors";

const Post_6: Page = {
  info: {
    slug: "post_6",
    title: "Post 6",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/1200x/98/46/b0/9846b0513bdc506ea3b16debca1ee25e.jpg",
    author: AllAuthors.Wenchuan,
    tags: ["Life", "UI/UX Designs"]
  },

  content: ["hahaha"],
};

export default Post_6;
