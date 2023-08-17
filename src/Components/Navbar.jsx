import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Logo from './Logo'

const Navbar = () => {
    return (
        <>
            <nav id="navbar">
                <Logo />
                <div className='nav-item'>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='project'>Project</Link>
                <Link to='hooks'>Hooks</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
