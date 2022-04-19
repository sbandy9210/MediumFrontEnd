import React from 'react';

function Reply({ reply }) {
    return (
        <div>
            <img src={reply.image} alt='comment'/>,
            {`${reply.Author.username}: ${reply.text}`}
        </div>
    );
}

export default Reply;