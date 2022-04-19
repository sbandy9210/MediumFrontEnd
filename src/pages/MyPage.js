import PostArticle from '../components/PostArticle'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyPage = (props) => {
    const [data, setData] = useState([])

useEffect(() => {
    const blogs = async () => {
        const myBlogs = await Client.get(`/api/blog/author/${props.user.id}`)
        console.log(myBlogs.data)
        setData(myBlogs.data)
    }
    blogs()
}, [])

   

    return(
        <div>
            <div className = 'myBlogs'>
            {data && data.map((dat) => (
                <div key={dat.id}>
                    <Link to={`/blog/${dat.id}`}>
                    <h3>{dat.title}</h3>
                    </Link>
                    <img 
                        src ={dat.image}
                        alt = ''
                        style = {{width: '150px'}}
                    />
                </div>
            ))}
            </div>
            <div className = 'myPageRightDiv'>
                <PostArticle user={props.user}/>
            </div>

        </div>
    )
}

export default MyPage