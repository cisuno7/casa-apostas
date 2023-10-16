import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import React from "react";
import api from "../../service/api";
import {useNavigate, useParams} from "react-router-dom";
export default function ListagemVeiculos() {

    const [veiculo, setVeiculo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        buscar();
    }, []);

    async function buscar() {
        await api.get('/veiculos/listar').then(response => {
            setVeiculo(response.data);
        });
    }

    async function deletar(id) {

        await api.delete('/veiculos/deleta/' + id).then(response => {
            buscar();
        })
    }

    function editar(id) {
         navigate("/veiculos/editar/" + id);
    }

    return (
        <>
            <PageTitle title="Veiculos"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de Veiculos</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Identificador</th>
                                    <th>Placa</th>
                                    <th>Marca</th>
                                    <th>KM'S</th>
                                    <th style={{width: 40}}>Açoes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {veiculo.map(veiculo => (
                                    <tr key={veiculo.id}>
                                        <td>{veiculo.id}</td>
                                        <td>{veiculo.placa}</td>
                                        <td>{veiculo.marca}</td>
                                        <td>{veiculo.kms}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={event => editar(veiculo.id)}>Editar
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={event => deletar(veiculo.id)}>Excluir
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
