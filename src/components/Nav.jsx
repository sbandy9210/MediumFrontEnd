import { Link } from 'react-router-dom'

const Nav = ({authenticated, user, handleLogout}) => {
    let authenticatedNav

    if(authenticated){
        authenticatedNav = (
            <nav>
                <h2>Welcome, {user.username}</h2>
                <p><Link to ='/'  className='navLink'>Home</Link></p>
                <p><Link to ='/my-page'  className='navLink'>My Page</Link></p>
                <p><Link to ='/blog/all'  className='navLink'>Notifications</Link></p>
                <p><Link onClick={handleLogout} to ='/login'  className='navLink'>Logout</Link></p>
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
        </div>
    )
}

export default Nav