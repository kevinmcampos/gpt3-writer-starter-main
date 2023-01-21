import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Playground</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Gerador de conteúdos da DICE</h1>
          </div>
          <div className="header-subtitle">
            <h2>Escolha o tipo de conteúdo e o título e deixe a mágica acontecer ✨</h2>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://github.com/kevinmcampos"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <p>created by Kevin</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
