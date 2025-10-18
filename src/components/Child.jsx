import React from "react";
import Parent from "./Parent";

function Child ({ onChangeColor}) {
    console.log(onChangeColor)
    return (
        <div className="child" 
        style={{ backgroundColor: '#FFF'}}
        onClick={onChangeColor}
        ></div>
    )
}

export default Child