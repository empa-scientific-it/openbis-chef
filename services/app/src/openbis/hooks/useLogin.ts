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
    async function check() {
      console.log("Starting session checking", sessionToken);
      const result = await checkSession();
      if (result) {
        console.log("Performing post-login actions");
        console.log("Session token", sessionToken);
        afterLogin();
      }
    }
    check();
  }, []);

  const afterLogin = async () => {
    console.log("After login");
    setLoggedIn(true);
    service.useSession(sessionToken);
    const info = await service.getServerInformation();
    console.log(info);
    setService(service);
  };

  const setUrl = (url: string) => {
    setService(() => Facade.fromURL(url));
    setServiceUrl(url);
  };

  const checkToken = async (token: string) => {
    try {
      const valid = await service.checkSession(token);
      if (valid !== null) {
        setSessionToken(() => token);
        console.log("Token is valid", sessionToken);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`error: ${error}`);
      return false;
    }
  };

  const checkSession = async () => {
    const localToken = getToken(sessionName);
    if (localToken === null) {
      return false;
    } else {
      setUrl(localToken?.server);
      return await checkToken(localToken?.value);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const newToken = await service.login(username, password);
      setToken(sessionName, { value: newToken, server: serviceUrl });
      setLoggedIn(true);
      return true;
    } catch (error) {
      setLoggedIn(false);
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
        console.log("Logged out");
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
