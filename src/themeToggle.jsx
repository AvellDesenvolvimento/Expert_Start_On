import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      🌓 Selecione o Thema
    </button>
  );
};

export default ThemeToggle;