import { expect, describe, test,  it, beforeEach } from "vitest";

import { useTokenStorage } from "@src/session/useTokenStorage"
import { renderHook, act } from "@testing-library/react-hooks";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";

describe("useTokenStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize with an empty array if no tokens are stored in localStorage", () => {
    const { result } = renderHook(() => useTokenStorage());
    expect(result.current.tokens).toEqual({});
  });

  it("should add a new token to the list of tokens when addToken is called", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("newToken", "newServer");
    });
    expect(result.current.tokens).toEqual({newServer: { value: "newToken", server: "newServer" }});
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
     // result.current.removeToken("server1");
    });
    
    expect(result.current.tokens).toMatchObject({server2: { value: "token2", server: "server2" }});
  });

  it("should replace a token in the list of tokens when replaceToken is called", () => {
    const { result } = renderHook(() => useTokenStorage());
    act(() => {
      result.current.addToken("token1", "server1");
      result.current.addToken("token2", "server2");
      result.current.replaceToken("server1", { value: "newToken", server: "server1" });
    });
    
    expect(result.current.tokens).toEqual({"server1":{ value: "newToken", server: "server1" }, "server2":{ value: "token2", server: "server2" }});
  });
});