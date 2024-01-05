import React from 'react'
import mylogo from '../assets/myLogo.png'
import { NavLink } from 'react-router-dom'
import Logostyle from './Logo.module.css'


const Logo = () => {
  return (
    <>
    <div>
        <NavLink to='/'>
        <img src={mylogo} alt="img" className={Logostyle.mylogo}/>
        </NavLink>  
    </div>
    </>
  )
}

export default Logo
