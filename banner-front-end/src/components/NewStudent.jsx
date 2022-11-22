import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { newStudent } from '../services/Queries'

const NewStudent = () => {
  const initialState = { name: '', email: ''}
  const [formValues, setFormValues] = useState(initialState)
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await newStudent({
      name: formValues.name,
      email: formValues.email
    })
    setFormValues(initialState)
    navigate('/students')
  }


  return (
    <div>
      <section className="new-student-form">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <input
          onChange={handleChange}
          name="name"
          value={formValues.name}
          type="text"
          placeholder="Name"
          required
          />
          <input 
          onChange={handleChange}
          name="email"
          value={formValues.email}
          type="email"
          placeholder="email"
          required
          />
          <button type="submit" disabled={!formValues.name || !formValues.email }>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default NewStudent