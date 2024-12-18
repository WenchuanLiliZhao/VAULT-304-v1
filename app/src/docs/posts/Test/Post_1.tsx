import { Page } from "../../_types/PageShapes";
import { Authors } from "../../Authors";

const Post_1: Page = {
  info: {
    slug: "https://i.pinimg.com/1200x/4d/b0/7a/4db07a81080662617980409c56205d75.jpg",
    title: "Post 1",
    summary: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque pretium pulvinar quam, nec porta quam placerat et. Quisque eu diam quam. Vestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },

  postInfo: {
    update: [2024, 8, 1],
    cover: "https://i.pinimg.com/1200x/4d/b0/7a/4db07a81080662617980409c56205d75.jpg",
    author: Authors.Wenchuan,
    tags: ["Mathematics"]
  },

  content: ["在1908年，恩斯特·策梅洛提出了第一个公理化集合论，即策梅洛集合论。然而，这个公理系统无法构建出序数的集合；而序数是许多集合论研究的根本工具。此外，Zermelo的分类公理中使用了被称作“明确性”的性质，而它的实际意义是有歧义的（此时一阶逻辑的概念还未被提出）。在1922年，亚伯拉罕·弗兰克尔和陶拉尔夫·斯科伦独立的提议了定义“明确性”为可以在一阶逻辑中公式化并原子公式仅包括集合的公式。他们还同时提出应该用替代公理取代分类公理，并在体系中添加正规公理（首先由 冯诺依曼提出），从而得到了被称作 ZF的公理体系。"],
};

export default Post_1;
