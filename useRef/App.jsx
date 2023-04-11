import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// preserves value
// Doesn't trigger re-render
// targets DOM nodes/elements

function App() {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(divRef.current);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRef} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divRef}>Soner</div>
    </div>
  );
}

export default App;
