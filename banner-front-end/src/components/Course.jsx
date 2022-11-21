import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Course = () => {
  let {id} = useParams()
  let navigate = useNavigate()

const [selectedCourse, setSelectedCourse]= useState('')

useEffect(()=>{
  const apiCall = async () =>{
    const response = await axios.get(`http://localhost:3001/api/class/${id}`)
    setSelectedCourse(response.data)
  }
  apiCall()
},[])

// const showStudent =(one)=>{
//   navigate(`${one.id}`)
// }

  return (
    <div>
    <h1>Students in this class</h1>
    <section>
      {/* {selectedCourse.classes.map((one)=>(
        // <div className="studentname-card" onClick={() => showStudent(one)}>
        <div>
        <h3>{one.name}</h3>
        </div>
      ))} */}
    </section>
    </div>
  )
}

export default Course