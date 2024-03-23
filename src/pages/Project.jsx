import React from 'react'
import '../assets/styles/Project.css'
import Proj from './Proj'
import Getfit from  '../assets/images/getfit.png'

function Project() {
  return (
    <div className='project'>
      <br />
        <br />
        <hr className='dashed-rules' />
        <br />
        <br />
        <h3>Projects</h3>
        <br />
        <br />
        <div className="projects-outside" >
        
          <Proj Image={Getfit} title="GetFit" desc="GetFit is an Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, unde?" GitLink="https://github.com/Mohan0884/getfit" DeployLink="https://getfit-3ygr.onrender.com/"/>
          
        </div>
    </div>
  )
}

export default Project