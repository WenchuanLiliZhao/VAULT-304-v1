
import { HoverBox } from "./HoverBox";
import styles from "./IconBtn.module.scss"
import React from "react"

type BtnSize = "small" | "medium" | "large"

interface Props {
  icon: string;
  size: BtnSize;
  className?: string;
}

export const IconBtn: React.FC<Props> = ({icon, size, className}) => {
  return (
    <div className={`${styles["icon-btn"]} ${styles[size]} ${className}`}>
      <span className={`material-symbols-outlined ${styles["icon"]}`}>{icon}</span>
      <HoverBox />
    </div>
  )
}