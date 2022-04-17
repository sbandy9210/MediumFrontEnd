const Comment = () => {
    return(
        <div>
            {/* <form action = ('http://localhost:3001/') method = 'POST'> */}
            <form method = 'POST'>
                <input type = 'text' name = 'title' placeholder = 'Comment' className = 'commentTextBox'/>
                <br />
                <br />
                <button type = 'post'>Post</button>
            </form>
        </div>
    )
}

export default Comment