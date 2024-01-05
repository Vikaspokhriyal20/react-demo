import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttonstyle from './GithubBtn.module.css'

const Githubbtn = () => {
    return (
        <>
            <div>
            <NavLink to='https://github.com/Vikaspokhriyal20' target='_blank' className={Buttonstyle.github}>Github <i class="bi bi-github"></i></NavLink>
           </div>           
        </>
    )
}

export default Githubbtn
