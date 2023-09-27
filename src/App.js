import './App.css';
import SideMenu from "./components/sidemenu";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import CadastroFuncionarios from "./pages/funcionarios/cadastro";
import {isAuthenticated} from "./service/auth";
import Login from "./pages/Login";
import React from "react";
import ListagemFuncionarios from "./pages/funcionarios/listagem";
import AdicionarMaquinas from '../src/pages/Maquinas/Adicionar'
import AdicionarPonto from './pages/Pontos/adicionar';
import AdicionarRelogio from './pages/Relogios/adicionar';
import ListagemPontos from './pages/Pontos/listagem';
import ListagemMaquinas from "./pages/Maquinas/listagem";
import CadastroRotas from "./pages/rotas/adicionar";
import ListagemRotas from "./pages/rotas/listagem";
import ListagemRelogio from "./pages/Relogios/listagem";
import Leitura from './pages/Leitura/leitura';

function App() {
    return (
        <div className="wrapper">
            {!isAuthenticated() ? <Login/> : (
                <>
                    <Navbar/>
                    <SideMenu/>
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" exact element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/rotas/novo" element={<CadastroRotas/>}/>
                            <Route path="/rotas/lista" element={<ListagemRotas/>}/>
                            <Route path="/rotas/editar/:id" element={<AdicionarMaquinas/>}/>
                            <Route path="/funcionarios/novo" element={<CadastroFuncionarios/>}/>
                            <Route path="/funcionarios/lista" element={<ListagemFuncionarios/>}/>
                            <Route path="/funcionarios/editar/:id" element={<AdicionarMaquinas/>}/>
                            <Route path="/maquinas/novo" element={<AdicionarMaquinas/>}/>
                            <Route path="/maquinas/lista" element={<ListagemMaquinas/>}/>
                            <Route path="/maquinas/editar/:id" element={<AdicionarMaquinas/>}/>
                            <Route path="/ponto/adicionar" element={<AdicionarPonto/>}/>
                            <Route path="/ponto/listagem" element={<ListagemPontos/>}/>
                            <Route path="/ponto/editar/:id" element={<AdicionarPonto/>}/>
                            <Route path="/relogio/adicionar" element={<AdicionarRelogio/>}/>
                            <Route path="/relogio/listagem" element={<ListagemRelogio/>}/>
                            <Route path="/relogio/editar/:id" element={<AdicionarRelogio/>}/>
                            <Route path="leitura" element={<Leitura/>}/>
                        </Routes>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
