import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev - 1)}>Azalt</button>
      <button onClick={() => setCount(prev => prev + 1)}>Artır</button>
    </div>
  );
}

export default Counter;
