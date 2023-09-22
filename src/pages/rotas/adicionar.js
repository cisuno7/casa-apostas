import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroRotas(props) {
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const {id} = useParams();

    useEffect(() => {
        buscarId(id);

    }, [])

    async function buscarId(id) {
        await api.get('/rotas/' + id).then(response => {
            setNomeResponsavel(response.data.nomeFantasia);
            setCidade(response.data.nomeCliente);
            setEstado(response.data.endereco);
            console.log(response.data.identificador)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {

            'nomeResponsavel': nomeResponsavel,
            'cidade': cidade,
            'estado': estado,
        };

        api.post('/pontos/cadastrar', payload).then(response => {
            if (response.status === 200) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: response.data,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <PageTitle title="Adicionar Rota"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Adicionar uma Rota</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="nome_cliente">Nome do Responsavel</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nomeResponsavel"
                                        placeholder="Insira o nome do Responsavel"
                                        onChange={e => setNomeResponsavel(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cidade"
                                        placeholder="Insira a cidade"
                                        onChange={e => setCidade(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado</label>
                                <select className="form-control" id="estado" value={estado}
                                        onChange={event => setEstado(event.target.value)}>
                                    <option value="" disabled selected>Selecione o Estado</option>
                                    <option value="Acre">Acre</option>
                                    <option value="Alagoas">Alagoas</option>
                                    <option value="Amapá">Amapá</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Ceará">Ceará</option>
                                    <option value="Espírito Santo">Espírito Santo</option>
                                    <option value="Goiás">Goiás</option>
                                    <option value="Maranhão">Maranhão</option>
                                    <option value="Mato Grosso">Mato Grosso</option>
                                    <option value="Minas Gerais">Minas Gerais</option>
                                    <option value="Pará">Pará</option>
                                    <option value="Paraíba">Paraíba</option>
                                    <option value="Paraná">Paraná</option>
                                    <option value="Pernambuco">Pernambuco</option>
                                    <option value="Piauí">Piauí</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                    <option value="Rondônia">Rondônia</option>
                                    <option value="Roraima<">Roraima</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Sergipe">Sergipe</option>
                                    <option value="Tocantins">Tocantins</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                </select>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
