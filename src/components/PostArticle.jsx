import React, { useState, useContext } from 'react'
import DataContext from './DataContext'
import Client from '../services/api'


const PostArticle = (props) => {
    const [blog, setBlog] = useState({
        title: "",
        image: "",
        article: "",
        author_id: props.user.id
    }) 

    const [response, setResponse] = useState("")

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await Client.post('/api/blog/create', blog)

        setBlog({
            title: "",
            image: "",
            article: "",
            author_id: props.user.id
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
                <input type = 'text' name='article' placeholder = 'Content' className = 'articleContent' onChange={handleChange} value={blog.article}/>
                <br />
                <br />
                <div className = 'articlePostButton'>
                    <button type = 'post'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostArticle