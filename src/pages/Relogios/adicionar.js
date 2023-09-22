import PageTitle from "../../components/pagetitle";
import {useEffect, useState} from "react";
import api from "../../service/api";
import Swal from "sweetalert2";
import React from "react";
import {useParams} from "react-router-dom";

export default function CadastroRelogio(props) {
    const [relogioMecanicoEntrada, setRelogioMecanicoEntrada] = useState('');
    const [relogioMecanicoSaida, setRelogioMecanicoSaida] = useState('');
    const [relogioEletronicoEntrada, setRelogioEletronicoEntrada] = useState('');
    const [relogioEletronicoSaida, setRelogioEletronicoSaida] = useState('');
    const [manual, setManual] = useState('');
    const {id} = useParams();

    useEffect(() => {
        buscarId(id);

    }, [])

    async function buscarId(id) {
        await api.get('/pontos/' + id).then(response => {
            setRelogioMecanicoEntrada(response.data.relogioMecanicoEntrada);
            setRelogioMecanicoSaida(response.data.relogioMecanicoSaida);
            setRelogioEletronicoEntrada(response.data.relogioEletronicoEntrada);
            setRelogioEletronicoSaida(response.data.relogioEletronicoSaida);
            setManual(response.data.manual);
            console.log(response.data.identificador)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {

            'relogioMecanicoEntrada': relogioMecanicoEntrada,
            'relogioMecanicoSaida': relogioMecanicoSaida,
            'relogioEletronicoEntrada' : relogioEletronicoEntrada,
            'relogioEletronicoSaida': relogioEletronicoSaida,
            'manual': manual,

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
            <PageTitle title="Relógios" />
            <div className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Cadastre um novo Relógio</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="relogioMecanicoEntrada">Relógio Mecânico Entrada</label>
                                    <input type="text" className="form-control" id="relogioMecanicoEntrada" value={relogioMecanicoEntrada}
                                           onChange={event => setRelogioMecanicoEntrada(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="relogioMecanicoSaida">Relógio Mecânico Saída</label>
                                    <input type="text" className="form-control" id="relogioMecanicoSaida" value={relogioMecanicoSaida}
                                           onChange={event => setRelogioMecanicoSaida(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="relogioEletronicoEntrada">Relógio Eletrônico Entrada</label>
                                    <input type="text" className="form-control" id="relogioEletronicoEntrada" value={relogioEletronicoEntrada}
                                           onChange={event => setRelogioEletronicoEntrada(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="relogioEletronicoSaida">Relógio Eletrônico Saída</label>
                                    <input type="text" className="form-control" id="relogioEletronicoSaida" value={relogioEletronicoSaida}
                                           onChange={event => setRelogioEletronicoSaida(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="relogioManual">Relógio Manual</label>
                                    <input type="text" className="form-control" id="relogioManual" value={manual}
                                           onChange={event => setManual(event.target.value)} />
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
