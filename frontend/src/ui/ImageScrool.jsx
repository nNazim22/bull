import React, { useState } from "react";
import "./ImageGallery.css"; // Assurez-vous d'avoir ce fichier CSS pour le style
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const progress = ((currentImageIndex + 1) / images.length) * 100; // Calcul de la progression en pourcentage

  // eslint-disable-next-lines
  return (
    <div className="image-gallery">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <div className="image-overlay">
        <button className="prev-button" onClick={prevImage}>
          <HiArrowSmallLeft />
        </button>
        <button className="next-button" onClick={nextImage}>
          <HiArrowSmallRight />
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ImageGallery;
