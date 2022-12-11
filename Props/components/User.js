import React from 'react'

/********************************** props ******************************/
// function User(props) {
//   console.log(props);
//   return (
//     <div>

//       <h3>
//         {
//         props.isLoggedIn === true ? `Hoş Geldin ${props.name} ${props.surname}` : "Giris Yapmadınız!"
//         }
//       </h3>

//     </div>
//   )
// }

// function User({name, surname, isLoggedIn}) {
//   return (
//     <div>

//       <h3>
//         {
//         isLoggedIn === true ? `Hoş Geldin ${name} ${surname}` : "Giris Yapmadınız!"
//         }
//       </h3>

//     </div>
//   )
// }

/********************************** key ******************************/
// function User({name, surname, isLoggedIn, friends}) {
//   return (
//     <div>

//       <h3>
//         {
//         isLoggedIn === true ? `Hoş Geldin ${name} ${surname}` : "Giris Yapmadınız!"
//         }
//       </h3>
//       <h4>
//         {
//           friends.map( (friend, index)=> <div key={index}>{index +1 } {friend}</div>)
//         }
//       </h4>

//     </div>
//   )
// }

/********************************** prop types ******************************/
import PropTypes from 'prop-types'

function User({name, surname, isLoggedIn, friends, address}) {

  if(!isLoggedIn){
    return <div>Giris Yapmadınız!</div>
  }
  return (
    <div>

       <h3>
         {
         isLoggedIn === true ? `Hoş Geldin ${name} ${surname}` : "Giris Yapmadınız!"
         }
       </h3>
       <h4>
         {
            friends.map( (friend, index)=> <div key={index}>{index +1 } {friend}</div>)
         }
       </h4>
       <hr />
       <h5>
        {address.address} {address.zip}
       </h5>

     </div>
  )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
      address: PropTypes.string,
      zip: PropTypes.number
    }),
};

User.defaultProps = {
  name: "İsimsiz",
  isLoggedIn: false,
};

export default User
