import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
  const navigate = useNavigate()
  const initialState = { name: '', grade: ''};
  const [newClass, setNewClass] = useState(initialState)

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/class', newClass)
    setNewClass(initialState)
    navigate('/')
  }



  return (
    <div>AddClass
      <div className='add-class-form'>
          <form onSubmit={handleSubmit} key={newClass.id}>
            <ul>
              <li><input type="text" value={newClass.name} onChange={handleChange} id={'name'} placeholder={'name'}/></li>
              <li><input type="text" value={newClass.grade} onChange={handleChange} id={'grade'} placeholder={'grade'}/></li>
              <button>Submit</button>
            </ul>
          </form>
        </div>
    </div>
  )
}

export default AddClass