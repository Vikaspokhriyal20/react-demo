import React from 'react'
import Logo from './Logo'
import Githubbtn from './Githubbtn'
import NavbarLink from './NavbarLink'
import Navbarstyle from './Navbar.module.css'
import NavbarLinkSm from './NavbarLinkSm'


const Navbar = () => {
    return (
        <>
            {/* large screen nav-links */}
            <nav className={Navbarstyle.navbar}>
                <Logo />
                <NavbarLink />
                <Githubbtn />
            </nav>
        {/* small screen nav-links */}
            <nav className={Navbarstyle.navbarsm}>
                <NavbarLinkSm />
            </nav>

        </>
    )
}

export default Navbar
