import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [courses, setCourses] = useState([])

//gets all classes

useEffect(()=>{
  const apiCall = async ()=>{
    let response = await axios.get(`http://localhost:3001/api/class`)
    setCourses(response.data)
  }
  apiCall()
},[])

const showCourse = (course) =>{
  navigate(`/class/${course.id}`)
}

  
  return (
    <div>
      <h1>Current Courses</h1>
      <section>
          {courses.map((course) => (
            <div className="course-card" onClick={() => showCourse(course)}key={course.id}>
              <h3>{course.name}</h3>
            </div>
          ))}
      </section>
      </div>
  )
}

export default Home