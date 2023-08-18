import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <button onClick={increase}>Increment</button>
            <p>{counter} </p>
            <button onClick={decrease}>Decrement</button>
        </>
    );
}

export default Counter;
