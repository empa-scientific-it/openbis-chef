import { useLocalStorage } from "./useLocalStorage";

type Token = {
  value: string;
  server: string;
};

type TokenIndex = {
  [server: string]: Token;
};

export function useTokenStorage() {
  const storageKey = "tokens";
  const {
    item: tokens,
    setItem: setTokens,
    getItem: getStoredToken,
  } = useLocalStorage<Token |null>(storageKey, null);

  const addToken = (token: string, server: string) => {
    setTokens(storageKey, (prevTokens) => {
      const newToken: Token = { value: token, server };
      return newToken;
    });
  };

  const removeToken = (server: string) => {
    setTokens(storageKey, (prevTokens) => {
      return null})
  };

  const replaceToken = (server: string, newToken: Token) => {
    setTokens(storageKey, (prevTokens) => {
      return newToken;
    });
  };

  const getToken = (server: string) => {
    const localToken = getStoredToken(storageKey);
    if (!localToken) {
      return null;
    }
    return localToken;
  };

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
