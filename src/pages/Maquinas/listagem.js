import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import React from "react";
import api from "../../service/api";
import {useNavigate, useParams} from "react-router-dom";
export default function ListagemMaquinas() {

    const [maquinas, setMaquinas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        buscar();
    }, []);

    async function buscar() {
        await api.get('/maquinas/listar').then(response => {
            setMaquinas(response.data);
        });
    }

    async function deletar(id) {

        await api.delete('/maquinas/deleta/' + id).then(response => {
            buscar();
        })
    }

    function editar(id) {
         navigate("/maquinas/editar/" + id);
    }

    return (
        <>
            <PageTitle title="Maquinas"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de máquinas</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Identificador</th>
                                    <th>Tipo do Jogo</th>
                                    <th>Serial</th>
                                    <th>Informacoes</th>
                                    <th style={{width: 40}}>Açoes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {maquinas.map(maquinas => (
                                    <tr key={maquinas.id}>
                                        <td>{maquinas.id}</td>
                                        <td>{maquinas.identificador}</td>
                                        <td>{maquinas.tipoJogo}</td>
                                        <td>{maquinas.serial}</td>
                                        <td>{maquinas.informacoes}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={event => editar(maquinas.id)}>Editar
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={event => deletar(maquinas.id)}>Excluir
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
