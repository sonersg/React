
import React from 'react'
import PropTypes from 'prop-types'

function User({title, data, friends}) {

  return (
    <div>
        <strong>{title}</strong>
        <div>İsim: {data.name}</div>
        <div>City: {data.city}</div>
        <div>Yaş: {data.age}</div>
        <h3>Arkadaşları:</h3>
        {friends.map((friend, i) => (
            <div key={i}>{friend}</div>
        ))}
        <hr />
    </div>
  )
}

// User.PropTypes = {
//     data: PropTypes.exact({
//         name: PropTypes.string,
//         age: PropTypes.number,
//         city: PropTypes.string
//     }),
//     friends: PropTypes.array,
// };

User.defaultProps = {
    title: "Kişi",
};

export default User