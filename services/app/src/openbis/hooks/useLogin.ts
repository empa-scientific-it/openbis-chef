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

  // Crete a new facade when the serviceUrl changes
  // useEffect(() => {
  //   if (serviceUrl) {
  //     setServiceUrl(serviceUrl);
  //     setService(Facade.fromURL(serviceUrl));
  //   }
  // }, [serviceUrl]);

  // useEffect(() => {
  //   const a = async () => {
  //     checkSession().catch((e) => console.error(e));
  //   };
  //   a();
  // });

  const setUrl = (url: string) => {
    setServiceUrl(url);
    setService(Facade.fromURL(url));
  }

  const checkSession = async () => {
    const localToken = getToken(sessionName);
    console.log(`local token ${tokens};     localStorage.length ${localStorage.getItem("tokens")}`);
    if (localToken) {
      try {
        const valid = await service.checkSession(localToken.value);
        if (valid) {
          setLoggedIn(true);
        } else {
          removeToken(sessionName);
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
        removeToken(sessionName);
      }
    }
  };

  // check if token is valid when component is mounted
  // or when token changes. If it is not valid, remove it.
  useEffect(() => {
    checkSession().catch((e) => console.error(e));
  });

  const login = async (username: string, password: string) => {
    try {
      const newToken = await service.login(username, password);
      setToken(sessionName, { value: newToken, server: serviceUrl });
      setLoggedIn(true);

      return true;
    } catch (error) {
      setLoggedIn(false);
      removeToken(sessionName);
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
