import React from 'react'

function Die(props) {

    function styles(isHeld){
        return {
            backgroundColor: isHeld ? "white" : "rgba(252, 164, 82, 0.5)",
            // border: isHeld && "solid 2px skyblue",
            borderRadius: isHeld && "20px",
        }
    }
    // const styles(isHeld) = {
    //     backgroundColor: isHeld ? "aqua" : "white"
    // }
    function handleClick(event){
        // console.log("clicked")
        props.holdDice(event.target.id)

    }
  return (
    <div className='Die'>
        {
            props.arrayOfObject.map( (item, key) => 
                <div 
                style={styles(item.isHeld)} 
                className='item' 
                key={key}
                id={key}
                onClick={handleClick}
                >
                    {item.value}
                </div>
            )
        }
    </div>
  )
}

export default Die