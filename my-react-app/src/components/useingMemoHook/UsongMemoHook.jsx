

import React, { useMemo, useState } from 'react'

function UsongMemoHook() {
  const [count,setCount]=useState(0);
  const[input,setInput]=useState();

  const expensiveTask=(num)=>{
let i=0;
while(i<=10000){
  i++;
}
return num *2;
  }
  let doublevalue=useMemo(()=>expensiveTask(input),[input])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <div>Count: {count}</div>
      <input type="number" placeholder='Enter a Number' value={input} onChange={(e)=>setInput(e.target.value)} />
      <div>Double:{doublevalue}</div>
    </div>
  )
}

export default UsongMemoHook

