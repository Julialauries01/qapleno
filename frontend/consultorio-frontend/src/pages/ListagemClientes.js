import React, { useEffect, useState } from 'react';
import clienteService from '../services/clienteService';
import { Link } from 'react-router-dom';

const ListagemClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    clienteService.getClientes().then(setClientes);
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <Link to="/clientes/novo">Inserir Cliente</Link>
      <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>WhatsApp</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.cpf}>
              <td>{cliente.cpf}</td>
              <td>{cliente.nome}</td>
              <td>
                <a href={`https://api.whatsapp.com/send?phone=55${cliente.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  {cliente.whatsapp}
                </a>
              </td>
              <td>
                <Link to={`/clientes/${cliente.cpf}/editar`}>Editar</Link>
                <button onClick={() => clienteService.deletarCliente(cliente.cpf)}>Excluir</button>
                <Link to={`/clientes/${cliente.cpf}/agendamentos`}>Agendar Consulta</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemClientes;
