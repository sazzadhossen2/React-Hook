
import React, { useEffect, useState } from 'react'

function CountOne() {
  const [count,setCount]=useState(0)

useEffect(()=>{
  document.title = `You Click ${count} time`;
})
  return (
    <div><button className='border px-2 py-1' onClick={()=>setCount(count+1)}>
      Click {count} time
      </button></div>
  )
}

export default CountOne