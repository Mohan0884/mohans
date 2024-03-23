import React from 'react'
import Circle from '../pages/Circle'
import '../assets/styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="title">
        <Circle color="red" width="30px"/>
        <Circle color="blue" width="30px"/>
        <Circle color="green" width="30px"/>
        <p className="nav-title"><span className='nav-letter'>M</span><span className='nav-letter'>O</span><span className='nav-letter'>H</span><span className='nav-letter'>A</span><span className='nav-letter'>N</span></p>
        </div>
        <div className="hire-me">
            <Circle color="yellow" width="25px"/>
            HIRE ME
        </div>
        
    </div>
  )
}

export default Navbar