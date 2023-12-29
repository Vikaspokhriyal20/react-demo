import React from 'react'

const Home = () => {

  return (
    <>
      <main className='home-section'>
        <div className="home-content">
          <div className="home-left-side">
            <div className="home-heading">
              <h4>Hello Vikas Here...</h4>
            </div>
            <div className="home-job-role">
              <p>FrontEnd Developer and Programmer</p>
            </div>
            <div className="home-job-intro">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore animi nisi saepe assumenda eveniet accusantium obcaecati non Veritatis cupiditate ipsum repellat corrupti pariatur natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus.</p>
            </div>

            <div className="button-container">
              <button className='cv-btn'>Download Cv</button>
              <button className='email-btn'>Contact Me</button>
            </div>
          </div>
          <div className="home-right-side">
            <img src="https://images.unsplash.com/photo-1591991564021-0662a8573199?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="img" className='home-img' />
          </div>
       </div>
      </main>
    </>
  )
}

export default Home
