import { useState, useRef } from "react"
import { Link } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [requestedUser, setRequestedUser] = useState({})
    let loggedInUser = useRef()
    loggedInUser.current = requestedUser
    console.log(loggedInUser.current)

    const logInUserDetails = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`${API}/api/users?username=${user.username}`)
            // method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify(user)
        .then(r => r.json())
        .then(user => {
            setRequestedUser(user)
        })
        .catch(err => console.log(err))
        // Reset Form Fields:
        // setUser({email: "", password: ""})
    }

    return(
        <div id="login">
            <h1>This is the LOGIN page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={logInUserDetails} type="text" id="username" value={user.username}/>
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={logInUserDetails} type="password" id="password" value={user.password}/>
                <br />
                <button>Submit</button>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default Login