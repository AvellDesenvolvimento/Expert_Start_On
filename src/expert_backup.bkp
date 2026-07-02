import React from 'react';
import ThemeToggle from './themeToggle';
import { auth } from './firebaseClient';

const Expert = () => {
  
  // Função para deslogar do Firebase e voltar para o Login
  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.href = '/'; 
    }).catch((error) => {
      console.error("Erro ao sair:", error);
    });
  };

  return (
    <div className="expert-layout">
      {/* Botão de Tema no canto superior direito */}
      <ThemeToggle />

      {/* Menu Lateral */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Sistema de Automação</h2>
          <p>Expert</p>
        </div>
        
        <nav className="sidebar-menu">
          <button className="menu-item active">🏠 Dashboard</button>
          <button className="menu-item">👥 Clientes</button>
          <button className="menu-item">📊 Relatórios</button>
          <button className="menu-item">⚙️ Configurações</button>
        </nav>

        <div className="sidebar-footer">
          <button className="menu-item logout-btn" onClick={handleLogout}>
            🚪 Sair do Sistema
          </button>
        </div>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="main-content">
        <header className="topbar">
          <h3>Visão Geral</h3>
          <div className="user-profile">
            <span>Amaury</span>
            <div className="avatar">A</div>
          </div>
        </header>

        <div className="content-area">
          <div className="welcome-card">
            <h2>Desenvolvimento</h2>
            <p style={{ marginTop: '10px', color: 'var(--text-color)' }}>
              Seu login foi validado com sucesso e o ambiente escuro/claro está funcionando.
              Selecione uma opção no menu lateral para começar a configurar os módulos do sistema.
            </p>
          </div>
          
          {/* Adicionar Cards */}
        </div>
      </main>
    </div>
  );
};

export default Expert;