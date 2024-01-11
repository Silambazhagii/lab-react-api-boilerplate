import { useState } from 'react'
import ApiComponent from './Components/ApiComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiComponent />
    </>
  )
}

export default App
