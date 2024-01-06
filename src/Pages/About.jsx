import React from 'react'
import Aboutstyle from './About.module.css'

const About = () => {
  return (
    <>
     <main className={Aboutstyle.container}>
        <div className={Aboutstyle.contentcontainer}>
          <div className={Aboutstyle.leftcontainer}>
            <div className={Aboutstyle.imgcontainer}>
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&" alt="user-picture" className={Aboutstyle.userimg} />
            </div>
           
            <div className={Aboutstyle.usersummary}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore animi nisi saepe assumenda eveniet accusantium obcaecati non Veritatis cupiditate</p>
            </div>
            <div className={Aboutstyle.userinfo}>
              <h4>Vikas Pokhriyal</h4>
              <p>Frontend & React.js Developer</p>
            </div>
          </div>
          {/* right-container */}
          <div className={Aboutstyle.rightcontainer}>
            <div className={Aboutstyle.aboutheading}>
              <p>about me</p>
              <h4>A better team with <span className={Aboutstyle.usecolor}>good services</span></h4>
            </div>
            <div className={ Aboutstyle.aboutsummary}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore animi nisi saepe assumenda eveniet accusantium obcaecati non Veritatis cupiditate ipsum repellat corrupti pariatur natus Lorem ipsum dolor assumenda eveniet accusantium obcaecati non Veritatis cupiditate ipsum repellat corrupti pariatur natus Lorem ipsum dolor</p>
            </div>
            <div className={Aboutstyle.buttoncontainer}>
            <button className={Aboutstyle.linkedinbutton}>LinkedIn</button>
            <button className={Aboutstyle.contactbutton}>Contact Me</button>
            </div>
          </div>
       </div>
      </main>
    </>

  )
}

export default About
