import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error404() {
  const navigate = useNavigate();

  useEffect( ()=>{
    setTimeout( ()=>{
      navigate("/")
    }, 5000)
  })
  return (
    <div>
        <h1>Error404</h1>
        <h3>This page can be in your mom'...</h3>
    </div>
  )
}

export default Error404