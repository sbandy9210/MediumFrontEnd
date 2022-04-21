import React, { useState } from 'react';
import Reply from './Reply';
import Client from '../services/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, } from "@fortawesome/free-regular-svg-icons"


function Comment({ user, authenticated, comment, getBlogById }) {

    const [edit, setEdit] = useState(false)

    const [newReply, setNewReply] = useState({
        image: '',
        text: ''
    })

    const handleChange = (event) => {
        setNewReply({...newReply, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await Client.post(`/api/reply/new/${user.id}/${comment.id}`, newReply)

        setNewReply({
            image: '',
            text: '',
        })

        getBlogById()
    }

    const Like = async () => {
        await Client.put(`/api/comment/like/${comment.id}`)
        getBlogById()
    }

    const Dislike = async () => {
        await Client.put(`/api/comment/dislike/${comment.id}`)
        getBlogById()
    }

    const [editComment, setEditComment] = useState({
        image: comment.image,
        text: comment.text
    })

    const handleEditChange = (event) => {
        setEditComment({...editComment, [event.target.name]: event.target.value})
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault()
        await Client.put(`/api/comment/edit/${comment.id}`, editComment)
        setEdit(false)
        getBlogById()
    }

    const deleteComment = async (e) => {
        e.preventDefault()
        await Client.delete(`/api/comment/delete/${comment.id}`)
        getBlogById()
    }

    const EditPost = () => {
        setEdit(true)
    }

    return (user && authenticated) ? (
        (!edit) ? (
            <div className='individual-comment'>
                <div className='commentInitial'>
                    <div className='commentUser'>
                        <img src={comment.Author.profilepic} alt='profile' className='commentUserPic'/> <br></br> 
                        {comment.Author.username} <br></br> 
                        {user.id === comment.author_id && <button className='editButton' onClick={EditPost}>Edit Comment</button>}
                    </div>
                    <div className='commentText'>
                        <img className='commentTextPic' src={comment.image} alt=''/>
                        <p>{comment.text}</p>
                    </div>
                    <div className='commentLikes'>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={Like} className="thumbUp" /> 
                            <br/>
                        {`Likes: ${comment.likes}`} 
                            <br/>
                        <FontAwesomeIcon icon={faThumbsDown} onClick={Dislike} className="thumbDown" />
                    </div>
                </div>

                {/* {user.id === comment.author_id && <button className='editButton' onClick={EditPost}>Edit</button>} */}
    
                <form onSubmit={handleSubmit}>
                    <input className='comment-reply-image' name='image' value={newReply.image} placeholder='Enter Image URL' onChange={handleChange}/>
                    <input className='comment-reply-name' name='text' value={newReply.text} placeholder='Reply' onChange={handleChange}/>
                    <button className='reply'>Reply</button>
                </form>
    
                {comment.Replies.map((reply) => (
                    <Reply key={reply.id} user={user} authenticated={authenticated} reply={reply} getBlogById={getBlogById}/>
                ))}
    
            </div>
        ) : (
            <div className='edit-comment'>
                <form onSubmit={handleEditSubmit}>
                    <input type = 'text' name='text' placeholder = 'Comment' className = 'articleTitle' onChange={handleEditChange} value={editComment.text}/>
                    <br />
                    <br />
                    <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' onChange={handleEditChange} value={editComment.image}/>
                    <br />
                    <br />
                    <div className = 'articlePostButton'>

            

                        <button className='button' type = 'post'>Post</button>
                        <button className='button' onClick={deleteComment}>Delete</button>
                        <button className='button' onClick={() => setEdit(false)}>Cancel</button>

                    </div>
                </form>
            </div>
        )
    ) : (
        <div className='individual-comment'>
            {/* <img src={comment.image} alt=''/>
            <br/>
            <img src={comment.Author.profilepic} alt='profile' style={{height: '40px'}}/> {`${comment.Author.username}: ${comment.text} `}
            <br/>
            {`Likes: ${comment.likes}`}
            <br/> */}
            <div className='commentInitial'>
                <div className='commentUser'>
                    <img src={comment.Author.profilepic} alt='profile' className='commentUserPic'/> <br></br> 
                    {comment.Author.username} <br></br> 
                </div>
                <div className='commentText'>
                    <img className='commentTextPic' src={comment.image} alt=''/>
                    <p>{comment.text}</p>
                </div>
                <div className='commentLikes'>
                    <FontAwesomeIcon icon={faThumbsUp} onClick={Like} className="thumbUp" /> 
                        <br/>
                    {`Likes: ${comment.likes}`} 
                        <br/>
                    <FontAwesomeIcon icon={faThumbsDown} onClick={Dislike} className="thumbDown" />
                </div>
            </div>
            {comment.Replies.map((reply) => (
                <Reply key={reply.id} user={user} authenticated={authenticated} reply={reply} getBlogById={getBlogById}/>
            ))}
        </div>
    )
}

export default Comment;