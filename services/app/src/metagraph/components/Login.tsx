import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "@src/openbis/AuthContext";
import "@src/App.css";
import "./Login.css";

import { openBISInstance } from "@src/openbis/config/openBISInstance";
import instances from "@src/openbis/config/instances.json";



function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [server, setServer] = useState("local");
  const { loginAndThen, setUrl, service } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const validInstances = instances as openBISInstance[];

  function handleSubmit() {
    const from = location.state?.from?.pathname || "/";
    // const url = instances.find((instance) => instance.name === server)?.url;
    setUrl(server);
    loginAndThen(user, password, () => {
      navigate(from, { replace: true });
    });
  }

  useEffect(() => {
    console.log("service", service);
  }, [service])

  return (
    <div className="App">
      <div className="app-container">
        <div className="login-container">
          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <h1 className="container-title">Login to openBIS instance</h1>
            <div className="login-form-input">
              <label htmlFor="server">Instance:</label>
              {/* <datalist id="instances">
                {validInstances.map((instance) => {
                    return <option value={instance.name} key={instance.name} />;
                })}
                </datalist> */}
              <input
                // list = "instances"
                name="server"
                id="server"
                type="server"
                value={server}
                onChange={(event) => setServer(event.target.value)}
              />
            </div>
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

            <button className="clickable-button" name="Login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
