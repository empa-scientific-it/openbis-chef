import { useState } from "react";


import { Facade } from "@src/openbis/api";
export function useLogin() {

    const [service, setService] = useState(new Facade());

    const [token, setToken] = useState<string | null>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const login = (username: string, password: string) => {
        loginAndThen(username, password, () => {});
    }

    const loginAndThen = (username: string, password: string, then: () => void) => {
        service.login(username, password).then((token) => {
            setToken(() => token);
            setLoggedIn( () =>true);
            then();
        });}

    return {token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen}

}