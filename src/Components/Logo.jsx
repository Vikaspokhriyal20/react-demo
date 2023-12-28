import React from 'react'
// import react_logo from './assets/react.svg'
import { NavLink } from 'react-router-dom'
import './style.css'

const Logo = () => {
  return (
    <>
    <div className='logo-container'>
        <NavLink to='/'>
         <h4 className='logo-heading'>vp</h4> 
        </NavLink>  
    </div>
    </>
  )
}

export default Logo
