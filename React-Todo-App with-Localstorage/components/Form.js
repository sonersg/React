import { useState, useEffect } from 'react'

function Form( { task, setTask, allStorage } ) {
    const [val, setVal] = useState("");

    useEffect(() => {
      localStorage.clear();
      task.map( (item, index) => localStorage.setItem(index, item) );
    }, [task])

    const addItem = () => {
      setTask([...task, val]);
      setVal("");
    }
    const clearAll = () => {
      localStorage.clear();
      setTask(allStorage);
    }

  return (
    <div>
        <button onClick={clearAll}>Clear All</button>
        <input
        type="text"
        placeholder="Enter a task..."
        value={val}
        onChange={e => setVal(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default Form