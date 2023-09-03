import logo from './logo.svg';
import './App.css';
import SideMenu from "./components/sidemenu";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import CadastroFuncionarios from "./pages/funcionarios/cadastro";
import {isAuthenticated} from "./service/auth";
import Login from "./pages/Login";
import {useEffect} from "react";
import ListagemFuncionarios from "./pages/funcionarios/listagem";

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
                    </Routes>
                </div>
            </>
        )}
    </div>
  );
}

export default App;
