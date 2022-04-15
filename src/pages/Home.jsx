
import Nav from '../components/Nav'
import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = () => {
    return(
        <div>
            <div>
                <h1>MyLieu</h1>
                <Nav />
            </div>
            <div>
                <ArticleCard />
            </div>
        </div>
    )
}


export default Home;