import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Client from '../services/api'
import Comment from '../components/Comment'
import EditArticle from '../components/EditArticle'



const Article = ({ user, authenticated }) => {    
    const [edit, setEdit] = useState(false)
    const [blog, setBlog] = useState()
    const [newComment, setNewComment] = useState({
        image: '',
        text: '',
    })

    const { blog_id } = useParams()

    const getBlogById = async () => {           
        const currentBlog = await Client.get(`/api/blog/${blog_id}`)
        // const currentBlog = await Client.get('/api/blog/1')
        console.log(currentBlog.data)
        setBlog(currentBlog.data)
        console.log(blog.author_id)
    }

    const handleChange = (event) => {
        setNewComment({...newComment, [event.target.name]: event.target.value})
    }

    const editPost = () => {
        setEdit(true)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await Client.post(`/api/comment/new/${user.id}/${blog_id}`, newComment)
        // await Client.post(`/api/comment/new/${user.id}/1`, newComment)

        setNewComment({
            image: '',
            text: '',
        })

        getBlogById()
    }

    useEffect(() => {
         getBlogById()
    }, [])


    return (blog) ? (
        (!edit) ? ( 
            <div>
            <div className = 'articleDiv'>
               {user.id === blog.author_id && <button onClick={editPost}> Edit</button>}
                <img src={blog.image} alt='Blog image' />
                <h2>{blog.title}</h2>
                <p>{blog.article}</p>
            </div>

            <div className='Comments'>
                <h4>Comments</h4>
                <form onSubmit={handleSubmit}>
                    <input className='add-comment-image' name='image' value={newComment.image} placeholder='add image URL' onChange={handleChange}/>
                    <input className='add-comment-text' name='text' value={newComment.text} placeholder='Comment' onChange={handleChange} />
                    <button className='add-comment-button'>Add Comment</button>
                </form>
                {blog.Comments.map((comment) => (
                    <div className = 'commentDiv'>
                        <Comment key={comment.id} user={user} comment={comment} getBlogById={getBlogById}/>
                    </div> 
                ))}
            </div>
        </div>
        ) : (<EditArticle blog={blog} setEditor={setEdit} />)
    ) : (
        <div>
            <p>Loading</p>
        </div>
    )
}

export default Article