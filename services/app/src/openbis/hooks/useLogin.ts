import { useState, useEffect } from "react";

import { Facade } from "@src/openbis/api";
import { useSessionStorage } from "@src/session/useSessionStorage";
export function useLogin() {
  const [service, setService] = useState(new Facade());


  const setUrl = (url: string) => {
    setService(() => Facade.FacadeWithURL(url));
  };

  const { item: token, setItem: setToken, removeItem: removeToken } = useSessionStorage<string | null>(
    "token",
    null,
  );
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // Check if the login is still valid on mount
  useEffect(() => {
    if (token && !loggedIn) {
      service.checkSession(token).then((valid) => {
        if (valid) {
          setLoggedIn(() => true);
        }
      });
    }
  }, [token, loggedIn, service]);

  const login = (username: string, password: string) => {
    loginAndThen(username, password, () => {});
  };

  const loginAndThen = (
    username: string,
    password: string,
    then: (service: Facade) => void,
  ) => {
    service.login(username, password).then((token) => {
      setToken("token", () => token as string);
      setLoggedIn(() => true);
      then(service);
    });
  };

  const logout = () => {
    removeToken("token");
    setLoggedIn(() => false);
  };

  return {
    token,
    setToken,
    loggedIn,
    setLoggedIn,
    login,
    service,
    loginAndThen,
    logout,
    setUrl,
  };
}
