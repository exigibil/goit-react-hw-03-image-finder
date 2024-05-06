import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import styles from './searchBar.module.css';

function SearchBar({ onSearch }) {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchItem);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.appName}>
        <h2>AEM Search IMG APP</h2>
      </div>
      <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <SlMagnifier className={styles.searchIcon} />
        </button>
        <input
          type="text"
          className={styles.searchBarInput}
          placeholder="Search for an image..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
