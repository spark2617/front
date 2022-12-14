import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconVoltar from "../../images/iconVoltar.svg"


function HeaderAdministracao() {
    return (
        <>
            <body style={{ background: "#222d57", color: "#F7F7F7" }}>
                <Container className="col d-flex align-items-center justify-content-center p-3" >
                    <div className="row">
                        <h2 className="">Administração</h2>
                        <h2 className=""></h2>
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

export default HeaderAdministracao 