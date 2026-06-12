import './App.css'
import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count+1)
  }

  function countDown() {
    setCount(count-1)
  }

  function jumpBy100() {
    setCount(count+100)
  }
  function jumpByLakh() {
    setCount(count+1000000)
  }

  return(
    <div className="hero">
    <h1>{count}</h1>
    <div className='btns'>
      <button onClick={countUp}>increase</button>
      <button onClick={countDown}>decrease</button>
      <button onClick={jumpByLakh}>Jump By 1000000</button>
    </div>
    </div>
  ) 
}

export default App


