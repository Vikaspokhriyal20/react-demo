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
                    <NavLink to='Skill' className='nav-item'>Skills</NavLink>
                    <NavLink to='about' className='nav-item'>About-Me</NavLink>
                    <NavLink to='project' className='nav-item'>Project</NavLink>
                </div>
                <div className="github-link">
                    <NavLink to='https://github.com/Vikaspokhriyal20' target='_blank' className='github-btn'>Github <i class="bi bi-github"></i></NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
