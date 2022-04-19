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
import Nav from './components/Nav'




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
        <Nav authenticated={authenticated} user={user}/>
        
        
          <DataContext.Provider value={{
            authenticated, setAuthenticated, user, setUser
          }} />          
        
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/login" element={<SignIn setUser={setUser} setAuthenticated={setAuthenticated} handleLogout={handleLogOut}/>} />
            <Route path='/my-page' element={<MyPage user={user}/>}/>
            <Route path='/blog/:blog_id' element={<Article />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>

        </div>
    )
}
  
  
  export default App
  

