import { useState, useEffect } from "react";
import { Facade } from "@src/openbis/api";
import { useTokenStorage } from "@src/session/useTokenStorage";

interface SessionToken {
  token: string;
  server: string;
}

export function useLogin() {
  const { tokens, addToken, removeToken, getToken, replaceToken: setToken } = useTokenStorage();
  const [serviceUrl, setServiceUrl] = useState<string>("");

  const [service, setService] = useState(Facade.fromURL(serviceUrl));

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (serviceUrl) {
      setService(Facade.fromURL(serviceUrl));
      
    }
  }, [serviceUrl])



    
  // check if token is valid when component is mounted
  // or when token changes
  useEffect(() => {
    const checkSession = async () => {
      const localToken = getToken(serviceUrl)
      if (localToken) {
        try {
          const valid = await service.checkSession(localToken.value);
          if (valid) {
            setLoggedIn(true);
          } else {
            removeToken(localToken.server);
            setLoggedIn(false);
          }
        } catch (error) {
          console.error(error);
          removeToken(localToken.server);
        }
      }
    };

    checkSession().catch((e) => console.error(e));
  }, [loggedIn, service, serviceUrl]);

  const login = async (username: string, password: string) => {
    try {
      const newToken = await service.login(username, password);
      setToken(serviceUrl, { value: newToken, server: serviceUrl});
      setLoggedIn(true);
      return true;
    } catch (error) {
      setLoggedIn(false);
      removeToken(serviceUrl);
      return false;
    }
  };

  const logout = async () => {
    if (loggedIn) {
      try {
        await service.logout();
      } finally {
        removeToken(serviceUrl);
        setLoggedIn(false);
      }
    }
  };

  const loginWithPAT = async (patToken: string) => {
    try {
      service.useSession(patToken);
      const result = await service.checkSession(patToken);
      if (result) {
        setToken(serviceUrl, { value: patToken, server: serviceUrl});
        setLoggedIn(true);
        return true;
      }
    } catch (error) {
      removeToken(serviceUrl);
      setLoggedIn(false);
      return false;
    }
  };

  const setUrl = (url: string) => {
    setService(Facade.fromURL(url));
  };

  return {
    tokens,
    setToken,
    loggedIn,
    login,
    logout,
    loginWithPAT,
    setUrl,
    service,
  };
}
