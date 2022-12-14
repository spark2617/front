import React from 'react';
import "../../css/ProdutoImgGaleriaMini.css";
import ImageGallery from "react-image-gallery";

function ProductoImagenesGaleriaMini({ imgList }) {

  const props = {
    items: imgList?.map(({ img }) => (
      { 
        original: img, 
        thumbnail: img,
        originalHeight: 320,
        originalWidth: 640,
        thumbnailHeight: 90,
        thumbnailWidth: 150,
      }
    )),
    autoPlay: true,
    slideInterval: 3000,
    showIndex: true,
    showFullscreenButton: false,
    showNav: false,
    showThumbnails: false,
    showPlayButton: false
    
  }

  return <div className="prod-img-gal-mini">

    <ImageGallery {...props} />
  </div>
}

export default ProductoImagenesGaleriaMini;
