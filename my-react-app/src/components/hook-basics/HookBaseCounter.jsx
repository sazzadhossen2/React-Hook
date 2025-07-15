import React, { useState } from 'react'

function HookBaseCounter() {
  
  const [count,setCount]=useState(0)
 const handelIncrement=()=>{
  setCount(count+1);
  }

 return (
  <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col justify-center items-center">
    <h1 className="text-xl font-bold">Class Base Counter</h1>
    <p>Count:{count}</p>
    <button onClick={handelIncrement} className="border px-2 py-1">Increment</button>
  </div>
)
}

export default HookBaseCounter