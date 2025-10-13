import React from "react"

function ColorList() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
    ]

    const colorElements = colors.map((color) => {
        return <li key={color} style={{ color: color }}>{color}</li>
    })

    return (
        <div>
            <h1>Top 5 CSS Colors</h1>
            <ol>
                {colorElements}
            </ol>
        </div>
    )
}

const users = [
    { id: 1, firstName: "Duane", lastName: "Watson"},
    { id: 2, firstName: "Duane", lastName: "Johnson"},
]

const UserHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName}</h1>
})

export default ColorList