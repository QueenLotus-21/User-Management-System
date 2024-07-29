import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <a href="#" className='navbar-brand'>
               FullStack Apllication
            </a>
            <Link to="/login" className='btn btn-outline-light'>Login</Link>
            {/* <button className='btn btn-outline-light'>Register</button> */}
         </div>
        </nav>


    </div>
  )
}

