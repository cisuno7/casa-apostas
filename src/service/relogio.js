import axios from 'axios';

const API_URL = "http://149.100.154.172:8080/relogio"; 

const getAllRelogios = () => {
    return axios.get(`${API_URL}/relogio`);
}

const getRelogioById = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

const createRelogio = (relogio) => {
    return axios.post(`${API_URL}/create`, relogio);
}

const updateRelogio = (relogio) => {
    return axios.put(`${API_URL}/update`, relogio);
}

const deleteRelogio = (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
}

export default {
    getAllRelogios,
    getRelogioById,
    createRelogio,
    updateRelogio,
    deleteRelogio
}
