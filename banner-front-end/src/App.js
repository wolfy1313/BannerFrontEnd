import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import Register from './components/Register'
import { CheckSession } from './services/Auth'
import Home from './components/Home'
import Login from './components/Login'
import Class from './components/Class'
import Students from './components/Students'
import StudentDetails from './components/StudentDetails'
import AddClass from './components/AddClass'
import NewStudent from './components/NewStudent'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/class/:id" element={<Class />} />
          <Route path="/class" element={<AddClass />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/studentclass/:id" element={<StudentDetails />} />
          <Route path="/students/new" element={<NewStudent />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
