import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams()
  const [studentCourses, setStudentCourses] = useState([])
  const [student, setStudent] = useState("")
  const [studentGrades, setStudentGrades] = useState()
  let navigate = useNavigate()


  const getStudentCourses = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/studentclass/${id}`)
    console.log(response)
    setStudentCourses(response.data.students)
    setStudent(response.data.name)
  }

  // const getStudentGrades = () => {
  //   const total = 0
  //   let grades = studentCourses.map((studentCourse) => {
  //     studentCourse.StudentClass.grade
  //   });
  // }
    
  console.log(studentCourses.map((studentCourse) => (
    studentCourse.StudentClass.grade
  )))
  
  useEffect(()=>{
    getStudentCourses()
  },[])

  return (
    <div>{student}
      
      {studentCourses?.map((studentCourse) => (
      <div className='studentCourses' key={studentCourse.id}>
      <h4>{studentCourse.name} </h4> 
      <h4> {studentCourse.StudentClass.grade}</h4>
      </div>
    )) }
    </div>
  )
}

export default StudentDetails