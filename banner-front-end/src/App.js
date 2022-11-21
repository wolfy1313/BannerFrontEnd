import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './App.css';
import Nav from './components/Nav';
import Register from './components/Register';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  
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
  
  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }



  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
