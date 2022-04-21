import React, { useState, useEffect } from 'react'
import DataContext from './DataContext'
import Client from '../services/api'
import { useParams } from 'react-router'


const PostArticle = ({ userID }) => {
    
    const [blog, setBlog] = useState({
        title: "",
        image: "",
        article: "",
        author_id: userID
    }) 

    const [response, setResponse] = useState("")

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const setId = () => {
        setBlog({...blog, author_id: userID})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setId()
        const res = await Client.post('/api/blog/create', blog)

        setBlog({
            title: "",
            image: "",
            article: "",
            author_id: userID
        })

        setResponse(res.data.msg)
        setTimeout(() => {
            setResponse("")  
        }, 2000);
        
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
                <br />
                <br />
                <div className = 'articlePostButton'>
                    <button className='button' type='post' onClick={setId}>Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostArticle