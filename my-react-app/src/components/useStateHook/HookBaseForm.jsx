
import React, { useState } from 'react'

function HookBaseForm() {
  const [name,setName]=useState({
    firstName:'',
    lastName:'',
  })
  return (
    <form>
 <input className='border px-2 mr-1' type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
  <input className='border px-2 mr-1' type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>

<h2>FristName:{name.firstName}</h2>
<h2>LastName:{name.lastName}</h2>
    </form>
  )
}

export default HookBaseForm