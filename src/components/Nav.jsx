import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostArticle from './PostArticle'
import Modal from './Modal'

const Nav = ({authenticated, user, handleLogout, userID, notifications}) => {
    let authenticatedNav

    const [show, setShow] = useState(false)

    const [scrolled,setScrolled]= useState(false)

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 328 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    }) 

    let navbarClasses=['navbar']
    
    if(scrolled){
        navbarClasses.push('scrolled')
    }

    if(authenticated){
        authenticatedNav = (
            <nav>
                <h2>Welcome, {user.username}</h2>
                <p><Link to ='/'  className='navLink'>Home</Link></p>
                <p><Link to ={`/${user.id}/my-page`}  className='navLink'>My Page</Link></p>
                {notifications && <p><Link to ={`/${user.id}/notifications`}className='navLink'>Notifications <span className='notification-number'>{notifications[1].notifications}</span></Link></p>}
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
        // <div className='Nav'>
        <div className={navbarClasses.join(" ")}>
            {authenticated && user ? authenticatedNav : publicNav}
            <Modal onClose={() => setShow(false)} show={show} title='Post a new Blog!'>
                <PostArticle userID={userID}/>
            </Modal>
        </div>
    )
}

export default Nav