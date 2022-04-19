import PostArticle from '../components/PostArticle'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyPage = ({user}) => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    const blogs = async () => {
        const myBlogs = await Client.get(`/api/blog/author/${user.id}`)
        setData(myBlogs.data)
    }

    if(reload && data.length === 0){
        blogs()
    }

    useEffect(() => {
        blogs()
        setReload(true)
    }, [])

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