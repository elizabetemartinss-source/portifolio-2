import React, { useState, useEffect } from "react";
import "./jogo.css";

function JogoDaVelhaAvancado() {
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("Sua vez (X)");
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });

  const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  // =============================
  // CARREGAR PLACAR SALVO
  // =============================
  useEffect(() => {
    const saved = localStorage.getItem("placar");
    if (saved) setScore(JSON.parse(saved));
  }, []);

  // =============================
  // SALVAR PLACAR
  // =============================
  useEffect(() => {
    localStorage.setItem("placar", JSON.stringify(score));
  }, [score]);

  // =============================
  // VERIFICAR VENCEDOR
  // =============================
  const checkWinner = (state, player) => {
    return winConditions.some(condition =>
      condition.every(index => state[index] === player)
    );
  };

  // =============================
  // IA (jogada automática simples)
  // =============================
  const iaMove = (state) => {
    const livres = state
      .map((v, i) => (v === "" ? i : null))
      .filter(v => v !== null);

    return livres[Math.floor(Math.random() * livres.length)];
  };

  // =============================
  // JOGADA DO JOGADOR
  // =============================
  const handleClick = (index) => {
    if (gameState[index] !== "" || checkWinner(gameState, "X") || checkWinner(gameState, "O")) return;

    const newState = [...gameState];
    newState[index] = "X";
    setGameState(newState);

    if (checkWinner(newState, "X")) {
      setStatus("Você venceu! 🎉");
      setScore(prev => ({ ...prev, X: prev.X + 1 }));
      return;
    }

    if (!newState.includes("")) {
      setStatus("Empate! 🤝");
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }));
      return;
    }

    setStatus("IA jogando...");

    // IA joga depois de 500ms
    setTimeout(() => {
      const move = iaMove(newState);
      newState[move] = "O";

      setGameState([...newState]);

      if (checkWinner(newState, "O")) {
        setStatus("IA venceu 😈");
        setScore(prev => ({ ...prev, O: prev.O + 1 }));
      } else if (!newState.includes("")) {
        setStatus("Empate! 🤝");
        setScore(prev => ({ ...prev, draw: prev.draw + 1 }));
      } else {
        setStatus("Sua vez (X)");
      }
    }, 500);
  };

  // =============================
  // RESET
  // =============================
  const resetGame = () => {
    setGameState(Array(9).fill(""));
    setStatus("Sua vez (X)");
  };

  const resetScore = () => {
    const clean = { X: 0, O: 0, draw: 0 };
    setScore(clean);
    localStorage.setItem("placar", JSON.stringify(clean));
  };

  // =============================
  // JSX
  // =============================
  return (
    <div className="container">
      <h2>Jogo da Velha 🎮</h2>

      <div className="score">
        X: {score.X} | IA: {score.O} | Empates: {score.draw}
      </div>

      <div id="status">{status}</div>

      <div className="board">
        {gameState.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? "played" : ""}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <button onClick={resetGame}>Reiniciar Jogo</button>
      <button onClick={resetScore}>Zerar Placar</button>

      <button className="btn-gamer" onClick={() => window.history.back()}>
        <span>←</span> VOLTAR
      </button>
    </div>
  );
}

export default JogoDaVelhaAvancado;
