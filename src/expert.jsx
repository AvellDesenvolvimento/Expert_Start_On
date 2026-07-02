import { useState } from 'react';

export default function Expert() {
  // Estado que controla se a barra está aberta (true) ou recolhida (false)
  const [open, setOpen] = useState(true);

  // Lista de menus (facilita para adicionar novos depois)
  const Menus = [
    { title: "Dashboard", icon: "📊" },
    { title: "Produção", icon: "⚙️" },
    { title: "Relatórios", icon: "📄" },
    { title: "Configurações", icon: "🔧" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* BARRA LATERAL (SIDEBAR) */}
      <div 
        className={` ${open ? "w-72" : "w-20"} bg-slate-900 h-screen p-5 pt-8 relative duration-300 shadow-xl`}
      >
        {/* Botão de Toggle (Recolher/Expandir) */}
        <button
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center text-slate-900 font-bold ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          &lt;
        </button>

        {/* Logo / Título da Sidebar */}
        <div className="flex gap-x-4 items-center">
          <div className="min-w-[40px] h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer duration-500">
            S
          </div>
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            Start_On
          </h1>
        </div>

        {/* Itens do Menu */}
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-700 text-gray-300 text-sm items-center gap-x-4 mt-2`}
            >
              <span className="text-2xl block float-left">{Menu.icon}</span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTEÚDO PRINCIPAL DA PÁGINA */}
      <div className="h-screen flex-1 p-7 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-slate-800">Área do Expert</h1>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Bem-vindo ao Start_On!</h2>
          <p className="text-gray-600">
            A barra lateral à esquerda pode ser recolhida para dar mais espaço à visualização dos seus dados. 
            Aqui é onde vamos colocar os gráficos, tabelas de controle e as ferramentas do sistema.
          </p>
        </div>
      </div>

    </div>
  );
}