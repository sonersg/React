import React, {useState} from 'react'

function Form() {

    const [name, setName] = useState("")

  return (
    <div>Form
        <div>
            <div>İsim</div>
            <input
                placeholder='isim'
                value={name}
                onChange={(event)=>setName(event.target.value)}
            ></input>
            <div>
                <strong>{name}</strong>
            </div>
        </div>
    </div>
  )
}




//******************SECOND WAY *************************/
// function Form() {

//     const [form, setForm] = useState({name: " ", surname: "", gender: "0"});

//     const handleChange = (e) => {
//         setForm((prev) => ([...prev, [e.target.name]: e.target.value]))
//     }

//   return (
//     <div>Form
//         <div>
//             <div>İsim</div>
//             <input
//                 placeholder='isim'
//                 name='name'
//                 value={form.name}
//                 onChange={handleChange}
//             ></input>
//             <div>
//                 <strong>{form.name}</strong>
//             </div>
//         </div>
//     </div>
//   )
// }

export default Form