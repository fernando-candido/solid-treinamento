import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BodyAuthor from './components/BodyAuthor'
import TableAuthor from './components/TableAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header />
      <BodyAuthor />
    
           
    </>

  )
}

export default App
