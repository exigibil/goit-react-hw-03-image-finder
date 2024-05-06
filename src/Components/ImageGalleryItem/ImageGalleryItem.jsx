import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
    return (
        <li className={styles.imageGalleryItem}>
            <img
                className={styles.imageGalleryImg}
                src={image.largeImageURL}
                alt={image.tags}
            />
        </li>
    );
}

export default ImageGalleryItem;