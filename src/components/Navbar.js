import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import '../stylesheets/navbar.css'

const Navbar = ({ setFoundMovies }) => {
    return(
        <div id="navbar">
            <div id="nav-search">
                <SearchForm setFoundMovies={setFoundMovies}/>
            </div>
            <div id="nav-buttons">
                <Link to="/">WePick</Link>&nbsp;&nbsp;
                <Link to="/login">Login</Link>&nbsp;&nbsp;
                <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;
                <Link to="/account">My Account</Link>
            </div>
        </div>
    )
}

export default Navbar