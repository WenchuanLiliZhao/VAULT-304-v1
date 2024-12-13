import styles from "./Dropdown.module.scss";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  btn: JSX.Element;
  menu: JSX.Element;
  className?: string;
  id?: string;
}

export const Dropdown: React.FC<Props> = ({ btn, menu, className, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDrodown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`${styles["dropdown"]} ${className}`}
      id={id}
    >
      <div onClick={toggleDrodown}>{btn}</div>
      <div
        className={`${styles["menu"]} ${isOpen && styles["open"]}`}
        onClick={() => {
          setIsOpen(false)
        }}
      >
        {menu}
      </div>
    </div>
  );
};
