import React, { useState } from 'react';
import './ZoomableImage.css'; // CSS riêng nếu muốn tách

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`image-zoom-container ${isZoomed ? 'zoomed' : ''}`}
      onClick={toggleZoom}
    >
      <img src={src} alt={alt} className="zoomable-image" />
    </div>
  );
};

export default ZoomableImage;
