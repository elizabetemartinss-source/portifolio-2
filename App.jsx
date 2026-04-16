import React, { useEffect, useState, useRef } from "react";
import "./style.css";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [jogada, setJogada] = useState(null);
  const characterRef = useRef(null);

  // TEMA
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
      setTemaEscuro(true);
      document.body.classList.add("dark");
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

  // JOGO ESCOLHA
  const play = (choice) => {
    setJogada(choice);
  };

  // JOGO DINOSSAURO
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
    <div>
      <button onClick={alternarTema}>
        {temaEscuro ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
      </button>

      <div>
        <button onClick={() => play("pedra")}>Pedra</button>
        <button onClick={() => play("papel")}>Papel</button>
        <button onClick={() => play("tesoura")}>Tesoura</button>
      </div>

      <div className="game-board">
        <div className="pipe"></div>
        <div ref={characterRef} className="character"></div>
      </div>
    </div>
  );
}

export default App;
