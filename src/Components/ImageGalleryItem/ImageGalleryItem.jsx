

function ImageGallery({ images }) {
  return (
    <div className="ImageGallery">
      <ul className="ImageGalleryItem">
        {images.map((image, index) => (
          <li className="ImageGalleryItem-image" key={index}>
            <img src={image.previewURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
