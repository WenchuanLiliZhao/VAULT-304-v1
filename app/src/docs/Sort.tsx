import { SortPostByDate } from "../codes/functions/SortPosts";
import { Posts } from "./Posts";
import { Projects } from "./Projects";

const PostsByDate = SortPostByDate(Posts);

const FeatureProject = [
  Projects.Proj_Teapodo,
  Projects.Proj_Tingo,
  Projects.Proj_QiankaCom,
  Projects.Proj_CharmingChineseCulture,
];

export { PostsByDate, FeatureProject };
