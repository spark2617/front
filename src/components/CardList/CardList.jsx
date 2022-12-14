
import "./CardList.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Button, Container } from "react-bootstrap";


function CardList({ nome, url, id }) {

  return (
    <motion.div
      className=" col "
      style={{
        // border: "1px solid",
        display: "flex",
        justifyContent: "center"
      }}
      Layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}>


      <Link className="categoria-voadora" to={`/DetalheProduto/${id}`} style={{ textDecoration: 'none' }}>
        <Container className="containerr">
          <img className="imagem" src={url} alt="" />
          <h3 className="row text-justify" style={{ color: "#262626" }}>{nome}</h3>
        </Container>
      </Link>



    </motion.div>


  )


}


export default CardList;























// function cardgroup({ url, nome, descricao, categoria, id}) {

// //   return (
// //     <section class="c-list">
// //       <h2>Recomendações</h2>
// //       <ul>
// //         <article class="c ver-mas" id="40">
// //           <div class="imagen">
// //             <img src={url} alt=""></img>
// //           </div>
// //           <div class="contenido">
// //             <div class="titulo">
// //               <div class="categoria">
// //                 <p>{categoria}</p>
// //                 <h3>{nome}</h3>
// //               </div>
// //             </div>
// //             <p class="ubicacion">
// //               <i class="fas fa-map-marker-alt"></i>Itu{" "}
// //               <span>Mostrar no mapa</span>{" "}
// //             </p>
// //             <ul class="ico-caracteristicas"></ul>
// //             <p class="descripcion ver-mas">
// //               {descricao}
// //             </p>
// //             <p class="btn-ver">Ver mais...</p>
// //             <Link className="btn btn-primario ver-detalle" to={`/DetalheProduto/${id}`}>
// //               Ver detalhes
// //             </Link>
// //           </div>
// //         </article>
// //       </ul>
// //     </section>

// //   )
// // }


// export default cardgroup;