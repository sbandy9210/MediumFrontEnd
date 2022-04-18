import React from 'react'
// import axios from 'axios'
// import DataContext from './components/DataContext'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
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
        <div className = 'header'>
          <h1>MyLieu</h1>
        </div>
        <br />
        
          {/* <DataContext.Provider value={{

          }} /> */}
          
        
          <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path='/blog/all' element={<Home />}/>
              <Route path='/blog/create' element={<MyPage />}/>
              <Route path='/blog/:blog_id' element={<Article />}/>
          </Routes>

       
  
        </div>
    )
    }
  
  
  export default App
  

