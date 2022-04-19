import React, { useState } from 'react';
import Reply from './Reply';
import Client from '../services/api';

function Comment({ user, comment, getBlogById }) {

    const [newReply, setNewReply] = useState({
        image: '',
        text: '',
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

    return (
        <div className='individual-comment'>
            <img src={comment.image} alt='comment'/>,
            {` ${comment.Author.username}: ${comment.text} `}
            {`Likes: ${comment.likes}`}
            <button className='like' onClick={Like}>Like</button>
            <button className='dislike' onClick={Dislike}>Dislike</button>

            <form onSubmit={handleSubmit}>
                <input className='comment-reply-image' name='image' value={newReply.image} placeholder='Enter Image URL' onChange={handleChange}/>
                <input className='comment-reply-name' name='text' value={newReply.text} placeholder='Enter your Reply' onChange={handleChange}/>
                <button>Reply</button>
            </form>

            {comment.Replies.map((reply) => (
                <Reply key={reply.id} reply={reply} />
            ))}

        </div>
    );
}

export default Comment;