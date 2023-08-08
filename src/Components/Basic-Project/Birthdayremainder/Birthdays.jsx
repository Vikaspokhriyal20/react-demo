import React from 'react'
import './style.css'


const Birthdays = ({people}) => {

  return (
    <>
          {
              people.map((person) => {
                  const { id, image, age, name } = person;
                  return (
                      <article key={id} className='person'>
                          <img src={image} alt={image} />
                          <div>
                              <h4>{name}</h4>
                              <p>{age} year</p>
                          </div>
                      </article>
                  )
              })
      }    
    </>
  )
}

export default Birthdays
