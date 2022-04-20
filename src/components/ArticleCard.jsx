import { useNavigate } from 'react-router-dom'
import React from 'react';


const ArticleCard = ({blog}) => {
    
    const navigateToBlog = (blog) => {
        navigate(`/blog/${blog.id}`)
    }
    let navigate = useNavigate()

    return(

        <div className = 'articles'>
            {blog.map((blog) => {
                return(
                    <div onClick={() => {navigateToBlog(blog)}} className="ArticleCard">
                         <div className='ArticleCardImg'>
                         <img 
                            src = {blog.image} 
                            alt = ''
                            style={{width: '200px'}}
                        />
                        </div>
                        <div className='ArticlCardTitle'>
                            <h4 className='ArtCardTitle'>{blog.title}</h4>
                            <p className='ArtCardDate'>{blog.createdAt.substring(0,10)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleCard