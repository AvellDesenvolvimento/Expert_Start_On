import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Expert from './expert';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota raiz abre o Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota /painel abre o seu expert.jsx */}
        <Route path="/painel" element={<Expert />} />
      </Routes>
    </Router>
  );
}

export default App;