import { SlMagnifier } from "react-icons/sl";
import styles from './searchBar.module.css';

function SearchBar() {
    return (
        <>
        <div className={styles.searchBar}>
            <div className={styles.appName}><h2>AEM Search IMG APP</h2></div>
            <form className={styles.searchBarContainer}>
                <button className={styles.button}> <SlMagnifier className={styles.searchIcon} /> </button> 
                <input type='text' className={styles.searchBarInput} placeholder='Search for a image...' />
            </form>

        </div>
       

        </>
    )
        
       
}

export default SearchBar;