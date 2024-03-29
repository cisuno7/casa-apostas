import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import React from "react";
import api from "../service/api";
import { logout } from "../service/auth";


export default function SideMenu() {
    const [permissao, setPermissao] = useState('');
    useEffect(() => {
        api.get('/user/permissao').then(response => {
            setPermissao(response.data[0].name);
        });
    }, []);

    function atualizaMenu() {
        const currentPath = window.location.pathname;
        const menuItems = document.querySelectorAll('.nav-link');
        menuItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            }
        });
    }


    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <Link to="/" className="brand-link">
                <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                     style={{opacity: .8}}/>
                <span className="brand-text font-weight-light"> T.I Company</span>
            </Link>
            <div className="sidebar">

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                <i className="nav-icon fas fa-home"></i>
                                <p>Inicio</p>
                            </Link>
                        </li>
                        {permissao === "ROLE_ADMIN" &&
                            <>
                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-user"></i>
                                        <p>
                                            Funcionários
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/funcionarios/novo" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Novo</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/funcionarios/lista" className="nav-link">
                                                <i className="fas fa-scroll nav-icon"></i>
                                                <p>Listagem</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-user"></i>
                                        <p>
                                            Veiculos
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/veiculo/adicionar" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Novo</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/veiculo/listagem" className="nav-link">
                                                <i className="fas fa-scroll nav-icon"></i>
                                                <p>Listagem</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-route"></i>
                                        <p>
                                            Rotas
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/rotas/novo" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Novo</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/rotas/lista" className="nav-link">
                                                <i className="fas fa-scroll nav-icon"></i>
                                                <p>Listagem</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-store"></i>
                                        <p>
                                            Pontos
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/ponto/adicionar" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Adicionar</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/ponto/listagem" className="nav-link">
                                                <i className="fas fa-scroll nav-icon"></i>
                                                <p>Listagem</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-cog"></i>
                                        <p>
                                            Máquinas
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/maquinas/novo" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Adicionar</p>
                                            </Link>
                                            <li className="nav-item">
                                                <Link to="/maquinas/lista" className="nav-link">
                                                    <i className="fas fa-scroll nav-icon"></i>
                                                    <p>Listagem</p>
                                                </Link>
                                            </li>
                                        </li>
                                    </ul>
                                </li>


                                <li className="nav-item menu-closed">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-stopwatch"></i>
                                        <p>
                                            Relógio
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/relogio/adicionar" className="nav-link">
                                                <i className="fas fa-plus nav-icon"></i>
                                                <p>Adicionar</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/relogio/listagem" className="nav-link">
                                                <i className="fas fa-scroll nav-icon"></i>
                                                <p>Listagem</p>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                                        role="menu">

                                        <li className="nav-item">
                                            <Link to="/leitura" className="nav-link" onClick={atualizaMenu}>
                                                <i className="nav-icon fas fa-book"></i>
                                                <p>Leitura</p>
                                            </Link>
                                        </li>

                                    </ul>


                                </li>

                            </>
                        }
                        <li className={'nav-item'}>
                            <Link to="#logout" className="nav-link" onClick={logout}>
                                <i className="nav-icon fas fa-door-open"></i>
                                <p>Sair</p>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    )
}
