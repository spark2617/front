import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import iconVoltar from "../../images/iconVoltar.svg"
import { Link } from "react-router-dom"
function HeaderDetalheProduto({nome, category}) {
    return (
        /** Para Cada produto, a categoria e o título do produto
         *  devem ser apresentados por API */
        <>
            <body style={{ background: "#222d57", color: "#F7F7F7" }}>
                <Container className="col d-flex align-items-center justify-content-center p-3" >
                    <div className="row">
                        <h4 className="">{nome}</h4>
                        <h2 className="">{category}</h2>
                    </div>
                    <div className="col d-flex flex-row-reverse">
                        <Link to="/">
                            <Button variant="">
                                <img src={iconVoltar} width="20px"></img>
                            </Button>{' '}
                        </Link>
                    </div>
                </Container>
            </body>
        </>
    )
}

export default HeaderDetalheProduto