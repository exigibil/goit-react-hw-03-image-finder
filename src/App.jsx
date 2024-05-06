import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../src/Components/SearchBar/SearchBar';
import ImageGallery from '../src/Components/ImageGalleryItem/ImageGalleryItem';
import getImages from '../src/Components/ImageGallery/getImages'

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const imageData = await getImages(searchTerm); 
      setImages(imageData.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
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