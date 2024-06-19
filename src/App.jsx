
import { useState } from 'react'
import './App.css'

function App() {

  const[color,setColor]= useState("olive")

  return (
    <>
      <div className="w-full h-screen  duration-200 " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-12 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
          px-3 py-3 rounded-3xl">
            <button 
            onClick={()=> setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg "
             style={{backgroundColor:"red"}}>SACHIN</button>
             <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg "
             style={{backgroundColor:"green"}}>SACHIN</button>
             <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg "
             style={{backgroundColor:"blue"}}>SACHIN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
