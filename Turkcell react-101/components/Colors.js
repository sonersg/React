import React, {useState} from 'react'

function Colors() {

    const [colors, setColors] = useState(["Kırmızı", "yeşil", "mavi"])

    const handleClick = () => {
        //setColors([...colors, Math.random()])
        setColors((prev) => [...prev, Math.random()])
    }

  return (
    <div>Colors
        {colors.map((color, i)=>(
            <div key={i}>{color}</div>
        ))}
        <br />
        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors