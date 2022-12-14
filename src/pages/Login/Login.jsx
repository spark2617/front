import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./contexts/auth";

function Login() {
  const [validated, setValidated] = useState(false);
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

function autenticacao(){
  fetch("http://44.197.188.63:9000/authenticate", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Method": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Credentials": true
          },
          body: JSON.stringify({
                  //no lugar de input vc coloca o valor dos inputs
                  email: `${email}`,
                  password: `${password}`,
          }),
        })
        .then((resposta)=>{
          if(resposta.ok){
              resposta.json().then((date)=>localStorage.setItem("jwt",date.jwt))// se senha e email estiver correto ele(date) retorna o jwt, que deve ser salvo em algum lugar para ser utilizado

              

          }else{
              resposta.json().then((date)=>alert(date.msg))//caso algum dado estiver errado retorna uma exceção e sua mensagem(date.msg)
          }
        })

        
}

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    console.log(email)
    console.log(password)
    autenticacao()

          e.preventDefault();
      e.stopPropagation();
    setValidated(true);
  };

  function getValidationState() {
    while (password.length > 5) return true;
    return "";
  }

  return (
    <>
      <br />
      <Container
        className="border rounded shadow-sm p-3 mb-5"
        style={{ width: "500px" }}
      >
        <Form className="register-container__form" noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="register-container__form__title">
            Entrar
          </h1>
          <Form.Group className="mb-3 " controlId="formLoginEmail">
            <Form.Label className="text-light">Email</Form.Label>
            <input
              required
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Digite um email válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginSenha">
            <Form.Label className="text-light">Senha</Form.Label>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isValid={getValidationState() && password.length > 5}
              isInvalid={!getValidationState() && password.length < 6}
              placeholder="Digite sua Senha"
            />
            <Form.Control.Feedback type="invalid">
              A senha deve ter mais de 6 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-center">
            <Button className="register-container__form__submit-button" variant="primary" type="submit">
              ACESSAR CONTA
            </Button>
          </Form.Group>
          <p className="text-center mt-2 text-light">
            Ainda não tem conta? <Link to="/cadastro">Registre-se</Link>
          </p>
        </Form>
      </Container>
    </>
  );
}

export default Login;