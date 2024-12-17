import { Tag } from "./Tags";

export interface Page {
  info: Info;
  postInfo?: PostInfo;
  personInfo?: PersonInfo
  content: PageContent;
}

export interface Info {
  id: string;
  title: string;
  title_display?: (string | JSX.Element)
  summary: string;
  pageType: PageType;
}

export interface PostInfo {
  update: [number, number, number];
  cover: string;
  authors: Page;
  tags: Tag[];
}

export interface PersonInfo {
  avatarUrl: string;
}

export type PageType = "post" | "channel" | "person";

export type PageContent = (string | JSX.Element)[]