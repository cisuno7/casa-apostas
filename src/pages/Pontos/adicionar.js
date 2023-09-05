import React, { useState, useEffect } from 'react';
import PageTitle from "../../components/pagetitle";
import api from "../../service/api";
import Swal from "sweetalert2";

export default function AdicionarPonto() {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [pontoDeReferencia, setPontoDeReferencia] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    
    const pontoData = {
      nomeFantasia,
      cep,
      endereco,
      municipio,
      pontoDeReferencia,
      nomeCliente
    };
    
    try {
      const response = await api.post('/ponto/create', pontoData);
      console.log('Ponto adicionado com sucesso:', response.data);
  
    
      Swal.fire(
        'Sucesso!',
        'Ponto adicionado com sucesso!',
        'success'
      );
    } catch (error) {
      console.error('Houve um erro ao adicionar o ponto:', error);
      Swal.fire(
        'Erro!',
        'Houve um erro ao adicionar o ponto!',
        'error'
      );
    }
  }
  

  return (
    <>
      <PageTitle title="Adicionar Ponto" />
      <div className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Adicionar um novo Ponto</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="nome_cliente">Nome do Cliente</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome_cliente"
                    placeholder="Insira o nome do cliente"
                    onChange={e => setNomeCliente(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nome_fantasia">Nome Fantasia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome_fantasia"
                    placeholder="Insira o nome fantasia"
                    onChange={e => setNomeFantasia(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="endereco"
                    placeholder="Insira o endereço"
                    onChange={e => setEndereco(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="municipio">Município</label>
                  <input
                    type="text"
                    className="form-control"
                    id="municipio"
                    placeholder="Insira o município"
                    onChange={e => setMunicipio(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="Insira o CEP"
                    onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ponto_de_referencia">Ponto de Referência</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ponto_de_referencia"
                    placeholder="Insira o ponto de referência"
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
