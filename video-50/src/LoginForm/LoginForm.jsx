import { useState } from "react"
import "../index.css"

export const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const handleFormSubmit=(event)=>{
        event.preventDefault();

        const loginData ={
            userName,
            Password,
        }
        console.log(loginData)
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off"
                    value={userName}
                    onChange={(event)=> setUserName(event.target.value)}
                    />

                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" required autoComplete="off" 
                    value={Password}
                    onChange={(event)=> setPassword(event.target.value)}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}