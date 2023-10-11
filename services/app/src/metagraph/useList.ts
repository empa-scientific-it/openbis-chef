import { useEffect, useState } from "react";

export const useList = <T>(initialData: T[]) => {
  const [list, setList] = useState<T[]>(initialData);
  const [idx, setIdx] = useState(0);
  const [elem, setElem] = useState(initialData[idx]);
  const [finished, setFinished] = useState(false);

  const setNewList = (newList: T[]) => {
    setList(() => newList);
    setIdx(() => 0);
    setElem(() => newList[0]);
    setFinished(() => false);
  };

  const move = (newIdx: number) => {
    if (newIdx >= 0 && newIdx <= list.length - 1) {
      setIdx(() => newIdx);
      setElem(() => list[newIdx]);
      if (newIdx == list.length - 1) {
        setFinished(() => true);
      } else {
        setFinished(() => false);
      }

    }
  };

  const next = () => {
    move(idx + 1);
  };

  const previous = () => {
    move(idx - 1);
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
    setList: setNewList,
    clear,
  };
};
