import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams
  const [studentCourses, setStudentCourses] = useState([])
  let navigate = useNavigate()


  useEffect(()=>{
    const getStudentCourses = async ()=>{
      const response = await axios.get(`http://localhost:3001/api/studentclass/${id}`)
      console.log(response.data)
      setStudentCourses(response.data)
    }
    getStudentCourses()
  },[])

  // const showStudentCourses = (studentCourses)=> {
  //   navigate(`${studentclass.id}`)
  // }

  return (
    <div>Student
    {studentCourses.students.map((studentCourse) => (
      
      // <div className="studentClass-card" onClick={() => showStudentCourses(studentCourses)} key={studentCourses.id}>
      <div>
      {studentCourse.name}

      // </div>
    )) }
    </div>
  )
}

export default StudentDetails