import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="container">
          <div className="text-section">
            <h1>ANDRÉS EDUARDO GARCÍA</h1>
            <ChangingText />
          </div>
          <div className="image-section">
            <img src="tu-imagen.jpg" alt="Mi Imagen" className="profile-image" />
          </div>
        </div>
      </header>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

function ChangingText() {
  const [word, setWord] = useState('seguras');

  useEffect(() => {
    const words = ['seguras', 'creativas', 'innovadoras']; 
    const interval = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        return words[(currentIndex + 1) % words.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>Me gusta crear experiencias {word}</p>
  );
}

export default App;

