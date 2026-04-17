import React, { useEffect, useState, useRef } from "react";
import "./style.css";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [jogada, setJogada] = useState("");
  const characterRef = useRef(null);

  // ===== TEMA =====
  useEffect(() => {
    try {
      const temaSalvo = localStorage.getItem("tema");
      if (temaSalvo === "dark") {
        setTemaEscuro(true);
        document.body.classList.add("dark");
      }
    } catch (e) {
      console.log("localStorage não disponível");
    }
  }, []);

  const alternarTema = () => {
    const novoTema = !temaEscuro;
    setTemaEscuro(novoTema);

    if (novoTema) {
      document.body.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  };

  // ===== JOGO PEDRA PAPEL TESOURA =====
  const play = (choice) => {
    setJogada(choice);
  };

  // ===== DINOSSAURO =====
  const jump = () => {
    const character = characterRef.current;
    if (!character) return;

    character.classList.add("jump");

    setTimeout(() => {
      character.classList.remove("jump");
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = () => jump();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1>Meu App React 🚀</h1>

      {/* BOTÃO TEMA */}
      <button onClick={alternarTema}>
        {temaEscuro ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
      </button>

      {/* JOGO */}
      <div>
        <h2>Pedra, Papel ou Tesoura</h2>
        <button onClick={() => play("pedra")}>Pedra</button>
        <button onClick={() => play("papel")}>Papel</button>
        <button onClick={() => play("tesoura")}>Tesoura</button>

        {jogada && <p>Sua jogada: {jogada}</p>}
      </div>

      {/* JOGO DINOSSAURO */}
      <div className="game-board">
        <div className="pipe"></div>
        <div ref={characterRef} className="character"></div>
      </div>

      <p>Pressione qualquer tecla para pular 🦖</p>
    </div>
  );
}

export default App;
