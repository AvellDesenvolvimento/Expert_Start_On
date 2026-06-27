import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    // Chamada para o seu backend no Render
    fetch('https://start-on.onrender.com')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error("Erro ao buscar no Render:", error))
  }, [])

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          Retorno do Backend
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