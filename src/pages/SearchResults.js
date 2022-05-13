import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const SearchResults = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [foundMovies, setFoundMovies] = useState([])
    let searchTerm = searchParams.get('q')

    useEffect(() => {
        fetch(`${API}/api/movies?title=${searchTerm}`)
        .then(res => res.json())
        .then(movies => {
            if (movies.error){
                console.log(movies.error)
            } else {
                setFoundMovies(movies)
            }
        })
        .catch(err => console.log(err))
    }, [searchTerm])

    let searchResults = foundMovies.map((movie, i) => {
        const { id, title } = movie
        let movieShow = `/movies/${id}`
        return <Link to={movieShow} key={title + i}>{title}<br /></Link>
    })

    return(
        <ul id="search-results">
            {searchResults}
        </ul>
    )
}

export default SearchResults