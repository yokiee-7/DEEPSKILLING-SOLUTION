import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const result = amount * 80;
      alert(`Converting to Euro Amount is ${result}`);
    } else {
      alert('Unsupported currency');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <br />

        <label>Currency: </label>
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />

        <br />

        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
