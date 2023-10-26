import { useEffect, useState } from "react";

export function useSessionStorage<T>(
  initialKey: string,
  initialState: T | null,
) {
  const localItem =
    (localStorage.getItem(initialKey) as T | null) ?? initialState;

  const [item, setLocalItem] = useState<T | null>(localItem);

  const setItem = (key: string, update: () => T) => {
    const val = update();
    setLocalItem(() => val);
    localStorage.setItem(key, val.toString());
  };

  const getItem = (key: string) => {
    return localStorage.getItem(key) as T;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setLocalItem(() => null);
  };

  useEffect(() => { 
    console.log("useEffect", item);
  }, [item]);

  return { item, setItem, getItem, removeItem };
}
