// import { useContext } from "react";
// import { ProdContext } from "./../../context/ProdContext";
import { Container } from "react-bootstrap";
import "./ProdutoPolitica.css";
import politica from "../../images/politica.png";
import aviso from "../../images/aviso.png"
import seguranca from "../../images/seguranca.png"
import regrapiscina from "../../images/regrasDaPiscina.png"
import regracasa from "../../images/regrasDaCasa.png"
function ProdutoPolitica() {
  // const { prod } = useContext(ProdContext);

  return (
    <>
      <body style={{ background: "#222d57", color: "#F7F7F7" }}>
        <Container className="produto-politica">
          <h2 className="text-light">
            <img className="categoria-img" src={politica} />
            Nossas Políticas</h2>
          <div className="politicas">
            <div className="politica col">
              <h3>Regras da Casa</h3>
              <p>Check-out 10:00Hrs</p>
              <p>Proibido Fumar</p>
              <p>Proibido trocar os moveis de lugar</p>
            </div>
            <div className="politica col">
              <h3>Segurança</h3>
              <p>Detector de Fumança</p>
              <p>Cameras</p>
              <p>Portaria 24hrs</p>
            </div>
            <div className="politica col">
              <h3>Cancelamento</h3>
              <p>30 dias antes do registro total</p>
              <p>15 dias antes ou menos rembolso de 50%</p>
            </div>
            <div className="politica col">
              <h3>Regras da Piscina</h3>
              <p>Roupas de Psicina(Roupa Similiar)</p>
              <p>Proibido Nudismo</p>
              <p>Proibido Alcool</p>
            </div>
          </div>
        </Container>
      </body>
    </>
  );
}

export default ProdutoPolitica;
