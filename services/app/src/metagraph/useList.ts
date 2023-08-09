import { useEffect, useState } from "react";


export const useList = <T>(l: T[]) => {
    const [list, setList] = useState(l);
    const [idx, setIdx] = useState(0);
    const [elem, setElem] = useState(l[idx])
    const [finished, setFinished] = useState(false)

    const move = (newIdx: number) => {
        if (newIdx < list.length && newIdx >= 0) {
            setIdx(() => newIdx)
            setElem(() => list[newIdx])
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

    return {elem, next, previous, finished, idx, move}
}