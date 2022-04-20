import PostArticle from '../components/PostArticle'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'

const MyPage = ({ user, authenticated }) => {

    let navigate = useNavigate()
    const { user_id } = useParams()

    const [data, setData] = useState([])

    const blogs = async () => {
        const myBlogs = await Client.get(`/api/blog/author/${user_id}`)
        setData(myBlogs.data)
    }
    
    useEffect(() => {
        blogs()
    }, [])

    return (user && authenticated ) ? (
        (data.length > 0) ? (
            <div className='MyPage'>
                <div className = 'myBlogs'>
                    <h2 className='myBlogsH2'>My Blogs</h2>
                {data && data.map((dat) => (
                    <div className='myBlogTitle' key={dat.id}>
                        <Link to={`/${user_id}/blog/${dat.id}`} className="navLink">
                            <div className='blogs'>
                                <img 
                                src ={dat.image}
                                alt = ""
                                style = {{width: '150px'}}
                                />
                                <div>
                                <h3 className='ArtCardTitle'>{dat.title}</h3>
                                <p className='ArtCardDate'>{dat.createdAt.substring(0,10)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
                <div className = 'myPost'>
                    <h2>Post a new Blog!</h2>
                    <PostArticle blogs={blogs}/>
                </div>
            </div>
        ) : (
            <div className = 'myPost'>
                <h2>Post a new Blog!</h2>
                <PostArticle blogs={blogs}/>
            </div>
        )
    ) : (
        <div className="SignIn">
            <h3>Oops! You must be signed in to access this page!</h3>
            <button onClick={()=> navigate('/login')}>Sign In</button>
        </div>
    ) 
}

export default MyPage