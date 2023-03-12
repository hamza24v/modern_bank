import {animate} from 'framer-motion';
import React, { useEffect, useRef} from "react";

function Incrementer({start, end, textBefore, textAfter}){
    const ref = useRef();

    useEffect(() => {
        const controls = animate(start, end, {
            duration: 2,
            onUpdate(value){
                ref.current.textContent = textBefore + value.toFixed(0) + textAfter + "+";
            },
        });
        return () => controls.stop();

    }, [start, end])

    return <p ref={ref} />
}

export default Incrementer;