import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

 

  return (
    <div>
   
    <div className='navbar'>
      <div className='navbar-content'>
      
      <h1>Task Managament</h1>
        
      
          <Link  to="/register" className="link"><FaUserAlt className="user-icon" /></Link>
     
  
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
    