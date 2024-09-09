import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListagemClientes from './pages/ListagemClientes';
import InserirCliente from './pages/InserirCliente';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/clientes" element={<ListagemClientes />} />
          <Route path="/clientes/novo" element={<InserirCliente />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
