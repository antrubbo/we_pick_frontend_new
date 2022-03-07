import { useEffect, useState } from "react"
import PopCarousel from "../components/PopCarousel"
import '../stylesheets/home.css'

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
            <div id="welcome-container">
                <h1>WePick!</h1>
            </div>
            {<PopCarousel popMovies={popMovies}/>}
        </div>
    )
}

export default Home