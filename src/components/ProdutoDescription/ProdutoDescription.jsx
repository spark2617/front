// import { useContext } from "react";
// import { ProdContext } from "./../contexts/ProdContext";
import { Container } from "react-bootstrap";
import "./ProdutoDescription.css"

function ProdutoDescription({descricao, nome}) {

    // const { prod } = useContext(ProdContext);

    return (
      <Container className="produto-Description">
          <h2>{nome}</h2>
          <p>{descricao}</p>
      </Container>
     );
}
 
export default ProdutoDescription;
