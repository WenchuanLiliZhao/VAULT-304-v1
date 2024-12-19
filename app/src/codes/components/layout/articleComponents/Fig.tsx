import React from "react";
import styles from "./Fig.module.scss"

interface Props {
  size?: "medium" | "large" | "full"
  img: string;
  caption?: string;
}

export const Fig: React.FC<Props> = ({ 
  size = "medium",
  img,
  caption,
 }) => {

  return `
<figure class="${styles["figure"]} ${styles[size]}">
<div class="${styles["image"]}">
  <img src="${img}">
</div>
${caption !== undefined ? `
<figcaption class="${styles["caption"]}">

${caption}

</figcaption>
` : ``}
</figure>
  `;
};