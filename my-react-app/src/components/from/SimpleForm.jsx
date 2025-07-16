
import React, { useState } from 'react'

function SimpleForm() {
  const [name,setName] =useState({
    firstName: "",
    lastName:""
  });

  const handSubmit=(e)=>{
    e.preventDefault();
console.log(name);
  }
  return (
    <div>
      <form >
        <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})} className='border px-2 py-1 mr-2'  />
        <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} className='border px-2 py-1 mr-2' />

        <button className='border px-2 py-2' onClick={(e)=>handSubmit(e)}>Add</button>
      </form>
    </div>
  )
}

export default SimpleForm