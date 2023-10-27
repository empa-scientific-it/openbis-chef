import { createContext } from "react";
import { Facade } from "./api";

export interface AuthContextInterface {
  setToken: (token: string) => void;
  loggedIn: boolean;
  setLoggedIn: (current: boolean) => void;
  login: (username: string, password: string) => Promise<boolean>;
  loginWithPAT: (token: string) => Promise<boolean>;
  logout: () => Promise<void>;
  service: Facade;
  setUrl: (url: string) => void;
  checkSession: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextInterface>({
  loggedIn: false,
  setToken: () => {},
  setLoggedIn: () => {},
  login: async (username: string, password: string) => false,
  loginWithPAT: async (token: string) => false,
  logout: async () => {},
  service: null as Facade,
  setUrl: (url: string) => {},
  checkSession: async () => false
});
