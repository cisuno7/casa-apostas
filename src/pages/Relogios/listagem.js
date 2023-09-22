import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import React from "react";
import api from "../../service/api";
import {useNavigate, useParams} from "react-router-dom";
export default function ListagemRelogio() {

    const [relogio, setRelogio] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        buscar();
    }, []);

    async function buscar() {
        await api.get('/relogio').then(response => {
            setRelogio(response.data);
        });
    }

    async function deletar(id) {

        await api.delete('/relogio/deleta/' + id).then(response => {
            buscar();
        })
    }

    function editar(id) {
        navigate("/relogio/editar/" + id);
    }

    return (
        <>
            <PageTitle title="Relogio"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de Relogio</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Relogio Mecanico In</th>
                                    <th>Relogio Mecanico Out</th>
                                    <th>Relogio Eletronico In</th>
                                    <th>Relogio Eletronico Out</th>
                                    <th>Relogio Manual</th>
                                    <th style={{width: 40}}>Açoes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {relogio.map(relogio => (
                                    <tr key={relogio.id}>
                                        <td>{relogio.id}</td>
                                        <td>{relogio.relogioMecanicoEntrada}</td>
                                        <td>{relogio.relogioMecanicoSaida}</td>
                                        <td>{relogio.relogioEletronicoEntrada}</td>
                                        <td>{relogio.relogioEletronicoSaida}</td>
                                        <td>{relogio.manual}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={event => editar(relogio.id)}>Editar
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={event => deletar(relogio.id)}>Excluir
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
