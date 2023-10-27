import { expect, describe, it, beforeEach, vi } from "vitest";
import { renderHook, act, waitFor, render } from "@testing-library/react";

import { useLogin } from "@src/openbis/hooks/useLogin";
import { Facade } from "@src/openbis/api";
import TestComponent from "./TestComponent";
import React from "react";

describe("test login hook", () => {
  const fetchSpy = vi.spyOn(Facade, "fromURL").mockImplementation(() => {
    return {
      login: async (username: string, password: string) => {
        return `token-${username}-${password}`;
      },
      checkSession: async (token: string) => {
        return token === "token-admin-changeit";
      },
    } as unknown as Facade;
  });

  beforeEach(() => {
    fetchSpy.mockClear();
  });

  it("logged in is false by default", async () => {
    const { result } = renderHook(() => useLogin());
    expect(result.current.loggedIn).toBe(false);
  });

  it("login works", async () => {
    const { result } = renderHook(() => useLogin());
    const a = await result.current.login("admin", "changeit");
    expect(a).toBe(true);
  });

  it("The session should be kept after a reload", async () => {
    // Log in to openBIS
    const { result } = renderHook(() => useLogin());

    const a = await result.current.login("admin", "changeit");
    expect(a).toBe(true);

    //Reload the page
    act(() => {
      render(<TestComponent />);
    });
    const { result: result1 } = renderHook(() => useLogin());

    expect(result1.current.loggedIn).toBe(true);
  });
  //   // Reload the page
  //   // window.location.reload();

  //   // // Check if the session is still active
  //   // const { result: result2 } = renderHook(() => useLogin());
  //   // expect(result2.current.loggedIn).toBe(true);
  //   // expect(result2.current.sessionToken).not.toBe(null);
  // });
});
