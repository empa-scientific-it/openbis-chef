import { useState } from "react";

export function useLocalStorage<T>(initialKey: string, initialState: T | null) {
  const [localItem, setLocalItem] = useState<T | null>(
    (JSON.parse(localStorage.getItem(initialKey)) as T | null) ?? initialState
  );

  const setItem = (key: string, update: (prevItem: T | null) => T) => {
    const permItem = getItem(key);
    const val = update(permItem ?? localItem);
    setLocalItem(() => val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      console.log("Found item in local storage", item);
    }
    return item ? (JSON.parse(item) as T) : null;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setLocalItem(() => null);
  };

  return { item: localItem, setItem, getItem, removeItem };
}