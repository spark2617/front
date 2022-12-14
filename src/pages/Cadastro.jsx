import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {Formik, ErrorMessage, Form} from "formik";
import "../css/Cadastro.scss"
import {useNavigate} from 'react-router-dom';

function criar(nome, sobrenome, email, senha){
  fetch("http://44.197.188.63:9000/collaborator", {
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
                  name: `${nome}`,
                  surname: `${sobrenome}`,
                  email: `${email}`,
                  password: `${senha}`,
                  acess_id: 5,//NIVEL DE ACESSO DO USER
                  
          }),
        }).then((resposta)=>{
          if(resposta.status==201){
              alert("usuario criado com sucesso")
          }else if(resposta.status==404){
              resposta.json().then((date)=>alert(date.msg))
          }
        })
}

const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };


const validationSchema = Yup.object({
    name: Yup.string().required("Digite seu primeiro nome"),
    lastName: Yup.string().required("Digite seu ultimo nome"),
    email: Yup.string()
      .email("Insira um email válido")
      .required("Digite o e-mail"),
    password: Yup.string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Digite a senha"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => !!val && val.length >= 6,
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "As senhas precisam ser iguais"
      ),
    }),
  });

//   function addNoLocal(obj){
//     if(localStorage.getItem('usuario') === null){

//       localStorage.setItem("usuario",JSON.stringify([obj]) );
//     }else {
     
//       localStorage.setItem(
//         'usuario',JSON.stringify([
//           ...JSON.parse(localStorage.getItem('usuario')),
//           obj
//         ])
//       );
//     }
//   }


function Cadastro() {
    const [validated, setValidated] = useState(false);

    // const [nome,setNome]=useState(null)
    // const [sobreNome,setSobre]=useState(null)
    // const [senha,setSenha]=useState(null)
    // const [e_mail,setEmail]=useState(null)
    const [showPassword, setShowPassword] = useState(false);

    // const user={
    //   name : nome,
    //   surname: sobreNome,
    //   email: e_mail,
    //   password:senha
    // }
    
// function igual(event){
//         const listUsuario=JSON.parse(localStorage.getItem('usuario'))
//         for(let usuario of listUsuario){
//           if(usuario.email==event.email){
//              return true;
//           }
    
//         }
//         return false;
//       }
  

  // function addNoLocal(user){
  //   if(localStorage.getItem('usuario') === null){

  //       localStorage.setItem("usuario",JSON.stringify([user]) );
  //     }else if(igual(user)){
  //         return true
  //     }
  //     else {
       
  //       localStorage.setItem(
  //         'usuario',JSON.stringify([
  //           ...JSON.parse(localStorage.getItem('usuario')),
  //           user
  //         ])
  //       );
  //     }
  //     return false
  //   }
  

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(event)
    criar(event.name, event.lastName, event.email, event.password);

    }

    
      
    
  // };
 

    return (
        <>
            <br />
            <Container className=" bg-dark border rounded d-flex align-items-center justify-content-center shadow-sm p-3 mb-5" style={{ width: "500px" }}>
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        
            validationSchema={validationSchema}
          >
            {({isSubmitting, values, handleChange, handleBlur})=>(
              <Form className="register-container__form">
                <h1 className="register-container__form__title">
                  Cadastre-se com seu e-mail
                </h1>
                <div className="register-container__form__input-wrapper">
                  <div className="register-container__form__input">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="register-container__form__input__error-message"
                    />
                  </div>

                  <div className="register-container__form__input">
                    <label htmlFor="lastName">Sobrenome</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder=""
                      onChange={
                        handleChange
                      }
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="register-container__form__input__error-message"
                    />
                  </div>
                </div>
                <div className="register-container__form__input">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__input">
                  <label htmlFor="password">Senha</label>
                  <div className="register-container__wrapper-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <span
                      onClick={() => setShowPassword((password) => !password)}
                    >

                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__input">
                  <label htmlFor="confirmPassword">Confirmar senha</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__submit">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="register-container__form__submit-button"
                    // onClick={(e)=>{
                    //   e.preventDefault();
                    //   addNoLocal();
                    // }}
                  >
                    Criar conta
                  </button>
                </div>
              </Form>
              )}
          </Formik>
            </Container>

        </>
    )
}

export default Cadastro;