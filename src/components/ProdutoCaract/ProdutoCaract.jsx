// import { useContext } from "react";
// import { ProdContext } from "./../../context/ProdContext";
import './ProdutoCaract.css';

function ProdutoCaract() {

    // const { prod } = useContext(ProdContext);

    return ( 

        <div className="produto-caract">
          <h2>O que oferece esté lugar?</h2>
          <ul className="caract">
            <p>Sem Informação</p>
          </ul>
        </div>


        // <div className='produto-caract'>
        //     <h2>O que oferece esté lugar?</h2>
        //     <ul className='caract'>
        //         {
        //             prod.caract.length > 0 ?
        //                 (prod.caract?.map((caract, index) => <li key={index}><i className={caract.urlIcon}></i>{caract.nome}</li>))
        //             : <p>{"[Sem Informação]"}</p>
        //             }
        //    </ul>
        // </div>
     );
}

export default ProdutoCaract;