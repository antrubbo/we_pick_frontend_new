import { useEffect, useState } from "react"
import PopCarousel from "../components/PopCarousel"

const API = process.env.REACT_APP_API_URL

const Home = () => {
    const [popMovies, setPopMovies] = useState([])

    useEffect(() => {
        fetch(`${API}/api/movies/popular`)
        .then(r => r.json())
        .then(data => {
            setPopMovies(data.results)
        })
    }, [])

    return(
        <div id="home">
            <h1>WePick!</h1>
            {<PopCarousel popMovies={popMovies}/>}
        </div>
    )
}

export default Home