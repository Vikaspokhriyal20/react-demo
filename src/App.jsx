import React from "react"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Navbar from "./Components/Navbar"
import Skill from "./Pages/Skill"
import Page404 from "./Pages/Page404"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route> 
        <Route path="project" element={<Project />}></Route> 
        <Route path="skill" element={<Skill />}></Route> 
        <Route path="*" element={<Page404/>}></Route>  
      </Routes>
    </>
  )
}


export default App