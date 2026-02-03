import { useState } from 'react'
import './App.css'
import './components/QuizCard'
import QuizCard from './components/QuizCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <h1>Welcome to Quiz App!</h1>
      <QuizCard/>

    </>
  )
}

export default App
