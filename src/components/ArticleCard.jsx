import { useNavigate } from 'react-router-dom'
import React from 'react';


const ArticleCard = ({blog}) => {
    
    const navigateToBlog = (blog) => {
        navigate(`/blog/${blog.id}`)
    }
    let navigate = useNavigate()

    return(

        <div>
            {blog.map((blog) => {
                return(
                    <div>
                        <div onClick={() => {navigateToBlog(blog)}}>
                            {blog.title}
                        </div>
                        {blog.createdAt.substring(0,10)}
                        <br />
                        <img 
                            src = {blog.image} 
                            alt = ''
                            onClick={() => {navigateToBlog(blog)}} 
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleCard