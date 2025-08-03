import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    alert("Hello! Static Message: Keep learning 😊");
  };

  const increaseAndSayHello = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  const handlePress = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={increaseAndSayHello}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>

      <br /><br />
      <button onClick={handlePress}>Click on me</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
