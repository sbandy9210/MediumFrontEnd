import React, { useState } from 'react';
import Reply from './Reply';
import Client from '../services/api';

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
                <img src={comment.image} alt=''/>
                {` ${comment.Author.username}: ${comment.text} `}
                {`Likes: ${comment.likes}`}
                <button className='like' onClick={Like}>Like</button>
                <button className='dislike' onClick={Dislike}>Dislike</button>
                {user.id === comment.author_id && <button className='editButton' onClick={EditPost}>Edit</button>}
    
                <form onSubmit={handleSubmit}>
                    <input className='comment-reply-image' name='image' value={newReply.image} placeholder='Enter Image URL' onChange={handleChange}/>
                    <input className='comment-reply-name' name='text' value={newReply.text} placeholder='Enter your Reply' onChange={handleChange}/>
                    <button className='button'>Reply</button>
                </form>
    
                {comment.Replies.map((reply) => (
                    <Reply key={reply.id} user={user} reply={reply} getBlogById={getBlogById}/>
                ))}
    
            </div>
        ) : (
            <div className='edit-comment'>
                <form onSubmit={handleEditSubmit}>
                    <input type = 'text' name='text' placeholder = 'Article Title' className = 'articleTitle' onChange={handleEditChange} value={editComment.text}/>
                    <br />
                    <br />
                    <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' onChange={handleEditChange} value={editComment.image}/>
                    <br />
                    <br />
                    <div className = 'articlePostButton'>
                        <button className='button' type = 'post'>Post</button>
                        <button className='button' onClick={deleteComment}>Delete</button>
                    </div>
                </form>
            </div>
        )
    ) : (
        <div className='individual-comment'>
            <img src={comment.image} alt=''/>
            {` ${comment.Author.username}: ${comment.text} `}
            {`Likes: ${comment.likes}`}

            <button className='like' onClick={Like}>Like</button>
            <button className='dislike' onClick={Dislike}>Dislike</button>
            {user.id === comment.author_id && <button onClick={EditPost}>Edit</button>}

            <form onSubmit={handleSubmit}>
                <input className='comment-reply-image' name='image' value={newReply.image} placeholder='Enter Image URL' onChange={handleChange}/>
                <input className='comment-reply-name' name='text' value={newReply.text} placeholder='Enter your Reply' onChange={handleChange}/>
                <button className='reply'>Reply</button>
            </form>


            {comment.Replies.map((reply) => (
                <Reply key={reply.id} user={user} authenticated={authenticated} reply={reply} getBlogById={getBlogById}/>
            ))}
        </div>
    )
}

export default Comment;