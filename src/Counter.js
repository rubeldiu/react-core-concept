import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    // function Increment(){
    //     setCount(count+1);
    // }
    const Derement=()=>setCount(count-1);
   
    return (
        <div>
            <h1>Count {count}</h1>
            <button onMouseOver={()=>setCount(count+1)}>Increment</button>
            <button onClick={Derement}>Decrement</button>
        </div>
    )
}

export default Counter
