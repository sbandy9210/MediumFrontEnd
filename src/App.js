import React, { useState, useEffect } from 'react'
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
    const [userID, setUserID] = useState()

    const [blog, setBlog] = useState([])

    const checkToken = async() => {
      const user = await CheckSession()
      setUser(user)
      setUserID(user.id)
      setAuthenticated(true)
    }

    const getBlog = async() => {
      const blog = await Client.get('/api/blog/all')
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
      getBlog()
    }, [])
    


    return (
        <div className="App">
          <div className = 'header'>
            <h1><span className='headerTitleSpan'>My</span>Lieu<span className='dot'>.</span></h1>
          </div>
            <Nav authenticated={authenticated} user={user} handleLogout={handleLogOut} userID={userID}/>          
            
            <Routes>
              <Route path='/' element={<Home getBlog={getBlog} setBlog={setBlog} blog={blog} user={user} authenticated={authenticated} />}/>
              <Route path='/register' element={<Register />}/>
              <Route path="/login" element={<SignIn setUser={setUser} setAuthenticated={setAuthenticated} setUserID={setUserID}/>}/>
              <Route path='/:user_id/my-page' element={<MyPage user={user} authenticated={authenticated}/>}/>
              <Route path='/:user_id/blog/:blog_id' element={<Article user={user} authenticated={authenticated}/>}/>
              {/* Public view of article */}
              <Route path='/blog/:blog_id' element={<Article user={user} authenticated={authenticated}/>}/>
            </Routes>
        </div>
    )
}
  
  
  export default App