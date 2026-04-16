import React, { useState } from "react";
import "./style.css";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <header>
        <h1>Elizabete Martins</h1>

        <div className="container nav-container">
          <nav>
            <ul className="menu">
              <li><a href="#">Início</a></li>
              <li><a href="#sobre">Sobre Mim</a></li>
              <li><a href="#projetos">Meus Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>

          <button onClick={alternarTema} type="button">
            🌙 Tema Escuro
          </button>
        </div>
      </header>

      <main>
        <section id="sobre" className="Container-sobre">
          <div>
            <img src="img/FotoPerfilok.jpg" alt="Foto de perfil" />
            <h2>Sobre Mim</h2>
            <p>
              Sou <strong>Elizabete Alves Martins Carvalho</strong>, estudante de tecnologia com foco em desenvolvimento web, design digital e projetos práticos.
            </p>
          </div>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>

          <div className="projetos-container">
            <article className="card-projetos">
              <h3>Jogo da Velha</h3>
              <img src="img/HTML5.png" alt="HTML5" />
              <p>Jogos em HTML</p>
              <a href="game.html" className="btn-jogo">🎮 Jogar Agora</a>
            </article>

            <article className="card-projetos">
              <h3>Sites com CSS3</h3>
              <img src="img/css.png" alt="CSS3" />
              <p>As informações do seu projeto aqui</p>
              <a href="construcao.html" target="_blank" rel="noreferrer">
                Em Construção
              </a>
            </article>

            <article className="card-projetos">
              <h3>Sites com JS</h3>
              <img src="img/js.png" alt="JavaScript" />
              <p>As informações do seu projeto aqui.</p>
              <a href="construcao.html" target="_blank" rel="noreferrer">
                Em Construção
              </a>
            </article>
          </div>
        </section>

        <section id="contato">
          <h2>Contatos</h2>

          <div className="contato">
            <p>
              <img src="img/logoemail.png" alt="Email" />
              <a href="mailto:elizabetemartinss@gmail.com">
                elizabetemartinss@gmail.com
              </a>
            </p>

            <p>
              <img src="img/logozap.png" alt="Whatsapp" />
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                (86) 994129887
              </a>
            </p>

            <p>
              <img src="img/logoinstagram.png" alt="Instagram" />
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                @Elizabete Devel
              </a>
            </p>

            <p>
              <img src="img/Logo01.jfif" alt="GitHub" />
              <a
                href="https://www.vivaolinux.com.br/comunidades/"
                target="_blank"
                rel="noreferrer"
              >
                Desenvolvimentos de códigos livres
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Portfólio desenvolvido por{" "}
          <strong>Elizabete Alves Martins Carvalho</strong> @ 2026 | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
