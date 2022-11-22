import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Class = () => {
  let {id} = useParams()
  
  const [selectedCourse, setSelectedCourse]= useState("")
  

useEffect(()=>{
  const apiCall = async () =>{
    const response = await axios.get(`http://localhost:3001/api/class/${id}`)
    setSelectedCourse(response.data.classes)
  }
  apiCall()
},[])




  return (
    <div>
      <div className='courses'>
    <h1>Students in this class</h1>
    <section>
      {selectedCourse ? selectedCourse.map((student)=>(
        <h1>{student.name}</h1>
      )): null}
    </section>
      </div>
      
    </div>
  )
}

export default Class