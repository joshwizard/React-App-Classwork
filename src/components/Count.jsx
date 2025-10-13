import React, { useState } from "react";
import ReactDOM from "react-dom"

const Count = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);

    const handleReset = () => {
        setCount(0)
        setAge(0)
    }

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleAge = () => {
        setAge(age + 10)
    }

    const handleClick = () => {
        handleAge();
        handleCount();
    }

    const handleGreet = (name) => {
        console.log(`Hello, ${name}`)
    }
    return (
        <>
        <p>This is my Count: {count}</p>
        <p>This is my Age: {age}</p>
        <button onClick={handleClick}>Increase Count</button>
        <button type="button" onClick={handleReset}>Reset</button>
        <button onClick={() => handleGreet("Josh")}>Say Hi</button>
        </>
    )
}

export default Count