import { Link } from 'react-router-dom'

const Nav = () => {
    

    return(
        <div>
            <h3>Welcome, User</h3>
            <nav>
                <Link to ='/blog/all'>Home</Link>
                <br/>
                <Link to ='/blog/create'>My Page</Link>
                <br/>
                <Link to ='/blog/all'>Notifications</Link>
                <br/>
                <Link to ='/login'>Logout</Link>
            </nav>
        </div>
    )
}

export default Nav