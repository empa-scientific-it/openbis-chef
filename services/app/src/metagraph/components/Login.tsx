import '@src/App.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react';

import { AuthContext } from '@src/openbis/AuthContext'
import OpenBisEntry from '@src/openbis/components/OpenBisEntry';
import { SampleTypeFetchOptions } from '@src/openbis/dto'
import { SampleTypeSearchCriteria } from '@src/openbis/dto'
import { SampleType } from '@src/types/api-openbis-java';
import { Sample } from '@src/types/api-openbis-java';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [search, setSearch] = useState(false)
    const [sent, setSent] = useState(false)
    const [entry, setEntry] = useState({ code: "A", propertyAssignments: [] } as SampleType)
    const { token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen, logout } = useContext(AuthContext)

    let navigate = useNavigate();
    let location = useLocation();



    function handleLogout(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        logout()

    }

    function handleSubmit() {
        const from = location.state?.from?.pathname || "/";
        loginAndThen(user, password, () => {
            navigate(from, { replace: true });
        })
    }





    return (
        <div>
            <h1>Login to openBIS instance</h1>
            <form className="App" onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                <input type="user" value={user} onChange={event => setUser(event.target.value)} />
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button name='Login' type="submit">Login</button>
                <button name='Logout' onSubmit={handleLogout}>Login</button>
            </form>
        </div>

    )
}

export default Login