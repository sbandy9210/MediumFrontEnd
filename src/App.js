import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataContext from './components/DataContext'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Client from './services/api'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Article from './pages/Article'
import Nav from './components/Nav'

function App() {

    const [authenticated, setAuthenticated] = useState (false)
    const [user, setUser] = useState(null)

    const [blog, setBlog] = useState([])

    const checkToken = async() => {
      const user = await CheckSession()
      setUser(user)
      setAuthenticated(true)
    }

    const getBlog = async() => {
      const blog = await Client.get('/blog/all')
      setBlog(blog.data)
    }

    const handleLogOut = () => {
      setUser(null)
      setAuthenticated(false)
      localStorage.clear()
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        checkToken()
      }
    }, [])


    return (
        <div className="App">
          <DataContext.Provider value={{ authenticated, setAuthenticated, user, setUser }} />

          <div className = 'header'>
            <h1>MyLieu</h1>
          </div>
            <Nav authenticated={authenticated} user={user} handleLogout={handleLogOut}/>          
            
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/register' element={<Register />}/>
              <Route path="/login" element={<SignIn setUser={setUser} setAuthenticated={setAuthenticated}/>} />
              <Route path='/my-page' element={<MyPage user={user}/>}/>
              <Route path='/blog/:blog_id' element={<Article />}/>
            </Routes>

        </div>
    )
}
  
  
  export default App
  

