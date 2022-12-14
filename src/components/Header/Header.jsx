
import "./home.scss";

import { DatePicker } from '../DataPicker/DatePicker'
import backg from "../../images/bg-video.mp4";
import floresta from "../../images/floresta.png";
import hotel from "../../images/hotel.png";
import praia from "../../images/praia.png";
import pousada from "../../images/pousada.png";
import nave from "../../images/nave.png";
import todos from "../../images/todos.png";
import { useEffect, useState } from "react";
import CardList from "../CardList/CardList"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-toastify";
import { useDateRange } from "../useHook/DateRangeProvider"
import dayjs from "dayjs";
import {
  Button,
  Container,
  Form,
} from "react-bootstrap";
import imagem from "../../images/gradient-collage-of-metaverse-concept.jpg"
import { Link } from "react-router-dom";

// import { DestinationInput } from "../Destino/index";
// import { MetaversesAPI } from "../../services/metaverses"




// function Filter({setActiveCategory, activeCategory, setFiltered, products}) {
export function Header() {
  // const [metaversesOptions, setMetaversesOptions] = useState([]);
  // const navigate = useNavigate();
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();

  //   useEffect(() => {
  //     MetaversesAPI.getMetaverses().then((response) => {
  //       const options = response.data.content.map((metaverse) => ({
  //         label: metaverse.name,
  //         value: metaverse.id,
  //       }));
  //       setMetaversesOptions(options);
  //     });
  //   }, []);

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const metaverseId = event.target?.metaverse?.value;
  //     const metaverseName = metaversesOptions?.find(opt => String(opt.value) === metaverseId)?.label;
  const start = dayjs(startDate).format("YYYY-MM-DD");
  const end = dayjs(endDate).format("YYYY-MM-DD");

  //     if (metaverseId && startDate && endDate) {
  //       navigate(`/product?metaverseName=${metaverseName}&initialDate=${start}&endDate=${end}`);
  //     }
  //     else if (startDate && endDate) {
  //       toast("Ops! Em qual metaverso você deseja alugar?", {
  //         type: "warning",
  //         theme: "dark",
  //       });
  //     }
  //     else if (metaverseId) {
  //       navigate(`/product?metaverseId=${metaverseId}`);
  //     }
  //   };

  // const clearInputs = () => {
  //     setStartDate(null);
  //     setEndDate(null);
  //   }
  const [category, setActiveCategory] = useState("todos")
  useEffect(() => {
    puxar()

  }, [category])


  function puxar() {
    let url;

    //ternario
    url = `http://44.211.88.176:9000/product/fetchCategory/${category}`;

    fetch(url).then((response) => { response.json().then((date) => setApi(date)) })
  }

  const [api, setApi] = useState([]);

  return (

    <>
      {/* <div className="videoback">
      <video src={backg}  autoPlay loop muted  width="100%" height="100%" object-fit="cover"></video>
    </div>
    <div className="Centro">
      
      <span className="Titulo"> Alugar um Quarto </span>
      <h1 className="Descricao"> Nunca Funcionou tão bem </h1>
      <p className="Descricao">MetaHotel é MarketPlace de Propriedade da Comunidade para Alugar Quartos Virtuais dentro do Meta-Verso</p>
    </div>
    <div className="fundo">
      
    </div> */}


      <div className="search position-relative">
        <Form
          className="row d-flex align-items-center m-auto
            justify-content-center border rounded 
            shadow-sm p-3 bg-light position-absolute fixed-top center col-sm-8 y-5">
          <em className="text-align center">
            <p style={{ fontSize: "14px", color: "black", inset: "0px auto 0px auto", display: "inline" }}>
              Alugar um Quarto, nunca Funcionou tão bem!
            </p>
          </em>
          <Form.Control
            className="col"
            type="search"
            placeholder="Aonde vamos?"
          />
          <Form.Group className="col m-2 align-items-center">
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              className="row" />
          </Form.Group>
          <Button variant="outline-danger" className="col button" type="submit">
            Buscar
          </Button>
        </Form>
        <div>
          <img className="videoback"  width="100%" object-fit="cover" src={imagem} alt="" />
        </div>
        {/* <div className="videoback">
          <video src={backg} autoPlay loop muted width="100%" object-fit="cover" >
          </video>
        </div> */}

      </div>


      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.1,
              ease: [0, 0.60, 0.2, 1.00]
            },
            scale: {
              type: "spring",
              damping: 3,
              stiffness: 90,
              restDelta: 0.001
            }
          }}

          className="Categoria row">
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("todos")} >
              <img className="categoria-img" src={todos} />
              <p className="text-light">Todos</p>
            </button>
          </div>
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("hotel")} >
              <img className="categoria-img" src={hotel} />
              <p className="text-light">Hotel</p>
            </button>
          </div>
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("pousada")} >
              <img className="categoria-img" src={pousada} />
              <p className="text-light">Pousada</p>
            </button>
          </div>
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("praia")}>
              <img className="categoria-img" src={praia} />
              <p className="text-light">Praia</p>
            </button>
          </div>
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("no mato")}>
              <img className="categoria-img" src={floresta} />
              <p className="text-light">Acampamento</p>
            </button>
          </div>
          <div className="categoria-cart col">
            <button className="btn" onClick={() => setActiveCategory("uau")}>
              <img className="categoria-img" src={nave} />
              <p className="text-light">Espacial</p>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="">
        <motion.div Layout className="todos row">
          <AnimatePresence >
            {api.map((produto) => {
              return <CardList id={produto.product_id} nome={produto.product_name} url={produto.images[0].url_img} />
            })}
          </AnimatePresence>
        </motion.div>


      </div>
    </>
  );
}