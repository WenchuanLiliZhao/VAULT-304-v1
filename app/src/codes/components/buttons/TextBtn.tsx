import React from "react";
import styles from "./TextBtn.module.scss";
import clsx from "clsx";
import { HoverBox } from "./HoverBox";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  subClass?: "standard" | "dangerous"
  type?: "primary" | "secondary" | "danger" | "link" | "text";
  size?: "large" | "medium" | "small"
  disabled?: boolean;
}

// TextButton 组件
export const TextBtn: React.FC<Props> = ({
  children,
  onClick,
  to,
  subClass = "standard",
  type = "primary",
  size = "medium",
  disabled = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return; // 如果是禁用状态，不执行任何逻辑
    if (to) {
      // 如果有路由地址，跳转到目标页面
      navigate(to);
    } else if (onClick) {
      // 如果没有 `to`，执行自定义的点击逻辑
      onClick();
    }
  };

  return (
    <button
      className={clsx(styles["button"], styles[subClass], styles[type], styles[size], {
        [styles.disabled]: disabled,
      })}
      onClick={!disabled ? handleClick : undefined}
      disabled={disabled}
    >
      {children}
      <HoverBox />
    </button>
  );
};
