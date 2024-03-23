import React, { useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Profile from '../assets/images/profilephotoshoot.jpg'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import '../assets/styles/Title.css'
function Title() {
    // useEffect(()=>{
    //     AOS.init({duration:2000});
    // },[])
  return (
    <div className='titles'>
        
        <div className="title-left" >

            <div className="title-title-left">
            <p className="title-title">
                I'm Mohan Krishna
            </p>
            <hr className='dashed-rule'  />
            <p className='title-para'>
                MERN stack developer
            </p>
            <p className="links">
                <FaGithub className='fa-icons'/>
                <FaLinkedin className='fa-icons'/>
                <FaTwitter className='fa-icons'/>
            </p>
            </div>
        </div>
       
        <div className="title-right" >
            <img className='title-image' src={Profile} alt="" />
        </div>
    </div>
  )
}

export default Title