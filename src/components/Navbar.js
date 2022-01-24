import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Navbar = ({ setFoundMovies }) => {
    return(
        <div id="navbar">
            <SearchForm setFoundMovies={setFoundMovies}/>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/account">My Account</Link>
        </div>
    )
}

export default Navbar