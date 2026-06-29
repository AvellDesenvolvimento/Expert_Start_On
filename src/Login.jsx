import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseClient';

// Adicionamos { onLogin } aqui para receber a função do App.jsx
const Login = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      // Aqui enviamos para o seu backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        // Chamamos a função onLogin passando os dados do usuário que o backend devolveu
        onLogin(data.user);
      } else {
        alert("Erro na autenticação: " + (data.error || "Erro desconhecido"));
      }

    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao logar com Google.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Acesso Start_On</h1>
      <button 
        onClick={handleGoogleLogin}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Entrar com Google
      </button>
    </div>
  );
};

export default Login;