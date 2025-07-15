
import React, { useCallback, useState } from 'react'
import Title from './sub-component/Title'
import Count from './sub-component/Count';
import Button from './sub-component/Button';

function ParentComponent() {
const [age,setAge] =useState(25);
const [salary,setSalary]=useState(5000);
const incrementAge=
useCallback(()=>{
  setAge(age+1);
},[age])

const IncrementSalary=
useCallback(()=>{
  setSalary(salary+1);
},[salary])
  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
       <Button Increse={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button Increse={IncrementSalary}>Increment Salary</Button>
     
    </div>
  )
}

export default ParentComponent