import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import React from "react";
import api from "../../service/api";
import {useNavigate, useParams} from "react-router-dom";

export default function ListagemPontos() {

    const [pontos, setPontos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        buscar();
    }, []);

    async function buscar() {
        await api.get('/pontos').then(response => {
            setPontos(response.data);
        });
    }

    async function deletar(id) {

        await api.delete('/pontos/deleta/' + id).then(response => {
            buscar();
        })
    }

    function editar(id) {
        navigate("/pontos/editar/" + id);
    }

    function formataCEP(v) {
        v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d{1,3})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
    }

    return (
        <>
            <PageTitle title="Pontos"/>
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
                                    <th style={{width: 10}}>#</th>
                                    <th>Nome Cliente</th>
                                    <th>Nome Fantasia</th>
                                    <th>Endereço</th>
                                    <th>Município</th>
                                    <th>Estado</th>
                                    <th>CEP</th>
                                    <th style={{width: 40}}>Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                {pontos.map(pontos => (
                                    <tr key={pontos.id}>
                                        <td>{pontos.id}</td>
                                        <td>{pontos.nomeCliente}</td>
                                        <td>{pontos.nomeFantasia}</td>
                                        <td>{pontos.endereco}</td>
                                        <td>{pontos.municipio}</td>
                                        <td>{pontos.estado}</td>
                                        <td>{formataCEP(pontos.cep)}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={event => editar(pontos.id)}>Editar
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={event => deletar(pontos.id)}>Excluir
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
