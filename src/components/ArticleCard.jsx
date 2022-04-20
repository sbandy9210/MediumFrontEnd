import { useNavigate } from 'react-router-dom'
import React from 'react';


const ArticleCard = ({blog, user, authenticated}) => {
    
    let navigate = useNavigate()

    const navigateToBlog = (blog) => {
        if(user && authenticated){
            navigate(`/${user.id}/blog/${blog.id}`)
        }else{
            navigate(`/blog/${blog.id}`)
        }
    }
    

    return(

        <div className = 'articles'>
            <div onClick={() => {navigateToBlog(blog)}} className="ArticleCard">
                    <div className='ArticleCardImg'>
                    <img 
                    src = {blog.image} 
                    alt = ''
                    style={{width: '200px'}}
                />
                </div>
                <div className='ArticlCardTitle'>
                    <h3 className='ArtCardTitle'>{blog.title}</h3>
                    <p className='ArtCardDate'>{blog.createdAt.substring(0,10)}</p>
                </div>
            </div>   
        </div>
    )
}

export default ArticleCard