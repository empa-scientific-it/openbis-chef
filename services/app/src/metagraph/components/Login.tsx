import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "@src/openbis/AuthContext";
import "@src/App.css";
import "./Login.css";

import { openBISInstance } from "@src/openbis/config/openBISInstance";
import instances from "@src/openbis/config/instances.json";
import SliderButton from "./SliderButton";

type loginMethods = "password" | "token";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [server, setServer] = useState("/local/");
  const { login, loginWithPAT, setUrl, service } = useContext(AuthContext);

  const [loginMethod, setLoginMethod] = useState<loginMethods>("password");

  const navigate = useNavigate();
  const location = useLocation();

  const validInstances = instances as openBISInstance[];

  function handleSubmit() {
    const from = location.state?.from?.pathname || "/";
    setUrl(server);
    console.log("Login method: " + loginMethod, "Server: " + server);
    const doNavigate = () => navigate(from, { replace: true });
    switch (loginMethod) {
      case "password":
        login(user, password).then((res) => (res ? doNavigate() : {}));
        break;
      case "token":
        loginWithPAT(password).then((res) => (res ? doNavigate() : {}));
        break;
    }
  }

  const handleLoginType = (choice: string) => {
    console.log(choice);
    setLoginMethod(choice as loginMethods);
  };

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
              <select
                name="server"
                id="server"
                onChange={(event) => setServer(event.target.value)}
              >
                {validInstances.map((instance) => {
                  return (
                    <option value={instance.url} key={instance.name}>
                      {instance.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="login-form-input">
              <label htmlFor="login-type">Choose login type</label>
              <SliderButton
                id="login-type"
                choices={["password", "token"]}
                onClick={handleLoginType}
              />
            </div>

            {loginMethod === "token" ? (
              <div className="login-form-input">
                <label htmlFor="token">Token:</label>
                <input
                  name="token"
                  id="token"
                  type="text"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            ) : (
              <>
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
              </>
            )}

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
