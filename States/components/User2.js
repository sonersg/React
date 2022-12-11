
// import React, {useState} from 'react';
import {useState} from 'react';

function User2() {
    const [name, setName] = useState("Soner");
    const [age, setAge] = useState(25);
    const [friends, setFriends] = useState( ["Mahmut", "Göksu", "Suat", "Raşit"] );
    const [address, setAddress] = useState( {il: "Bayburt", kod: 69500} );

  return (
    <div>
        <h1>Merhaba {name}!</h1>
        <h1>{age}</h1>
        {friends.map( (friend, key) => <div key={key}>{friend}</div>)}
        <h2>{address.il} {address.kod}</h2>
        <br />
        <button onClick={() => setName("Güçlü")}>İsmi Değiştir</button>
        <button onClick={() => setAge(29)}>Yaşı Değiştir</button>
        <button onClick={() => setFriends( ["Serkan", ...friends] )}>Yeni Arkadaş</button>
        <button onClick={() => setAddress( {...address, il: "İstanbul"} )}>Yeni Adres</button>

    </div>
  )
}

export default User2
