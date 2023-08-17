import React, { useState } from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Hooks from "./Components/Hooks";
import Nopage from "./Components/Nopage";




function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route> 
        <Route path="project" element={<Project />}></Route> 
        <Route path="hooks" element={<Hooks />}></Route>
        <Route path="*" element={<Nopage/>}></Route>
      </Routes>
    </>
  )
}


export default App