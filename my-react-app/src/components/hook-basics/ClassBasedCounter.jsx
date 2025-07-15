// import React from 'react'



// const ClassBasedCounter=()=> {
//   return (
//     <div>ClassBasedCounter</div>
//   )
// }

// export default ClassBasedCounter



import { Component } from "react";
class ClassBasedCounter extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }
  inCrementCount=()=>{
    this.setState({
      count:this.state.count +1
    });
  }

  render (){
return (
  <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col justify-center items-center">
    <h1 className="text-xl font-bold">Class Base Counter</h1>
    <p>Count: {this.state.count}</p>
    <button onClick={this.inCrementCount} className="border px-2 py-1">Increment</button>
  </div>
)
  }
}

export default ClassBasedCounter;