import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroRotas(props) {
    const [responsavel, setResponsavel] = useState(0);
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [funcionarios, setFuncionarios] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        listarFuncionarios().then(response => {
            setFuncionarios(response.data)
        });

    }, [])

    async function listarFuncionarios() {
        return await api.get('/funcionario/listar')
    }
    function setFuncionarioEscolhido(idFuncionario) {
        const funci = funcionarios.find(e => {
            if(e.id === idFuncionario){
                return e;
            }
        })
        setResponsavel(funci);
    }

    function handleSubmit(e) {
        console.log(responsavel)
        e.preventDefault();
        const payload = {
            'responsavel': responsavel,
            'cidade': cidade,
            'estado': estado,
            'id' : id
        };

        api.post('/rotas/cadastrar', payload).then(response => {
            if (response.status === 200) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Cadastro de rota com sucesso!',
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
                                    <label htmlFor="responsavel">Nome do Responsável</label>
                                    <select id='responsavel' onChange={(e)=> setFuncionarioEscolhido(parseInt(e.target.value))} className="form-control">
                                        <option value="" disabled selected>Selecione um funcionário</option>
                                        {
                                            funcionarios.map(item => {
                                                return <option className="form-control" value={item.id} id={item.id}>{item.nome} ({item.funcao})</option>
                                            })
                                        }
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cidade"
                                        placeholder="Insira a cidade"
                                        required="required"
                                        value={cidade}
                                        onChange={e => setCidade(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <select className="form-control" id="estado" required="required"
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
