import React, { useState } from 'react'
import Client from '../services/api'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const PostArticle = ({ userID }) => {
    
    const [blog, setBlog] = useState({
        title: "",
        image: "",
        article: "",
        author_id: userID
    }) 

    const [text, setText] = useState('')

    const [response, setResponse] = useState("")

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const setId = () => {
        setBlog({...blog, author_id: userID})
        setArticle()
    }

    const setArticle = () => {
        setBlog({...blog, article: text})
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
        }, 3000);
        
        window.location.reload(true)
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
                <ReactQuill theme='snow' value={text} onChange={setText}/>
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