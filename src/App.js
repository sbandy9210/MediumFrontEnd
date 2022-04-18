import React from 'react'
// import axios from 'axios'
// import DataContext from './components/DataContext'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Article from './pages/Article'




function App() {

  // const [articles, setArticles] = useState([])

  // const getArticles = async() => {
  //   const articles = await axios.get('')
  //   setArticles(articles.data)
  // }

  // useEffect(() => {
  //   getArticles()
  // }, [])

    return (
      <div className="App">
        
          {/* <DataContext.Provider value={{

          }} /> */}
          
        
          <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path='/home' element={<Home />}/>
              <Route path='/my-page' element={<MyPage />}/>

              <Route path='/register' element={<Register />}/>

              <Route path='/article' element={<Article />}/>

          </Routes>

       
  
        </div>
    )
    }
  
  
  export default App
  

