import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

import "./styles.css"

function Contacts() {

  const [contacts, setContacts] = useState([
    {fullname: "Soner", phoneNumber: "541"},
    {fullname: "David", phoneNumber: "911"},
    {fullname: "Kerim", phoneNumber: "896"},
  ]);

  useEffect( ()=> {
    console.log(contacts)
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
        < List contacts={contacts} />
        < Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts