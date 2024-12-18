export const Tags = {
  UIUXDesigns: "UI/UX Designs",
  Illustration: "Illustration",
  Mathematics: "Mathematics",

  ProjectNote: "Project Note",
  Life: "Life",
  Travel: "Travel",
  WebDevelopment: "Web Development",
  ReactJS: "React.JS",
};

export type Tag = (typeof Tags)[keyof typeof Tags];
