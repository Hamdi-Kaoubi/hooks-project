import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  function decrementCount() {
    setCount(count-1)
  }
  function incrementCount() {
    setCount(count+1)
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
