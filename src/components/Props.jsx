export default function ParentComponent() {
    return <ChildComponent text="Hello!" number={2} />
    
}

function ChildComponent(props) {
    return (
        <div style={{padding: '20px'}}>
            {props.text} {props.number}
        </div>
    )
}