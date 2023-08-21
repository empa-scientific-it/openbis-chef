import { useEffect, useState } from "react";


export const useList = <T>(l: T[]) => {
    const [list, setList] = useState(l);
    const [idx, setIdx] = useState(0);
    const [elem, setElem] = useState(l[idx])
    const [finished, setFinished] = useState(false)

    const move = (newIdx: number) => {
        if (newIdx < list.length && newIdx >= 0) {
            setIdx((oldIdx) => newIdx)
            setElem((elem) => list[newIdx])
        }
    }

    const next = () => {
        if (idx < list.length - 1) {
            move(idx + 1)
        } else {
            setFinished(true)
        }
    }

    const previous = () => {
        if (idx > 0) {
            move(idx - 1)
            setFinished(false)
        }
    }

    const find = (predicate: (elem: T) => boolean): T => {
        return list.find(predicate)
    }

    const remove = (elem: T) => {
        const newList = list.filter(e => e !== elem)
        setList(newList)
        if (idx >= newList.length) {
            move(newList.length - 1)
        }
    }

    const add = (elem: T) => {
        setList(() => [...list, elem])
    }


    const set = (elem: T, index: number) => {
        if (index < 0 || index >= list.length) {
            throw new Error("Index out of bounds")
        } else {
            setList((prevList) => {


                console.log("Setting", elem, "at", index)
                const newList = [...prevList]
                newList[index] = elem
                move(index); // Update the current element
                console.log("New list", newList)
                return newList
            })
        }

    }


    return { elem, next, previous, finished, idx, move, find, add, remove, set, list }
}