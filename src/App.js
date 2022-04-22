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
    const [data, setData] = useState({
      id: "",
      lastlogin: new Date()
    })
    const [blog, setBlog] = useState([])
    const [notifications, setNotifications] = useState()

    const checkToken = async() => {
      const user = await CheckSession()
      setUser(user)
      setUserID(user.id)
      setAuthenticated(true)
      getNotification(user.id)
    }

    const getBlog = async() => {
      const blog = await Client.get('/api/blog/all')
      setBlog(blog.data)
    }

    const getNotification = async (id) => {
      const notification = await Client.get(`/api/notifications/${id}`)
      if(notification){
        setNotifications(notification.data)
        console.log(notifications)
      }
    }

    const setDateOnLogout = () => {
      setData({
        id: userID,
        lastlogout: new Date()
      })
    }

    const handleLogOut = async () => {
      setDateOnLogout()
      setUser(null)
      setAuthenticated(false)
      localStorage.clear()
      console.log(data)
      await Client.put('/api/logout', data)
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
            <Nav authenticated={authenticated} user={user} handleLogout={handleLogOut} userID={userID} notifications={notifications}/>          
            
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