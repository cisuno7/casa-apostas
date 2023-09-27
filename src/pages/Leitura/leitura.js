import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import './leituralist.css';
function PontoList() {
    const [pontos, setPontos] = useState([]);

    useEffect(() => {
        async function fetchPontos() {
            try {
                const response = await api.get('/pontos');
                console.log("Dados dos pontos:", response.data); 
                setPontos(response.data);
            } catch (error) {
                console.error('Erro ao obter pontos:', error);
            }
        }

        fetchPontos();
    }, []);

    if (!pontos.length) {
        return <p>Nenhum ponto disponível.</p>;
    }
    return (
        <div className="ponto-list">
            {pontos.map(ponto => (
                <div key={ponto.id} className="ponto-item">
                    <div className="ponto-title">
                        {ponto.nomeFantasia} ({ponto.nomeClinete})
                    </div>
                    <div className="ponto-detail">
                        <span className="ponto-icon"></span> {ponto.endereco}, {ponto.municipio} - {ponto.estado}
                    </div>
                    <div className="ponto-detail">
                        CEP: {ponto.cep}
                    </div>
                    <div className="ponto-detail">
                        Ponto de Referência: {ponto.pontoDeReferencia}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PontoList;
