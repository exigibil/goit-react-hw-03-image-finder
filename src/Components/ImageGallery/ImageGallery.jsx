import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
    return (
      <div className={styles.imageGalleryContainer}>
        <ul className={styles.imageGallery}>
          {images.map((image, index) => (
            <ImageGalleryItem
              key={index}
              image={image}
            />
          ))}
        </ul>
      </div>
    );
  }
  
  export default ImageGallery;
  