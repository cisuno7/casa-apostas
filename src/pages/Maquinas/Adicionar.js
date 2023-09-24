import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroFuncionarios(props) {
    const [identificador, setIdentificador] = useState('');
    const [tipoJogo, setTipoJogo] = useState('');
    const [serial, setSerial] = useState('');
    const [informacoes, setInformacoes] = useState('');
    const {id} = useParams();

    useEffect(() => {
        buscarId(id);

    }, [])

    async function buscarId(id){
        await api.get('/maquinas/' + id).then(response => {
            setIdentificador(response.data.identificador);
            setSerial(response.data.serial);
            setTipoJogo(response.data.tipoJogo);
            setInformacoes(response.data.informacoes);
            console.log(response.data.identificador)
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            'identificador': identificador,
            'tipoJogo': tipoJogo,
            'serial': serial,
            'informacoes': informacoes,
            'id' : id

        };
        api.post('/maquinas/cadastrar', payload).then(response => {
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
            <PageTitle title="Maquinas"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Cadastre uma nova Maquina</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="nome_funcionario">Serial</label>
                                    <input type="text" className="form-control" id="serial" value={serial} required="required"
                                           placeholder="Insira o serial da Maquina"
                                           onChange={event => setSerial(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario_funcionario">Tipo de jogo</label>
                                    <select className="form-control" id="tipoDoJogo" value={tipoJogo} required="required"
                                            onChange={event => setTipoJogo(event.target.value)}>
                                        <option value="" disabled selected>Selecione o tipo do jogo</option>
                                        <option value="serial1">Jogo 1</option>
                                        <option value="serial2">Jogo 2</option>
                                        <option value="serial3">Jogo 3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">Identificador</label>
                                    <input type="text" className="form-control" id="identificador" value={identificador} required="required"
                                           onChange={event => setIdentificador(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Informações</label>
                                    <textarea className="form-control" id="informacoes" value={informacoes} rows="4" required="required"
                                              onChange={event => setInformacoes(event.target.value)}></textarea>
                                </div>

                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
