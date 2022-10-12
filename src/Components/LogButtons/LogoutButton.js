import React, { Component } from 'react'
// import 'LogButton.css'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const { Logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
    <button onClick={ () => Logout({returnTo: window.location.origin}) }>
        Logout
    </button>
    )
  )
}

export default Logout