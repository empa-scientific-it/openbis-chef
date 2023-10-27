import { useState, useEffect } from "react";
import { Facade } from "@src/openbis/api";
import { useTokenStorage } from "@src/session/useTokenStorage";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";
import { or } from "fp-ts/lib/Predicate";

export function useLogin() {
  const sessionName = "sessionToken";
  const {
    tokens,
    addToken,
    removeToken,
    getToken,
    replaceToken: setToken,
  } = useTokenStorage();

  const DEFAULT_URL = "/local/";

  const initialState = {
    serviceUrl: DEFAULT_URL,
    loggedIn: false,
    sessionToken: null,
    service: Facade.fromURL(DEFAULT_URL),
  };

  const [state, setState] = useState(initialState);

  async function checkSession() {
    const localToken = getToken(sessionName);
    if (!localToken || localToken.server === "") {
      return false;
    } else {
      await setUrl(localToken.server);
      return await checkToken(localToken.value);
    }
  }

  async function setUrl(url) {
    setState((prevState) => ({
      ...prevState,
      serviceUrl: url,
      service: Facade.fromURL(url),
    }));
  }

  async function checkToken(token) {
    try {
      const { service } = state;
      const valid = await service.checkSession(token);
      if (valid !== null) {
        setState((prevState) => ({
          ...prevState,
          sessionToken: token,
          loggedIn: true,
        }));

        await afterLogin(token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`error: ${error}`);
      return false;
    }
  }

  async function login(username, password) {
    try {
      const { service, serviceUrl } = state;
      const newToken = await service.login(username, password);
      setToken(sessionName, { value: newToken, server: serviceUrl });
      await afterLogin(newToken);
      return true;
    } catch (error) {
      console.error("Failed to login", error);
      return false;
    }
  }

  function MakeProxyFacade(facade, state: typeof initialState) {
    //This is a proxy to the facade that will log all calls
    //We use it to spy on the facade and log all calls to ensure the 
    //url and the token are right
    return new Proxy(facade, {
      get: function (target, prop, receiver) {
        console.log("proxy", target, prop, receiver, state);
        const origMethod = target[prop];
        return origMethod;
      },
      construct: function (target, args) {
        console.log("proxy", target, args);
        const origMethod = target;
        return origMethod;
      }
    });
  }

  async function afterLogin(token) {
    const { service } = state;
    service.useSession(token);
    const info = await service.getServerInformation();
    // Additional actions after login if needed
    setState((prevState) => ({
      ...prevState,
      sessionToken: token,
      loggedIn: true,
      service: MakeProxyFacade(service, state),
    }));
  }

  async function logout() {
    if (state.loggedIn) {
      const { service } = state;
      try {
        await service.logout();
      } finally {
        removeToken(sessionName);
        setState((prevState) => ({
          ...prevState,
          sessionToken: null,
          loggedIn: false,
        }));
      }
    }
  }

  return {
    sessionToken: state.sessionToken,
    loggedIn: state.loggedIn,
    login,
    logout,
    setUrl,
    checkSession,
    service: state.service,
  };
}
