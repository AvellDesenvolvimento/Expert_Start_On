import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseClient'; // Certifique-se de que o caminho está correto

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      console.log("Token gerado:", idToken);

      // Aqui enviamos para o nosso backend que você já configurou
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      console.log("Resposta do servidor:", data);
      
      alert(`Login realizado com sucesso! Bem-vindo: ${user.email}`);

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