import { useEffect, useState } from 'react'
import Login from './login'
import './app.css'

function App() {
  // Novo estado para controlar o login
  const [user, setUser] = useState(null)
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    // A chamada para o backend só acontece SE o usuário estiver logado
    if (user) {
      fetch('https://start-on.onrender.com')
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(error => console.error("Erro ao buscar no Render:", error))
    }
  }, [user])

  // SE NÃO HOUVER USUÁRIO, MOSTRA APENAS O LOGIN
  if (!user) {
    return <Login onLogin={setUser} />
  }

  // SE TIVER USUÁRIO, MOSTRA O CONTEÚDO ORIGINAL
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          Bem-vindo, {user.email}
        </h1>
        
        {apiData ? (
          <pre className="bg-black p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
            {JSON.stringify(apiData, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-500 animate-pulse">Consultando servidor...</p>
        )}
      </div>
    </main>
  )
}

export default App