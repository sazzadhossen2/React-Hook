import React, { memo } from 'react'

function Count({text,count}) {
   console.log(`count- ${count}`)
   
  return (
    <p>{text} : {count}</p>
  )
}

export default memo(Count)