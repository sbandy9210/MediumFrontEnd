import ArticleCard from '../components/ArticleCard'
import React, { useEffect } from 'react'

const Home = ({ getBlog, blog, user, authenticated}) => {

    useEffect(() => {
        getBlog()
    }, [])

    return (
        <div className='Home'>
            <div className = 'articlesDiv'>
            <h2>Recently Posted Blogs</h2>
                {blog.map((blogs) => (
                    <ArticleCard  key={blogs.id} blog={blogs} user={user} authenticated={authenticated} author={blogs.Author} />
                ))}
            </div>
        </div> 
    )
}


export default Home;