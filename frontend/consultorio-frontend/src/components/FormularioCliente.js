import React, { useState } from 'react';

const FormularioCliente = ({ cliente, onSave }) => {
  const [form, setForm] = useState({
    cpf: cliente?.cpf || '',
    nome: cliente?.nome || '',
    dataNascimento: cliente?.dataNascimento || '',
    endereco: cliente?.endereco || '',
    whatsapp: cliente?.whatsapp || '',
    email: cliente?.email || ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>CPF:</label>
      <input type="text" name="cpf" value={form.cpf} onChange={handleChange} required />
      
      <label>Nome:</label>
      <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
      
      <label>Data de Nascimento:</label>
      <input type="date" name="dataNascimento" value={form.dataNascimento} onChange={handleChange} required />
      
      <label>Endereço:</label>
      <input type="text" name="endereco" value={form.endereco} onChange={handleChange} />
      
      <label>WhatsApp:</label>
      <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} />
      
      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormularioCliente;
