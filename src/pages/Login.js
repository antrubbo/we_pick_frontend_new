import { useState } from "react"
import { Link } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Login = () => {
    // useCookie, set the incoming JWT to cookie, as long as authenticated 

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleLoginForm = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`${API}/api/users/login?username=${user.username}`)
        .then(r => r.json())
        .then(user => {
            // not returning user, returning response with token, or error message
            if(user.error){
                console.log(user.error)
                setUser({username: "", password: ""})
            } else {
                // setCookie(incoming JWT token)
                setUser({username: "", password: ""})
            }
        })
    }

    return(
        <div id="login">
            <h1>This is the LOGIN page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={handleLoginForm} type="text" id="username" value={user.username}/>
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