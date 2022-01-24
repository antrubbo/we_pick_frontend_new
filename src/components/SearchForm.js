import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const SearchForm = ({ setFoundMovies }) => {
    const navigate = useNavigate()
    const [searchTerms, setSearchTerms] = useState("")
    // const [foundMovies, setFoundMovies] = useState([])

    const handleSearchInput = (evt) => {
        setSearchTerms(evt.target.value)
    }

    const handleSearch = (evt) => {
        evt.preventDefault()
        fetch(`${API}/search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: searchTerms
            })
        })
        .then(res => res.json())
        .then(movies => {
            setFoundMovies(movies.table.results)
            navigate("/search-results")
        })
        .catch(err => console.log(err))
    }

    return(
        <div id="search-container">
            

            <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                className="searchTerm"
                placeholder="Search by title..."
                value={searchTerms}
                onChange={handleSearchInput}
                /> 
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm