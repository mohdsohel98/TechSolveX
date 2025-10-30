import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
   <>
   
    <div id='error-page'>
      <div className="  content">
        <h2 className='header'>404</h2>
        <h4>Sorry! Page not found</h4>
    <p>Oops! It seems like the page you're trying to accces doesnt't exist,
      If you belive there's an issune feel to report it , and we'll look into it
    </p>
     <div className="btns">
      <NavLink to='/'>Return Home</NavLink>
      <NavLink to='/contact'>Report problem</NavLink>
     </div>
      </div>
    </div>
   
   
   </>
  )
}

export default Error