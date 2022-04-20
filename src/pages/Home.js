import ArticleCard from '../components/ArticleCard'
import React from 'react'

const Home = ({blog, user, authenticated}) => {

    return (
        <div className='Home'>
            <div className = 'articlesDiv'>
            <h2>Recently Posted Blogs</h2>
                {blog.map((blogs) => (
                    <ArticleCard  key={blogs.id} blog={blogs} user={user} authenticated={authenticated} />
                ))}
            </div>
        </div> 
    )
}


export default Home;