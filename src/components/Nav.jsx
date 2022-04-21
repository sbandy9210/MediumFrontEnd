import { useState } from 'react'
import { Link } from 'react-router-dom'
import PostArticle from './PostArticle'
import Modal from './Modal'

const Nav = ({authenticated, user, handleLogout}) => {
    let authenticatedNav

    const [show, setShow] = useState(false)

    if(authenticated){
        authenticatedNav = (
            <nav>
                <h2>Welcome, {user.username}</h2>
                <p><Link to ='/'  className='navLink'>Home</Link></p>
                <p><Link to ={`/${user.id}/my-page`}  className='navLink'>My Page</Link></p>
                <p><Link to ='/blog/all'  className='navLink'>Notifications</Link></p>
                <p><Link onClick={handleLogout} to ='/login'  className='navLink'>Logout</Link></p>
                <br/>
                <div className = 'articlePostButton'>
                    <button className='button' type='post' onClick={() => setShow(true)}>Create Post</button>
                </div>
            </nav>
        )
    }

    const publicNav = (
        <nav>
            <h2>Welcome</h2>
            <p><Link to ='/'  className='navLink'>Home</Link></p>
            <p><Link to ='/register'  className='navLink'>Register</Link></p>
            <p><Link to ='/login'  className='navLink'>Sign in</Link></p>
        </nav>
    )

    return(
        <div className='Nav'>
            {authenticated && user ? authenticatedNav : publicNav}
            <Modal onClose={() => setShow(false)} show={show} title='Post a new Blog!'>
                <PostArticle />
            </Modal>
        </div>
    )
}

export default Nav