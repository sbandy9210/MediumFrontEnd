import PostArticle from '../components/PostArticle'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyPage = ({user}) => {
    const [data, setData] = useState([])

    const blogs = async () => {
        const myBlogs = await Client.get(`/api/blog/author/${user.id}`)
        console.log(myBlogs.data)
        setData(myBlogs.data)
    }
    
    useEffect(() => {
        blogs()
    }, [])

    blogs()

    return (data.length > 0) ? (
        <div className='MyPage'>
            <div className = 'myBlogs'>
            {data && data.map((dat) => (
                <div key={dat.id}>
                    <Link to={`/blog/${dat.id}`}>
                    <h3>{dat.title}</h3>
                    </Link>
                    <img 
                        src ={dat.image}
                        alt = ""
                        style = {{width: '150px'}}
                    />
                </div>
            ))}
            </div>
            <div className = 'myPost'>
                <h2>Post a new Blog!</h2>
                <PostArticle user={user}/>
            </div>

        </div>
    ) : (
        <p>Loading</p>
    )
}
export default MyPage