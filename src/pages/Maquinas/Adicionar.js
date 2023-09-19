import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";

export default function CadastroFuncionarios() {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            'nome': nome,
            'username': usuario,
            'cpf': cpf,
            'email': email
        };
        api.post('/funcionario/cadastrar', payload).then(response => {
            if (response.status === 200) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: response.data,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
            window.location.href = "/funcionarios/lista";
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <PageTitle title="Maquinas" />
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
                                    <input type="text" className="form-control" id="nome_funcionario"
                                           placeholder="Insira o serial da Maquina" onChange={event => setNome(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario_funcionario">Tipo de jogo</label>
                                    <select className="form-control" id="nome_funcionario" onChange={event => setNome(event.target.value)}>
        <option value="" disabled selected>Selecione um serial</option>
        <option value="serial1">Serial 1</option>
        <option value="serial2">Serial 2</option>
        <option value="serial3">Serial 3</option>
    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">Identificador</label>
                                    <input type="text" className="form-control" id="cpf"
                                           onChange={event => setCpf(event.target.value)} />
                                </div>
                                <div className="form-group">
    <label htmlFor="email">Informações</label>
    <textarea className="form-control" id="email" rows="4" onChange={event => setEmail(event.target.value)}></textarea>
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
