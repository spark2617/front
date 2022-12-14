import { useEffect, useState, useRef, useContext } from "react";
import { ProdContext } from "../../contexts/ProdContext";
import ProductoImgGaleria from "./ProdutoImgGaleria"
import ProdutoImgGaleriaMini from "./ProdutoImgGaleriaMini"
import { useMediaQuery } from "react-responsive";
import "../../css/Produtoimg.css";
import ImageGallery from "react-image-gallery";
import Galeria from "./GaleriaV2";
import { Button } from "react-bootstrap";

function ProdutoImg({ images }) {

    const [aparecer,setAparecer]=useState(false)
  

    return (
        <>

           <Galeria images={images}/>
            

            
        </>
    )
}

export default ProdutoImg;


// export default function ProdutoImg({ images }) {
//     // const prod = images
//     console.log(images)
//     const imgList = images?.map((img) => ({
//         img: img.url_img
//     }));

// const [verMais, setVerMais] = useState(false);
// const isMediaAboveTablet = useMediaQuery({ minWidth: 768 });
// const galeriaContainerRef = useRef();

// const handleClickOutside = (e) => {
//     if (galeriaContainer, current.contains(e.target)) {
//         return;
//     }
//     setVerMais(false);
// };

// useEffect(() => {
//     if (verMais) {
//         document.addEventListener("mouseup", handleClickOutside);
//         document.querySelector("body").style.overflow = "hidden";
//     } else {
//         document.removeEventListener("mouseup", handleClickOutside);
//         document.querySelector("body").style.overflow = "auto";
//     }

//     return () => {
//         document.removeEventListener("mouseup", handleClickOutside);
//     };

// }, [verMais]);

//     if (!isMediaAboveTablet && verMais) {
//         setVerMais(false);
//     }

//     return (
//         <div className="producto-img">
//             {isMediaAboveTablet ? (
//                 <>
//                     <div className="producto-img__grid">

//                         {imgList.slice(0 , 4).map(({ img }, idx) => {
//                             if (idx < 4) {
//                                 return (
//                                     <div key={idx} className="producto-img__grid-cont">
//                                         <img src={img} alt="" />
//                                     </div>
//                                 )
//                             }

//                         })}
//                         <div>

//                         <div className="producto-img__grid-cont">
//                             <img src={imgList[4]?.url_img} alt="" />
//                         </div>
//                         <button
//                             type="button"
//                             className="btn producto-img__ver-mais"
//                             onClick={() => setVerMais(!verMais)}
//                         >
//                             Ver mais
//                         </button>
//                     </div>


//                     {verMais && (
//                         <div className="galeria-fullscreen-container">
//                             <div
//                                 ref={galeriaContainerRef}
//                                 className="producto-img__galeria"
//                             >
//                                 <ProductoImgGaleria
//                                     imgList={imgList}
//                                     onClose={() => setVerMais(false)}
//                                 />
//                             </div>
//                         </div>
//                     )}
//             ) : (
//                 <div className="producto-img__galeria-mini">
//                     <ProdutoImgGaleriaMini imgList={imgList} />
//                 </div>
//             )}
//         </div>
//                 </>
//     )

// };

// export default ProdutoImg;

