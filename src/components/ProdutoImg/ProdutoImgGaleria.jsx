import React from 'react';
import ImageGallery from "react-image-gallery";
import "../../css/image-gallery.css";

function renderRightNav(onClick, disabled) {
  return (
    <button
      type="button"
      className="image-gallery-custom-right-nav"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next Slide"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  )
}

function renderLeftNav(onClick, disabled) {
  return <button
      type="button"
      className="image-gallery-custom-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <i className="fas fa-chevron-left"></i>
  </button>
}

function ProductoImgGaleria({ imgList, onClose }) {
  
  const props = {
    items: imgList.map(({ img }) => (
      { 
        original: img, 
        thumbnail: img,
        originalHeight: 360,
        originalWidth: 720,
        thumbnailHeight: 90,
        thumbnailWidth: 148,

      }
    )),
    slideInterval: 3450,
    showIndex: true,
    showThumbnails: true,
    showFullscreenButton: false,
    showPlayButton: false,
    
    renderLeftNav: renderLeftNav,
    renderRightNav: renderRightNav
  }

  return <div className="productos-img-galeria">
    <button 
      type="button" 
      className="productos-img-galeria__cerrar"
      onClick={onClose}
      >
      <i className="fas fa-times"></i>
    </button>

    <ImageGallery {...props} />
  </div>
}

export default ProductoImgGaleria;
