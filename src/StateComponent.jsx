import React from 'react'
function StateComponent() {
    const [count, setCount] = React.useState(0)
    return (
        <div>
        <h1>State Component</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default StateComponent