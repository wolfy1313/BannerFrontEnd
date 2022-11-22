import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newClass } from '../services/Queries';

const AddClass = () => {
  const navigate = useNavigate()
  const initialState = { name: '', grade: ''};
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await newClass({
      name: formValues.name    })
    setFormValues(initialState)
    navigate('/')
  }


  return (
    <div>Add a New Class
      <div className='add-class-form'>
          <form onSubmit={handleSubmit}>
              <input 
              onChange={handleChange} 
              name="name"
              value={formValues.name} 
              type="text" 
              placeholder='Name'
              required
              />
              <button>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default AddClass