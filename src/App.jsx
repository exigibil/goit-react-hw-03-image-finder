import { useState, useEffect} from "react";
import SearchBar from "../src/Components/SearchBar/SearchBar";
import getImages from "../src/Components/GetImgAPI/getImages";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

import styles from "./App.module.css";


function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
 

  useEffect(() => {
   
    if (searchTerm.trim() !== "") {
      handleSearch(); 
    }
  }, [page, searchTerm]);


  const handleSearch = async () => {
    try {
      setLoading(true);
      const imageData = await getImages(searchTerm, page);
      setImages((prevImages) => {
        if (page === 1) {
          return [...imageData.hits]; 
        } else {
          return [...prevImages, ...imageData.hits];
        }
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    finally {
      setLoading(false); 
    }
  };

  

  const handleSearchInput = (searchInput) => {
    setSearchTerm(searchInput);
    setPage(1); 
  };

  return (
    <div >
      <SearchBar onSearch={handleSearchInput} />

      <ImageGallery images={images} />
      <div className={styles.btnContainer}>
     
      
      </div>
    </div>
  );
}

export default App;
