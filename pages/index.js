import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';


const Home = () => {

  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }


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
          <div className="prompt-container">
            <textarea 
              placeholder="Escreva aqui" 
              className="prompt-box" 
              value={userInput}
              onChange={onUserChangedText}
            />
          </div>
          <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
          </div>
          {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Output</h3>
              </div>
            </div>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
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
