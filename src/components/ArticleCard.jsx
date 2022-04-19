import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react';
import DataContext from '../components/DataContext'


const ArticleCard = ({blog}) => {

    // const { blog, setBlog } = useContext(DataContext)

    // console.log(blog[0].id)
    
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
                        <br />
                        <img 
                            src = {blog.image} 
                            alt = ''
                            onClick={() => {navigateToBlog(blog)}} 
                        />
                        <br />
                        <p>
                            {blog.article}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleCard