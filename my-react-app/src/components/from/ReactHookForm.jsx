
import {useForm} from "react-hook-form"
import React from 'react'

function ReactHookForm() {
  const {register,handleSubmit, formState:{errors}}=useForm();
  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name</label>
      <input className="border px-2 py-2" {...register("firstName",{required:true,minLength:{
        value:3,
        message:"minimum length 3"
      } })} 
      
      />
      {errors.firstName && (
        <p className="text-red-600">{errors.firstName.message}</p>
      )}
    </div>

       <div>
      <label>Last Name</label>
      <input className="border px-2 py-2" {...register("lastName")} />
    </div>
    <input type="submit" className="border px-2 py-2"/>
   </form>
  )
}

export default ReactHookForm