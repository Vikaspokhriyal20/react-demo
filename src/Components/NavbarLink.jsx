import React from 'react'
import { NavLink } from 'react-router-dom'
import Navlinkstyle from './Navitem.module.css'
import './style.css'


const NavbarLink = () => {
    return (
        <>
            <div className={Navlinkstyle.navlink}>
                <NavLink to='skill' className={Navlinkstyle.navitem}>Skills</NavLink>
                <NavLink to='about' className={Navlinkstyle.navitem}>About-Me</NavLink>
                <NavLink to='project'className={Navlinkstyle.navitem}>Project</NavLink>
            </div>
        </>
    )
}
export default NavbarLink
