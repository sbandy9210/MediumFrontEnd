import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react';
import DataContext from '../components/DataContext'


const ArticleCard = ({blog}) => {

    // const { blog, setBlog } = useContext(DataContext)

    console.log({blog})

    const navigateToBlog = (blog) => {
        navigate(`${blog._id}`)
    }
    
    let navigate = useNavigate()

    return(

        <div>
            hello
            {/* {props.blog.map((blog) => {
                return(
                    <div>
                        <img 
                            src = {blog.image} 
                            alt = ''
                            onClick={navigateToBlog} 
                        />
                        <br />
                        {props.blog.title}
                        <br />
                        <p>
                            {props.blog.article}
                        </p>
                        <div className = 'editAndDeleteButton'>
                            <button>Edit</button>
                            <br />
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })} */}

        </div>
    )
}

export default ArticleCard