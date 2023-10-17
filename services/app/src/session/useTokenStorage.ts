import { useLocalStorage } from "./useLocalStorage";

type Token = {
  value: string;
  server: string;
};

type TokenIndex = {
  [server: string]: Token;
};

export function useTokenStorage() {
  const { item: tokens, setItem: setTokens } = useLocalStorage<TokenIndex>("tokens", {});

  const addToken = (token: string, server: string) => {
    setTokens("tokens", (prevTokens) => {
      const newToken: Token = { value: token, server };
      return {
        ...prevTokens,
        [server]: newToken,
      };
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

  // Other token-related functions

  return {
    tokens,
    addToken,
    removeToken,
    replaceToken,
    // Other token-related functions
  };
}
