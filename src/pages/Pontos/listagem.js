import PageTitle from "../../components/pagetitle";
import { useEffect, useState } from "react";
import PontoService from "../../service/ponto"; 
import React from 'react';

export default function ListagemPontos() {
    const [pontos, setPontos] = useState([]);

    useEffect(() => {
        PontoService.getAllPontos().then(response => {
            setPontos(response.data);
        });
    }, []);

    return (
        <>
            <PageTitle title="Pontos" />
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de pontos</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th style={{ width: 10 }}>#</th>
                                        <th>Nome Fantasia</th>
                                        <th>Endereço</th>
                                        <th>CEP</th>
                                        <th>Município</th>
                                        <th>Cliente</th>
                                        <th style={{ width: 40 }}>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pontos.map(ponto => (
                                        <tr key={ponto.id}>
                                            <td>{ponto.id}</td>
                                            <td>{ponto.nomeFantasia}</td>
                                            <td>{ponto.endereco}</td>
                                            <td>{ponto.cep}</td>
                                            <td>{ponto.municipio}</td>
                                            <td>{ponto.nomeCliente}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-primary disabled">Editar</button>
                                                    <button type="button" className="btn btn-danger">Excluir</button>
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
