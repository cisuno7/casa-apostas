import logo from './logo.svg';
import './App.css';
import SideMenu from "./components/sidemenu";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import CadastroFuncionarios from "./pages/funcionarios/cadastro";
import {isAuthenticated} from "./service/auth";
import Login from "./pages/Login";
import React from "react";
import {useEffect} from "react";
import ListagemFuncionarios from "./pages/funcionarios/listagem";
import AdicionarMaquinas from '../src/pages/Maquinas/Adicionar'
import AdicionarPonto from './pages/Pontos/adicionar';
import AdicionarRelogio from './pages/Relogios/adicionar';
function App() {
  return (
    <div className="wrapper">
        {!isAuthenticated() ? <Login /> : (
            <>
                <Navbar />
                <SideMenu />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/rotas/novo" element={<h1>Cadastro de rotas</h1>} />
                        <Route path="/funcionarios/novo" element={<CadastroFuncionarios />} />
                        <Route path="/funcionarios/lista" element={<ListagemFuncionarios />} />
                        <Route path="/maquinas/novo"element={<AdicionarMaquinas/>}/>
                        <Route path='/ponto/adicionar'element={<AdicionarPonto/>}/>
                        <Route path='/relogio/adicionar'element={<AdicionarRelogio/>}/>
                    </Routes>
                </div>
            </>
        )}
    </div>
  );
}

export default App;
