import { useState, useEffect } from "react";
import { Facade } from "@src/openbis/api";
import { useTokenStorage } from "@src/session/useTokenStorage";

interface SessionToken {
  token: string;
  server: string;
}

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
  const [serviceUrl, setServiceUrl] = useState<string>(DEFAULT_URL);
  const [service, setService] = useState(Facade.fromURL(DEFAULT_URL));

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    console.log("Starting session checking");
    checkSession().then((result) => {
      console.log("Session check result", result);
      setLoggedIn(result);
    });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      console.log("Setting session token", sessionToken);
      service.useSession(sessionToken ?? "");
      console.log(service.v3._private)
      setService(service)
      service.getServerInformation().then((info) => {
        console.log("Server info", info);
      })
    }
  }, [loggedIn]);

  const setUrl = (url: string) => {
    console.log("Setting url", url);
    setService(() => Facade.fromURL(url));
    setServiceUrl(url);
    console.log("service set");
  };

  const checkToken = async (token: string) => {
    try {
      const valid = await service.checkSession(token);
      if (valid !== null) {
        console.log("I am logged in");
        setSessionToken(token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // console.error(`error: ${error}`);
      return false;
    }
  };

  const checkSession = async () => {
    console.log("Checking session");
    const localToken = getToken(sessionName);
    console.log("Local token", localToken);
    setUrl(localToken?.server ?? "default");
    console.log("Starting checking token");
    return await checkToken(localToken?.value ?? "");
  };

  const login = async (username: string, password: string) => {
    try {
      const newToken = await service.login(username, password);
      setToken(sessionName, { value: newToken, server: serviceUrl });
      setLoggedIn(true);
      return true;
    } catch (error) {
      setLoggedIn(false);
      //removeToken(sessionName);
      console.log("Failed to login", error);
      return false;
    }
  };

  const logout = async () => {
    if (loggedIn) {
      try {
        await service.logout();
      } finally {
        removeToken(sessionName);
        setLoggedIn(false);
      }
    }
  };

  const loginWithPAT = async (patToken: string) => {
    try {
      service.useSession(patToken);
      const result = await service.checkSession(patToken);
      if (result) {
        setToken(sessionName, { value: patToken, server: serviceUrl });
        setLoggedIn(true);
        return true;
      }
    } catch (error) {
      removeToken(sessionName);
      setLoggedIn(false);
      return false;
    }
  };

  return {
    sessionToken,
    setToken,
    loggedIn,
    login,
    logout,
    loginWithPAT,
    setUrl,
    service,
    checkSession,
  };
}
