import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams()
  const [studentCourses, setStudentCourses] = useState([])
  const [student, setStudent] = useState("")
  const [studentGrades, setStudentGrades] = useState([])
  const [gpa, setGpa] = useState('')
  let navigate = useNavigate()
  


  const getStudentCourses = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/studentclass/${id}`)
    setStudentCourses(response.data.students)
    setStudent(response.data.name)
  }

  const getStudentGrades = () => {
    setStudentGrades(studentCourses.map((studentCourse) => {
      return studentCourse.StudentClass.grade
    })) 
  }

  const gpaCalculation = ()=>{
    let total = 0
    for(let i=0; i < studentGrades.length; i++){
      total += studentGrades[i]
    }
    let avg = (total/studentGrades.length).toFixed(2)
    setGpa(avg)
  }


  
  useEffect(()=>{
    getStudentCourses()
  },[])

  useEffect(()=>{
    getStudentGrades()
  },[studentCourses])

  useEffect(()=>{
    gpaCalculation()
  },[studentGrades])

  const showCourse = (studentCourse) =>{
    navigate(`/class/${studentCourse.id}`)
  }

  return (
    <div><h1 className='page-title'>{student}</h1>
      <h2 className='subheader-title'>GPA: {gpa}</h2>
      
      {studentCourses?.map((studentCourse) => (
      <div className='studentCourses' key={studentCourse.id}>
      <h4 onClick={() => showCourse(studentCourse)}>{studentCourse.name} </h4> 
      <h4>  {(() => {
        if (studentCourse.StudentClass.grade === 4){
          return ('A')
        } else if (studentCourse.StudentClass.grade === 3){
          return ('B')
        } else if (studentCourse.StudentClass.grade === 2){
          return ('C')
        } else if (studentCourse.StudentClass.grade === 1){
          return ('D')
        } else {
          return ('F')
        }
      })()} {studentCourse.StudentClass.grade}</h4>
      <h4></h4>
      </div>
    )) }

    </div>
  )
}

export default StudentDetails