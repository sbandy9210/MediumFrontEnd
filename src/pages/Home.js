import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = ({blog}) => {

    return(
        <div className='Home'>
            <h3>Recently Posted Blogs</h3>
            <div className = 'articlesDiv'>
                <ArticleCard blog={blog}/>
            </div>
        </div>
    )
}


export default Home;