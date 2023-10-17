import { useState } from "react";

export function useLocalStorage<T>(initialKey: string, initialState: T | null) {
  const localItem = (localStorage.getItem(initialKey) as T | null) ?? initialState;

  const [item, setLocalItem] = useState<T | null>(localItem);

  const setItem = (key: string, update: ((prevItem: T | null) => T)) => {
    const val = update(item);
    setLocalItem(() => val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string) as T;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setLocalItem(() => null);
  };

  return { item, setItem, getItem, removeItem };
}