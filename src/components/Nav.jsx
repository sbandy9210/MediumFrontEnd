import { Link } from 'react-router-dom'

const Nav = ({authenticated, user, handleLogout}) => {
    let authenticatedNav

    if(authenticated){
        authenticatedNav = (
            <nav>
                <h3>Welcome, {user.username}</h3>
                <p><Link to ='/'>Home</Link></p>
                <p><Link to ='/my-page'>My Page</Link></p>
                <p><Link to ='/blog/all'>Notifications</Link></p>
                <p><Link onClick={handleLogout} to ='/login'>Logout</Link></p>
            </nav>
        )
    }

    const publicNav = (
        <nav>
            <h3>Welcome</h3>
            <p><Link to ='/'>Home</Link></p>
            <p><Link to ='/register'>Register</Link></p>
            <p><Link to ='/login'>Sign in</Link></p>
        </nav>
    )

    return(
        <div className='Nav'>
            {authenticated && user ? authenticatedNav : publicNav}
        </div>
    )
}

export default Nav