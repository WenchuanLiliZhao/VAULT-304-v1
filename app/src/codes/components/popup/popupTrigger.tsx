import styles from "./popupTrigger.module.scss";
import React, { useState, useEffect } from "react";

interface Props {
  btn: JSX.Element;
  displayedAs: "hint" | "center peek" | "page";
  element: JSX.Element;
}

const PopupLink: React.FC<Props> = ({ btn, element, displayedAs }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Handle closing the modal with the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const content = () => {
    switch (displayedAs) {
      case "hint":
        return (
          <>
            <span onClick={() => setIsOpen(true)}>{btn}</span>

            {isOpen && (
              <div
                className={styles["overlay"]}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={styles.modal}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                >
                  <div
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Popup"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </div>
                  {element}
                </div>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return content();
};

export default PopupLink;
