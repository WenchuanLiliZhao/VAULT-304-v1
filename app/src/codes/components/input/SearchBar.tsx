import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <span className={`material-symbols-outlined ${styles["icon"]}`}>Search</span>
      <input
        type="text"
        placeholder="Search 304"
        className={styles["input"]}
      />
    </div>
  );
};

export default SearchBar;
