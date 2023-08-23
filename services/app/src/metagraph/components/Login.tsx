import '@src/App.css'
import './Login.css'
import { useState, useContext } from 'react'

import { AuthContext } from '@src/openbis/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const { loginAndThen } = useContext(AuthContext)

    let navigate = useNavigate();
    let location = useLocation();

    function handleSubmit() {
        const from = location.state?.from?.pathname || "/";
        loginAndThen(user, password, () => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div className="App">
            <div className="app-container">
                <div className="login-container">
                    <form className="login-form" onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                        <h1 className="container-title">Login to openBIS instance</h1>

                        <div className="login-form-input">
                            <label htmlFor="username">Username:</label>
                            <input name="username" id="username" type="user" value={user} onChange={event => setUser(event.target.value)} />
                        </div>
                        <div className="login-form-input">
                            <label htmlFor="password">Password:</label>
                            <input name="password" id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                        </div>

                        <button className="clickable-button" name="Login" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
