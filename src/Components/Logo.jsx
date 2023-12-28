import React from 'react'
// import react_logo from './assets/react.svg'
import { Link } from 'react-router-dom'
import './style.css'

const Logo = () => {
  return (
    <>
    <div className='logo-container'>
        <Link to='/'>
         <h4 className='logo-heading'>vikas pokhriyal</h4> 
        </Link>  
    </div>
    </>
  )
}

export default Logo
