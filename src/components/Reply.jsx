import React from 'react';
import Client from '../services/api';

function Reply({ user, authenticated, reply, getBlogById }) {

    const deleteReply = async (e) => {
        e.preventDefault()
        await Client.delete(`/api/reply/delete/${reply.id}`)
        getBlogById()
    }

    return (user && authenticated) ? (
        <div className='replyComment'>
            <div>
                {/* Empty Div for Spacing */}
            </div>
            <div className='commentUser'>
                <img src={reply.Author.profilepic} alt='profile' className='commentUserPic'/> <br/>
                {`${reply.Author.username}`} <br/>
                {user.id === reply.author_id && <button className='button' onClick={deleteReply}>Delete</button>}
            </div>
            <div className='replyText'>
                <img src={reply.image} alt='' className='replyImage'/> <br/>
                {`${reply.text}`}
            </div>
        </div>
    ) : (
        // <div className='replyComment'>
        //     <img src={reply.image} alt=''/>
        //     <img src={reply.Author.profilepic} alt='profile' style={{height: '40px'}}/>{`${reply.Author.username}: ${reply.text}`}
        // </div>
        <div className='replyComment'>
            <div>
                {/* Empty Div for Spacing */}
            </div>
            <div className='commentUser'>
                <img src={reply.Author.profilepic} alt='profile' className='commentUserPic'/> <br/>
                {`${reply.Author.username}`} <br/>
            </div>
            <div className='replyText'>
                <img src={reply.image} alt='' className='replyImage'/> <br/>
                {`${reply.text}`}
            </div>
        </div>
    );
}

export default Reply;