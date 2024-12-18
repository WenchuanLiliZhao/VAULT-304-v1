export const Tags = {
  UIUXDesigns: "UI/UX Designs",
  Illustration: "Illustration",
  Mathematics: "Mathematics",

  ProjectNote: "Project Note",
  LifeStyle: "Life Style",
  Travel: "Travel",
  WebDevelopment: "Web Development",
  ReactJS: "React.JS",
};

export type Tag = (typeof Tags)[keyof typeof Tags];
