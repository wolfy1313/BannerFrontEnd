import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {

  const [classes, setClasses] = useState([])

//gets all classes

useEffect(()=>{
  const apiCall = async ()=>{
    let response = await axios.get(`http://localhost:3001/classes`)
    setClasses(response.data)
  }
  apiCall()
},[])


  
  return (
    <div>
      <h1>Current Courses</h1>
      <section>
      {classes.map((class) => (
            <div >
              <h2>{class.name}</h2>
            </div>
          ))}
      </section>
      </div>
  )
}

export default Home