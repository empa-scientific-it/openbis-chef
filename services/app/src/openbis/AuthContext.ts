import { createContext } from "react";
import { Facade } from "./api";

export interface AuthContextInterface {
  token: string | null;
  setToken: (token: string) => void;
  loggedIn: boolean;
  setLoggedIn: (current: boolean) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  service: Facade;
  setUrl: (url: string) => void;
  loginAndThen: (user: string, password: string, callback: Function) => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  token: null,
  loggedIn: false,
  setToken: () => {},
  setLoggedIn: () => {},
  login: (username: string, password: string) => {},
  logout: () => {},
  service: null as Facade,
  setUrl: (url: string) => {},
  loginAndThen: (user: string, password: string, callback: Function) => {},
});
