import React from 'react'
// import axios from 'axios'
// import DataContext from './components/DataContext'
import './styles/app.css'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'



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
              <Route path="/" element={<SignIn />} />
              <Route path='/home' element={<Home />}/>
              <Route path='/my-page' element={<MyPage />}/>
          </Routes>

          Working!
       
  
        </div>
    )
    }
  
  
  export default App
  

