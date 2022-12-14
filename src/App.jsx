import Nave from "./components/NavBar/Nave";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages//Login/Login";
import { AuthProvider } from "./pages/Login/contexts/auth";
import DetalheProduto from "./pages/DetalheProduto";
import NotFund from "./components/NotFund/NotFund";
import React from "react";
import { Success } from "./components/Sucess/Sucess";
import { DateRangeProvider } from "./components/useHook/DateRangeProvider";
import  Administracao  from "./pages/Administracao/Administracao";
import CadastradoComSucesso from "./pages/Administracao/CadastradoComSucesso";



const App = () => {


  return (

    <AuthProvider>
      <DateRangeProvider>
      <Nave />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cadastradoComSucesso" element={<CadastradoComSucesso />} />
        <Route path="/detalheproduto/:id" element={<DetalheProduto />} />
        <Route path="/NotFund" element={<NotFund/>} />
        <Route path="/administracao" element={<Administracao />} />
      </Routes>
        <Footer />
        </DateRangeProvider>
    </AuthProvider>



  );
};

export default App;
