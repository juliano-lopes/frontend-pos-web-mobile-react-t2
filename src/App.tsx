import { useEffect, useState } from 'react';
import Header from './components/Header';
import androidKotlinImg from './assets/img/acessibilidade-android-kotlin-ai.png';

function App() {
  const [currentDate, setCurrentDate] = useState('');

  const formatCurrentDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return today.toLocaleDateString('pt-BR', options);
  };

  useEffect(() => {
    setCurrentDate(formatCurrentDate());
  }, []);
  return (
    <>
      <Header
        systemName="TCC: apps Acessíveis com Kotlin"
        welcomeMessage="Bem-vindo ao guia prático!"
      />

      <main>
        <section id="sobre" className="container my-5 text-center">
          <h1 className="display-4">Guia Prático para o Desenvolvimento de Aplicações Android Acessíveis com Kotlin</h1>
          <p className="lead">Por: Juliano Lopes da Costa</p>
          <p className="fs-5 text-muted">Hoje é: <span id="current-date">{currentDate}</span></p>
          <div className="text-start mb-4">
            <h2 className="h4">Introdução</h2>
            <p>A ubiquidade dos dispositivos móveis transformou a sociedade, mas também criou barreiras para milhões de pessoas, especialmente aquelas com deficiência que dependem de tecnologias assistivas. Apesar das diretrizes de acessibilidade existentes, há uma notável lacuna entre a teoria e a prática no desenvolvimento de aplicativos.</p>
            <p>Este trabalho busca preencher essa lacuna no ecossistema Android, focado na linguagem Kotlin. Com a rápida evolução das ferramentas de desenvolvimento, é crucial atualizar e disseminar práticas claras para acessibilidade.</p>
            <p className="mt-3">Nossa <strong>questão-problema central</strong> é: Como desenvolvedores podem aplicar, de forma prática e eficiente, os princípios de acessibilidade em aplicações Android modernas usando Kotlin para resolver as barreiras mais comuns para usuários de tecnologias assistivas?</p>
            <p>Para responder a essa questão, este TCC apresenta um guia prático no formato 'problema-solução', detalhando as barreiras mais recorrentes e fornecendo exemplos de código 'antes e depois', acompanhados de explicações técnicas diretas. Nosso objetivo é capacitar a comunidade de desenvolvimento Android a criar aplicativos mais inclusivos e acessíveis.</p>
          </div>
          <img src={androidKotlinImg} className="img-fluid rounded shadow my-4"
            alt="robô verde mascote do Android   segurando o símbolo universal de acessibilidade, com o logotipo do Kotlin abaixo." />
        </section>

        <section id="objetivos" className="container my-5">
          <h2 className="text-center mb-4">Objetivos do Projeto</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Objetivo geral</h3>
                  <p className="card-text">
                    Fornecer um recurso prático e de fácil consulta para a comunidade de desenvolvimento Android, visando fomentar a criação de aplicativos mais inclusivos e acessíveis. </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">O Que Será Feito?</h3>
                  <div className="card-text">
                    <ul>
                      <li>Identificar as 5 a 7 barreiras de acessibilidade mais comuns em apps Android.</li>
                      <li>Desenvolver um protótipo de aplicativo em Kotlin para reproduzir e validar soluções.</li>
                      <li>Estruturar um guia prático com formato "problema-solução".</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Benefícios e Diferenciais</h3>
                  <div className="card-text">
                    <ul>
                      <li>Apresentar exemplos de código claros e comentados.</li>
                      <li>Disponibilizar o guia para capacitação de outros profissionais.</li>
                      <li>Diminuir a lacuna entre teoria e prática na acessibilidade Android.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-dark text-white text-center py-4 mt-5">
        <div className="container-fluid">
          <p>Juliano Lopes da Costa - 2 semestre - Desenvolvimento Web e Mobile</p>
          <p>Email: <a href="mailto:julopeson@gmail.com" className="text-white">julopeson@gmail.com</a></p>
          <p>
            <a href="https://github.com/juliano-lopes" className="text-white mx-2" target="_blank"><i
              className="bi bi-github"></i> GitHub</a> |
            <a href="https://www.linkedin.com/in/julianolopescosta/" className="text-white mx-2" target="_blank"><i
              className="bi bi-linkedin"></i> LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;