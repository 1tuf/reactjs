import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-full" style={{ backgroundColor: color, minHeight:'100vh' }}>
      <div className=' flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
          <div>
            <button className='px-4 py-2 text-white rounded-full' style={{backgroundColor:"red"}}  onClick={()=>{
              setColor('red')
            }}>red</button>
          </div>
          <div>
            <button className='px-4 py-2 text-white rounded-full' style={{backgroundColor:"orange"}}  onClick={()=>{
              setColor('orange')
            }}>orange</button>
          </div>
          <div>
            <button className='px-4 py-2 text-white rounded-full' style={{backgroundColor:"blue"}}  onClick={()=>{
              setColor('blue')
            }}>blue</button>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default App
