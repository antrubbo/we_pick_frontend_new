import { useState } from "react"

const API = process.env.REACT_APP_API_URL

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleEmail = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value })
    }

    const handlePassword = (evt) => {
        setUser({ ...user, [evt.target.id]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            })
        .then(r => r.json())
        .then(user => {
            console.log(user)
        })
        // Reset Form Fields:
        // setUser({email: "", password: ""})
    }

    return(
        <div id="login">
            <h1>This is the LOGIN page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={handleEmail} type="text" id="email" value={user.email}/>
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} type="password" id="password" value={user.password}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login