import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Client from '../services/api'
import Comment from '../components/Comment'



const Article = (props) => {    

    const [blog, setBlog] = useState()

    const { blog_id } = useParams()

    const getBlogById = async () => {
        // const currentBlog = await Client.get(`/api/blog/${blog_id}`)
        const currentBlog = await Client.get('/api/blog/1')
        console.log(currentBlog.data)
        setBlog(currentBlog.data)
    }

    useEffect(() => {
         getBlogById()
    }, [])

    return(blog) ? (
        <div>
            <div className = 'articleDiv'>
                <img src={blog.image} alt='Blog image' />
                <h2>{blog.title}</h2>
                <p>{blog.article}</p>
            </div>

            <div className='Comments'>
                <h4>Comments</h4>
                {blog.Comments.map((comment) => (
                    <p>
                        <img src={comment.image} alt='comment'/>,
                        {`${comment.Author.username}: ${comment.text}`}
                    </p>,
                    comment.Replies.map((reply) => (
                        reply.text
                    ))
                    
                ))}
            </div>
            {/* <div className = 'commentDiv'>
                <Comment />
            </div> */}

        </div>
    ) : (
        <div>
            <p>Loading</p>
        </div>
    )
}

export default Article