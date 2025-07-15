import React, { useState } from 'react'

function HookBaseCountTwo() {
 const [count,setCount]=useState(0)
 const increMentCount=()=>{
  for(let i=0; i<5;i++){
    setCount((prevCount)=>prevCount+1)
  }
 }

 return (
  <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col justify-center items-center">
    <h1 className="text-xl font-bold">Class Base Counter</h1>
    <p>Count:{count}</p>
    <button onClick={()=>setCount(count+1)} className="border px-2 py-1">Increment</button>

       <button onClick={()=>setCount((preCount)=>preCount-1)} className="border px-2 py-1 my-1">Decrement</button>
   <button onClick={increMentCount} className="border px-2 py-1">Increment 5</button>
  </div>

  
)
}

export default HookBaseCountTwo