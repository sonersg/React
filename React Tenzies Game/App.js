import React from "react";
import "./App.css"
import Die from "./components/Die";
import Confetti from 'react-confetti';



function App() {
  const [arrayOfObject, setarrayOfObject] = React.useState(randArray)
  const [tenzies, settenzies] = React.useState(false)
  


  React.useEffect( ()=>{
    const allHeld = arrayOfObject.every( (item)=> item.isHeld)
    const firstValue = arrayOfObject[0].value
    const allSameValue = arrayOfObject.every( (item)=> item.value === firstValue)
    if(allHeld && allSameValue){
      settenzies(true)
      // console.log("Kazandınnnnnnnnnnnnnnnnnnnnnnnnn")
    }

  }, [arrayOfObject] )



  function randArray(){
    const arr = []
    for(let i=0; i<10; i++){
      arr.push( { 
        value: Math.ceil(Math.random()*6),
        isHeld: false
      })
    }
    return arr
  }



  function roll(){
    // setarrayOfObject(randArray)
    if(tenzies){
      settenzies(false)
      setarrayOfObject( randArray() )
    }else{
      setarrayOfObject( oldDice=> oldDice.map( (item)=> {
      return item.isHeld === true ?
        item :
        generateNewDie()
      }))
    }
  }
  


  function  holdDice(id){
    // console.log(id, "kdlak")

    setarrayOfObject( oldArr=> oldArr.map( (item, key)=>{
      // console.log(key)
      return parseInt(id) === parseInt(key) ?
        {
          ...item,
          isHeld: !item.isHeld
        } :
        item
    }))
    if(tenzies){
      settenzies(false)
    }
  }



  function generateNewDie(){
    return { 
      value: Math.ceil(Math.random()*6),
      isHeld: false
    }
  }



  return (
    <main className="App">
      { tenzies && <Confetti className="confetti"/> }
      {/* <Confetti /> */}
      <div className="container">
        <div className="text">
          <h1>Tenzies</h1>
          <p>
          The world's fastest game! Everyone gets ten dice. Someone says, “Go.” Then everyone rolls and rolls as fast as they can until someone gets all their dice on ...
          </p>
        </div>
        <Die arrayOfObject={arrayOfObject} holdDice={holdDice} />
        <button className="roll-btn" onClick={roll} >
          {tenzies ? "New Game" : "ROLL"}
        </button>
      </div>
    </main>
  );
}

export default App;
