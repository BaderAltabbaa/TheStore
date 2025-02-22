import React, { useState, useEffect } from 'react';
import './styles/ImageSlider.css'; 

const ImageSlider = ({ images, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto-play functionality with useEffect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);

      // Cleanup function to clear the interval
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, autoPlayInterval]);

  return (
    <div className="cont">
    <div 
      className="slider" 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>
      
      {/* Display the current image */}
      <div className="slide">
        <img src={images[currentIndex]} alt="slider" />
      </div>

      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots for navigation */}
      
    </div>
    <div className="dots">
    {images.map((_, idx) => (
      <span
        key={idx}
        className={currentIndex === idx ? "dot active" : "dot"}
        onClick={() => setCurrentIndex(idx)}
      ></span>
    ))}
  </div>
  </div>
  );
};

export default ImageSlider;
