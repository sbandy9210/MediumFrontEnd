import React from 'react';
import Client from '../services/api';

function Reply({ user, reply, getBlogById }) {

    const deleteReply = async (e) => {
        e.preventDefault()
        await Client.delete(`/api/reply/delete/${reply.id}`)
        getBlogById()
    }

    return (
        <div>
            <img src={reply.image} alt=''/>
            {`${reply.Author.username}: ${reply.text}`}
            {user.id === reply.author_id && <button onClick={deleteReply}>Delete</button>}
        </div>
    );
}

export default Reply;