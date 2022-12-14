import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../pages/Login/contexts/auth';
import SerachIcon from '../../images/MetaHotel.svg'
import Alert from 'react-bootstrap/Alert';


function Nave() {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const handleLogout =() => {
    logout();

}

  return (
    <>

      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className='d-flex flex-row'>
                <Link to='/'>
                  <img src={SerachIcon} width="75px" alt="" />
                </Link>
                <Link to='/' className='text-decoration-none d-flex align-items-end text-light m-3' >
                  
                    <p style={{ fontSize: "15px", color: "white" }}>
                      O Meta não para, mas você precisa dormir!
                    </p>
                  
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-dark' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className='bg-dark'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header >
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  {localStorage.user == null? (
                  <>
                  {location.pathname !== '/cadastro' && <Link to='/cadastro' className="text-decoration-none text-light border rounded shadow-sm p-2 mb-2 m-1" style={{ fontSize: "15px" }}>Criar Conta</Link>}
                  {location.pathname !== '/login' && <Link to='/login' className="text-decoration-none text-light border rounded shadow-sm p-2 mb-2 m-1" style={{ fontSize: "15px" }}>Iniciar Sessão</Link>}</>)

                  : (
                            <>
                            <div className='d-flex flex-row '>
                        <div><p className="p-3 mb-3 text-light" >Olá, Usuario</p></div>
                        <Link to='/' className="text-decoration-none text-light border rounded shadow-sm p-3 mb-3" onClick={handleLogout}>Logout</Link>
                        </div></>)}
                       
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Nave;
