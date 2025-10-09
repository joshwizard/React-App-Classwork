import React from 'react'
import ReactDOM from "react-dom"


const Greeting = ({ name, gender, age, isAdmin }) => {
  // console.log(props)
  // console.log("Name", props);
  // console.log("Gender", props);
  // console.log("Age", props);
  // console.log("IsAdmin", props);
  return (
    <>
      <h2>Home</h2>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>IsAdmin: {isAdmin}</p>
    </>
  )
}

export default Greeting


