

import React, { useEffect, useState } from 'react'

function CountTwo() {
  const [count,setCount]=useState(0)
  const [name,setName]=useState("");

useEffect(()=>{
  console.log("HI")
  document.title = `You Click ${count} time`;
},[count])
  return (

    <div>
      <input type="text" className='border px-2 mb-2
      ' value={name} onChange={(e)=>setName(e.target.value)} />
      
      <button className='border px-2 py-1' onClick={()=>setCount(count+1)}>
      Click {count} time
      </button></div>
  )
}

export default CountTwo