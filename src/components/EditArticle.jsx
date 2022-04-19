import React, { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router'

const EditArticle = ({blog, setEditor}) => {
    const navigate =useNavigate()
    const [edit, setEdit] =useState({
        title: blog.title,
        image: blog.image,
        article: blog.article
    })

    const handleChange = (event) => {
        setEdit({...edit, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await Client.put(`/api/blog/update/${blog.id}`, edit)
        setEditor(false)
    }

    return(
        <div className='EditArticle'>
            <form onSubmit={handleSubmit}>
                <input type = 'text' name='title' placeholder = 'Article Title' className = 'articleTitle' onChange={handleChange} value={edit.title}/>
                <br />
                <br />
                <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' onChange={handleChange} value={edit.image}/>
                <br />
                <br />
                <input type = 'text' name='article' placeholder = 'Content' className = 'articleContent' onChange={handleChange} value={edit.article}/>
                <br />
                <br />
                <div className = 'articlePostButton'>
                    <button type = 'post'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default EditArticle