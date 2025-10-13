function ColorItem () {
    return <li style={{ color: props.color }}>{props.color}</li>
}

function ColorList() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
    ]

    const colorElements = colors.map((color) => {
        return <ColorItem key={color} color={color} />
    })
}

export { ColorItem, ColorList }