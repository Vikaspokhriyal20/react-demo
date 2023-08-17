import React from 'react'
import react_logo from './assets/react.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
    <div>
    <Link to='/'><img src={react_logo} alt="img" /></Link>  
    </div>
    </>
  )
}

export default Logo
