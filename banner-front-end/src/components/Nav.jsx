import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
    <nav className="navBar">
    <h2>Welcome {user?.username}!</h2>
    <Link id="sign-out" onClick={handleLogOut} to="/">
      Sign Out
    </Link>
  </nav>
)
}

const openOptions = (
  <nav className="navBar">
      <Link to="/">
    <h3>Home</h3>
      </Link>

      <Link to ="/students">
    <h3>Students</h3>
      </Link>

      <Link to="/login">
    <h3>Login</h3>
      </Link>

      <Link to="/register">
    <h3>Register</h3>
      </Link>
  </nav>
)


  return (
    <header className="nav">
    <Link to ="/">
      </Link>
        {authenticated && user ? authenticatedOptions : openOptions}    
    </header>
  )
}

export default Nav