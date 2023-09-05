import { useEffect, useState } from "react";

export const useList = <T>(initialData: T[]) => {
  const [list, setList] = useState<T[]>(initialData);
  const [idx, setIdx] = useState(0);
  const [elem, setElem] = useState(initialData[idx]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setElem(() => list[idx]);
  }, [idx, list]);

  const move = (newIdx: number) => {
    setIdx(() => newIdx);
    setElem(() => list[newIdx]);
    setFinished(false);

    if (newIdx == list.length) {
      setFinished(true);
    }
  };

  const next = () => {
    if (idx <= list.length) {
      move(idx + 1);
    }
  };

  const previous = () => {
    if (idx >= 0) {
      move(idx - 1);
    }
  };

  const find = (predicate: (elem: T) => boolean): T | undefined => {
    return list.find(predicate);
  };

  const remove = (elem: T) => {
    const newList = list.filter((e) => e !== elem);
    setList(() => newList);
    if (idx >= newList.length) {
      move(newList.length - 1);
    }
  };

  const add = (elem: T) => {
    setList((oldList) => [...oldList, elem]);
    // setIdx(() => list.length + 1);
    // setElem(() => elem);
  };

  const setCurrent = (newElem: T) => {
    setElement(newElem, idx);
  };

  const setElement = (newElem: T, newIndex: number) => {
    if (newIndex < 0 || newIndex >= list.length) {
      throw new Error("Index out of bounds");
    } else {
      setList((prevList) => {
        const newList = [...prevList];
        newList[newIndex] = newElem;
        // move(newIndex); // Update the current element
        return newList;
      });
    }
  };

  const clear = () => {
    setList(() => []);
    setElem(() => null as T);
    setIdx(() => 0);
    setFinished(() => false);
  };

  return {
    elem,
    next,
    previous,
    finished,
    idx,
    move,
    find,
    remove,
    add,
    set: setElement,
    setCurrent,
    list,
    setList,
    clear,
  };
};
