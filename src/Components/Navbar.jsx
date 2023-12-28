import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css' 
import Logo from './Logo'

const Navbar = () => {
    return (
        <>
            <nav id="navbar">
                <Logo />
                <div className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='project'>Project</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
