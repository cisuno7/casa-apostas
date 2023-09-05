import {Link} from "react-router-dom";
import {useEffect} from "react";


export default function SideMenu() {

    function atualizaMenu(){
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
                     style={{opacity: .8}} />
                    <span className="brand-text font-weight-light">Danilinho {`<`}3</span>
            </Link>


            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Vitor Lima</a>
                    </div>
                </div>

                
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                <i className="nav-icon fas fa-home"></i>
                                <p>Inicio</p>
                            </Link>
                        </li>
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
                                    <Link to="/funcionarios/novo" className="nav-link">
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
                <i className="nav-icon fas fa-clock"></i> 
                <p>
                    Ponto
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

                    </ul>
                </nav>
                
            </div>
            
        </aside>
    )
}
