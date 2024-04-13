
import React, {useState} from 'react'

function User2() {

    const [user, setUser] = useState({name: "Soner", surname: "Güçlü"})
  return (
    <div>User2
        <h1>{user.name} {user.surname}</h1>
        <br />
        <button onClick={() => setUser({...user, name: "David"})}>İsmi Değiştir</button>
    </div>
  )
}

export default User2
