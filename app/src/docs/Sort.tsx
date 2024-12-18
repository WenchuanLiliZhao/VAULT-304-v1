import { SortPostByDate } from "../codes/functions/SortPosts";
import { AllPosts } from "./AllPosts";
import { AllProjects } from "./AllProjects";

const PostsByDate = SortPostByDate(AllPosts);

const FeatureProject = [
  AllProjects.Proj_Teapodo,
  AllProjects.Proj_Tingo,
  AllProjects.Proj_QiankaCom,
  AllProjects.Proj_CharmingChineseCulture,
];

export { PostsByDate, FeatureProject };
