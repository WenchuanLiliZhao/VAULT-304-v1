import { Tag } from "./Tags";

export interface Page {
  info: Info;
  postInfo?: PostInfo;
  personInfo?: PersonInfo;
  projectInfo?: ProjectInfo;
  content: PageContent;
}

export interface Info {
  slug: string;
  title: string;
  title_display?: (string | JSX.Element)
  summary: string;
  pageType: PageType;
}

export interface PostInfo {
  update: [number, number, number];
  cover: string;
  author: Page;
  tags: Tag[];
}

export interface PersonInfo {
  avatarUrl: string;
}

export interface ProjectInfo {
  roles: Role[]
  icon: string
  team: string
}

export type Role = "UI/UX Design" | "Product Design"

export type PageType = "post" | "channel" | "person";

export type PageContent = (string | JSX.Element)[]