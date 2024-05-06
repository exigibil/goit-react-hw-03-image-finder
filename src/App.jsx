import { useState } from "react";
import SearchBar from "../src/Components/SearchBar/SearchBar";
import getImages from "../src/Components/GetImgAPI/getImages";

import ImageGallery from "./Components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const imageData = await getImages(searchTerm);
      setImages(imageData.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
