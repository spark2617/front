import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './style2.css'


function GaleriaV2({images}) {

  const [sliderNumber, setSliderNumber] = useState (0)
  const [openModal, setOpenModal] = useState (false)

  const handleOpenModal = (index) => {
    setSliderNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    sliderNumber === 0 ? setSliderNumber(images.length - 1) : setSliderNumber(images.length -1)
  }
  const nextSlide = () => {
    sliderNumber + 1 === images.length ? setSliderNumber(0) : setSliderNumber(sliderNumber + 1)
  }

  return (
    <div>

      {openModal &&
        <div className="sliderWrap">


            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>
            <div className="fullScreenImage">
                <img src={images[sliderNumber].url_img}></img>
            </div>
            
        </div>
      }
      {/* <br />
      Current slider number: {sliderNumber}
      <br />
      Total slides: {images.length}
      <br /><br /> */}
      <div className="galleryWrap">
        {images && images.map((slide, index) =>{
          return (
            <div 
            className="single" 
            key={index}
            onClick={() => handleOpenModal(index)}
            >
              <img src={slide.url_img}/>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default GaleriaV2