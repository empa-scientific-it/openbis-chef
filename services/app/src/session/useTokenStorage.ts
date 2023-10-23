import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

type Token = {
  value: string;
  server: string;
};

type TokenIndex = {
  [server: string]: Token;
};

export function useTokenStorage() {
  const { item: tokens, setItem: setTokens, getItem: getStoredToken } = useLocalStorage<TokenIndex>("tokens", {});


  const addToken = (token: string, server: string) => {
    setTokens("tokens", (prevTokens) => {

      const newToken: Token = { value: token, server };

      const newValue =  {
        ...prevTokens,
        [server]: newToken,
      };
      return newValue
    });
  };

  const removeToken = (server: string) => {
    setTokens("tokens", (prevTokens) => {
      const newTokens = Object.values(prevTokens).filter((token) => token.server !== server);
      return newTokens.reduce((acc, token) => {
        acc[token.server] = token;
        return acc;
      }, {} as TokenIndex);
    });
  };

  const replaceToken = (server: string, newToken: Token) => {
    setTokens("tokens", (prevTokens) => {
      const serverTokens = prevTokens[server];
      if (!serverTokens) {
        return prevTokens;
      }
      return {
        ...prevTokens,
        [server]: newToken,
      };
    });
  };

  const getToken = (server: string) => {
    const localToken = getStoredToken("tokens");
    console.log(`localToken`, localToken);
    if (!localToken) {
      return null;
    }
    return localToken;
  }

  // Other token-related functions

  return {
    tokens,
    getToken,
    addToken,
    removeToken,
    replaceToken,
    // Other token-related functions
  };
}
