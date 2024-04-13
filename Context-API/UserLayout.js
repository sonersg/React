import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
        <Link to="/users/1">User 1</Link>
        <br />
        <Link to="/users/2">User 2</Link>
        <br />
        <Link to="/users/new">User New One</Link>
        <Outlet context={ {hello: "Soner"} }/>
    </div>
  )
}

export default UserLayout