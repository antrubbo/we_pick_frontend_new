import { useEffect } from "react"
import { useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Show = () => {
    let params = useParams()
    console.log(params)

    return(
        <h1>Movie Title Here</h1>
    )
}

export default Show