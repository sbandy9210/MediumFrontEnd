const Comment = () => {
    return(
        <div>
            <form action = {'http://localhost:3001/comment/new/:author_id/:blog_id'} method = 'POST'>
                <input type = 'text' name = 'title' placeholder = 'Comment' className = 'commentTextBox'/>
                <br />
                <br />
                <button type = 'post'>Post</button>
            </form>
        </div>
    )
}

export default Comment