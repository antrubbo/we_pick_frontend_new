import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Navbar = ({ setFoundMovies }) => {
    return(
        <div id="navbar">
            <SearchForm setFoundMovies={setFoundMovies}/>
            <Link to="/">WePick</Link>&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;
            <Link to="/account">My Account</Link>
        </div>
    )
}

export default Navbar