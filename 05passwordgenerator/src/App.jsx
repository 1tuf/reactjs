import { use, useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [charecter,setCharecter]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      string=string+"0123456789"
    }
    if(charecter){
      string=string+"!@#$%^&*()"
    }
    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*string.length)
      pass=pass+string[index]
    }
    setPassword(pass)
    // console.log(password)
  },[length,number,charecter])

  const copyPasswordClip=useCallback(()=>{
    // console.log(`hii somen and the password is ${password}`)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,charecter,passwordGenerator])

  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-5 bg-gray-800 text-orange-500 my-6'>
    <h1 className='text-white text-center'>Password generator</h1>
    <div className='flex shadow rounded-xl overflow-hidden mb-4'>
      <input type="text" className='outkine-none w-full py-1 px-3 bg-white' readOnly value={password} ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordClip}>copy</button>
    </div>
    <div className='flex text-smgap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={50}  onChange={(e)=>{
          setLength(e.target.value)
        }} /><label>length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" min={8} max={50}  onChange={()=>{
          setNumber((prev)=>!prev)
        }} /><label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" min={8} max={50}  onChange={()=>{
          setCharecter((prev)=>!prev)
        }} /><label>Charecters</label>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
