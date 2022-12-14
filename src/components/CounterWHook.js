import React, { useEffect, useState } from 'react';

const CounterWHook = () => {
    const [count, setCount] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);


    useEffect(() => {
        fetch('http://localhost:8060/counter/1')
            .then(response => response.json())
            .then(result => {
                setLoaded(true);
                setCount(result.value);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                })

    }, []);

    const handleIncrement = () => {
        setCount(count + 1);
        fetch('http://localhost:8060/counter/increment/1', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(result => {
                setLoaded(true);
                setCount(result.value);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                })
        syncWithServer();
    }

    const handleDecrement = () => {
        setCount(count - 1);
        fetch('http://localhost:8060/counter/decrement/1', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(result => {
                setLoaded(true);
                setCount(result.value);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                })
        syncWithServer();
    }

    const syncWithServer = () => {
        fetch('http://localhost:8060/counter/1')
            .then(response => response.json())
            .then(result => {
                setCount(result.value);
            },
                (error) => {
                    setError(error);
                })
    }



    return (
        <div>
            <span>{count}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <span>{isLoaded}</span>
            <span>{error}</span>
        </div >
    );
}

export default CounterWHook;
