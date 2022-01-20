import { useEffect, useState } from "react"
// import SearchForm from "../components/SearchForm"

const API = process.env.REACT_APP_API_URL

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API + "/movies")
        .then(r => r.json())
        .then(data => {
            setMovies(data)
        })
    }, [setMovies])

    return(
        <div id="home">
            <h1>This is the HOME page</h1>
            {/* <SearchForm /> */}
        </div>
    )
}

export default Home