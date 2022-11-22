import React from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Class = () => {
  let {id} = useParams()
  
  const [selectedCourse, setSelectedCourse]= useState("")
  

useEffect(()=>{
  const apiCall = async () =>{
    const response = await axios.get(`http://localhost:3001/api/class/${id}`)
    setSelectedCourse(response.data)
  }
  apiCall()
},[])




  return (
    <div>
      <div className='courses'>
    <h1>Students in this CLASS</h1>
    <section>
      {selectedCourse.name}
    </section>
      </div>
      
    </div>
  )
}

export default Class