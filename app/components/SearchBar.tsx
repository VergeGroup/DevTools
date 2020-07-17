import React from 'react';
import styles from './SearchBar.css';

interface Props {
  updateSearchText: (value: string) => void;
}

const SearchBar = (props: Props) => {
  const { updateSearchText } = props;

  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="filter"
      onChange={event => {
        updateSearchText(event.target.value);
      }}
      // value={value}
    />
  );
};

export default SearchBar;
