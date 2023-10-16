import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import './leituralist.css';

function PontoList() {
    const [pontos, setPontos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPonto, setSelectedPonto] = useState({});
    const [leitura, setLeitura] = useState({});
    const [activeTab, setActiveTab] = useState('pc');

console.log(selectedPonto);

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
    useEffect(() => {
        console.log(showModal); 
    }, [showModal]);
    
    const openModal = (ponto, event) => {
        event.stopPropagation();
        setSelectedPonto(ponto);
        setShowModal(true);
    }

    const closeModal = () => {
        console.log('Close modal called');
        setShowModal(false);
        console.log(showModal);  
    }
    

    if (!pontos.length) {
        return <p>Nenhum ponto disponível.</p>;
    }

    return (
        <div>
          <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'flex' : 'none' }} onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                
    <div className="modal-scroll-container">
    {selectedPonto && (
    <>
     <button className="close-button" onClick={closeModal}>X</button> 
        <h1 className="modal-title">ABRIR PC LEITURA</h1>

        {/* Tabs Headers */}
        <div className="tabs">
            <div
                className={`tab-header ${activeTab === 'pc' ? 'active' : ''}`}
                onClick={() => setActiveTab('pc')}
            >
                PC
            </div>
            <div
                className={`tab-header ${activeTab === 'maqs' ? 'active' : ''}`}
                onClick={() => setActiveTab('maqs')}
            >
                MAQS
            </div>
        </div>

        {/* Tabs Contents */}
        <div className="tab-content">
    {activeTab === 'pc' && (
        <div className="pc-content">
         <div className="checkbox-container">
         <h3>Pontos</h3>
                <div className="checkboxes">
                    <label>
                        <input type="checkbox" name="checkbox1" value="1"/>
                        Leitura
                    </label>
                    <label>
                        <input type="checkbox" name="checkbox2" value="2"/>
                       Retirada
                    </label>
                </div>
         </div>
         <div className="select-container">
            <label>
                <p style={{ fontSize: 'small', color: 'black' }}>Retorno</p>
                <select name="retorno" id="retorno">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
            </label>
        </div>
            <div className="ponto-info">
                {selectedPonto && (
                    <>
                    
                        <p><strong>Nome Fantasia:</strong> {selectedPonto.nomeFantasia}</p>
                        <p><strong>Nome Cliente:</strong> {selectedPonto.nomeClinete}</p>
                       
                    </>
                )}
            </div>
        </div>
    )}
        </div>
    </>
)}

    </div>
</div>

            </div>

            <div className="ponto-list">
                {pontos.map(ponto => (
                   <div key={ponto.id} className="ponto-item" onClick={(event) => openModal(ponto, event)}>
                        <div className="ponto-title">
                            {ponto.nomeFantasia} ({ponto.nomeClinete})
                        </div>
                        <div className="ponto-detail">
                            {ponto.endereco}, {ponto.municipio} - {ponto.estado}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PontoList;
