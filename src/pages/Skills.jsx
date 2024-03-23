import React,{useEffect} from 'react'
import '../assets/styles/Skills.css'
import Skill from './Skill'

function Skills() {
    
  return (
    <div className='skills' >
        <br /><br />
        <hr className='dashed-rules'  />
        <br />
            <h1>
                Skills
            </h1>
            <br />
            <h3 className='skill-titles' >HTML</h3>
            <Skill width="85%"/>
            
            <h3 className='skill-titles'>CSS</h3>
            <Skill  width="80%"/>
            <h3 className='skill-titles'>React</h3>
            <Skill  width="80%"/>
            <h3 className='skill-titles'>Node</h3>
            <Skill  width="75%"/>
            <br />
            <br />
    </div>
  )
}

export default Skills