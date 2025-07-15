
import React, { useState } from 'react'

function HookBaseCountThree() {
  const [items,setItems] =useState([]);
  const addItem=()=>{
  setItems([
      ...items,
    {
      id:items.length,
      value:Math.floor(Math.random()*10)+1,
    },
  ])
  };
  console.log(items)
  return (
   <div>
     <button className='border px-2 py-1' onClick={addItem}>Add a Number</button>
<ul>
  {items.map((item)=>(
    <li key={item.id}>{item.value}</li>
  ))}
</ul>
   </div>
 
  )
}

export default HookBaseCountThree

//1.24