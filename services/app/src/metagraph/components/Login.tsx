import "@src/App.css";
import "./Login.css";
import { useState, useContext } from "react";

import { AuthContext } from "@src/openbis/AuthContext";
// import { SampleType } from '@src/types/api-openbis-java';
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [search, setSearch] = useState(false)
  // const [sent, setSent] = useState(false)
  // const [entry, setEntry] = useState({ code: "A", propertyAssignments: [] } as SampleType)
  // const { token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen, logout } = useContext(AuthContext)
  const useContextResult = useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();

  function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    useContextResult.logout();
  }

  function handleSubmit() {
    const from = location.state?.from?.pathname || "/";
    useContextResult.loginAndThen(user, password, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-card">
          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <h1 className="login-form-title">Login to openBIS instance</h1>

            <div className="login-form-input">
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                id="username"
                type="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div className="login-form-input">
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button className="login-form-button" name="Login" type="submit">
              Login
            </button>
            <br />
            <button name="Logout" onSubmit={() => handleLogout}>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
