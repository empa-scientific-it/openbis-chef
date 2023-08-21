import { useState, useEffect } from 'react';

export const useList = <T>(initialData: T[]) => {
    const [list, setList] = useState<T[]>(initialData);
    const [idx, setIdx] = useState(0);
    const [elem, setElem] = useState(initialData[idx]);
    const [finished, setFinished] = useState(false);

    // useEffect(() => {
    //     setList(initialData);
    // }, [initialData]);

    // // Update the element when the list or index changes
    // useEffect(() => {
    //     if (list.length > 0) {
    //         setElem(list[idx]);
    //         setFinished(false);
    //     }
    // }, [list, idx]);

    useEffect(() => {
        console.log('List', list);
    }, [list]);

    const move = (newIdx: number) => {
        if (newIdx < list.length && newIdx >= 0) {
            setIdx(() => newIdx);
            setElem(()=>list[newIdx]);
            setFinished(false);
        }
    };

    const next = () => {
        if (idx < list.length - 1) {
            move(idx + 1);
        } else {
            setFinished(true);
        }
    };

    const previous = () => {
        if (idx > 0) {
            move(idx - 1);
            setFinished(false);
        }
    };

    const find = (predicate: (elem: T) => boolean): T | undefined => {
        return list.find(predicate);
    };

    const remove = (elem: T) => {
        const newList = list.filter(e => e !== elem);
        setList(() => newList);
        if (idx >= newList.length) {
            move(newList.length - 1);
        }
    };

    const add = (elem: T) => {
        setList((oldList) => [...oldList, elem]);
    };

    const setElement = (newElem: T, newIndex: number) => {
        if (newIndex < 0 || newIndex >= list.length) {
            throw new Error('Index out of bounds');
        } else {
            setList(prevList => {
                const newList = [...prevList];
                newList[newIndex] = newElem;
                move(newIndex); // Update the current element
                return newList;
            });
        }
    };

    const clear = () => {
        setList(()=>[]);
        setElem(()=>null as T);
        setIdx(()=>0);
        setFinished(()=>false);
    };

    return { elem, next, previous, finished, idx, move, find, remove, add, set: setElement, list, clear };
};
