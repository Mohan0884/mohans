import React from 'react'
import '../assets/styles/Skills.css'
import Circle from './Circle'

function Skill({width}) {
  return (
    <div className='skill-outside'>
        
        <div className="skill-inside"  style={{width:`${width}`}}>
            <h3 className='width-skills' style={{position: "relative",left:"100%"}}>{width}</h3>
        </div>
        
    </div>
  )
}

export default Skill