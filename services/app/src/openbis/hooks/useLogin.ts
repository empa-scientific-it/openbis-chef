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
  const [serviceUrl, setServiceUrl] = useState<string>("");

  const [service, setService] = useState(Facade.fromURL(serviceUrl));

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [sessionToken, setSessionToken] = useState<SessionToken | null>(null);

  useEffect(() => {
    console.log("Starting session checking");
    const check = async () => {
      checkSession().catch((e) => console.error(e));
      console.log("Session checked", loggedIn)
    };
    check();
  }, []);

  const setUrl = (url: string) => {
    console.log("Setting url", url);
    setServiceUrl(url);
    setService(Facade.fromURL(url));
  };

  const checkToken = async (token: string) => {
    try {
      const valid = await service.checkSession(token);
      console.log(`valid ${valid}`);
      if (valid) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkSession = async () => {
    console.log("Checking session");
    const localToken = getToken(sessionName);
    console.log("Local token", localToken);
    setUrl(localToken?.server ?? "");
    checkToken(localToken?.value ?? "");
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
  };
}
