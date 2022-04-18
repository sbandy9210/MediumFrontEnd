import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataContext from './components/DataContext'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Article from './pages/Article'




function App() {


  const [authenticated, setAuthenticated] = useState (false)
  const [user, setUser] = useState(null)

  const checkToken = async() => {
    const user = await CheckSession()
    setUser(user)
    setAuthenticated(true)
  }

  const [blog, setBlog] = useState([])


  const getBlog = async() => {
    const blog = await axios.get('http://localhost:3001/blog/all')
    setBlog(blog.data)
  }

  const handleLogOut = () => {
    setUser(null)
    setAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      checkToken()
    }
    // getBlog()
  }, [])

    return (
      <div className="App">
        <DataContext.Provider value={{
          blog, setBlog
        }} />
        <div className = 'header'>
          <h1>MyLieu</h1>
        </div>
        <br />
        
          <DataContext.Provider value={{
            authenticated, setAuthenticated, user, setUser
          }} />          
        
          <Routes>
              <Route path="/login" element={<SignIn setUser={setUser} setAuthenticated={setAuthenticated}/>} />
              <Route path='/blog/all' element={<Home />}/>
              <Route path='/blog/create' element={<MyPage />}/>
              <Route path='/blog/:blog_id' element={<Article />}/>
              <Route path='/register' element={<Register />}/>
          </Routes>

        </div>
    )
    }
  
  
  export default App
  

