import React, { useState } from "react";
import ReactDOM from "react-dom"

const Count = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);

    const handleReset = (e) => {
        setCount(0)
        setAge(0)
    }

    return (
        <>
        <p>This is my Count: {count}</p>
        <p>This is my Age: {age}</p>
        <button onClick={() => (setCount(count + 1)(setAge(age + 10)))}>Increase Count</button>
        <button type="button" onClick={handleReset}>Reset</button>
        </>
    )
}

export default Count