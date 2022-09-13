import React, { useState } from 'react';

const Counter2 = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>

  );

}

export default Counter2;