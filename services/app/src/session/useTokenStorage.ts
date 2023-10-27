import { useLocalStorage } from "./useLocalStorage";

type Token = {
  value: string;
  server: string;
};

type TokenIndex = {
  [server: string]: Token;
};
const storageKey = "tokens";

export function useTokenStorage() {
  const {
    item: tokens,
    setItem: setTokens,
    getItem: getStoredToken,
  } = useLocalStorage<Token | null>(storageKey, null);

  const addToken = (token: string, server: string) => {
    setTokens(storageKey, (prevTokens) => {
      const newToken: Token = { value: token, server: server };
      return {
        ...prevTokens,
        [server]: newToken,
      };
    });
  };

  const removeToken = (server: string) => {
    setTokens(storageKey, (prevTokens) => {
      const filteredTokens = Object.keys(prevTokens)
        .filter((key) => key !== server)
        .reduce((acc, key) => {
          acc[key] = prevTokens[key];
          return acc;
        }, {} as TokenIndex);
      return filteredTokens;
    });
  };

  const replaceToken = (server: string, newToken: Token) => {
    setTokens(storageKey, (prevTokens) => {
      const updatedTokens = { ...prevTokens, [server]: newToken };
      return updatedTokens;
    });
  };

  const getToken = (server: string) => {
    const localToken = getStoredToken(storageKey);
    if (!localToken) {
      return null;
    }
    return localToken[server];
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
