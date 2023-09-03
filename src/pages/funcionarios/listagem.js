import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";

export default function ListagemFuncionarios(){
    const [funcionarios, setFuncionarios] = useState([]);
    useEffect(() => {
        api.get('/funcionario/listar').then(response => {
            setFuncionarios(response.data);
        });
    }, []);
    function formataCPF(v){
        v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                 //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        return v
    }
    return (
        <>
            <PageTitle title="Funcionários" />
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lista de funcionários</h3>
                        </div>
                        <div className={'card-body'}>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Nome</th>
                                    <th>Função</th>
                                    <th>CPF</th>
                                    <th style={{width: 40}}>Açoes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {funcionarios.map(funcionario => (
                                    <tr key={funcionario.id}>
                                        <td>{funcionario.id}</td>
                                        <td>{funcionario.nome}</td>
                                        <td>{funcionario.funcao}</td>
                                        <td>{formataCPF(funcionario.cpf)}</td>
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
