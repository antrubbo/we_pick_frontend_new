import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const API = process.env.REACT_APP_API_URL

const Login = () => {
    // useCookie, set the incoming JWT to cookie, as long as authenticated 

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleLoginForm = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const { username, email, password } = user
        axios.post(`${API}/api/users/login`, {
            username,
            email,
            password
        })
        .then(loggedInUser => {
            // fetch to authenticate route to authenticate loggedInUser.token
            axios.post(`${API}/api/authenticate`, {
                token: loggedInUser.data.token.split(" ")[1]
            })
            .then(res => console.log(res))
            // setCookie(incoming JWT token)
            setUser({username: "", email: "", password: ""})
        })
        .catch(error => {
            console.log(error.response.data.error)
            setUser({username: "", email: "", password: ""})
        })
    }

    return(
        <div id="login">
            <h1>This is the LOGIN page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={handleLoginForm} type="text" id="username" value={user.username}/>
                <br />
                <label htmlFor="email">Email</label>
                <input onChange={handleLoginForm} type="email" id="email" value={user.email}/>
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={handleLoginForm} type="password" id="password" value={user.password}/>
                <br />
                <button>Submit</button>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default Login