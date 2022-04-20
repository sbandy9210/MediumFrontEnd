import React, { useState, useContext } from 'react'
import DataContext from './DataContext'
import Client from '../services/api'
import { useParams } from 'react-router'


const PostArticle = ({ blogs }) => {

    const { user_id } = useParams()

    const [blog, setBlog] = useState({
        title: "",
        image: "",
        article: "",
        author_id: user_id
    }) 

    const [response, setResponse] = useState("")

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        // setBlog(blog => ({...blog, author_id: user.id}))
        const res = await Client.post('/api/blog/create', blog)

        setBlog({
            title: "",
            image: "",
            article: "",
            author_id: user_id
        })

        setResponse(res.data.msg)
        setTimeout(() => {
            setResponse("")  
        }, 2000);
        
        blogs()
    }

    return(
        <div>
            <p>{response}</p>
            <form onSubmit={handleSubmit}>
                <input type = 'text' name='title' placeholder = 'Article Title' className = 'articleTitle' onChange={handleChange} value={blog.title}/>
                <br />
                <br />
                <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' onChange={handleChange} value={blog.image}/>
                <br />
                <br />
                <textarea name='article' placeholder='Type Your Article Here' className='articleTextArea' onChange={handleChange} value={blog.article} />
                {/* <input type = 'text' name='article' placeholder = 'Content' className = 'articleContent' onChange={handleChange} value={blog.article}/> */}
                <br />
                <br />
                <div className = 'articlePostButton'>
                    <button className='button' type = 'post'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostArticle