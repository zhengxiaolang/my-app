import React, { useState, useEffect } from 'react';
import './Style.css';
function FCComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Alice');

    useEffect(() => {
        console.log('Effect runs when `count` or `name` changes');
    }, [count, name]); // 依赖数组包含 `count` 和 `name`

    return (
        <div className='bg-yellow center'>
            <p>Count: {count}</p>
            <p>Name: {name}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>Change Name</button>
        </div>
    );
}

export default FCComponent

