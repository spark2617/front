import { useState } from "react";
import "./style.css"
import { Button } from "react-bootstrap";

export default function Galeria({ images }) {

  const [indice, setIndice] = useState(0)
  const api = []
  images?.map((img) => {
    api.push(img.url_img)

  })
  console.log(api)


  return (
    <>
      <div className="full-screen row">
        <button type="button" className="close" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
        {/* <Button
          className="col"
          onClick={() => {
            if (indice == 0) {
              setIndice(api.length - 1)
            } else {
              setIndice(indice - 1)
            }
          }}
        >esquerda</Button> */}
        <div className="slide col">
          <div className="image-grande">
            <img className="grande" src={api[indice]} alt="" />
          </div>
          <div className="grupo-img-pequeno">
            {images?.map((img, index) => {
              return <div onClick={() => {
                setIndice(index)
                console.log(indice)
              }} className="image-pequena"><img className="image-pequena" src={img.url_img}
                alt="" />

              </div>

            })}
          </div>

        </div>
        {/* <Button
          className="col"
          onClick={() => {
            if (indice == (api.length - 1)) {
              setIndice(0)
            } else {
              setIndice(indice + 1)
            }
          }}>direita</Button> */}
      </div>
    </>
  )
}