import React from 'react';
import basicLightbox from 'basiclightbox';
import styles from '../Modal/Modal.module.css';

function Modal({ imageUrl, onClose }) {
  const closeModal = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  const openModal = () => {
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);
    instance.show();
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.imgContainer} onClick={closeModal}>
        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
        <img src={imageUrl} onClick={openModal} alt="Click to open" />
        </div>
       
      
    </div>
  );
}

export default Modal;
