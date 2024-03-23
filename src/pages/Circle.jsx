import React from 'react'
import '../assets/styles/Circle.css'
function Circle({color,width}) {
  return (
    <p className='circle' style={{backgroundColor:`${color}`,width:`${width}`,height:`${width}`}}>

    </p>
  )
}

export default Circle