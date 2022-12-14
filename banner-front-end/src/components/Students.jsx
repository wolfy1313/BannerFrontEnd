import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Students=()=>{
  let navigate = useNavigate()

const [students,setStudents] = useState([])

useEffect(()=>{
  const apiCall = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/student`)
    setStudents(response.data)
  }
  apiCall()
},[])

const showStudent =(student)=>{
  navigate(`/students/${student.id}`)
}

  return(

    <div>
      <h1 className='page-title'>All Students</h1>
      {students.map((student)=>(
        <div className="student-card" onClick={() => showStudent(student)}key={student.id}>
          <h3>{student.name}</h3>
          </div>
      ))}
    </div>
  )
}

export default Students