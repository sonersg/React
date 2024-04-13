import {useState} from 'react'

function List( {contacts} ) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter( item =>{
    return Object.keys(item).some( key => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    )
  })
  return (
    <div>List
      <input 
      placeholder='Filter contact'
      value={filterText}
      onChange={ (e)=>setFilterText(e.target.value) }
      />
      <ul className='list'>
        {
          filtered.map( (contact, key) => (// I used curly brackets here. Doesn't show error but it didn't work. Barely found the error!!!
            <li key={key}>
              <span>{contact.fullname}</span>
              <span>{contact.phoneNumber}</span>
            </li>
          ))
        }
      </ul>
      <p>Totol Contacts: {filtered.length}</p>
    </div>
  )
}

export default List;
