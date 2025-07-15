
import React, { memo } from 'react'

function Button({Increse,children}) {
console.log(`children - ${children}`);

  return (
    <button onClick={Increse} className='border px-2 py-2'>{children}</button>
  )
}

export default memo(Button)