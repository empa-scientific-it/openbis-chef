import { createContext } from 'react';
import Openbis from '@src/openbis/openbis'
import {SampleTypeFetchOptions} from '@src/types/api-openbis-java';
import {SampleTypeSearchCriteria} from '@src/types/api-openbis-java';
import { SearchResult } from '@src/types/api-openbis-java';
import {SampleType} from '@src/types/api-openbis-java';
import { Facade } from './api';

export interface AuthContextInterface {
    token: string | null;
    setToken: (token: string) => void;
    loggedIn: boolean;
    setLoggedIn: (current: boolean) => void;
    login: (username: string, password: string) => void;
    logout: () => void;
    service: Facade;
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
    loginAndThen: (user: string, password: string, callback: Function) => {}
  });
  