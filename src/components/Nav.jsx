import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <Link to ='/home'>Home</Link>
            <Link to ='/my-page'>My Page</Link>
            <Link to ='/'>Notifications</Link>
            <Link to ='/'>Logout</Link>
        </nav>
    )
}

export default Nav