import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams()
  const [studentCourses, setStudentCourses] = useState([])
  const [student, setStudent] = useState("")
  let navigate = useNavigate()


  const getStudentCourses = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/studentclass/${id}`)
    console.log(response)
    setStudentCourses(response.data.students)
    setStudent(response.data.name)
  }
  useEffect(()=>{
    getStudentCourses()
  },[])

  return (
    <div>{student}
    {studentCourses?.map((studentCourse) => (

      <div>
      <h4>{studentCourse.name} </h4> 
      <h4> {studentCourse.StudentClass.grade}</h4>
      </div>
    )) }
    </div>
  )
}

export default StudentDetails