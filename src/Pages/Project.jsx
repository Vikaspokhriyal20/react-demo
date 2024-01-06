import React from 'react'
import Projectstyle from './Project.module.css'

const Project = () => {
    return (
        <>
            <main className={Projectstyle.container}>
                <div className={Projectstyle.contentcontainer}>
                    <div className={Projectstyle.gridcontainer}>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Image search app</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Word-Counter app</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Weather forcast app</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4> Online quiz app</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Product card design</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Stopwatch</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Tic-tac-toe game</h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                        <div className={Projectstyle.projectcontainer}>
                            <h4>Clone website </h4>
                            <p>Live image search app using Unsplash API.</p>
                            <button className={Projectstyle.visitbutton}><i class="bi bi-box-arrow-up-right"></i></button>
                        </div>
                    </div>
                </div>


            </main>
        </>

    )
}

export default Project
