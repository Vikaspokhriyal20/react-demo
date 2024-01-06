import React from 'react'
import Homestyle from './Home.module.css'
const Home = () => {

  return (
    <>
      <main className={Homestyle.container}>
        <div className={Homestyle.contentcontainer}>
          <div className={Homestyle.homeleft}>
            <div className={Homestyle.homeheading}>
              <h4> Hello Vikas Here...</h4>
            </div>
            <div className={Homestyle.jobtitle}>
              <p>FrontEnd & React.js Developer</p>
            </div>
            <div className={Homestyle.jobsummary}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore animi nisi saepe assumenda eveniet accusantium obcaecati non Veritatis cupiditate ipsum repellat corrupti pariatur natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus.</p>
            </div>

            <div className={Homestyle.buttoncontainer}>
              <button className={Homestyle.cvbutton}>Download Cv</button>
              <button className={Homestyle.contactbutton}>Contact Me</button>
            </div>
          </div>
          <div className={Homestyle.homeright}>
            <img src="https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&" alt="img" className={Homestyle.homeimg} />
          </div>
       </div>
      </main>
    </>
  )
}

export default Home
