import { Link } from "react-router-dom"

const SearchResults = ({ foundMovies }) => {

    let searchResults = foundMovies.map((movie, i) => {
        const { id, title } = movie
        let movieShow = `/movie/${id}`
        return <Link to={movieShow} key={title + i}>{title}<br /></Link>
    })

    return(
        <ul id="search-results">
            {searchResults}
        </ul>
    )
}

export default SearchResults