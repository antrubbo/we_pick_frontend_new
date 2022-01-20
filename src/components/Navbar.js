import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div id="navbar">
            This is the Navbar
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/account">My Account</Link>
        </div>
    )
}

export default Navbar