import { useState, useEffect } from "react";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, provider } from "./firebaseClient"; 

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Captura o resultado do redirecionamento
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setLoading(true);
          const user = result.user;
          
          // Envia o token para o seu Backend
          user.getIdToken().then(idToken => {
            // URL ajustada para a sua API no Render
            fetch('https://start-on.onrender.com/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ idToken })
            })
            .then(res => res.json())
            .then(data => {
               console.log("Login efetuado com sucesso:", data);
               setLoading(false);
               
               // REDIRECIONAMENTO ATIVADO:
               // Mude '/painel' para o nome exato da rota que você quer abrir após logar
               window.location.href = '/painel'; 
            })
            .catch(err => {
                console.error("Erro de comunicação com o backend:", err);
                setError("Falha ao validar login no servidor.");
                setLoading(false);
            });
          });
        }
      })
      .catch((error) => {
        console.error("Erro no redirecionamento do Firebase:", error);
        setError("Erro ao autenticar com Google.");
        setLoading(false);
      });
  }, []);

  // 2. Função de disparo
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error("Erro ao iniciar redirecionamento:", err);
      setError("Não foi possível iniciar o login.");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <button 
        onClick={handleLogin} 
        disabled={loading}
        style={{ padding: "10px 20px", cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Processando..." : "Logar com Google"}
      </button>
    </div>
  );
};

export default Login;