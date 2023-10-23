import { expect, describe, it, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";

import { useLogin } from "@src/openbis/hooks/useLogin";
import { Facade } from "@src/openbis/api";



describe("useLogin", () => {
  const fetchSpy = vi.spyOn(Facade, "fromURL").mockImplementation(() => {
    return {
        login: async (username: string, password: string) => {
            return `token-${username}-${password}`
        },
        checkSession: async (token: string) => {
            return token === "token-admin-changeit"
        }
    } as unknown as Facade;
    }
    );

  it("should log in to openBIS and store the session data in localStorage", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    await act(async () => {
      const loggedIn = await result.current.login("admin", "changeit");
      console.log(loggedIn);
      expect(loggedIn).toBe(true);
    });

    it("should keep the session after a reload", async () => {
        // Log in to openBIS
        const { result } = renderHook(() => useLogin());
        await act(async () => {
          const loggedIn = await result.current.login("admin", "changeit");
          expect(loggedIn).toBe(true);
        });
      
        // Reload the page
        window.location.reload();
      
        // Check if the session is still active
        const { result: result2 } = renderHook(() => useLogin());
        expect(result2.current.loggedIn).toBe(true);
      });

    
  });
});
