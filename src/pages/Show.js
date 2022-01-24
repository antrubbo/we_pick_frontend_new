import { useEffect } from "react"
import { useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Show = () => {
    let params = useParams()
    console.log(params)

    // useEffect(() => {
    //     fetch("https://we-pick.herokuapp.com/movies", {
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             title: r.table.title,
    //             description: r.table.overview,
    //             release_date: r.table.release_date,
    //             genres: r.table.genre_ids,
    //             poster_path: r.table.poster_path,
    //             search_id: r.table.id
    //         })
    //     })
    //     .then(r => r.json())
    //     .then(movie => {
    //         localStorage.setItem('id', movie.id);
    //         history.push(`/movie/${movie.id}`)
    //     })
    // }, [params.id])

    return(
        <h1>Movie Title Here</h1>
    )
}

export default Show