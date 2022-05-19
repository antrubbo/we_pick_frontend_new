import { useEffect, useState } from "react"
import PopCarousel from "../components/PopCarousel"
import Footer from '../layout/Footer';
import '../stylesheets/home.css'

const API = process.env.REACT_APP_API_URL

const Home = () => {
    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch(`${API}/api/movies/popular`)
        .then(r => r.json())
        .then(data => {
            setPopularMovies(data.results)
        })
    }, [])

    return(
        <main>
			<div id="hero-image">
				<div id="hero-text">WePick</div>
			</div>
			<div id="main-content">
				<div id="popular-scroll">
                    <p>What's Popular</p>
                    {<PopCarousel popularMovies={popularMovies}/>}
                </div>
				<div id="account-overview">Account Overview</div>
				<div id="newsletter">Newsletter Signup</div>
			</div>
            <Footer />
		</main>
    )
}

export default Home