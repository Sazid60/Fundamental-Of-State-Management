import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const asyncIncrement = () => {
    setTimeout(() => {

      // using callback
      setCount((prevCount) => prevCount + 1);

    }, 3000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={asyncIncrement}>Async Increment</button>
    </div>
  );
}

export default App;
