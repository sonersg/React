import { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function allStorage(){
  let values = [],
  keys = Object.keys(localStorage),
  i = 0;

  while( i < keys.length ){
    values.push( localStorage.getItem( keys[i] ) )
    i++;
  }
  return values;
}

function App() {
  const [task, setTask] = useState(allStorage);

  return (
    <div className='App'>
      < Header />
      < Form task={task} setTask={setTask} allStorage={allStorage} />
      < List task={task} setTask={setTask} allStorage={allStorage} />
    </div>
  )
}

export default App





























// import { useState, useEffect } from 'react';
// import "./App.css";

// function allStorage() {

//   var values = [],
//   keys = Object.keys(localStorage),
//   i = keys.length;
      
//   while ( i-- ) {
//     values.push( localStorage.getItem(keys[i]) );
//   }
//   return values;
// }

// function App() {

//   const [form, setForm] = useState(allStorage);
//   const [val, setVal] = useState("");
  
//   useEffect( () => {

//     localStorage.clear();
//     form.map( (task, index) => localStorage.setItem(index, task) )
//     console.log("form güncellendi")

//   }, [form]);

//   const clearLocal = () => {
//     localStorage.clear();
//     setForm(allStorage);
//   }

//   const clearItem = (e) => {
    
//     // console.log(e.target.innerText)
//     localStorage.removeItem(e.target.innerText);
//     setForm(allStorage);
//   }

//   const onSubmit = (e) => {

//     e.preventDefault();
//     if(val === ""){
//       return false;
//     }
//     setForm([...form, val]);

//     // clear the input
//     setVal("");
//   }
//   // localStorage.clear();



//   return (
// 	<div className='App'>

//     <h1>React Todo App</h1>
  
//     <h1>Hopefully with Localstorage</h1>

//     <form onSubmit={onSubmit} className='Form'>
//       <div>
//       <button onClick={clearLocal} >Clear All</button>
//         <input 
//         type="text"
//         placeholder='Enter a task...'
//         onChange={event => setVal(event.target.value)}
//         value={val}
//         />
//         <button>Add</button>
//       </div>
//     </form>

//     <div className='List'>
//       {form.map((task, key) => 
//       <div key={key} className="task">
//         <span>{task}</span>
//         <button onClick={clearItem} >{key}</button>
//       </div>)}
//     </div>

//   </div>
//   )
// }

// export default App