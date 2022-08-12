import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import BodyAuthor from './components/Author/BodyAuthor'
import BodyBook from './components/Book/BodyBook'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
        <Router>
          <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/author" element={<BodyAuthor />}  />
              <Route path="/book" element={<BodyBook />}  />
          </Routes>
        </Router>
    </>

  )
}

export default App
