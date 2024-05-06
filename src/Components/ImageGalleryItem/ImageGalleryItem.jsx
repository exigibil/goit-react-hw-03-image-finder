import React, { useState } from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ image }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryImg}
        src={image.largeImageURL}
        alt={image.tags}
        onClick={openModal} // Call openModal when image is clicked
      />
      {modalOpen && ( // Render the Modal component when modalOpen is true
        <Modal imageUrl={image.largeImageURL} onClose={closeModal} />
      )}
    </li>
  );
}

export default ImageGalleryItem;
