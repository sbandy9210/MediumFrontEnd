import React, { useState, useEffect } from 'react'
import Client from '../services/api'
import { useNavigate, useParams } from 'react-router'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashCan, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"

const EditArticle = ({blog, setEditor, getBlogById}) => {
    const { user_id } = useParams()
    const navigate = useNavigate()

    const [edit, setEdit] = useState({
        title: blog.title,
        image: blog.image,
        article: blog.article
    })

    const [text, setText] = useState(blog.article)

    const handleChange = (event) => {
        setEdit({...edit, [event.target.name]: event.target.value})
    }

    const setArticle = () => {
        setEdit({...edit, article: text})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setArticle()

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

    useEffect(() => {
        setArticle()
      }, [text])

    return(
        <div className='EditArticle'>
            <form onSubmit={handleSubmit}>
                <input type = 'text' name='title' placeholder = 'Article Title' className = 'articleTitle' onChange={handleChange} value={edit.title}/>
                <br />
                <br />
                <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' onChange={handleChange} value={edit.image}/>
                <br />
                <br />
                {/* <textarea name='article' placeholder='Content' className = 'articleContent' onChange={handleChange} value={edit.article}/> */}
                <ReactQuill theme='snow' value={text} onChange={setText}/>
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