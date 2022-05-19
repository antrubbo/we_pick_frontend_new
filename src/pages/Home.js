import { useEffect, useState } from "react"
import PopCarousel from "../components/PopCarousel"
import Footer from '../layout/Footer';
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
        // <div id="home">
        //     <div id="welcome-container">
        //         <h1>WePick!</h1>
        //     </div>
        //     {<PopCarousel popMovies={popMovies}/>}
        // </div>
        <main>
			<div id="hero-image">
				<div id="hero-text">WePick</div>
			</div>
			<div id="main-content">
				<div id="popular-scroll">
                    <p>What's Popular</p>
                    {<PopCarousel popMovies={popMovies}/>}
                </div>
				<div id="account-overview">Account Overview</div>
				<div id="newsletter">Newsletter Signup</div>
			</div>
            <Footer />
		</main>
    )
}

export default Home