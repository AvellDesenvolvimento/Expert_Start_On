import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseClient"; 
import ThemeToggle from "./themeToggle"; 

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 1. Abre a janela pop-up do Google (sem recarregar a página!)
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // 2. Pega o token seguro
      const idToken = await user.getIdToken();
      
      // 3. Envia direto para o seu servidor no Render
      const response = await fetch('https://start-on.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });
      
      const data = await response.json();
      
      // 4. Se o Render aprovar, manda pro painel
      if (response.ok) {
         console.log("Login efetuado com sucesso:", data);
         window.location.href = '/start'; 
      } else {
         // Se o Render recusar (ex: email não autorizado)
         console.error("Backend recusou o login:", data);
         setError("Acesso negado pelo servidor.");
         setLoading(false);
      }
      
    } catch (err) {
      console.error("Erro durante o processo de login:", err);
      setError("Falha ao autenticar com o Google.");
      setLoading(false);
    }
  };

  return (
    <>
      <ThemeToggle />
      <div className="login-card">
        <h1 className="login-title">Bem-vindo(a)</h1>
        <p className="login-subtitle">Acesso ao sistema Start_On</p>

        {error && <div className="error-message">{error}</div>}
        
        <button 
          className="google-btn"
          onClick={handleLogin} 
          disabled={loading}
        >
          {!loading && (
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          )}
          {loading ? "Processando..." : "Logar com Google"}
        </button>
      </div>
    </>
  );
};

export default Login;