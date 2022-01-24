// import Modal from 'react-bootstrap/Modal'
// import { useNavigate } from 'react-router-dom'

import { Link } from "react-router-dom"

const SearchResults = ({ foundMovies }) => {
   
    function handleResultClick(mov) {
        fetch("https://we-pick.herokuapp.com/movies", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: mov.table.title,
                description: mov.table.overview,
                release_date: mov.table.release_date,
                genres: mov.table.genre_ids,
                poster_path: mov.table.poster_path,
                search_id: mov.table.id
            })
        })
        .then(r => r.json())
        .then(movie => {
            console.log(movie)
        })
    }

    let searchResults = foundMovies.map((movie, i) => {
        const { id, title } = movie.table
        let link = `/movie/${id}`
        return <Link to={link} key={title + i} onClick={() => handleResultClick(movie)}>{title}<br /></Link>
    })

    return(
        <ul id="search-results">
            {searchResults}
        </ul>
    )
}

export default SearchResults