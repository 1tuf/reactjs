import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  function addValue() {
    if(counter<20){
      counter++
      setCounter(counter)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      counter--
      setCounter(counter)
    }
  }
 

  return (
   <>
   <h1>counter app</h1>
   <h2>couter value is {counter}</h2>
   <button onClick={addValue}>Add Value {counter}</button>
   <br />
   <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
