import { expect, describe, it, beforeEach } from "vitest";

import { useLocalStorage } from "@src/session/useLocalStorage";
import { renderHook, act } from "@testing-library/react-hooks";

const keyName = "testKey";

describe("clearing storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize with the initial state if no value is stored in localStorage", () => {
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    expect(result.current.item).toEqual("initialValue");
  });

  it("should update the value in localStorage when setItem is called", () => {
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    act(() => {
      result.current.setItem(keyName, () => "updatedValue");
    });
    expect(result.current.item).toEqual("updatedValue");
    expect(localStorage.getItem(keyName)).toEqual(JSON.stringify("updatedValue"));
  });

  it("should retrieve the value from localStorage when getItem is called", () => {
    localStorage.setItem(keyName, JSON.stringify("storedValue"));
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    expect(result.current.getItem(keyName)).toEqual("storedValue");
  });

  it("should remove the value from localStorage when removeItem is called", () => {
    localStorage.setItem(keyName, JSON.stringify("storedValue"));
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    act(() => {
      result.current.removeItem(keyName);
    });
    expect(result.current.item).toEqual(null);
    expect(localStorage.getItem(keyName)).toEqual(null);
  });
});

describe("not clearing storage", () => {
  const newValue = new Date().toISOString();
  it("should persist the value in localStorage after a reload", () => {
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    act(() => {
      result.current.setItem(keyName, () => newValue);
    });
    expect(result.current.getItem(keyName)).toEqual(newValue);

    // Reload the page
    act(() => window.location.reload());

    // Check if the value is still stored in localStorage
    const { result: result2 } = renderHook(() => useLocalStorage(keyName, ""));
    expect(result2.current.getItem(keyName)).toEqual(newValue);
  });
});
