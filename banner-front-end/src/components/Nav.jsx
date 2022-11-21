import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({authenticated, user, handleLogOut}) => {

  return (
    <div className={authenticated ? "nav-div" : "logged-out-nav-div"}>
      <h1>Banner</h1>
      <h6>{authenticated ? <Link onClick={handleLogOut}to='/'>Log Out</Link> : <Link to='/login'>Login</Link>} | <Link to='/register'>Register</Link> | {authenticated ? <Link to={`/user/${user.id}`}>Home</Link> : <Link to='/'>Home</Link>}</h6>
    </div>
  )
}

export default Nav