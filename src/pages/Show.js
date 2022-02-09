import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Show = () => {
    const [ movie, setMovie ] = useState({})
    const params = useParams()
    const { id } = params

    useEffect(() => {
        fetch(`${API}/api/movies/${id}`)
        .then(response => response.json())
        .then(response => {setMovie(response)})
    }, [id])
    
    const { title, poster_path, overview, videos } = movie
    return(
        <div>
            <h1>{title}</h1>
            <img src={`https://themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
            <p>{overview}</p>
        </div>
    )
}

export default Show