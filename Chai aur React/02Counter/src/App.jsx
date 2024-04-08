import { useState } from "react";

// let counter = 0;

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter >= 0 && counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter >= 1 && counter <= 20) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;