import styles from "./ImageGalleryItem.module.css";

function ImageGallery({ images }) {
  return (
    <div className={styles.imageGalleryContainer}>
      <ul className={styles.imageGallery}>
        {images.map((image, index) => (
          <li className={styles.imageGalleryItem} key={index}>
            <img
              className={styles.imageGalleryImg}
              src={image.previewURL}
              alt={image.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
