import { expect, describe, it, beforeEach } from "vitest";

import { useLocalStorage } from "@src/session/useLocalStorage";
import { renderHook, act, render } from "@testing-library/react";
import TestComponent from "./TestComponent";
import React from "react";

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
    console.log(result.current);
    expect(result.current.item).toEqual("updatedValue");
  });

  it("should retrieve the value from localStorage when getItem is called", () => {
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    act( () => {
      result.current.setItem(keyName, (prev) => "storedValue");
    })
    expect(result.current.getItem(keyName)).toEqual("storedValue");
  });

  it("should remove the value from localStorage when removeItem is called", () => {
    const { result } = renderHook(() => useLocalStorage(keyName, "initialValue"));
    act(() => {
      result.current.removeItem(keyName);
    });
    expect(result.current.getItem(keyName)).toEqual(null);
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

    //Reload the page
    act(() => {
      render(<TestComponent />);
    });

    // Check if the value is still stored in localStorage
    const { result: result2 } = renderHook(() => useLocalStorage(keyName, ""));
    console.log(result.current);

    console.log(result2.current);
    expect(result2.current.getItem(keyName)).toEqual(newValue);
  });
});
