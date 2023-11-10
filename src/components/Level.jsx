import {useMemo, useState} from "react";
import Item from './Item'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {useLoaderData, useParams} from "react-router-dom";
import Complete from "./Complete";
import UniqueForUri from "./UniqueForUri";

function Level() {
    const {levelId} = useParams();
    const {itemsCount} = useLoaderData();

    const [array, setArray] = useState(new Array(itemsCount).fill(null).map((_, i) => ({
        id: i,
        value: ((Math.random() * 10 ^ 0) + 1),
    })));
    const [currentIdx, setCurrentIdx] = useState(null);
    const [animationParent] = useAutoAnimate()
    const targetOrder = useMemo(() => {
        return array.slice()
            .sort((a, b) => a.value - b.value)
            .map(item => item.value)
            .join(' ');
    }, []);

    const isSorted = useMemo(() => {
        return array.map(i => i.value).join(' ') === targetOrder;
    }, [array, targetOrder]);

    function handleItemClick(index) {
        if (currentIdx == null) setCurrentIdx(index);
        else {
            if (currentIdx !== index) {
                const newArray = array.slice();
                const a = newArray[currentIdx];
                const b = newArray[index];
                newArray.splice(index, 1, a);
                newArray.splice(currentIdx, 1, b);
                setArray(newArray);
            }
            setCurrentIdx(null);
        }
    }

    return (
        <>
            <div className="level" ref={animationParent}>
                {array.map((item, i) => (
                    <Item
                        key={item.id}
                        value={item.value}
                        isSelected={currentIdx === i}
                        onClick={() => handleItemClick(i)}
                    >
                    </Item>
                ))}
            </div>
            {isSorted && (<Complete levelId={levelId}/>)}
        </>
    );
}

export default UniqueForUri(Level, 'levelId');
