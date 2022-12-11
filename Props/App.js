import React from 'react'
import User from './components/User'

function App() {

  return (
    <div>
      < User 
      name="Soner" 
      surname="Güçlü" 
      isLoggedIn={true} 
      friends={["Mahmut", "Jona", "Serkan", "Jerry"]} 
      address={{address: "Bayburt", zip: 69500}} />

    </div>
  )
}

export default App
