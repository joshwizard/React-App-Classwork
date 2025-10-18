import React, { useState } from "react";

function FormValidation() {
    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null)

    function handleNumberChange(event) {
        const newNumber = parseInt(event.target.value);
        if (newNumber >= 0 && newNumber <= 5) {
            setNumber(newNumber)
            setIsInvalidNumber(null)
        } else {
            setIsInvalidNumber(`${newNumber} is not a valid number!`)
        }
    }

    return (
        <form>
            <input type="number" value={number} onChange={handleNumberChange}/>
            <p>{isInvalidNumber ? <span style={{ color: "red"}}>{isInvalidNumber}</span> : null}</p>
        </form>
    )
}

export default FormValidation