import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Nav = () => {
  
  return (
      <div>
        
        <div className='nav-div'>
         <ul>
             <li><Link to ="/" className='nav_link'>Home</Link></li>
             <li><Link to ="/Bollywood" className='nav_link'>Bollywood</Link></li>
             <li><Link to ="/Technology" className='nav_link'>Technology</Link></li>
             <li><Link to ="/Hollywood" className='nav_link'>Hollywood</Link></li>
             <li><Link to ="/Fitness" className='nav_link'>Fitness</Link></li>
             <li><Link to ="/Food" className='nav_link'>Food</Link></li>
             {/* <li><Link to ="/Article" className='nav_link'>Article</Link></li> */}
         </ul>
     </div>
    
    </div>
  )
}

export default Nav