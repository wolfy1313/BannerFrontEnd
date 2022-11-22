import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams()
  const [studentCourses, setStudentCourses] = useState([])
  let navigate = useNavigate()


  const getStudentCourses = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/studentclass/${id}`)
    console.log(response)
    setStudentCourses(response.data.students)
  }
  useEffect(()=>{
    getStudentCourses()
  },[])

  return (
    <div>Student
    {studentCourses?.map((studentCourse) => (
      
      <div>
      {studentCourse.name}
      </div>
    )) }
    </div>
  )
}

export default StudentDetails