import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Skill from "./Components/Skill";
import Nopage from "./Components/Nopage";


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route> 
        <Route path="project" element={<Project />}></Route> 
        <Route path="skill" element={<Skill />}></Route> 
        <Route path="*" element={<Nopage/>}></Route>
      </Routes>
    </>
  )
}


export default App