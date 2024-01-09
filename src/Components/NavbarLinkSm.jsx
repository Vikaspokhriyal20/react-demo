import React from 'react'
import { NavLink } from 'react-router-dom'
import Navlinkstyle from './Navbarlink.module.css'
import './style.css'

const NavbarLinkSm = () => {
  return (
    <>
      <div className={Navlinkstyle.navlinksm}>
                <NavLink to='skill' className={Navlinkstyle.navitem}>Skills</NavLink>
                <NavLink to='about' className={Navlinkstyle.navitem}>About-Me</NavLink>
                <NavLink to='project'className={Navlinkstyle.navitem}>Project</NavLink>
            </div>
    </>
  )
}

export default NavbarLinkSm
