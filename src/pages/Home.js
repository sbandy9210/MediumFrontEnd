import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = ({blog}) => {


    return(
        <div className='Home'>
            <h1>Recently Posted Blogs</h1>
            <div className = 'articlesDiv'>
                <ArticleCard blog={blog}/>
            </div>
        </div>
    )
}


export default Home;