import React from 'react'

import {Link} from 'react-router-dom'
import './signup.css'

export default function Signup() {
  return (
    <div className='signup'>
    <div className="card">
      <div className="left">
        <h2>Voyager </h2>
        <p><span id="welcome">Welcome</span> <br />Please enter your username, email
        address, and password 
        </p>
        <span>Have An Account?</span>
        <Link to='/login'>
         <button className='btn btn-primary'>Log in</button>
        </Link> 
      </div>

      <form className="right">
        <input type="text" required placeholder='username'/>
        <input type="email" required placeholder='email' />
        <input type="password" required placeholder='password'/>
        <button type='submit' className='btn'>Sign up</button>
      </form>

    </div>
</div>
  )
}
