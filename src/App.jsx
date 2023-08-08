import React, { useState } from "react";
import './App.css'
import data from './Components/Basic-Project/Birthdayremainder/data'
import Birthdays from './Components/Basic-Project/Birthdayremainder/Birthdays'



function App() {
  const [people, setPeople] = useState(data)


  return (
    <>
      <main>
        <section className='container'>
          <h1>{people.length} birthday today</h1>
          <Birthdays people={people} />
          <button onClick={()=>setPeople([])}>clear all</button>
        </section>
      </main>

    </>
  )
}


export default App