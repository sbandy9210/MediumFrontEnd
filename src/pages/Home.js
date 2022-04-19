
import Nav from '../components/Nav'
import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = ({blog}) => {


    return(
        <div>
            <div className = 'articlesDiv'>
                <ArticleCard blog={blog}/>
            </div>
        </div>
    )
}


export default Home;