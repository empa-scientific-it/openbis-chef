import { useState, useEffect } from "react";
import { Facade } from "@src/openbis/api";
import { useSessionStorage } from "@src/session/useSessionStorage";

export function useLogin() {
  const [service, setService] = useState(new Facade());

  const {
    item: token,
    setItem: setToken,
    removeItem: removeToken,
  } = useSessionStorage<string | null>("token", null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // check if token is valid when component is mounted
  // or when token changes
  useEffect(() => {
    const checkSession = async () => {
      if (token) {
        try {
          const valid = await service.checkSession(token);
          console.log("checkSession", valid);
          if (valid) {
            setLoggedIn(true);
          } else {
            removeToken("token");
            setLoggedIn(false);
          }
        } catch (error) {
          console.error(error);
          removeToken("token");
        }
      }
    };

    checkSession().catch((e) => console.error(e));
  }, [token, loggedIn, service, removeToken]);




  const login = async (username: string, password: string) => {
    try {
      const newToken = await service.login(username, password);
      setToken("token", () => newToken as string);
      setLoggedIn(true);
      return true;
    } catch (error) {
      setLoggedIn(false);
      removeToken("token");
      return false;
    }
  };

  const logout = async () => {
    if (loggedIn) {
      try {
        await service.logout();
      } finally {
        removeToken("token");
        setLoggedIn(false);
      }
    }
  };

  const loginWithPAT = async (patToken: string) => {
    try {
      service.useSession(patToken);
      const result = await service.checkSession(patToken);
      if (result) {
        setToken("token", () => patToken);
        setLoggedIn(true);
        return true;
      }
    } catch (error) {
      removeToken("token");
      setLoggedIn(false);
      return false;
    }
  };

  const setUrl = (url: string) => {
    setService(Facade.fromURL(url));
  };

  return {
    token,
    setToken,
    loggedIn,
    login,
    logout,
    loginWithPAT,
    setUrl,
    service,
  };
}
