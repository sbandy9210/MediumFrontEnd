import { useState } from 'react'

const ArticleCard = () => {

    const [blog, setBlog] = useState({
        title: "",
        image: "",
        article: "",
        author_id: 7
    }) 

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    return(
        <div>
            {/* <form action=('http://localhost:3001/') method='POST'> */}
            <form>
                <input type = 'text' name='title' placeholder = 'Article Title' className = 'articleTitle' />
                <br />
                <br />
                <input type = 'text' name='image' placeholder = 'Image Link' className = 'articleTitle' />
                <br />
                <br />
                <input type = 'text' name='article' placeholder = 'Content' className = 'articleContent' />
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