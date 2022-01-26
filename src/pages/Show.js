import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Show = () => {
    const [ movie, setMovie ] = useState({})
    const params = useParams()
    const { id } = params
    // console.log(movie)

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
        .then(response => response.json())
        .then(response => {setMovie(response)})
    }, [id])

    return(
        <h1>{movie.title}</h1>
    )
}

export default Show