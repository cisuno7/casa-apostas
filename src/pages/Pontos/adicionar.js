import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroPontos(props) {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [endereco, setEndereco] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [pontoDeReferencia, setPontoDeReferencia] = useState('');
    const [rotas, setRotas] = useState([])
    const [rotaSelecionada, setRotaSelecionada] = useState({})
    const {id} = useParams();

    useEffect(() => {
        buscarRotasDisponiveis();
        buscarId(id);

    }, [])

    async function buscarId(id) {
        await api.get('/pontos/' + id).then(response => {
            setNomeFantasia(response.data.nomeFantasia);
            setNomeCliente(response.data.nomeCliente);
            setEndereco(response.data.endereco);
            setMunicipio(response.data.municipio);
            setEstado(response.data.estado);
            setCep(response.data.cep);
            setPontoDeReferencia(response.data.pontoDeReferencia);
            console.log(response.data.identificador)
        });
    }

    function buscarRotasDisponiveis() {
        api.get("/rotas").then(result => {
            setRotas(result.data)
        })
    }

    function selecionaRota(idSelected){
        const selecionada = rotas.find(e => {
            if(e.id === parseInt(idSelected)){
                return e;
            }
        });
        setRotaSelecionada(selecionada);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            'rota': rotaSelecionada,
            'nomeFantasia': nomeFantasia,
            'nomeCliente': nomeCliente,
            'endereco': endereco,
            'municipio': municipio,
            'estado': estado,
            'cep': cep,
            'pontoDeReferencia': pontoDeReferencia
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
            <PageTitle title="Adicionar Ponto"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Adicionar um novo Ponto</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="rota">Rota ao qual este ponto pertence</label>
                                    <select className={'form-control'} onChange={(e) => selecionaRota(e.target.value)}>
                                        <option value="" disabled selected>Selecione uma rota</option>
                                        {
                                            rotas.map(rota => {
                                                return <option id={rota.id} value={rota.id}>ID: {rota.id} [{rota.cidade}-{rota.estado}] Resp. {rota.responsavel.nome}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome_cliente">Nome do Cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nome_cliente"
                                        value={nomeCliente}
                                        placeholder="Insira o nome do cliente"
                                        required="required"
                                        onChange={e => setNomeCliente(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome_fantasia">Nome Fantasia</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nome_fantasia"
                                        value={nomeFantasia}
                                        placeholder="Insira o nome fantasia"
                                        required="required"
                                        onChange={e => setNomeFantasia(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="endereco"
                                        value={endereco}
                                        placeholder="Insira o endereço"
                                        required="required"
                                        onChange={e => setEndereco(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="municipio">Município</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="municipio"
                                        value={municipio}
                                        placeholder="Insira o município"
                                        required="required"
                                        onChange={e => setMunicipio(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario_funcionario">Estado</label>
                                    <select className="form-control" id="estado" value={estado} required="required"
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
                                <div className="form-group">
                                    <label htmlFor="cep">CEP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cep"
                                        value={cep}
                                        placeholder="Insira o CEP"
                                        required="required"
                                        onChange={e => setCep(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ponto_de_referencia">Ponto de Referência</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ponto_de_referencia"
                                        value={pontoDeReferencia}
                                        placeholder="Insira o ponto de referência"
                                        required="required"
                                        onChange={e => setPontoDeReferencia(e.target.value)}
                                    />
                                </div>
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
