import { useState } from 'react'
import './App.css'

function App() {
  const [valorBRL, setValorBRL] = useState("");
  const [valorUSD, setValorUSD] = useState(null);

  const taxaCambio = 5.10; 

  const converter = () => {
    const brl = parseFloat(valorBRL.replace(",", "."));
    if (!isNaN(brl)) {
      const usd = brl / taxaCambio;
      setValorUSD(usd.toFixed(2));
    } else {
      setValorUSD(null);
    }
  };

  return (

    
    <>
       <div style={estilo.container}>
      <h2>Conversor BRL → USD</h2>
      <input
        type="text"
        placeholder="Digite o valor em R$"
        value={valorBRL}
        onChange={(e) => setValorBRL(e.target.value)}
        style={estilo.input}
      />
      <button onClick={converter} style={estilo.botao}>
        Converter
      </button>
    
      {valorUSD !== null && (
        <p>Valor em dólares: <strong>US$ {valorUSD}</strong></p>
      )}
    </div>
        
    </>
  )
}
const estilo = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "50px",
    boxShadow: "0 0 100px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "80px",
    border: "1px solid #ccc",
  },
  botao: {
    padding: "10px 20px",
    backgroundColor: "#44A246",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};


export default App
