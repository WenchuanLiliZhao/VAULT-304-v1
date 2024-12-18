import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_4: Page = {
  info: {
    slug: "post_4",
    title: "The Controversy on the Axiom of Choice",
    summary: "Aestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 8, 5],
    cover: "",
    author: AllAuthors.Wenchuan,
    tags: [Tags.LifeStyle, Tags.Mathematics]
  },

  content: ["hahaha"],
};

export default Post_4;
