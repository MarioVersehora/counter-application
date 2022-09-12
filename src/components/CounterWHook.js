import React, {useState} from 'react';

const CounterWHook = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default CounterWHook;
