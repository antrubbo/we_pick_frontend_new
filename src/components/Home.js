import { useEffect, useState } from "react"

const API = process.env.REACT_APP_API_URL

const Home = () => {
    const [movies, setMovies] = useState([])
    console.log(movies)

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
        </div>
    )
}

export default Home