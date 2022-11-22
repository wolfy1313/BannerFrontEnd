import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Class = () => {
  let {id} = useParams()
  const [selectedCourse, setSelectedCourse]= useState("")
  const [course, setCourse] = useState("")
  const navigate = useNavigate()

useEffect(()=>{
  const apiCall = async () =>{
    const response = await axios.get(`http://localhost:3001/api/class/${id}`)
    setSelectedCourse(response.data.classes)
    setCourse(response.data.name)
  }
  apiCall()
},[])

const showStudent =(student)=>{
  navigate(`/students/${student.id}`)
}


  return (
    <div>
      <div>
    {/* <h1 className='page-title'>Students in this class</h1> */}
    <h1 className='page-title'>{course}</h1>
    <section >
      {selectedCourse ? selectedCourse.map((student)=>(
        <h1 className='courses' onClick={() => showStudent(student)} key={student.id}>{student.name}</h1>
      )): null}
    </section>
      </div>
      
    </div>
  )
}

export default Class