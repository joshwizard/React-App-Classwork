import Child from "./Child";
import { useState } from "react";

function Parent() {
    const randomColor = getRandomColor();
    const [color, setColor] = useState(randomColor)

    function handleChangeColor() {
        const newRandomColor = getRandomColor()
        setColor(newRandomColor)
    }

    return (
        <div className="parent" style={{ backgroundColor: color}}>
            <Child onChangeColor = {handleChangeColor} />
            <Child onChangeColor = {handleChangeColor} />
        </div>
    )
}

export default Parent