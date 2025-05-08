import React from 'react';
import './Calculadora.css';

function Calculadora() {
  return (
    <div className="calculadora-container">
      <h1>Calculadora Simples</h1>
      <input type="number" placeholder="Digite o primeiro número" />
      <input type="number" placeholder="Digite o segundo número" />
      <div className="botoes">
        <button>Somar</button>
        <button>Subtrair</button>
        <button>Multiplicar</button>
        <button>Dividir</button>
      </div>
      <p><strong>Resultado:</strong></p>
    </div>
  );
}

export default Calculadora;
