import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataContext from './components/DataContext'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Article from './pages/Article'




function App() {

  const [blog, setBlog] = useState([])

  const getBlog = async() => {
    const blog = await axios.get('http://localhost:3001/blog/all')
    setBlog(blog.data)
  }

  useEffect(() => {
    getBlog()
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
        
          
        
          <Routes>

              <Route path="/" element={<SignIn />} />
              <Route path='/blog/all' element={<Home />}/>
              <Route path='/blog/create' element={<MyPage />}/>
              <Route path='/blog/:blog_id' element={<Article />}/>
              <Route path='/register' element={<Register />}/>


          </Routes>

       
  
        </div>
    )
    }
  
  
  export default App
  

