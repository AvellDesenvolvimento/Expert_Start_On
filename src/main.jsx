import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './expert.css';

// Força o modo dark ao iniciar
document.body.classList.add('dark-mode');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);