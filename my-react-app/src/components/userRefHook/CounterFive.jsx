
import React, { useEffect, useRef, useState } from 'react'

function CounterFive() {
  const [count,setCount]=useState(0)

  const val =useRef(0);

  let btnref=useRef()

  const handleIncrement=()=>{
    val.current=val.current +1;
    console.log("Val",val.current);
    setCount(count+1)
  }

  const changeColor = () => {
    btnref.current.style.backgroundColor = "red";
  };


  useEffect(()=>{
    console.log("I am re -render")
  })
  return (
    <div>

      <div>Count: {count}</div>
      <button ref={btnref} onClick={handleIncrement}>Increment</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default CounterFive