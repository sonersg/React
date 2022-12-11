import { useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={ () => setCount( count+1 ) }>Increase</button>
        <button onClick={ () => setCount( count-1 ) }>Decreases</button>
    </div>
  )
}

export default Counter2