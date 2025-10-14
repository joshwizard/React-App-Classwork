import React from "react";

function Tickle() {
    function tickler() {
        alert("This is React Buddy")
    }

    return (
        <>
            <button onClick={tickler}>Tickle Me!</button>
        </>
    )
}

function MultiButton() {
    function handleClick(number) {
        console.log(`Button ${number} was deleted`)
    }

    return (
        <div>
            <button onClick={() => handleClick(1)}>Button 1</button>
            <button onClick={() => handleClick(2)}>Button 2</button>
            <button onClick={() => handleClick(3)}>Button 3</button>
        </div>
    )
}

export { Tickle, MultiButton }


