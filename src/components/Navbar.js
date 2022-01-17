import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div id="navbar">
            This is the Navbar
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar