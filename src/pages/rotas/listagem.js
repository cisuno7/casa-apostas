import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import React from "react";
import api from "../../service/api";
import {useNavigate, useParams} from "react-router-dom";

export default function ListagemRotas() {

    const [rotas, setRotas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        buscar();
    }, []);

    async function buscar() {
        await api.get('/rotas').then(response => {
            setRotas(response.data);
        });
    }

    async function deletar(id) {

        await api.delete('/rotas/deleta/' + id).then(response => {
            buscar();
        })
    }

    function editar(id) {
        navigate("/rotas/editar/" + id);
    }

    return (
        <>
            <PageTitle title="Rotas"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de Rotas</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Nome Responsavel</th>
                                    <th>Cidade</th>
                                    <th>Estado</th>
                                    <th style={{width: 40}}>Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rotas.map(rotas => (
                                    <tr key={rotas.id}>
                                        <td>{rotas.id}</td>
                                        <td>{rotas.nomeResponsavel}</td>
                                        <td>{rotas.cidade}</td>
                                        <td>{rotas.estado}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={event => editar(rotas.id)}>Editar
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={event => deletar(rotas.id)}>Excluir
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
