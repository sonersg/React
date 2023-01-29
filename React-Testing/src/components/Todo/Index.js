import React from "react";

let arr = ["item 1", "item 2", "item 3"];

function Todo() {
  const [text, settext] = React.useState("");
  const [items, setitems] = React.useState(arr);

  return (
    <div>
      <label>
        text
        <input value={text} onChange={e => settext(e.target.value)} />
      </label>
      <button onClick={() => setitems(prev => [...prev, text])}>Add</button>

      {items.map((item, key) => (
        <h3 key={key}>{item}</h3>
      ))}
    </div>
  );
}

export default Todo;
