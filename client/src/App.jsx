import { useState } from 'react'
import Register from './pages/Register'
import Login from "./pages/Login"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Login />
        {/* <Register /> */}
    </>
  )
}

export default App
