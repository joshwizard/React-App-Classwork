import React, { useState } from 'react';


function ColorSelector() {
    const [color, setColor] = useState('Red');

    const handleOnChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
        <select onChange={handleOnChange}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
        </select>
        <p>You have selected: {color}</p>
        </>
    )
}

export default ColorSelector