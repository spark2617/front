import { Container } from "react-bootstrap"
import iconPoint from "../../images/iconPoint.svg"


function BlocoDeLocalizacao({local}) {
    return (
        <>
            <body style={{ background: "#222d57", color: "#F7F7F7" }}>
                <Container className="col d-flex align-items-center justify-content-between p-3">
                    <div>
                        <img src={iconPoint} width="20px" className="m-1"></img>
                        Todos os nossos servidores se encontram proximo a nossa SafeZone<br />
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col">
                                Muito Bom
                            </div>
                            <div className="row">
                                ⭐⭐⭐⭐⭐
                            </div>


                        </div>
                        <div className="col d-flex align-items-center border rounded shadow-sm ms-1" style={{background:"#222d67"}}>
                            <h4>8</h4>
                        </div>


                    </div>

                </Container>
            </body>

        </>
    )
}

export default BlocoDeLocalizacao