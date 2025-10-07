import React from 'react'

const Counter = ({count, fullname}) => {
    
  return (
    <div>
        <h3>Our count state : {count}</h3>
        <p>Fullname : {fullname}</p>
    </div>
  )
}

export default Counter