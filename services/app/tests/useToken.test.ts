import { expect, describe, test, it, beforeEach } from "vitest";

import { useTokenStorage } from "@src/session/useTokenStorage";
import { renderHook, act } from "@testing-library/react";
import { mapNullable } from "fp-ts/lib/Option";

describe("with clear before test", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return null if no token are stored", () => {
    const { result } = renderHook(() => useTokenStorage());
    expect(result.current.tokens).toEqual(null);
  });

  it("should add a new token to the list of tokens when addToken is called", () => {
    const { result } = renderHook(() => useTokenStorage());
    const tokenVal = "token1";
    const serverVal = "server1";
    act(() => {
      result.current.addToken(tokenVal, serverVal);
    });
    expect(result.current.tokens).toEqual({
      [serverVal]: {"server": serverVal, "value": tokenVal},
    });
  });

  it("should add two tokens to the list of tokens when addToken is called twice", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("token1", "server1");
      result.current.addToken("token2", "server2");
    });
    expect(result.current.tokens).toEqual({
      server1: { value: "token1", server: "server1" },
      server2: { value: "token2", server: "server2" },
    });
  });

  it("should remove a token from the list of tokens when removeToken is called", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("token1", "server1");
      result.current.addToken("token2", "server2");
      result.current.removeToken("server1");
    });

    expect(result.current.tokens).toMatchObject({
      server2: { value: "token2", server: "server2" },
    });
  });

  it("should replace a token in the list of tokens when replaceToken is called", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("token1", "server1");
      result.current.addToken("token2", "server2");
      result.current.replaceToken("server1", { value: "newToken", server: "server1" });
    });

    expect(result.current.tokens).toEqual({
      server1: { value: "newToken", server: "server1" },
      server2: { value: "token2", server: "server2" },
    });
  });
});

describe("without clear before test", () => {
  it("if we store a token and reload, the token should be found", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("token1", "server1");
    });

    // Reload the page
    act(() => window.location.reload());

    // Check if the token is still stored in localStorage
    const { result: result2 } = renderHook(() => useTokenStorage());
    expect(result2.current.getToken("server1")).toEqual({ value: "token1", server: "server1" });
  })

});
