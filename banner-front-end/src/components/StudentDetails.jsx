import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StudentDetails = () => {
  const {id} = useParams()
  const [studentCourses, setStudentCourses] = useState([])
  const [student, setStudent] = useState("")
  const [studentGrades, setStudentGrades] = useState([])
  const [gpa, setGpa] = useState('')
  


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



  return (
    <div><h1>{student}</h1>
      <h2>GPA: {gpa}</h2>
      
      {studentCourses?.map((studentCourse) => (
      <div className='studentCourses' key={studentCourse.id}>
      <h4>{studentCourse.name} </h4> 
      <h4> {studentCourse.StudentClass.grade}</h4>
      <h4>{(() => {
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
      })()}</h4>
      </div>
    )) }

    </div>
  )
}

export default StudentDetails