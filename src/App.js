import React, { useState, useEffect } from 'react'
// import axios from 'axios'
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

  // const [articles, setArticles] = useState([])

  // const getArticles = async() => {
  //   const articles = await axios.get('')
  //   setArticles(articles.data)
  // }

  useEffect(() => {
    // getArticles()
    const token = localStorage.getItem('token')
    if(token){
      checkToken()
    }
  }, [])

    return (
      <div className="App">
        <div className = 'header'>
          <h1>MyLieu</h1>
        </div>
        <br />
        
          <DataContext.Provider value={{
            authenticated, setAuthenticated, user, setUser
          }} />
          
        
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
  

