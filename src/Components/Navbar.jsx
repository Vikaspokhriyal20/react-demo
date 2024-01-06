import React from 'react'
import Logo from './Logo'
import Githubbtn from './Githubbtn'
import NavbarLink from './NavbarLink'
import Navbarstyle from './Navbar.module.css'


const Navbar = () => {
    return (
        <>
            <nav className={Navbarstyle.navbar}>
                <Logo />
                <NavbarLink />
                <Githubbtn/>
            </nav>
        </>
    )
}

export default Navbar
