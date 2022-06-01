import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Client from '../services/api'
import Comment from '../components/Comment'
import EditArticle from '../components/EditArticle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheckCircle, faTrashCan, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { faUserPlus, faUserAltSlash } from "@fortawesome/free-solid-svg-icons"




const Article = ({ user, authenticated, subscribedTo, checkSubscribe }) => {    
    const [edit, setEdit] = useState(false)
    const [blog, setBlog] = useState()
    const [newComment, setNewComment] = useState({
        image: '',
        text: '',
    })

    const { blog_id } = useParams()

    const getBlogById = async () => {           
        const currentBlog = await Client.get(`/api/blog/${blog_id}`)
        setBlog(currentBlog.data)
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

        setNewComment({
            image: '',
            text: '',
        })

        getBlogById()
    }

    const handleSubscribe = async () => {
        await Client.post(`/api/follow/${user.id}/${blog.author_id}`)
        checkSubscribe(user.id)
    }

    const handleUnSubscribe = async () => {
        await Client.delete(`/api/unsubscribe/${user.id}/${blog.author_id}`)
        checkSubscribe(user.id)
    }

    const subscribeButton = () => {
        if (user.id !== blog.author_id && subscribedTo && subscribedTo.includes(blog.author_id)) {
            return <button className='subscribeButton add-comment-button' onClick={handleUnSubscribe}>Unsubscribe <FontAwesomeIcon icon={faUserAltSlash} className="subscribeIcon"/></button>
        }
        else if (user.id !== blog.author_id) {
            return <button className='subscribeButton add-comment-button' onClick={handleSubscribe}>Subscribe <FontAwesomeIcon icon={faUserPlus} className="subscribeIcon"/></button>
        }
    }

    useEffect(() => {
         getBlogById()
    }, [])

    return (blog) ? (
        (user && authenticated) ? (
            (!edit) ? ( 
                <div className='Article'>
                    {user.id === blog.author_id && <FontAwesomeIcon icon={faPenToSquare} onClick={editPost} className="editIcon" />}
                        <br/>
                    <div className = 'articleDiv'>
                        <h2>{blog.title}</h2>
                        <div className='article-author-section'>
                            <img src={blog.Author.profilepic} alt='profile' className="blogAuthorImage"/>    
                            <div className='article-author-info'>
                                <h3 className='blogAuthor'>{blog.Author.username} | {blog.createdAt.substring(0,10)} </h3> 
                                {subscribeButton()}
                                {/* {user.id !== blog.author_id && <button className='subscribeButton add-comment-button' onClick={handleSubscribe}>Subscribe <FontAwesomeIcon icon={faUserPlus} className="subscribeIcon"/></button>} */}
                            </div>
                        </div>
                        <br/>
                        <img src={blog.image} alt='' className='articleImg'/>
                        <div className="blogArticle" dangerouslySetInnerHTML={{__html: blog.article}}></div>
                    </div>
    
                    <div className='Comments'>
                        <h4>Comments</h4>
                        <form onSubmit={handleSubmit}>
                            <input className='add-comment-image' name='image' value={newComment.image} placeholder='add image URL' onChange={handleChange}/>
                            <input className='add-comment-text' name='text' value={newComment.text} placeholder='Comment' onChange={handleChange} />
                            <button className='add-comment-button'>Add Comment</button>
                        </form>
                        {blog.Comments.map((comment) => (
                            <Comment key={comment.id} user={user} authenticated={authenticated} comment={comment} getBlogById={getBlogById}/>
                        ))}
                    </div>
                </div>
            ) : (<EditArticle blog={blog} setEditor={setEdit} getBlogById={getBlogById}/>)
        ) : (
            <div className='Article'>
                <div className = 'articleDiv'>
                <h2>{blog.title}</h2>
                    <div className='article-author-info'>
                        <img src={blog.Author.profilepic} alt='profile' className="blogAuthorImage"/>
                        <h3 className='blogAuthor'>{blog.Author.username} | {blog.createdAt.substring(0,10)}</h3>
                    </div>
                    <br/>
                    <img src={blog.image} alt='' className='articleImg'/>
                    <p>{blog.article}</p>
                </div>
    
                <div className='Comments'>
                    <h4>Comments</h4>
                    {blog.Comments.map((comment) => (
                        <Comment key={comment.id} user={user} authenticated={authenticated} comment={comment} getBlogById={getBlogById}/>
                    ))}
                </div>
            </div>
        )
    ) : (
        <div className='Loading'>
            <p>Loading</p>
        </div>
    )
}

export default Article