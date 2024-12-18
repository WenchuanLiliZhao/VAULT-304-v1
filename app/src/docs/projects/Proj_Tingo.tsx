import { Page } from "../_types/PageShapes";
import { Authors } from "../Authors";

const Proj_Tingo: Page = {
  info: {
    slug: "proj_tingo",
    title: "Tingo",
    summary: "",
    pageType: "channel"
  },
  postInfo: {
    update: [2025, 1,2],
    cover: "https://teapodo.com/_next/static/media/logo.925ac851.png",
    author: Authors.Wenchuan,
    tags: ["Project Note", "UI/UX Designs", "Web Development", "React.JS"]
  },

  projectInfo: {
    roles: ["Product Design"],
    icon: "https://i.pinimg.com/736x/7d/28/93/7d2893c648611b9e1031e2475005661f.jpg",
    team: "Tingo Music"
  },

  content: []
}

export default Proj_Tingo