
import Nav from '../components/Nav'
import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = () => {


    return(
        <div>
            <div className = 'navDiv'>
                <Nav />
            </div>
            <div className = 'articlesDiv'>
                <ArticleCard />
            </div>
        </div>
    )
}


export default Home;