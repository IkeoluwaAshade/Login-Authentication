import React from 'react'
import Login from './Components/LogButtons/LoginButton'
import Logout from './Components/LogButtons/LogoutButton'
import Profile from './Components/Profile/Profile'
// import { useAuth0 } from '@auth0/auth0-react'

const App = () => {

  // const { isLoading } = useAuth0
  // if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <Login />
      <Logout />
      <Profile />
    </div>
  )
}

export default App