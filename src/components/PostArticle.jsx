const ArticleCard = () => {
    return(
        <div>
            {/* <form action = ('http://localhost:3001/') method = 'POST'> */}
            <form method = 'POST'>
                    <input type = 'text' name = 'title' placeholder = 'Article Title' className = 'articleTitle' />
                    <br />
                    <br />
                    <input type = 'text' name = 'content' placeholder = 'Content' className = 'articleContent' />
                    <br />
                    <br />
                    <div className = 'articlePostButton'>
                        <button type = 'post'>Post</button>
                    </div>
                </form>
        </div>
    )
}

export default ArticleCard