import React from 'react'
import Title from './Title'
import About from './About'

import '../assets/styles/Landing.css'
import Skills from './Skills'
import Project from './Project'

function Landing() {
  return (
    <div className='landing'>
        <Title/>
        <About/>
        <Skills/>
        <Project/>
    </div>
  )
}

export default Landing