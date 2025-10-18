import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import Profile from './components/profile'
import Count from './components/Count'
import BlogPost from './components/BlogContent'
import ColorSelector from './components/Color'
import ColorList from './components/Lists'
import { MultiButton, Tickle } from './components/Tickle'
import Change from './components/Change'
import Login from './components/Login'
import Toggle from './components/Toggle'
import ParentComponent from './components/ParentComponent'
import FormValidation from './components/FormValidation'


// import Parent from './components/Parent'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Count/> */}
    {/* <Parent /> */}
    {/* <BlogPost />
    <ColorSelector />
    <ColorList />
    <Tickle />
    <MultiButton />
    <Change />
    <Login />
    <Toggle />
    <Counter /> */}
    {/* <ParentComponent/> */}
    <FormValidation />

    
    {/* <Navbar /> */}
    {/* <Greeting name="Josh" age="20" gender="male" isAdmin="false"/> */}
    {/* <Profile /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">        <button onClick={() => setCount((count) => count + 1)}>

          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter count={count} fullname="Debora"/> */}
    </>
  )
}

export default App
