export type Language = "en" | "zh";

export interface Page {
  info: Info;
  postInfo?: PostInfo;
  content: Content;
}

export interface Info {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
}

export interface PostInfo {
  update: [number, number, number];
  coverUrl: string;
  authors: Page;
  tags: string[];
}

export type Content = Partial<Record<Language, (JSX.Element | string)[]>>;