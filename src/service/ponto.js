import axios from 'axios';

const API_URL = 'http://149.100.154.172:8080/pontos'; 

const getAllPontos = () => {
  return axios.get(`${API_URL}`);
};

const getPontoById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createPonto = (ponto) => {
  return axios.post(`${API_URL}/create`, ponto);
};

const updatePonto = (ponto) => {
  return axios.put(`${API_URL}/update`, ponto);
};

const deletePonto = (id) => {
  return axios.delete(`${API_URL}/ponto/${id}`);
};

export default {
  getAllPontos,
  getPontoById,
  createPonto,
  updatePonto,
  deletePonto,
};
