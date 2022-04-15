import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataContext from './component/DataContext'

function App() {

  const [articles, setArticles] = useState([])

  const getArticles = async() => {
    const articles = await axios.get('')
    setArticles(articles.data)
  }

  useEffect(() => {
    getArticles()
  }, [])

    return (
      <div className="App">
          <DataContext.Provider value={{

          }} />
          
       
  
        <main>
        
        <Routes>
            <Route path="/" element={< />} />
            <Route path='/home' element={< />}/>
            <Route path='/my-page' element={< />}/>  
            
        </Routes> 
        </main> 
      
       
  
        </div>
    )
    }
  
  
  export default App
  

