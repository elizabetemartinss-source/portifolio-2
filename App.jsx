import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#jogo">Jogo</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

function Sobre() {
  return (
    <section id="sobre">
      <h2>Sobre mim</h2>
      <p>Sou desenvolvedora em aprendizado criando projetos com React 🚀</p>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="card">
        <h3>Jogo Pedra Papel Tesoura</h3>
        <p>Projeto simples em React</p>
      </div>
    </section>
  );
}

function DinoGame() {
  const characterRef = React.useRef(null);

  const jump = () => {
    const character = characterRef.current;
    if (!character) return;

    character.classList.add("jump");
    setTimeout(() => {
      character.classList.remove("jump");
    }, 500);
  };

  React.useEffect(() => {
    const handleKeyDown = () => jump();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="jogo">
      <h2>Jogo do Dinossauro 🦖</h2>
      <div className="game-board">
        <div className="pipe"></div>
        <div ref={characterRef} className="character"></div>
      </div>
      <p>Pressione qualquer tecla para pular</p>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Email: seuemail@email.com</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 - Meu Portfólio</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Projetos />
      <DinoGame />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
