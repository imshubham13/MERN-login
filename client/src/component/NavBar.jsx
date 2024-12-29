import React from 'react'
import {Link} from'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <a>
            <Link to="/">Login</Link>
        </a>
- | - | -
        <a>
            <Link to="/register">Register</Link>
        </a>
        - | - | -
        <a>
            <Link to="/home">Home</Link>
        </a>
        - | - | -
        <a>
            <Link to="/display">Display</Link>
        </a>
    </div>
  )
}

export default NavBar