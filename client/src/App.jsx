import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
