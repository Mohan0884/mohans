import React from 'react'
function Proj({Image,title,desc,GitLink,DeployLink}) {
  return (
    <div className="projects-inside">
              <img className='project-image' src={Image} alt="yes" />
            <h3 className='project-title'>{title}</h3>
            <p className='project-desc'>{desc}</p>
            <div className="git-deploy">
                <a className="git" href={GitLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                <a className="deploy" href={DeployLink} target="_blank" rel="noopener noreferrer">Deployed</a>
                
            </div>
</div>
  )
}

export default Proj