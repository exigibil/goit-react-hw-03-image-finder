function ImageGallery({ images }) {
  return (
    <div>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.previewURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
