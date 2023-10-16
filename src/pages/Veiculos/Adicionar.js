import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroVeiculos(props) {
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [kms, setKms] = useState('');
    const {id} = useParams();

    useEffect(() => {
        buscarId(id);
    }, [])

    async function buscarId(id){
        await api.get('/veiculos/' + id).then(response => {
            setPlaca(response.data.placa);
            setMarca(response.data.marca);
            setKms(response.data.kms);
            console.log(response.data.identificador)
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            'placa': placa,
            'marca': marca,
            'kms': kms,
            'id' : id

        };
        api.post('/veiculos/cadastrar', payload).then(response => {
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
            <PageTitle title="Veiculos"/>
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Cadastre um novo Veiculo</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome_funcionario">Placa</label>
                                    <input type="text" className="form-control" id="serial" value={placa} required="required"
                                           placeholder="Insira a placa do veiculos"
                                           onChange={event => setPlaca(event.target.value)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpf">Marca</label>
                                    <input type="text" className="form-control" id="marca" value={marca} required="required"
                                           onChange={event => setMarca(event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">KM'S</label>
                                    <textarea className="form-control" id="kms" value={kms} rows="4" required="required"
                                              onChange={event => setKms(event.target.value)}></textarea>
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
