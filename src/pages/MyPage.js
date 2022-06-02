import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import ArticleCard from '../components/ArticleCard'

const MyPage = ({ user, authenticated }) => {

    let navigate = useNavigate()
    const { user_id } = useParams()

    const [data, setData] = useState([])
    const [subscribedT0, setSubscribedTo] = useState([])
    const [myBlog, setMyBlog] = useState(true)

    const blogs = async () => {
        const myBlogs = await Client.get(`/api/blog/author/${user_id}`)
        setData(myBlogs.data)
    }

    const showMyBlog = () => {
        return (
           <div className='container'>
               <h2 className='myBlogsH2'>My Blogs</h2>
                {data && data.map((dat) => (
                    <div className='myBlogTitle' key={dat.id}>
                        <Link to={`/${user_id}/blog/${dat.id}`} className="navLink">
                            <ArticleCard key={dat.id} blog={dat} user={user} authenticated={authenticated} author={dat.Author}/>
                        </Link>
                    </div>
                ))}
           </div> 
        )
    }

    const showSubscrtibeTo = () => {
        return (
            <div className='container'>
                <h2 className='myBlogsH2'>{} Blogs</h2>
                 {subscribedT0 && subscribedT0.map((data) => (
                     <div className='myBlogTitle' key={data.id}>
                         <Link to={`/${user_id}/blog/${data.id}`} className="navLink">
                             
                         </Link>
                     </div>
                 ))}
            </div> 
         )
    }

    const displaySubcribedTo = async () => {
        const subscribed = await Client.get(`api/following/${user_id}`)
        console.log(subscribed.data.Following)
        setSubscribedTo(subscribed.data.Following)
    }
    
    useEffect(() => {
        blogs()
        displaySubcribedTo()
    }, [])

    return (user && authenticated ) ? (
        (data.length > 0) ? (
            <div className='ParentDiv'>
                <div className='MyPage'>
                    <div className = 'myBlogs'>
                        {myBlog && showMyBlog()}
                        {!myBlog && showSubscrtibeTo()}
                    </div>
                </div>
                <div className='SubscribedTo'>
                    <h2 className='myBlogsH2'>Subscribed to:</h2>
                    {/* {showSubscrtibeTo()} */}
                </div>
            </div>
        ) : (
            <div className = 'MyPage'>
                <h2 className='myBlogsH2'>You have no blog post. Create your First!</h2>
            </div>
        )
    ) : (
        <div className="SignIn">
            <h3>Oops! You must be signed in to access this page!</h3>
            <button className='signInButton' onClick={()=> navigate('/login')}>Sign In</button>
        </div>
    ) 
}

export default MyPage