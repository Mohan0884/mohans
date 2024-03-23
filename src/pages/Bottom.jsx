import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../assets/styles/Bottom.css'
function Bottom() {
  return (
    <div className='bottom'>
        <div className="links-bottom">
                <FaGithub className='fa-icons'/>
                <FaLinkedin className='fa-icons'/>
                <FaTwitter className='fa-icons'/>
        </div>
        <div className="copyright">
        © 2024 Mohan Krishna | All rights reserved.
        </div>
    </div>
  )
}

export default Bottom