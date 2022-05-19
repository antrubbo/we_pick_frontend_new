import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [searchTerms, setSearchTerms] = useState("")

    const handleSearchInput = (evt) => {
        setSearchTerms(evt.target.value)
    }

    const handleSearch = (evt) => {
        evt.preventDefault()
        navigate(`/search-results?q=${searchTerms}`)
        setSearchTerms("")
    }

    return(
        <div id="search-container">
            <form className="search-form" onSubmit={handleSearch}>
            <input
                id="search-input"
                type="text"
                className="searchTerm"
                placeholder="Search by title..."
                value={searchTerms}
                onChange={handleSearchInput}
            /> 
            <button 
            id="search-button"
            type="submit"
            >
            Search</button>
            </form>
        </div>
    )
}

export default SearchForm