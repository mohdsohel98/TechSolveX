import { NavLink } from 'react-router-dom'
 import './Navbar.css';
import React from 'react'
import { useAuth } from '../store/auth';
function Navbar() {
  const { isLoggedIn } = useAuth(); 

  return (
    <>
    <header>
      <div className="container-nav">
        <div className="logo-brand">
          {/* <a href="/">TechSolveX</a> */}
          <div className="logo-brand">
  <a href="/" className="logo-slide">TechSolveX</a>
</div>

        </div>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            { isLoggedIn ?  <li><NavLink to = "/logout">Logout</NavLink></li> :
            <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            
            </>
            } 
           
            
          </ul>
        </nav>

      </div>

    </header>


    </>
  )
}

export default Navbar