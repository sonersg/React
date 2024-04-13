import React from 'react'



function List( { task, setTask, allStorage } ) {

  function deleteTask(event){
    localStorage.removeItem(event.target.innerText);
    setTask(allStorage);
  }
  return (
    <div className='List'>
      {
        task.map( (item, index) => 
        <div key={index} className="task">
          <span>{item}</span>
          <button onClick={deleteTask}>{index}</button>
        </div> )
      }
    </div>
  )
}

export default List