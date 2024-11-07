import React from 'react';
import './App.css';

function TokenDisplay({ tokens, tokensPerRow, color }) {
  return (
    <div
      className={`token-row ${color}`}
      
    >
      {tokens.map((token, index) => (
        <span
          key={index}
          className="token"
          style={{
            marginBottom: '10px', 
            flexBasis: `calc(${100 / tokensPerRow}%  - 10px)`, 
          }}
        >
          {token}
        </span>
      ))}
    </div>
  );
}

export default TokenDisplay;
