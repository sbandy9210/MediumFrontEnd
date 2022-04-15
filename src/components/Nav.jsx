import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <h3>Welcome, User</h3>
            <nav>
                <Link to ='/home'>Home</Link>
                <br/>
                <Link to ='/my-page'>My Page</Link>
                <br/>
                <Link to ='/'>Notifications</Link>
                <br/>
                <Link to ='/'>Logout</Link>
            </nav>
        </div>
    )
}

export default Nav