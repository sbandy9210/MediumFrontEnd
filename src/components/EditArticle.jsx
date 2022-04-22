import React, { useState } from 'react'
import Client from '../services/api'
import { useNavigate, useParams } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashCan, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"

const EditArticle = ({blog, setEditor, getBlogById}) => {
    const { user_id } = useParams()
    const navigate = useNavigate()

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
        await Client.put(`/api/blog/update/${blog.id}`, edit)
        setEditor(false)
        window.location.reload(true)
    }

    const deleteArticle = async (e) => {
        e.preventDefault()
        await Client.delete(`/api/blog/delete/${blog.id}`)
        getBlogById()
        navigate(`/${user_id}/my-page`)
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
                <div className='articlePostButton'>
                    <FontAwesomeIcon icon={faCheckCircle} onClick={handleSubmit} className="postIcon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={deleteArticle} className="deleteIcon" />
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={() => setEditor(false)} className="cancelIcon" />
                </div>
            </form>
        </div>
    )
}

export default EditArticle