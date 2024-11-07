import React, { useState } from 'react';
import './App.css';
function App() {
  const [numBlueTokens, setNumBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('A');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(5);
  const [numRedTokens, setNumRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('B');
  const [redTokensPerRow, setRedTokensPerRow] = useState(5);
  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const handleGenerate = () => {
    const blueTokens = Array.from({ length: numBlueTokens }, (_, i) => `${bluePrefix}${i + 1}`);
    const redTokens = Array.from({ length: numRedTokens }, (_, i) => `${redPrefix}${i + 1}`);
    setTokens({ blue: blueTokens, red: redTokens });
  };


  const handleClear = () => {
    setNumBlueTokens(0);
    setBluePrefix('A');
    setBlueTokensPerRow(5);
    setNumRedTokens(0);
    setRedPrefix('B');
    setRedTokensPerRow(5);
    setTokens({ blue: [], red: [] });
  };

  return (
    <div className="App">
      <h1>Token Generator</h1>
      <form className="form">
        <div className="form-group">
          <label>Number of Blue Tokens:</label>
          <input
            type="number"
            value={numBlueTokens}
            onChange={(e) => setNumBlueTokens(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>Prefix for Blue Tokens:</label>
          <input
            type="text"
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Blue Tokens per Row:</label>
          <input
            type="number"
            value={blueTokensPerRow}
            onChange={(e) => setBlueTokensPerRow(e.target.value)}
           
          />
        </div>
        <div className="form-group">
          <label>Number of Red Tokens:</label>
          <input
            type="number"
            value={numRedTokens}
            onChange={(e) => setNumRedTokens(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>Prefix for Red Tokens:</label>
          <input
            type="text"
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Red Tokens per Row:</label>
          <input
            type="number"
            value={redTokensPerRow}
            onChange={(e) => setRedTokensPerRow(e.target.value)}
            
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleGenerate}>Generate</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
      </div>
  );
}

export default App;