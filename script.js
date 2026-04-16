import React, { useEffect, useState, useRef } from "react";

function App() {
  // =========================
  // TEMA
  // =========================
  const [temaEscuro, setTemaEscuro] = useState(false);

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

  // =========================
  // JOGO (animação clique)
  // =========================
  const [jogada, setJogada] = useState(null);

  const play = (choice) => {
    setJogada(choice);
  };

  // =========================
  // JOGO DINOSSAURO
  // =========================
  const characterRef = useRef(null);

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

  // =========================
  // JSX
  // =========================
  return (
    <div>
      {/* BOTÃO TEMA */}
      <button onClick={alternarTema}>
        {temaEscuro ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
      </button>

      {/* JOGO ESCOLHA */}
      <div>
        <button
          className={`choice ${jogada === "pedra" ? "played" : ""}`}
          onClick={() => play("pedra")}
        >
          Pedra
        </button>

        <button
          className={`choice ${jogada === "papel" ? "played" : ""}`}
          onClick={() => play("papel")}
        >
          Papel
        </button>

        <button
          className={`choice ${jogada === "tesoura" ? "played" : ""}`}
          onClick={() => play("tesoura")}
        >
          Tesoura
        </button>
      </div>

      {/* JOGO DINOSSAURO */}
      <div className="game-board">
        <div className="pipe"></div>
        <div ref={characterRef} className="character"></div>
      </div>
    </div>
  );
}

export default App;
