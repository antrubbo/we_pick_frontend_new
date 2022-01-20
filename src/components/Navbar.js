import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Navbar = () => {
    return(
        <div id="navbar">
            <SearchForm />
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/account">My Account</Link>
        </div>
    )
}

export default Navbar