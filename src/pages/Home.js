import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = ({blog}) => {

    return(
        <div className='Home'>
            <div className = 'articlesDiv'>
            <h2>Recently Posted Blogs</h2>
                <ArticleCard blog={blog}/>
            </div>
        </div>
    )
}


export default Home;