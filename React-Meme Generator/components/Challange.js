// import React from 'react'

// function Challange() {
//     const [messages, setMessages] = React.useState( [ "b" ] )

//   return (
//     <div>
//         {
//             messages.length > 0 ? 
//             <h1>
//                 You have {messages.length} new
//                 {messages.length === 1 ? " message" : " messages"}
//             </h1> :
//             <h1>NO One cares you!!!</h1>

//         }
//     </div>
//   )
// }

// export default Challange

// import React from 'react'

// function Challange() {
//     const [form, setForm] = React.useState( { 
//         firstName: "Soner", lastName: "Güçlü",
//         email: "sonersg@something.com",
//         comment: ""
//     } )
    
//     function onchange(event) {
//         setForm( prev=>{
//             return {
//                 ...prev,
//                 [event.target.name]: event.target.value
//             }
//         })
//         // console.log(event.target.placeholder)
//     }
//   return (
//     <div>
//         <input 
//         type="text"
//         placeholder="first name"
//         onChange={onchange}
//         name="firstName"
//         value={form.firstName}
//         />
//         <input 
//         type="text"
//         placeholder="last name"
//         onChange={onchange}
//         name="lastName"
//         value={form.lastName}
//         />
//         <input 
//         type="email"
//         placeholder="email"
//         onChange={onchange}
//         name="email"
//         value={form.email}
//         />
//         <textarea
//         value={form.comment }
//         placeholder='soooooooooooneerr'
//         onChange={onchange}
//         name="comment"
//         />
//         <h1>
//             {form.firstName} {form.lastName} <br />
//             email: {form.email}
//         </h1>
//     </div>
//   )
// }

// export default Challange

import React from 'react'

function Challange() {
    const [width, setWidth] = React.useState(0)
    const [status, setStatus] = React.useState("0")
    React.useEffect( ()=>{
        function changeWidth(){
            console.log("changeWidth")
            setStatus("changinig widtj")
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", changeWidth)
        return function(){
            console.log("cleaning")
            setStatus("cleaning")
            window.removeEventListener("resize", changeWidth)
        }
    }, [])
  return (
    <div>
        <h1>window width: {width}</h1>
        <h1>funcrion: {status}</h1>
    </div>
  )
}

export default Challange