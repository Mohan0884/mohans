import React from 'react'
import {Outlet} from 'react-router-dom'
import '../assets/styles/Home.css'
import {Navbar,Bottom} from './index'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Outlet/>
        <Bottom/>
    </div>
  )
}

export default Home