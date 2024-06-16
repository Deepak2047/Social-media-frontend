import React from 'react'

import {Link} from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
      <div className='login'>
          <div className="card">
            <div className="left">
              <h2>Voyager</h2>
                <p><span id="welcome">Welcome</span> <br />Please enter your username and 
                password to log in </p>
              <span>Don't Have An Account?</span>
              <Link to='/signup'>
               <button className='btn btn-primary'>Sign up</button>
              </Link>
            </div>

            <form className="right">
              <input type="text" required placeholder='username'/>
              <input type="password" required placeholder='password'/>
              <button type='submit' className='btn'>Log in</button>
            </form>

          </div>
      </div>
  )
}