import api from './api';

const clienteService = {
  getClientes: () => api.get('/clientes').then(res => res.data),
  getCliente: (cpf) => api.get(`/clientes/${cpf}`).then(res => res.data),
  salvarCliente: (cliente) => api.post('/clientes', cliente),
  atualizarCliente: (cpf, cliente) => api.put(`/clientes/${cpf}`, cliente),
  deletarCliente: (cpf) => api.delete(`/clientes/${cpf}`)
};

export default clienteService;
