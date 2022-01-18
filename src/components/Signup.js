import { useState } from "react"
import { Link } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

const Signup = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const signUpUserDetails = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value})
    }

    const onFormSubmit = (evt) => {
        evt.preventDefault()
        fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(user => console.log(user))
    }

    return(
        <div id="signup">
            <h1>Sign Up!</h1>
            <form onSubmit={onFormSubmit} id="edit-user-form">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={user.username} onChange={signUpUserDetails}></input>
                <br />
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={user.email} onChange={signUpUserDetails}></input>
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={user.password} onChange={signUpUserDetails}></input>
                <br />
                <input type="submit"></input>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default Signup